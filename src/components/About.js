import Education from "./Education";

export default function About() {
  return (
    <section id="about" className="bg-black/65 px-5 py-28">
      <div className="mx-auto max-w-[1200px]">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-[55fr_45fr]">
          {/* LEFT SIDE - ABOUT */}
          <div>
            {/* Heading */}
            <div className="mb-14">
              <h2 className="mb-4 text-4xl font-bold text-white">
                About Me
              </h2>

              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
            </div>

            {/* Description */}
            <p className="mb-10 text-base leading-8 text-white md:text-lg">
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

            {/* Contact + Social */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1"
              >
                Contact Now
              </a>

              <div className="mt-5 flex gap-6 text-2xl">
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

          {/* RIGHT SIDE - EDUCATION COMPONENT */}
          <Education />

        </div>
      </div>
    </section>
  );
}