import { forwardRef } from "react";

const SubNav = forwardRef(({ isVisible }, subNavRef) => {
  const phoneNumber = "+2348145925327";

  return (
    <div
      ref={subNavRef}
      className={`fixed top-0 left-0 w-full z-50 bg-primary text-white text-sm py-2 px-6 md:px-12 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-end items-center gap-6">
        {/* CTA link - mental health focused */}
        <a href="#" className="hover:underline font-medium">
          Get Support
        </a>

        {/* Phone icon */}
        <a
          href={`tel:${phoneNumber}`}
          className="hover:opacity-80 transition"
          aria-label="Call us"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>

        {/* Message icon */}
        <a
          href="#"
          className="hover:opacity-80 transition"
          aria-label="Send us a message"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
});

export default SubNav;
