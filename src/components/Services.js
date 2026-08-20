const services = [
  {
    icon: "fas fa-code",
    title: "Web Development",
    description:
      "Static sites using HTML/CSS and basic dynamic sites using Node.js + MySQL. Responsive landing pages, hero sections, showcase and team pages that mirror provided designs.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI / UX Design",
    description:
      "Mobile and web UI mockups, simple prototypes using Figma. Visual assets and banners using Illustrator, CorelDRAW, and Canva.",
  },
  {
    icon: "fas fa-database",
    title: "Database & Backend",
    description:
      "MySQL database design and query writing for projects like Hotel Management Systems. Backend CRUD routes with Node.js.",
  },
  {
    icon: "fas fa-file-alt",
    title: "Portfolio & Resume Services",
    description:
      "Portfolio website creation and content writing. CV formatting and tailoring for internships and junior roles.",
  },
  {
    icon: "fas fa-headset",
    title: "Technical Support",
    description:
      "Product page uploading, content updates, and light website maintenance based on internship experience.",
  },
  {
    icon: "fas fa-shopping-cart",
    title: "E-Commerce Solutions",
    description:
      "Online stores and product catalogs. Basic SEO, product uploads, and simple management for small business shops.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#141417]/80 to-[#313131]/90 px-5 py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Services
          </h2>

          <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>

          <p className="text-lg">
            What I Offer
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[15px] border border-black bg-black/60 p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_13px_30px_rgba(108,92,231,0.3)]"
            >

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] text-3xl text-white">
                <i className={service.icon}></i>
              </div>

              <h3 className="mb-4 text-xl font-semibold text-[#b9b9ff]">
                {service.title}
              </h3>

              <p className="leading-7 text-white">
                {service.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}