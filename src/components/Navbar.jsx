import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.toLowerCase());
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { threshold: 0.6 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 shadow-sm"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg sm:text-xl font-bold gradient-text"
            aria-label="Go to Home"
          >
            Portfolio
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {NAV_ITEMS.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="relative text-sm lg:text-base font-medium transition-colors"
                  style={{
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                  }}
                >
                  {item}
                  {isActive && (
                    <span
                      className="absolute -bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2"
            aria-label="Toggle menu"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
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
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-surface)",
          }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const id = item.toLowerCase();
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="w-full text-left px-2 py-3 rounded transition-colors"
                    style={{
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                      backgroundColor: isActive
                        ? "rgba(var(--color-teal-500-rgb), 0.06)"
                        : "transparent",
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
