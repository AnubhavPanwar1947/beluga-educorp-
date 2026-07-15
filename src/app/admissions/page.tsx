import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admissions",
};

export default function AdmissionsPage() {
  return (
    <>
      <header className="page-band">
        <div className="wrap">
          <p className="eyebrow">Admissions</p>
          <h1>Admissions</h1>
          <p className="section-lead">
            Join maritime professionals preparing for a greener, cleaner future.
          </p>
        </div>
      </header>

      <section className="section wrap page-enter">
        <div className="prose">
          <ol>
            <li>
              Browse courses on the <Link href="/programs/">Our Courses</Link>{" "}
              page.
            </li>
            <li>
              Contact us with your name, role, and training interest via the{" "}
              <Link href="/contact/">Contact</Link> page.
            </li>
            <li>
              Our team will confirm course availability, format (online or
              in-person), and next steps.
            </li>
          </ol>
        </div>
        <Link className="button" href="/contact/">
          Start your enquiry
        </Link>
      </section>
    </>
  );
}
