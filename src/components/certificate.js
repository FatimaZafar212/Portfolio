"use client";

import { useState } from "react";

import frontendCertificate from "../assets/image/Frontend course certificate.jpg";
import sqlCertificate from "../assets/image/Intro to SQL.png";
import htmlCertificate from "../assets/image/Intro to HTML.png";
import digitalMarketing from "../assets/image/CERTIFICATE OF DIGITAL MARKETING.jpg";
import internshipCertificate from "../assets/image/CERTIFICATE OF INTERNSHIP.png";
import webDevelopment from "../assets/image/CERTIFICATE OF WEB DEVELOPMENT.png";

const certifications = [
  {
    icon: "fas fa-laptop-code",
    title: "Front-End Development",
    provider: "Udemy",
    image: frontendCertificate,
  },
  {
    icon: "fas fa-database",
    title: "Introduction to SQL",
    provider: "SoloLearn",
    image: sqlCertificate,
  },
  {
    icon: "fab fa-html5",
    title: "Introduction to HTML",
    provider: "SoloLearn",
    image: htmlCertificate,
  },
  {
    icon: "fas fa-paint-brush",
    title: "Digital Marketing",
    provider: "Certificate",
    image: digitalMarketing,
  },
  {
    icon: "fas fa-briefcase",
    title: "Internship",
    provider: "Certificate",
    image: internshipCertificate,
  },
  {
    icon: "fas fa-code",
    title: "Web Development",
    provider: "Certificate",
    image: webDevelopment,
  },
];

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certifications" className="bg-black/65 px-5 py-24">
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Certifications
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2]"></div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {certifications.map((cert) => (
            <button
              key={cert.title}
              onClick={() => setSelectedCertificate(cert)}
              className="group rounded-[15px] border border-black bg-black/60 p-7 text-left shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_13px_30px_rgba(108,92,231,0.3)]"
            >
              <i
                className={`${cert.icon} mb-5 block text-4xl text-[#b9b9ff] transition duration-300 group-hover:scale-110`}
              ></i>

              <h3 className="mb-2 text-xl font-semibold text-white">
                {cert.title}
              </h3>

              <p className="text-gray-300">
                {cert.provider}
              </p>

              <p className="mt-4 text-sm text-[#b9b9ff]">
                Click to view certificate →
              </p>
            </button>
          ))}

        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-black hover:bg-gray-200"
            >
              ×
            </button>

            {/* Certificate Image */}
            <img
              src={selectedCertificate.image.src}
              alt={selectedCertificate.title}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}