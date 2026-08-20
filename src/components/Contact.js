export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#667eea] to-[#764ba2] px-5 py-24"
    >
      <div className="mx-auto max-w-[1000px]">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Let&apos;s Work Together
          </h2>

          <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-black"></div>

          <p className="text-lg">
            Available for on-site roles in Lahore and remote collaborations
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div className="flex flex-col gap-6">

            {/* Location */}
            <div className="flex items-center gap-5 rounded-[15px] bg-[#f7fafc] p-6">
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] text-xl text-white">
                <i className="fas fa-map-marker-alt"></i>
              </div>

              <div>
                <h4 className="font-semibold text-[#2d3748]">
                  Location
                </h4>

                <p className="text-[#4a5568]">
                  Lahore, Pakistan
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5 rounded-[15px] bg-[#f7fafc] p-6">
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] text-xl text-white">
                <i className="fas fa-envelope"></i>
              </div>

              <div>
                <h4 className="font-semibold text-[#2d3748]">
                  Email
                </h4>

                <a
                  href="mailto:fatimazafar2306@gmail.com"
                  className="break-all text-[#2d3748] hover:underline"
                >
                  Fatimazafar2306@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-5 rounded-[15px] bg-[#f7fafc] p-6">
              <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] text-xl text-white">
                <i className="fab fa-github"></i>
              </div>

              <div>
                <h4 className="font-semibold text-[#2d3748]">
                  GitHub
                </h4>

                <a
                  href="https://github.com/FatimaZafar212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d3748] hover:underline"
                >
                  FatimaZafar212
                </a>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="rounded-[15px] bg-[#f7fafc] p-7 md:p-10">

            <form className="flex flex-col gap-5">

              <input
                type="text"
                placeholder="Your Name"
                required
                className="rounded-lg border-2 border-gray-200 p-4 text-gray-800 outline-none transition focus:border-[#667eea]"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="rounded-lg border-2 border-gray-200 p-4 text-gray-800 outline-none transition focus:border-[#667eea]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="resize-y rounded-lg border-2 border-gray-200 p-4 text-gray-800 outline-none transition focus:border-[#667eea]"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#667eea] to-[#764ba2] px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}