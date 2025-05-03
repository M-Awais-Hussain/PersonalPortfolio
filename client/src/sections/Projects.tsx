import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import { SkillCategory } from "@/data/skills";

const filterCategories = [
  { name: "All", value: "all" },
  { name: "Machine Learning", value: "machine-learning" },
  { name: "Computer Vision", value: "computer-vision" },
  { name: "NLP", value: "nlp" },
  { name: "Data Science", value: "data-science" },
  { name: "Web Development", value: "web-development" }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState<SkillCategory>("all");

  // Filter projects based on selected category
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-20 relative bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Featured <span className="text-primary dark:text-secondary">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            A showcase of my work in data science, AI, and machine learning
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
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
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
                    <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-2 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between">
                      <a 
                        href={project.github} 
                        className="text-primary dark:text-secondary hover:underline flex items-center text-sm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                      <a 
                        href={project.demo} 
                        className="text-primary dark:text-secondary hover:underline flex items-center text-sm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full flex flex-col items-center justify-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9 9h.01"></path>
                  <path d="M15 9h.01"></path>
                  <path d="M8 13h8"></path>
                </svg>
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">No projects found</h3>
                <p className="text-gray-600 dark:text-gray-400">Try selecting a different category</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#"
            className="inline-flex items-center gap-2 py-3 px-6 bg-primary hover:bg-primary/80 text-white rounded-md transition duration-300"
          >
            View All Projects 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
