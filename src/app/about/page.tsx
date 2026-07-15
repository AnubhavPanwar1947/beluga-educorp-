import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <header className="page-band">
        <div className="wrap">
          <p className="eyebrow">About</p>
          <h1>About</h1>
          <p className="section-lead">Our Mission</p>
        </div>
      </header>

      <section className="section wrap page-enter">
        <div className="prose">
          <p>
            Beluga Education Corp is a leading provider of specialized training,
            focusing on alternative fuels. Our goal is to empower professionals
            with the necessary skills and knowledge to drive the transition
            towards sustainable energy in the maritime sector and beyond.
          </p>
          <p>
            With a dedicated focus on alternative fuels, we equip individuals
            with expertise to spearhead the shift towards sustainable energy.
            Our training ensures professionals are well-prepared to lead the way
            in the maritime industry and beyond.
          </p>
          <p>
            Founded in 2024 by four seasoned maritime professionals, we bridge
            the knowledge gap in the maritime industry through specialized
            education and training aligned with net-zero and 2050 Sustainable
            Development Goals.
          </p>
        </div>
      </section>
    </>
  );
}
