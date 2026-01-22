import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center 
        items-center py-20"
    >
        < RevealOnScroll >
      <div>
        <h2
          className="text-3xl font-bold mb-8 text-center
         bg-linear-to-r from-blue-500 to-cyan-400
          bg-clip-text text-transparent"
        >
          Feature Projects
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 
        gap-6"
        >
          <div
            className="p-6 rounded-xl border border-white/10 
            hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ] hover:-translate-y-1 hover:border-blue-500/30 "
          >
            <h3 className="text-xl font-bold mb-2">Quiz App</h3>
            <p className="text-gray-400 mb-4">
              This Quiz App is built with React.js using functional components
              and hooks. It features dynamic data fetching from a JSON source,
              automatic question navigation on timer completion, answer
              validation, and real-time score calculation. Styling and layout
              are handled using Tailwind CSS for a clean and responsive design.
            </p>
            <div>
              {["React", "tailwindCSS", "CustomCSS"].map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full
                     bg-blue-500/10 text-blue-500 py-1 px-3 
                      text-sm hover:bg-blue-500/20 
                       hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ]transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between  items-center ">
              <a
                href="#"
                className="text-blue-400 my-4 hover:text-blue-300 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 
            hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ] hover:-translate-y-1 hover:border-blue-500/30 "
          >
            <h3 className="text-xl font-bold mb-2">Quiz App</h3>
            <p className="text-gray-400 mb-4">
              This Quiz App is built with React.js using functional components
              and hooks. It features dynamic data fetching from a JSON source,
              automatic question navigation on timer completion, answer
              validation, and real-time score calculation. Styling and layout
              are handled using Tailwind CSS for a clean and responsive design.
            </p>
            <div>
              {["React", "tailwindCSS", "CustomCSS"].map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full
                     bg-blue-500/10 text-blue-500 py-1 px-3 
                      text-sm hover:bg-blue-500/20 
                       hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ]transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between  items-center ">
              <a
                href="#"
                className="text-blue-400 my-4 hover:text-blue-300 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 
            hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ] hover:-translate-y-1 hover:border-blue-500/30 "
          >
            <h3 className="text-xl font-bold mb-2">Quiz App</h3>
            <p className="text-gray-400 mb-4">
              This Quiz App is built with React.js using functional components
              and hooks. It features dynamic data fetching from a JSON source,
              automatic question navigation on timer completion, answer
              validation, and real-time score calculation. Styling and layout
              are handled using Tailwind CSS for a clean and responsive design.
            </p>
            <div>
              {["React", "tailwindCSS", "CustomCSS"].map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full
                     bg-blue-500/10 text-blue-500 py-1 px-3 
                      text-sm hover:bg-blue-500/20 
                       hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ]transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between  items-center ">
              <a
                href="#"
                className="text-blue-400 my-4 hover:text-blue-300 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 
            hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ] hover:-translate-y-1 hover:border-blue-500/30 "
          >
            <h3 className="text-xl font-bold mb-2">Quiz App</h3>
            <p className="text-gray-400 mb-4">
              This Quiz App is built with React.js using functional components
              and hooks. It features dynamic data fetching from a JSON source,
              automatic question navigation on timer completion, answer
              validation, and real-time score calculation. Styling and layout
              are handled using Tailwind CSS for a clean and responsive design.
            </p>
            <div>
              {["React", "tailwindCSS", "CustomCSS"].map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full
                     bg-blue-500/10 text-blue-500 py-1 px-3 
                      text-sm hover:bg-blue-500/20 
                       hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ]transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between  items-center ">
              <a
                href="#"
                className="text-blue-400 my-4 hover:text-blue-300 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 
            hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ] hover:-translate-y-1 hover:border-blue-500/30 "
          >
            <h3 className="text-xl font-bold mb-2">Quiz App</h3>
            <p className="text-gray-400 mb-4">
              This Quiz App is built with React.js using functional components
              and hooks. It features dynamic data fetching from a JSON source,
              automatic question navigation on timer completion, answer
              validation, and real-time score calculation. Styling and layout
              are handled using Tailwind CSS for a clean and responsive design.
            </p>
            <div>
              {["React", "tailwindCSS", "CustomCSS"].map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full
                     bg-blue-500/10 text-blue-500 py-1 px-3 
                      text-sm hover:bg-blue-500/20 
                       hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ]transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between  items-center ">
              <a
                href="#"
                className="text-blue-400 my-4 hover:text-blue-300 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border border-white/10 
            hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ] hover:-translate-y-1 hover:border-blue-500/30 "
          >
            <h3 className="text-xl font-bold mb-2">Quiz App</h3>
            <p className="text-gray-400 mb-4">
              This Quiz App is built with React.js using functional components
              and hooks. It features dynamic data fetching from a JSON source,
              automatic question navigation on timer completion, answer
              validation, and real-time score calculation. Styling and layout
              are handled using Tailwind CSS for a clean and responsive design.
            </p>
            <div>
              {["React", "tailwindCSS", "CustomCSS"].map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full
                     bg-blue-500/10 text-blue-500 py-1 px-3 
                      text-sm hover:bg-blue-500/20 
                       hover:shadow[0_2px_8px_rgba(59,130,246,0.2) 
                       ]transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between  items-center ">
              <a
                href="#"
                className="text-blue-400 my-4 hover:text-blue-300 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
       </RevealOnScroll>
    </section>
  );
};

export default Projects;
