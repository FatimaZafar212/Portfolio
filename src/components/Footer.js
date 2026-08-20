export default function Footer() {
  return (
    <footer className="bg-[#2d3748] px-5 py-10 text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-5 md:flex-row">

        <p className="text-center">
          © 2026 Fatima Zafar. All rights reserved.
        </p>

        <div className="flex gap-5">

          <a
            href="https://github.com/FatimaZafar212"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg transition hover:text-[#667eea]"
          >
            <i className="fab fa-github"></i>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/fatima-zafar-768214261/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg transition hover:text-[#667eea]"
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>

        </div>
      </div>
    </footer>
  );
}