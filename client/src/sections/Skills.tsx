import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { languageSkills, domainSkills, techSkills, toolSkills, softSkills } from "@/data/skills";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5 },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
  };

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

        {/* 1. Domain Expertise */}
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
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800/50 rounded-xl hover:shadow-lg transition border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-secondary/30"
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

        {/* 2. Programming Languages */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
            Programming <span className="text-primary dark:text-secondary">Languages</span>
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {languageSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800/50 rounded-xl hover:shadow-lg transition border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-secondary/30"
                variants={cardVariant}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="text-3xl mb-3 text-primary dark:text-secondary">{skill.icon}</div>
                <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3. Technologies & Frameworks */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
            Technologies & <span className="text-primary dark:text-secondary">Frameworks</span>
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800/50 rounded-xl hover:shadow-lg transition border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-secondary/30"
                variants={cardVariant}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="text-3xl mb-3 text-primary dark:text-secondary">{skill.icon}</div>
                <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 4. Tools & Platforms */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
            Tools & <span className="text-primary dark:text-secondary">Platforms</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {toolSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center p-3 bg-white dark:bg-gray-800/60 rounded-lg hover:shadow-lg transition border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-secondary/30"
                variants={fadeIn}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={index}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="text-2xl mr-3 text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 p-2 rounded-full">
                  {skill.icon}
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5. Soft Skills */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
            Soft <span className="text-primary dark:text-secondary">Skills</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center bg-white dark:bg-gray-800/60 p-4 rounded-lg hover:shadow-lg transition border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-secondary/30"
                variants={fadeIn}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
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
    </section>
  );
};

export default Skills;
