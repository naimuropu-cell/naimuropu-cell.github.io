import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  export default function Contact() {
    return (
      <section id="contact" className="py-24">
  
        <div className="text-center">
  
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>
  
          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Let's Connect
          </h2>
  
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I'm currently looking for opportunities as a Junior Software QA
            Engineer. Feel free to reach out for internships, full-time roles,
            freelance work or collaborations.
          </p>
  
        </div>
  
        <div className="mt-14 grid gap-8 md:grid-cols-2">
  
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
  
            <h3 className="mb-6 text-2xl font-bold">
              Contact Information
            </h3>
  
            <div className="space-y-5">
  
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <span>naimuropu@gmail.com</span>
              </div>
  
              <div className="flex items-center gap-4">
                <FaGithub className="text-xl" />
                <a
                  href="https://github.com/naimuropu-cell"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/naimuropu-cell
                </a>
              </div>
  
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-blue-700 text-xl" />
                <a
  href="https://www.linkedin.com/in/naimur-rahman-apu/"
  target="_blank"
  rel="noreferrer"
  className="hover:text-blue-600 transition"
>
  linkedin.com/in/naimur-rahman-apu
</a>
              </div>
  
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <span>Dhaka, Bangladesh</span>
              </div>
  
            </div>
  
          </div>
  
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
  
            <h3 className="mb-6 text-2xl font-bold">
              Looking For
            </h3>
  
            <ul className="space-y-4 text-slate-600">
  
              <li>✔ Junior Software QA Engineer</li>
  
              <li>✔ Software Test Engineer</li>
  
              <li>✔ Manual QA Engineer</li>
  
              <li>✔ API Testing</li>
  
              <li>✔ Performance Testing</li>
  
              <li>✔ Frontend Development Collaboration</li>
  
            </ul>
  
          </div>
  
        </div>
  
      </section>
    );
  }