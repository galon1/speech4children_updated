import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Speech4Children
        </Link>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`${open ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row gap-6 text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/facility">Facility</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
