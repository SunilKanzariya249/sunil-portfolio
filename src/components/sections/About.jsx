import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = ["React", "TailwindCSS"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB"];
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
        < RevealOnScroll>
      <div className=" max-w-3xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 text-center
         bg-linear-to-r from-blue-500 to-cyan-400
          bg-clip-text text-transparent"
        >
          About Me
        </h2>
        <div
          className=" rounded-xl p-8 border-white/10 
        border hover:-translate-y-1 transition-all"
        >
          <p className="text-gray-300 mb-6">
            passionate developer with experties in building scalable web
            applications and creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-xl p-6
            hover:-translate-y-1 transition-all"
            >
              <h3 className="font-bold text-xl mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="rounded-full
                     bg-blue-500/10 text-blue-500 py-1 px-3 
                      text-sm hover:bg-blue-500/20 
                       hover:shadow[0_2px_8px_rgba(59,130,2246,0.2) 
                       ]transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="rounded-xl p-6
            hover:-translate-y-1 transition-all"
            >
              <h3 className="font-bold text-xl mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="rounded-full
                     bg-blue-500/10 text-blue-500 py-1 px-3 
                      text-sm hover:bg-blue-500/20 
                       hover:shadow[0_2px_8px_rgba(59,130,2246,0.2) 
                       ]transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl
             border-white/10 border
             hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                    <li>
                        <strong>
                            B.E in Computer Science
                        </strong>-Gec-Rajkot
                    </li>
                    <li>
           Relevent Coursework: Web Development 
                    </li>
                </ul>
             </div>
            <div className="p-6 rounded-xl
             border-white/10 border
             hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">Intern At CreArt Solution pvt.ltd.</h4>
                        <p>Develop A frontend Web applications</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">MERN-stack Intern At Virtual Carry </h4>
                        <p>develop a MERN stack projects</p>
                    </div>
                </div>
             </div>
        </div>
      </div>
      </ RevealOnScroll>
    </section>
  );
};

export default About;
