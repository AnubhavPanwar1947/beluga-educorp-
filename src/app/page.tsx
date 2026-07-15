import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero-split" aria-label="Beluga Education Corp">
        <div className="hero-photo" aria-hidden="true">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="hero-copy">
          <p className="brand-mark">Beluga Education Corp</p>
          <h1>Navigating the Future of Sustainable Energy</h1>
          <p>
            Welcome to Beluga Education Corp, where we empower maritime
            professionals with the knowledge and skills to lead in the
            transition to sustainable energy.
          </p>
          <p>Join us on the journey to a greener, cleaner future.</p>
          <Link className="button button--on-dark" href="/programs/">
            Explore Our Courses
          </Link>
        </div>
      </section>

      <section className="section wrap page-enter">
        <div className="prose">
          <p>
            Founded in 2024 by four seasoned maritime professionals, Beluga
            Education Corporation bridges the knowledge gap in the maritime
            industry by offering specialized educational and training programs.
            Our focus on alternative fuels supports the industry&apos;s push
            towards net-zero emissions, aligning with the 2050 Sustainable
            Development Goals. With a mission to empower professionals through
            cutting-edge courses, we are committed to driving sustainable energy
            solutions for a greener future.
          </p>
        </div>
      </section>

      <section className="section wrap">
        <div className="vision-split">
          <div>
            <p className="eyebrow">Vision</p>
            <h2>Maritime Education for a Sustainable Future</h2>
            <p className="section-lead">Our Vision and Commitment</p>
            <div className="prose">
              <p>
                Our mission is to bridge the educational and knowledge gap
                within the maritime industry by delivering high-quality training
                and educational programs, both online and offline, with a focus
                on carbon-neutral, zero-emission, and sustainable fuels. Every
                course is carefully crafted to drive the transformation of the
                maritime sector towards cleaner energy solutions and sustainable
                practices, aligned with the 2050 Sustainable Development Goals.
              </p>
              <p>
                Our vision is to become the leading international provider of
                tailored skill development courses, empowering maritime
                professionals to lead the adoption of clean fuels and innovative
                technologies, driving a future of zero emissions and
                environmental sustainability across the industry.
              </p>
            </div>
            <div className="button-row">
              <Link className="button" href="/about/">
                Discover More
              </Link>
              <Link className="button button--ghost" href="/contact/">
                Connect Now
              </Link>
            </div>
          </div>
          <div className="vision-photo">
            <Image
              src="/images/about.jpg"
              alt="Open ocean representing sustainable maritime futures"
              width={900}
              height={1100}
            />
          </div>
        </div>
      </section>

      <section className="section wrap">
        <p className="eyebrow">Why Beluga</p>
        <h2>Why Choose Us</h2>
        <p className="section-lead">
          At Beluga Education Corp, we pride ourselves on offering an
          unparalleled educational experience that prepares you for the
          challenges and opportunities of the maritime industry, particularly in
          the realm of alternative fuels.
        </p>
        <div className="feature-list">
          <article className="feature">
            <span className="feature-index">01</span>
            <h3>Expert Instructors</h3>
            <p>
              Our seasoned professionals bring extensive industry experience and
              specialized knowledge of alternative fuels and maritime
              sustainability, offering insights grounded in real-world expertise.
            </p>
          </article>
          <article className="feature">
            <span className="feature-index">02</span>
            <h3>Cutting-edge Curriculum</h3>
            <p>
              Our courses reflect the latest advancements in LNG, hydrogen, and
              emerging alternative fuel technologies. Designed to meet industry
              demands, our curriculum keeps you ahead of market trends and
              regulatory changes.
            </p>
          </article>
          <article className="feature">
            <span className="feature-index">03</span>
            <h3>Flexible Learning Options</h3>
            <p>
              We offer flexible course formats, including online and in-person
              learning options, making it easier for busy professionals to
              enhance their skills at their own pace.
            </p>
          </article>
          <article className="feature">
            <span className="feature-index">04</span>
            <h3>Focus on Sustainability</h3>
            <p>
              We are committed to driving decarbonization and a greener maritime
              industry through our specialized courses. Join us to lead the shift
              towards sustainable and innovative energy solutions.
            </p>
          </article>
        </div>
      </section>

      <div className="wrap">
        <div className="cta-strip">
          <h2>Connect with us in a single click</h2>
          <p>
            Reach the Beluga team in Dehradun for course enquiries and training
            guidance.
          </p>
          <Link className="button button--on-dark" href="/contact/">
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
