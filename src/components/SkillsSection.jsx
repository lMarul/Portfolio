import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", category: "frontend", img: "/assets/html-5-svgrepo-com.svg" },
  { name: "CSS", category: "frontend", img: "/assets/css3-svgrepo-com.svg" },
  { name: "JavaScript", category: "frontend", img: "/assets/javascript-svgrepo-com.svg" },

  // Frameworks
  { name: "Flask", category: "frameworks", img: "/assets/flask-svgrepo-com.svg" },
  { name: "React", category: "frameworks", img: "/assets/react.svg" },
  { name: "Tailwind CSS", category: "frontend", img: "/assets/tailwindcss-icon-svgrepo-com.svg" },


  // Backend
  { name: "Python", category: "backend", img: "/assets/python-svgrepo-com.svg" },
  { name: "Java", category: "backend", img: "/assets/java-svgrepo-com.svg" },
  { name: "SQL", category: "backend", img: "/assets/sql-svgrepo-com.svg" },
  { name: "SQLite", category: "backend", img: "/assets/sqlite-svgrepo-com.svg" },

  // Tools
  { name: "Git", category: "tools", img: "/assets/git-svgrepo-com.svg" },
  { name: "Github", category: "tools", img: "/assets/github-142-svgrepo-com.svg" },
  { name: "Figma", category: "tools", img: "/assets/figma-svgrepo-com.svg" },
  { name: "VS Code", category: "tools", img: "/assets/vs-code-svgrepo-com.svg" },
];

const categories = ["all", "frontend", "backend", "frameworks", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
            >
              <img src={skill.img} alt={skill.name + ' icon'} className="h-8 w-8 flex-shrink-0" />
              <span className="font-semibold text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

