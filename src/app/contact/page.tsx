import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

const OFFICE_ADDRESS = "9, Keshav Puram, Dehradun, Uttarakhand, India";
const MAPS_QUERY = encodeURIComponent(OFFICE_ADDRESS);
const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=15&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

export default function ContactPage() {
  return (
    <>
      <header className="page-band">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Get in Touch with Us</h1>
          <p className="section-lead">
            Send a message and we&apos;ll reply soon. You&apos;ll also get a
            confirmation email that we received your enquiry.
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

            <div className="map-block">
              <h3>Find us on the map</h3>
              <div className="map-frame">
                <iframe
                  title="Beluga Education Corp — India Office map"
                  src={MAPS_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                className="map-link"
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
