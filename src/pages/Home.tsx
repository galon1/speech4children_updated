import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import TestimonialHome from "../components/TestimonialHome";
import ServicesHome from "../components/ServicesHome";
import amitDesk from "../images/amitdesk.jpeg";
import imakids from "../images/imakids.jpeg";
import background from "../images/background.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* HERO */}
      <section
        className="w-full h-[500px] items-center relative flex bg-cover bg-[0%_30%] bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-left text-white">
            <h1 className="text-xl md:text-4xl font-semibold leading-relaxed">
              Amit Alon is the sole practitioner at Speech4Children. She is a
              licensed Speech and Language Pathologist with 30 years of
              experience working with children aging 1-18.
            </h1>

            <button
              onClick={() => navigate("/about")}
              className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* PURPLE DESCRIPTION SECTION */}
      <section className="w-full bg-purple-100 py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-xl md:text-2xl font-medium">
            The Speech4Children clinic focuses on a variety of pediatric speech
            and language disorders including pragmatic and social disorders,
            autism, articulation disorders including speech motor disorders, and
            developmental language disorders.
          </h1>
        </div>
      </section>

      <Container>
        {/* AMIT FRONT SECTION */}
        <section className="max-w-6xl mx-auto py-10 px-6 space-y-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={imakids}
              alt="Amit with children"
              className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            />

            <div className="text-lg leading-relaxed space-y-6">
              <p>
                Amit received her BS in biology from Hebrew University and her
                MS in Communication Disorders from Emerson College in Boston,
                MA. Being bilingual (Hebrew/English) Amit has been servicing not
                only monolingual children, but also specializes in diagnosing
                and treating bilingual children.
              </p>

              <button
                onClick={() => navigate("/about")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
              >
                Read More
              </button>
            </div>
          </div>

          {/* AMIT DESK SECTION */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <img
              src={amitDesk}
              alt="Amit at desk"
              className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            />

            <div className="text-lg leading-relaxed space-y-6">
              <p>
                Amit brings a high level of creativity and enthusiasm to
                intervention. She strongly believes in a family centered
                practice. The parents, siblings and other main caregivers join
                the sessions and take an active part in establishing the
                treatment plan and participating in the sessions’ activities.
                Weekly explanations and demonstrations of the different
                activities and how to apply them outside the office are provided
                to the kids’ caregivers.
              </p>

              <button
                onClick={() => navigate("/about")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
              >
                Read More
              </button>
            </div>
          </div>
        </section>
      </Container>
      <TestimonialHome />
      <ServicesHome />
    </div>
  );
}
