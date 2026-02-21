import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <Container>
      <SectionTitle title="Contact Us" subtitle="We’d love to hear from you." />

      <div className="grid md:grid-cols-3 gap-10 text-center">
        {/* Email */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <svg
              className="w-10 h-10 text-purple-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M4 4l8 8 8-8" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Email</h3>
          <h4 className="text-l font-bold">*Preferred Method*</h4>
          <p>
            <a
              href="mailto:info@speech4children.com"
              className="text-black-600 hover:underline"
            >
              speech4children@gmail.com
            </a>
          </p>
        </div>

        {/* Address */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <svg
              className="w-10 h-10 text-purple-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
              <circle cx="12" cy="11" r="2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p>
            44 Mechanic St,
            <br />
            Newton MA, 02464, Suite 106-108
          </p>
        </div>

        {/* Phone */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <svg
              className="w-10 h-10 text-purple-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92V21a2 2 0 01-2.18 2 19.72 19.72 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.72 19.72 0 012 4.18 2 2 0 014 2h4.09a2 2 0 012 1.72c.12.89.32 1.75.6 2.58a2 2 0 01-.45 2.11L9 10a16 16 0 006 6l1.59-1.24a2 2 0 012.11-.45c.83.28 1.69.48 2.58.6A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Phone</h3>
          <p>
            <a
              href="tel:+11234567890"
              className="text-black-600 hover:underline"
            >
              617.795.0401
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
