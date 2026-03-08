import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";

type SkillCategory = "all" | "machine-learning" | "computer-vision" | "nlp" | "generative-ai" | "data-science" | "web-development" | "data analysis";

const filterCategories = [
  { name: "All", value: "all" },
  { name: "Machine Learning", value: "machine-learning" },
  { name: "Computer Vision", value: "computer-vision" },
  { name: "NLP", value: "nlp" },
  { name: "Generative-AI", value: "generative-ai" },
  { name: "Data Science", value: "data-science" },
  { name: "Web Development", value: "web-development" },
  { name: "Data Analysis", value: "data-analysis" },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>("all");

  // Filter projects based on selected category
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              All <span className="text-primary dark:text-secondary">Projects</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Explore my complete portfolio of projects in data science, AI, and machine learning
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {filterCategories.map((category, index) => (
                <motion.button
                  key={category.value}
                  onClick={() => setActiveFilter(category.value as SkillCategory)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeFilter === category.value 
                      ? "bg-primary text-white shadow-md" 
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div 
                    key={project.title}
                    className="glass rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    layout
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className={`${project.tagColor} text-white text-xs py-1 px-2 rounded-full`}>{project.tag}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-2 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary dark:text-secondary hover:underline"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.p 
                  className="col-span-full text-center text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  No projects found for this category.
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;