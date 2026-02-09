import Container from "../components/Container";
import { testimonials } from "../data/testimonials";
import SectionTitle from "../components/SectionTitle";

export default function Testimonials() {
  return (
    <Container>
      <SectionTitle title="Testimonials" subtitle="from real clients" />

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="p-6 shadow rounded-lg border-2 border-purple-200"
          >
            <p className="font-bold text-xl text-purple-800 mb-4">{t.name} </p>
            <p className="mb-4">"{t.message}"</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
