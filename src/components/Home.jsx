const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm Jayanth
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          A Front End Developer building modern, responsive web applications
          with React, JavaScript, and Tailwind CSS
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-teal-600 text-teal-600 dark:text-teal-400 rounded-lg font-medium hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
