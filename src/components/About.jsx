const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm a passionate frontend developer from Nellore, Andhra Pradesh,
            specializing in creating beautiful and functional web applications.
            My journey in web development has been focused on mastering modern
            technologies and building real-world projects.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I have hands-on experience with React.js, Tailwind CSS, and
            Supabase, building everything from e-commerce frontends to
            full-stack expense tracking applications. I'm constantly learning
            and improving my skills through practical projects and staying
            up-to-date with the latest web development trends.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I'm not coding, I enjoy exploring new technologies,
            contributing to open source, and sharing knowledge with the
            developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
