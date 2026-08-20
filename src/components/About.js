export default function About() {
  const highlights = [
    "Solid foundation in C++, data structures, and OOP",
    "Web development with HTML, CSS, Node.js, and MySQL",
    "Experience in graphic tools: Illustrator, CorelDRAW, Canva, InPage, Figma",
    "Internship at Gao TEK Inc., supporting websites and managing content",
    "Committed to learning new technologies and combining design with development",
  ];

  return (
    <section
      id="about"
      className="bg-black/65 px-5 py-28"
    >
      <div className="mx-auto max-w-300">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            About Me
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
        </div>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-4xl text-center text-base leading-8 text-white md:text-lg">
          I am currently pursuing a Bachelor&apos;s degree in Software
          Engineering at Superior University, Lahore. Throughout my degree,
          I have developed a strong foundation in software development,
          databases, web engineering, mobile application development,
          software quality engineering, and business process engineering.
          <br />
          <br />
          My development journey has given me hands-on experience with
          technologies including React.js, Next.js, JavaScript, HTML, CSS,
          Tailwind CSS, Flutter, Dart, Firebase, Node.js, SQL, MySQL, and
          PostgreSQL.
          <br />
          <br />
          I enjoy turning ideas into functional applications, solving
          technical problems, and learning new technologies through practical
          projects. My current goal is to grow as a software engineer and gain
          professional experience while building strong expertise in modern
          web development, full-stack development, and emerging AI-related
          technologies.
        </p>

        {/* Highlights */}
        <div>
          <h3 className="mb-5 text-center text-xl font-semibold text-white">
            Key Highlights:
          </h3>

          <ul className="mx-auto max-w-2xl">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="mb-4 flex items-start gap-3 text-base text-white md:text-lg"
              >
                <i className="fas fa-check mt-1 text-[#b9b9ff]"></i>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div className="mt-10 text-center">

          <a
            href="#contact"
            className="inline-flex rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1"
          >
            Contact Now
          </a>

          <div className="mt-5 flex justify-center gap-6 text-2xl">

            <a
              href="mailto:fatimazafar2306@gmail.com"
              className="text-[#b9b9ff] transition hover:text-white"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/fatima-zafar-768214261/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b9b9ff] transition hover:text-white"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/FatimaZafar212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b9b9ff] transition hover:text-white"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}