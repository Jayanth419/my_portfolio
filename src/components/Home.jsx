const App = ({ scrollToSection }) => {
  const resumeUrl =
    "https://drive.google.com/file/d/1wUydI1KYmE6wWw3wAdi1knezmUkERfQe/view?usp=sharing+";
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Hi, I'm Jayanth
        </h1>
        <p
          className="text-lg mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          A Front End Developer building modern, responsive web applications
          with React, JavaScript, and Tailwind CSS{" "}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Left: View My Work */}
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-2.5 text-white rounded-md font-medium transition-colors"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            View My Work
          </button>

          {/* Middle: View Resume (opens PDF in new tab) */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-md font-medium transition-colors"
            style={{
              border: "1px solid var(--color-primary)",
              color: "var(--color-primary)",
              backgroundColor: "transparent",
            }}
          >
            View Resume
          </a>

          {/* Right: Get In Touch */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2.5 rounded-md font-medium transition-colors"
            style={{
              border: "1px solid var(--color-primary)",
              color: "var(--color-primary)",
              backgroundColor: "transparent",
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
