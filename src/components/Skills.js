const technicalSkills = [
  ["fas fa-code", "C++"],
  ["fab fa-html5", "HTML / CSS"],
  ["fab fa-js", "JavaScript"],
  ["fab fa-node-js", "Node.js"],
  ["fab fa-react", "React.js"],
  ["fas fa-layer-group", "Next.js"],
  ["fab fa-css3-alt", "Tailwind CSS"],
  ["fas fa-mobile-alt", "Flutter"],
  ["fas fa-code", "Dart"],
    ["fas fa-database", "MySQL"],
  ["fas fa-diagram-project", "Buisness Process Engineering"],
  ["fas fa-project-diagram", "Software Quality Engineering"],
  ["fas fa-terminal", "Operating Systems Concepts"],
  ["fas fa-laptop-code", "Object-Oriented Programming"],
  ["fas fa-cubes", "Data Structures & Algorithms"],
  ["fas fa-plug", "Rest APIs"],
  ["fas fa-database", "PostgreSQL"],
  ["fas fa-fire", "Firebase"],
];

const softSkills = [
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Leadership",
  "Creativity",
  "Critical Thinking",
  "Flexibility",
  "Self-Motivation",
  "Decision Making",
  "Work Ethic",
  "Adaptability",
  "Time Management",
];

const tools = [
  ["fab fa-git-alt", "Git & GitHub"],
  ["fas fa-database", "MySQL Workbench"],
  ["fas fa-laptop-code", "VS Code"],
  ["fas fa-fire", "Firebase"],
  ["fab fa-android", "Android Studio"],
  ["fas fa-database", "Postman"],
  ["fas fa-network-wired", "Cisco Packet Tracer"],
  ["fas fa-cubes", "VMware"],
  ["fas fa-file-word", "MS Word"],
  ["fas fa-file-excel", "Excel"],
  ["fas fa-file-powerpoint", "PowerPoint"],
  ["fas fa-file-alt", "InPage"],
   ["fab fa-figma", "Figma"],
  ["fas fa-pen-nib", "Adobe Illustrator"],
  ["fas fa-paint-brush", "Adobe Photoshop"],
  ["fas fa-draw-polygon", "CorelDRAW"],
  ["fas fa-magic", "Canva"],
];

function SkillCard({ icon, name }) {
  return (
    <div className="flex w-full max-w-[220px] items-center justify-center gap-10 rounded-xl border border-[#333] bg-[#111] px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#b9b9ff]">

      {icon && (
        <i
          className={`${icon} shrink-0 text-3xl text-[#b9b9ff] transition duration-500 hover:rotate-[360deg]`}
        ></i>
      )}

      <span className="text-center">{name}</span>
    </div>
  );
}

function SkillCategory({ title, children }) {
  return (
    <div className="mb-10">
      <h3 className="mb-6 text-center text-2xl font-semibold text-[#b9b9ff]">
        {title}
      </h3>

      <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {children}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-black to-[#222] px-5 py-20"
    >
      <div className="mx-auto max-w-[1200px]">

        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Skills
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
        </div>

        {/* Technical */}
        <SkillCategory title="Technical Skills">
          {technicalSkills.map(([icon, name]) => (
            <SkillCard
              key={name}
              icon={icon}
              name={name}
            />
          ))}
        </SkillCategory>

        {/* Soft */}
        <SkillCategory title="Soft Skills">
          {softSkills.map((name) => (
            <SkillCard
              key={name}
              name={name}
            />
          ))}
        </SkillCategory>

        {/* Tools */}
        <SkillCategory title="Tools">
          {tools.map(([icon, name]) => (
            <SkillCard
              key={name}
              icon={icon}
              name={name}
            />
          ))}
        </SkillCategory>

      </div>
    </section>
  );
}