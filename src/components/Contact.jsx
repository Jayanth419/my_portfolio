const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          I'm currently open to new opportunities and collaborations. Feel free
          to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:bjayanth419@gmail.com"
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors inline-block"
          >
            Send Email
          </a>
          <a
            href="https://github.com/Jayanth419"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-teal-600 text-teal-600 dark:text-teal-400 rounded-lg font-medium hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors inline-block"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
