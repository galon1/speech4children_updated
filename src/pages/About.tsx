import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import standing from "../images/imastanding.jpeg";
import imakids from "../images/imakids.jpeg";

export default function About() {
  return (
    <Container>
      <SectionTitle title="About Amit Alon" />

      {/* Two Images Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <img
          src={standing}
          alt="Amit with children"
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <img
          src={imakids}
          alt="Amit at desk"
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Paragraph Text */}
      <div className="text-lg leading-relaxed space-y-6">
        <p>
          Amit Alon is the sole practicioner at Speech4Children. Amit Alon is a
          licensed Speech and Language Pathologist with 30 years of experience
          working with children from infancy through high school and their
          families in the public and private sectors. Amit received her BS in
          biology from Hebrew University and her MS in Communication Disorders
          from Emerson College in Boston, MA. The Speech4children clinic focuses
          on a variety of pediatric speech and language disorders including
          pragmatic and social disorders, autism, articulation disorders
          including speech motor disorders, and developmental language
          disorders. Being bilingual (Hebrew/English) Amit has been servicing
          not only monolingual children, but also specializes in diagnosing and
          treating bilingual children. Amit brings a high level of creativity
          and enthusiasm to intervention. She strongly believes in a family
          centered practice. The parents, siblings and other main caregivers
          join the sessions and take an active part in establishing the
          treatment plan and participating in the sessions’ activities. Weekly
          explanations and demonstrations of the different activities and how to
          apply them outside the office are provided to the kids’ caregivers.
          Additional sources to further expand the parent’s knowledge and
          understanding of their child’s areas of need and suggested treatment
          approaches are provided. During the last few years Amit has cooperated
          with the Newton and Brookline Public Schools in addressing the
          bilingual students’ special needs.
        </p>
      </div>
    </Container>
  );
}
