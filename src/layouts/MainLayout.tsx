import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
          {/* Left */}
          <div className="text-xl font-semibold md:mb-0">Speech4Children</div>

          {/* Right */}
          <div className="text-left">
            <div className="font-semibold"> Contact Us:</div>
            <div>speech4children@gmail.com</div>
            <div>44 Mechanic St, Newton MA, 20464, Suite 106-108</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
