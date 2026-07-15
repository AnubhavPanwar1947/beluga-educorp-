import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-band">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Get in Touch with Us</h1>
          <p className="section-lead">
            Send a message — saved to Supabase for Beluga practice (same pattern
            as Pelagic later).
          </p>
        </div>
      </header>

      <section className="section wrap page-enter">
        <div className="contact-grid">
          <div className="contact-panel">
            <ContactForm />
          </div>

          <aside className="contact-aside">
            <h2>Contact Information</h2>
            <ul className="contact-lines">
              <li>
                <strong>India Office</strong>
              </li>
              <li>9, Keshav Puram</li>
              <li>Dehradun, Uttarakhand, India</li>
              <li>
                <a href="mailto:info@belugaeducorp.com">
                  info@belugaeducorp.com
                </a>
              </li>
              <li>
                <a href="tel:+917895039068">+91-7895039068</a>
              </li>
              <li>
                <a
                  href="https://www.belugaeducorp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  belugaeducorp.com
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
