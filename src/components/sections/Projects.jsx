import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center 
        items-center py-20"
    >
      <RevealOnScroll>
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
              <h3 className="text-xl font-bold mb-2">
                Girija Quartz — Full Stack eCommerce Web Application
              </h3>
              <p className="text-gray-400 mb-4">
                A full-stack eCommerce web application developed for a
                promotional wall clock business that allows users to browse
                products, manage carts, authenticate accounts, manage delivery
                addresses, and place orders through a responsive interface. The
                application implements secure authentication, protected routes,
                OTP-based password recovery, and persistent user sessions. The
                system follows a client–server architecture where user actions
                from the frontend trigger API requests, data is processed on the
                backend, stored in the database, and returned to update the
                application state and UI in real time. Global state management
                ensures efficient data handling and automatic UI updates,
                providing a complete end-to-end shopping experience.
              </p>
              <div>
                {[
                  "JavaScript",
                  "React.js",
                  "Redux Toolkit",
                  "Redux Persist",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "TailwindCSS",
                  "HTML",
                  "CSS",
                  "Axios",
                  "JWT Authentication",
                  "REST API",
                  "Vite",
                ].map((tech, key) => (
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
                  href="https://www.girijaquartz.com/"
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
                are handled using Tailwind CSS for a clean and responsive
                design.
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
              <h3 className="text-xl font-bold mb-2">Smart To-Do Manager</h3>
              <p className="text-gray-400 mb-4">
                A task management web application that allows users to create,
                manage, and track daily tasks with priority levels. The
                application supports adding, deleting, and marking tasks as
                completed, along with filtering tasks based on completion
                status. It uses React functional components with hooks for state
                management and provides a responsive UI using Bootstrap for
                efficient task organization and user interaction. The
                application follows a component-based architecture where user
                actions update the application state, automatically re-rendering
                the UI to reflect real-time changes.
              </p>
              <div>
                {["JavaScript", "React.js", "Bootstrap", "HTML", "CSS"].map(
                  (tech, key) => (
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
                  ),
                )}
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
              <h3 className="text-xl font-bold mb-2">Blog App</h3>
              <p className="text-gray-400 mb-4">
                A simple Blog Management Web App where users can create, view,
                and delete blogs. Users can enter a blog title, blog content,
                and author name. The app fetches and manages blog data using a
                local API powered by JSON Server. Key Features:Add new blogs,
                (Title, Body, Author), View all blogs dynamically, Delete any
                blog, Real-time data handling using API requests ,Local backend
                simulation using JSON Server
              </p>
              <div>
                {[
                  "ReactJS",
                  "JavaScript",
                  "Fetch API",
                  "JSON Server",
                  "HTML",
                  "CSS",
                ].map((tech, key) => (
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
              <h3 className="text-xl font-bold mb-2">
                Random User Generator App
              </h3>
              <p className="text-gray-400 mb-4">
                A simple web app that generates random user profiles with
                details like name, email, profile picture, and location using an
                external API. It fetches and displays new user data instantly
                with a button click.
              </p>
              <div>
                {["ReactJS", "JavaScript", "Fetch API", "HTML", "CSS"].map((tech, key) => (
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
