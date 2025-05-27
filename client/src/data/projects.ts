export type SkillCategory = "all" | "machine-learning" | "computer-vision" | "nlp" | "generative-ai" | "data-science" | "web-development" | "data analysis" ;

export interface Project {
  title: string;
  description: string;
  image: string;
  tag: string;
  tagColor: string;
  technologies: string[];
  github: string;
  // demo: string;
  categories: SkillCategory[];
}

export const projects: Project[] = [
  {
    title: "YouTube Chatbot Extension",
    description: "Developed an AI-powered chatbot extension for YouTube, enabling interactive conversations and real-time assistance while watching videos.",
    image: "images/youtube.png",
    tag: "AI Development",
    tagColor: "bg-primary",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "Langchain"],
    github: "https://github.com/M-Awais-Hussain/YouTube-Chatbot-Extension.git",
    // demo: "https://demo.com",
    categories: ["generative-ai", "web-development"]
  },
  {
    title: "Medical Chatbot",
    description: "Developed an AI-driven medical chatbot to provide users with instant health information, symptom checking, and guidance through interactive conversations.",
    image: "images/medical_Chatbot.png",
    tag: "AI Development",
    tagColor: "bg-secondary",
    technologies: ["LangChain", "HTML", "CSS", "Flask"],
    github: "https://github.com/M-Awais-Hussain/MedicalChatBot.git",
    // demo: "https://demo.com",
    categories: ["generative-ai", "web-development"]
  },
  {
    title: "Job Recommendation System",
    description: "Web app to recommend jobs based on your uploaded CV’s skills.",
    image: "images/job_recommendation.png",
    tag: "machine-learning",
    tagColor: "bg-accent",
    technologies: ["sk-learn", "Flask", "Python", "Bootstrap 5"],
    github: "https://github.com/M-Awais-Hussain/JobRecommendation.git",
    // demo: "https://demo.com",
    categories: ["data-science", "machine-learning"]
  },
  {
    title: "Financial Stock Analysis using LlamaIndex",
    description: "AI-powered Streamlit app for generating financial stock reports using LlamaIndex, Groq LLM, and Google GenAI embeddings.",
    image: "images/finanicalStock.png",
    tag: "AI Development",
    tagColor: "bg-red-600",
    technologies: ["Streamlit", "LlamaIndex", "Groq", "Google GenAI Embeddings"],
    github: "https://github.com/M-Awais-Hussain/Financial-Stock-Analysis-using-LlamaIndex.git",
    // demo: "https://demo.com",
    categories: ["generative-ai", "nlp"]
  },
  {
    title: "Zomato Chatbot with Chainlit ",
    description: "An AI-powered chatbot built with Chainlit that helps users explore restaurants, browse menus, and get personalized food recommendations from Zomato data.",
    image: "images/zomatoChainlit.png",
    tag: "AI Development",
    tagColor: "bg-orange",
    technologies: ["Chainlit", "Langchain"],
    github: "https://github.com/M-Awais-Hussain/Zomato-chatbot-with-Chainlit.git",
    // demo: "https://demo.com",
    categories: ["generative-ai"]
  },

  {
    title: "ML Model Explorer",
    description: "An interactive Streamlit web app to explore, visualize, and compare the performance of popular machine learning classifiers (KNN, SVM, Random Forest) on well-known scikit-learn datasets.",
    image: "images/ML_Streamlit.png",
    tag: "ML",
    tagColor: "bg-black",
    technologies: ["Streamlit", "ML Models"],
    github: "https://github.com/M-Awais-Hussain/ML-Model-Explorer-with-Streamlit.git",
    // demo: "https://demo.com",
    categories: ["machine-learning", "data-science"]
  },
  {
    title: "YOLO Traffic Analyzer",
    description: "A real-time object tracking and counting system using YOLOv11 that monitors vehicle crossings at a virtual line with class-specific counting.",
    image: "images/vehicleTracking.png",
    tag: "Object Detection",
    tagColor: "bg-primary",
    technologies: ["YOLO"],
    github: "https://github.com/M-Awais-Hussain/YOLO-Traffic-Analyzer.git",
    // demo: "https://demo.com",
    categories: ["computer-vision", "data-science"]
  }



];
