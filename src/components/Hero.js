export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-5 py-32"
    >
      <div className="mx-auto max-w-[1000px] text-center">

        <h1 className="mb-3 text-4xl font-bold tracking-wide text-white md:text-6xl">
          Fatima Zafar
        </h1>

        <h3 className="mb-5 text-xl font-light text-white md:text-2xl">
          Software Engineering Student
        </h3>

        <p className="mx-auto mb-8 max-w-3xl text-base leading-7 text-white/90 md:text-lg">
          I build clean, responsive web interfaces and reliable backend
          systems. Currently a BSc Software Engineering student at Superior
          University (Lahore) with hands-on experience in C++, web development,
          and database design.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">

          {/* GitHub */}
          <a
            href="https://github.com/FatimaZafar212"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-[300px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/50 sm:w-auto"
          >
            <i className="fab fa-github"></i>
            View GitHub
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="flex w-full max-w-[300px] items-center justify-center gap-2 rounded-lg bg-gray-600 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-gray-700 sm:w-auto"
          >
            <i className="fas fa-envelope"></i>
            Contact Me
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fatima-zafar-768214261/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-[300px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/50 sm:w-auto"
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn Profile
          </a>

        </div>
      </div>
    </section>
  );
}