import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BudgeIT - Budget Tracker",
    description: "A semi-working budget tracker app built with Python, HTML, CSS, and JavaScript. Using Supabase for the database and Flask as its main framework.",
    image: "/src/banners/budgeIT.png",
    tags: ["Flask", "Python", "Supabase"],
    url: "https://budge-it-j4bp.onrender.com/dashboard",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Pasay South High School School Portal",
    description:
      "A work in progress school portal for Pasay South High School. Using Flask as its main framework and Supabase for the database.",
    image: "/src/banners/SchoolPortal.png",
    tags: ["Flask", "Python", "Supabase"],
    url: "https://student-monitor-student-portal.onrender.com/student/login",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Asia Pacific College - Gym Log System",
    description:
      "A gym log system for Asia Pacific College. Using Flask as its main framework and using a local database.",
    image: "/src/banners/gymlog.png",
    tags: ["Python", "Flask"],
    githubUrl: "https://github.com/tarikuzuma/gymlog-test.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <a
              key={key}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover block transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      onClick={e => e.stopPropagation()}
                    >
                      <Github size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/lMarul"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
