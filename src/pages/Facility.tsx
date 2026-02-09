import { useState, useEffect } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import building from "../images/building.jpeg";
import beanbag from "../images/beanbag.jpeg";
import room1 from "../images/room1.jpeg";
import roomcouch from "../images/roomcouch.jpeg";
import roomdoor from "../images/roomdoor.jpeg";
import sign from "../images/sign.jpeg";
import waitingroom from "../images/waitingroom.jpeg";

const facilityImages = [
  building,
  sign,
  roomdoor,
  room1,
  roomcouch,
  waitingroom,
  beanbag,
];

export default function Facility() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setActiveIndex(index);
  };

  const closeImage = () => {
    setActiveIndex(null);
  };

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % facilityImages.length);
  };

  const prevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + facilityImages.length) % facilityImages.length,
    );
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      <Container>
        <SectionTitle
          title="Our Facility"
          subtitle="44 Mechanic St, Newton MA, Suite 106-108"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => openImage(index)}
            >
              <img
                src={image}
                alt={`Facility ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>

      {/* LIGHTBOX MODAL */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div
            className="relative max-w-5xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={facilityImages[activeIndex]}
              alt="Expanded"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              ×
            </button>

            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ‹
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
