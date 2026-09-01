const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Superior University, Lahore",
    duration: "2023 — Present",
    details: ["Current semester: 7th", "CGPA: 3.24"],
  },
  {
    degree: "Intermediate (ICS - Physics)",
    institution: "Superior Group of Colleges, Lahore",
    duration: "2021 — 2023",
    details: [],
  },
  {
    degree: "Matriculation (Biology)",
    institution: "Zicas School System, Lahore",
    duration: "2009 — 2021",
    details: [],
  },
];

export default function Education() {
  return (
    <div>
      {/* Education Heading */}
      <div className="mb-10">
        <h2 className="mb-4 text-4xl font-bold text-white">
          Education
        </h2>

        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
      </div>

      {/* Education Content */}
      <div className="rounded-[15px] border border-black bg-black/60 p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_13px_30px_rgba(108,92,231,0.3)]">

        {education.map((item, index) => (
          <div
            key={item.degree}
            className={`pb-7 ${
              index !== education.length - 1
                ? "mb-7 border-b border-gray-600"
                : ""
            }`}
          >
            <h3 className="mb-1 text-xl font-semibold text-[#b9b9ff]">
              {item.degree}
            </h3>

            <h4 className="mb-1 font-medium text-white">
              {item.institution}
            </h4>

            <span className="text-sm font-medium text-white">
              {item.duration}
            </span>

            {item.details.length > 0 && (
              <div className="mt-3 text-white">
                {item.details.map((detail) => (
                  <p key={detail} className="mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}