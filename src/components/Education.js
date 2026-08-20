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

const certifications = [
  {
    icon: "fas fa-laptop-code",
    title: "Front-End Development",
    provider: "Udemy",
  },
  {
    icon: "fas fa-database",
    title: "Introduction to SQL",
    provider: "SoloLearn",
  },
  {
    icon: "fab fa-html5",
    title: "Introduction to HTML",
    provider: "SoloLearn",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Graphic Design Course",
    provider: "Sanatzar",
  },
  {
    icon: "fab fa-wordpress",
    title: "WordPress",
    provider: "Practical Experience",
  },
  {
    icon: "fas fa-shopping-bag",
    title: "E-Commerce Basics",
    provider: "Superior College",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-black/65 px-5 py-24"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2">

        {/* Education */}
        <div className="rounded-[15px] border border-black bg-black/60 p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_13px_30px_rgba(108,92,231,0.3)] md:p-10">

          <div className="mb-10">
            <h2 className="mb-4 text-4xl font-bold">
              Education
            </h2>

            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
          </div>

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

              <h4 className="mb-1 font-medium">
                {item.institution}
              </h4>

              <span className="text-sm font-medium">
                {item.duration}
              </span>

              {item.details.length > 0 && (
                <div className="mt-3">
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

        {/* Certifications */}
        <div className="rounded-[15px] border border-black bg-black/60 p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_13px_30px_rgba(108,92,231,0.3)] md:p-10">

          <div className="mb-10">
            <h2 className="mb-4 text-4xl font-bold">
              Certifications
            </h2>

            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
          </div>

          <div className="flex flex-col gap-4">

            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-4 rounded-[10px] bg-[#333] p-4 transition duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-indigo-500/20"
              >

                <i
                  className={`${cert.icon} text-2xl text-[#b9b9ff]`}
                ></i>

                <div>
                  <h4 className="font-semibold">
                    {cert.title}
                  </h4>

                  <span className="text-sm text-gray-300">
                    {cert.provider}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}