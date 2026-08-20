export default function Experience() {
  const responsibilities = [
    "Uploaded and managed products and website content according to project requirements.",
    "Built and customized WordPress websites from scratch, including layout, design, and theme.",
    "Converted Figma designs into responsive websites using HTML, CSS, JavaScript, and React.js.",
    "Posted approved updates on LinkedIn, following the company guidelines.",
    "Gained hands-on experience in teamwork, website updates, and publishing workflows.",
  ];

  return (
    <section
      id="experience"
      className="bg-linear-to-br from-black via-[#333] to-black px-5 py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Experience
          </h2>

          <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>

          <p className="text-lg">
            Internship
          </p>
        </div>

        {/* Experience Card */}
        <div className="mx-auto max-w-[800px] rounded-[15px] bg-black/60 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(108,92,231,0.3)] md:p-10">

          <div className="mb-7">
            <h3 className="mb-1 text-xl font-semibold text-[#b9b9ff]">
              Tech Support & Web Intern
            </h3>

            <h4 className="mb-2 text-lg font-semibold">
              Gao TEK Inc.
            </h4>

            <span className="font-medium">
              July 2025 – October 2025 | Remote
            </span>
          </div>

          <ul>
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className="relative mb-3 pl-5 leading-7"
              >
                <span className="absolute left-0 text-[#b9b9ff]">
                  •
                </span>

                {item}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}