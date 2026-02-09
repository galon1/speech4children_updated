import { useNavigate } from "react-router-dom";
import { services } from "../data/services";
import brain from "../images/brain_icon.png";

export default function ServicesHome() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">OUR SERVICES:</h2>

        {/* Description */}
        <p className="text-lg md:text-xl mx-auto mb-12">
          Speech4Children offers a number of services for children ranging from
          ages 1 to 18. We work with children and their families to build
          comprehensive plans for every child's success.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 mb-16">
          {services.map((service) => (
            <div key={service} className="flex flex-col items-center">
              <img src={brain} alt="Brain icon" className="w-40 h-30 mb-4" />

              <p className="text-lg font-medium text-center">{service}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-xl font-medium space-y-6 text-center">
          <p>Want to know more about our services?</p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
