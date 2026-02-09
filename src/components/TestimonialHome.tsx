import { homeTestimonials } from "../data/testimonialHome.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TestimonialHome() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          What Parents Are Saying
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="italic text-lg mb-6">
            "{homeTestimonials[activeIndex].text}"
          </p>

          <p className="font-semibold text-purple-600">
            – {homeTestimonials[activeIndex].name}
          </p>
        </div>

        {/* Circle Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {homeTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 rounded-full transition ${
                index === activeIndex
                  ? "bg-purple-600 scale-110"
                  : "bg-gray-400 hover:bg-purple-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => navigate("/testimonials")}
          className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
        >
          Read More
        </button>
      </div>
    </section>
  );
}
