import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { languageSkills, domainSkills, techSkills, toolSkills, softSkills, SkillCategory } from "@/data/skills";

// Filter categories for Tech Skills
const techFilterCategories = [
  { name: "All", value: "all" },
  { name: "Machine Learning", value: "machine-learning" },
  { name: "Computer Vision", value: "computer-vision" },
  { name: "NLP", value: "nlp" },
  { name: "Data Science", value: "data-science" },
  { name: "Web Development", value: "web-development" }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeTechFilter, setActiveTechFilter] = useState<SkillCategory>("all");

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.6,
        type: "spring",
        stiffness: 50
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Filter tech skills based on selected category
  const filteredTechSkills = activeTechFilter === "all"
    ? techSkills
    : techSkills.filter(skill => skill.category === activeTechFilter);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-900 dark:to-dark opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My <span className="text-primary dark:text-secondary">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            I specialize in data science, machine learning, and AI development with expertise in various technologies.
          </p>
        </motion.div>
        
        {/* Domain Expertise - Enhanced UI */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
            Domain <span className="text-primary dark:text-secondary">Expertise</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {domainSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="glass p-6 rounded-xl flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-primary/20 dark:hover:border-secondary/20"
                variants={fadeIn}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl mb-4 bg-primary/10 dark:bg-secondary/10 p-4 rounded-full">{skill.icon}</div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 text-lg">{skill.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Technologies with Filter */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
            Technologies & <span className="text-primary dark:text-secondary">Frameworks</span>
          </h3>
          
          {/* Tech Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techFilterCategories.map((category, index) => (
              <motion.button
                key={category.value}
                onClick={() => setActiveTechFilter(category.value as SkillCategory)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeTechFilter === category.value 
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
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTechFilter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {filteredTechSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:shadow-lg transition glass"
                  variants={cardVariant}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  layout
                >
                  <div className="text-3xl mb-3 text-primary dark:text-secondary">{skill.icon}</div>
                  <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Languages - Updated UI */}
          <motion.div 
            className="glass rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-secondary mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Programming Languages
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {languageSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-secondary/5 dark:to-secondary/10 rounded-lg p-4 text-center hover:shadow-md transition-all flex items-center justify-center"
                  variants={slideIn}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                >
                  <span className="block text-lg font-bold text-gray-800 dark:text-white">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Tools - Updated UI */}
          <motion.div 
            className="glass rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-secondary mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              Tools & Platforms
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {toolSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="flex items-center p-3 bg-white/50 dark:bg-dark/50 rounded-lg hover:shadow-md transition border border-transparent hover:border-primary/20 dark:hover:border-secondary/20"
                  variants={fadeIn}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="text-2xl mr-3 text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 p-2 rounded-full">{skill.icon}</div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Soft Skills - Updated UI */}
          <motion.div 
            className="glass rounded-xl p-6 shadow-lg col-span-1 md:col-span-2 border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-secondary mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="flex items-center bg-white/50 dark:bg-dark/50 p-4 rounded-lg hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20 dark:hover:border-secondary/20"
                  variants={fadeIn}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                  whileHover={{ y: -5 }}
                >
                  <div className="rounded-full bg-primary/20 dark:bg-secondary/20 p-3 mr-4">
                    <div className="text-primary dark:text-secondary text-2xl">{skill.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{skill.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
