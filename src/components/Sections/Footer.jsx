const Footer = () => {
  const phoneNumber = "+2348145925327";

  return (
    <footer className="bg-dark text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-secondary mb-4">
              Mental Health Pathway
            </h3>
            <p className="text-sm text-gray-300">
              Not‑for‑profit advocacy organization based in Uyo, Akwa Ibom
              State, Nigeria.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-secondary mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-primary transition">
                  Activities
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-primary transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Donate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-secondary mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="hover:text-primary transition"
                >
                  {phoneNumber}
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@mentalhealthpathway.org"
                  className="hover:text-primary transition"
                >
                  hello@mentalhealthpathway.org
                </a>
              </li>
              <li>Uyo, Akwa Ibom State, Nigeria</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-secondary mb-3">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-primary transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v9h4v-9h3.3l.7-4H14V7a1 1 0 0 1 1-1h3V2z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-primary transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.99 1.11A4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="text-white hover:text-primary transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-primary transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2a4 4 0 0 1 4-2z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mental Health Pathway. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
