import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Courses",
};

const courses = [
  {
    title: "Alternative Fuels Fundamentals",
    body: "Core knowledge for LNG, hydrogen, and emerging fuel technologies in maritime operations.",
  },
  {
    title: "LNG & Gas Carrier Operations",
    body: "Practical training aligned with industry demand and regulatory change in gas-fuelled shipping.",
  },
  {
    title: "Decarbonization & Net-Zero Pathways",
    body: "Courses supporting cleaner energy solutions and sustainable maritime practices.",
  },
  {
    title: "Flexible Professional Learning",
    body: "Online and in-person formats designed for busy maritime professionals.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <header className="page-band">
        <div className="wrap">
          <p className="eyebrow">Our Courses</p>
          <h1>Explore Our Courses</h1>
          <p className="section-lead">
            Specialized training for maritime professionals — online and
            in-person — focused on carbon-neutral, zero-emission, and sustainable
            fuels.
          </p>
        </div>
      </header>

      <section className="section wrap page-enter">
        <div className="program-list">
          {courses.map((course) => (
            <article className="program-item" key={course.title}>
              <h3>{course.title}</h3>
              <p>{course.body}</p>
            </article>
          ))}
        </div>

        <p className="note" style={{ marginTop: "1.75rem" }}>
          Course catalogue titles above match the live site themes (LNG,
          hydrogen, alternative fuels). Exact official course names can be
          updated when your boss confirms them.
        </p>

        <Link className="button" href="/contact/">
          Enquire about a course
        </Link>
      </section>
    </>
  );
}
