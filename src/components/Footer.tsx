import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">Beluga Education Corp</p>
            <p>
              Maritime education for alternative fuels and a sustainable energy
              future.
            </p>
          </div>

          <div>
            <h3>India Office</h3>
            <ul>
              <li>9, Keshav Puram</li>
              <li>Dehradun, Uttarakhand</li>
              <li>India</li>
              <li>
                <a href="mailto:info@belugaeducorp.com">
                  info@belugaeducorp.com
                </a>
              </li>
              <li>
                <a href="tel:+917895039068">+91-7895039068</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Explore</h3>
            <ul>
              <li>
                <Link href="/about/">About</Link>
              </li>
              <li>
                <Link href="/programs/">Our Courses</Link>
              </li>
              <li>
                <Link href="/contact/">Contact</Link>
              </li>
              <li>
                <Link href="/blog/">Blog</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-copy">
          © {year} Beluga Education Corp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
