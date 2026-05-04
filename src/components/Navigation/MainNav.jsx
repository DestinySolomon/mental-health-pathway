import { useState } from "react";

const MainNav = ({ isSubNavVisible, subNavHeight = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed left-0 right-0 z-40 bg-white shadow-md py-4 px-6 md:px-12 transition-all duration-300"
      style={{ top: isSubNavVisible ? `${subNavHeight}px` : "0" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + text */}
        <div className="flex items-center gap-3">
          {/* Placeholder logo image – replace /logo.png with your actual file */}
          <img
            src="/logo.png"
            alt="Mental Health Pathway"
            className="h-10 w-auto"
          />
          <span className="text-primary font-bold text-xl">
            Mental Health Pathway
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-dark hover:text-primary transition">
            Home
          </a>
          <a href="#about" className="text-dark hover:text-primary transition">
            About
          </a>
          <a
            href="#activities"
            className="text-dark hover:text-primary transition"
          >
            Activities
          </a>
          <a href="#events" className="text-dark hover:text-primary transition">
            Events
          </a>
          <a
            href="#contact"
            className="text-dark hover:text-primary transition"
          >
            Contact
          </a>
          <a
            href="#"
            className="bg-tertiary text-white px-5 py-2 rounded-md hover:bg-opacity-90 transition text-sm font-semibold"
          >
            Join a Support Group
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-dark focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#activities" onClick={() => setIsOpen(false)}>
            Activities
          </a>
          <a href="#events" onClick={() => setIsOpen(false)}>
            Events
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <a
            href="#"
            className="bg-tertiary text-white px-5 py-2 rounded-md text-center"
            onClick={() => setIsOpen(false)}
          >
            Join a Support Group
          </a>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
