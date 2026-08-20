const projects = [
  {
    title: "Hotel Management System",
    tech: "Node.js + MySQL + HTML/CSS",
    description:
      "Designed database schema, created tables and SQL queries. Built backend endpoints and simple frontend forms for booking, payments, and customer management.",
    skills: ["Database Design", "SQL", "Node.js"],
  },
  {
    title: "Library Management System",
    tech: "C++ (Linked List) — Console App",
    description:
      "Manages book records including add, issue, return, and delete using linked lists and file handling. Implemented FIFO scheduling logic to simulate issuing order.",
    skills: ["Data Structures", "File I/O", "OS Concepts"],
  },
  {
    title: "Contact Management System",
    tech: "C++ — CLI",
    description:
      "Add, search, update, and delete contacts with persistent file storage. Includes a clean command-line interface with user-friendly navigation.",
    skills: ["Arrays", "File Handling", "CLI UX"],
  },
  {
    title: "Grid Game",
    tech: "C++ (OOP)",
    description:
      "Object-oriented implementation of a small grid-based game showcasing clean code architecture and modular design principles.",
    skills: ["OOP", "Classes", "Modular Design"],
  },
  {
    title: "Gym Website",
    tech: "HTML/CSS",
    description:
      "Static responsive website with homepage, trainers, plans, and registration form. Focused on visual hierarchy and user experience.",
    skills: ["Responsive Design", "Layout"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black/65 px-5 py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Projects
          </h2>

          <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>

          <p className="text-lg">
            View my work on GitHub:{" "}
            <a
              href="https://github.com/FatimaZafar212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b9b9ff] hover:underline"
            >
              FatimaZafar212
            </a>
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-7 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-[15px] border border-black bg-black/60 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(108,92,231,0.3)]"
            >

              <div className="mb-5">
                <h3 className="mb-1 text-xl font-semibold text-[#b9b9ff]">
                  {project.title}
                </h3>

                <p className="text-sm font-medium text-[#b9b9ff]">
                  {project.tech}
                </p>
              </div>

              <p className="mb-5 leading-7 text-white">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#b9b9ff] px-3 py-1 text-xs font-medium text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}