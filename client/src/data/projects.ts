import { SkillCategory } from './skills';

export interface Project {
  title: string;
  description: string;
  image: string;
  tag: string;
  tagColor: string;
  technologies: string[];
  github: string;
  demo: string;
  categories: SkillCategory[];
}

export const projects: Project[] = [
  {
    title: "Data Analysis Dashboard",
    description: "Developed an interactive dashboard for business analytics with real-time data processing capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tag: "Data Science",
    tagColor: "bg-primary",
    technologies: ["Python", "Pandas", "Streamlit", "Matplotlib"],
    github: "https://github.com",
    demo: "https://demo.com",
    categories: ["data-science", "web-development"]
  },
  {
    title: "Intelligent Chatbot",
    description: "Created an AI-powered conversational agent that can understand and respond to complex user queries using natural language.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80",
    tag: "AI Development",
    tagColor: "bg-secondary",
    technologies: ["LangChain", "LlamaIndex", "Transformers", "Flask"],
    github: "https://github.com",
    demo: "https://demo.com",
    categories: ["nlp", "machine-learning", "web-development"]
  },
  {
    title: "Object Detection System",
    description: "Built a real-time object detection application using deep learning techniques to identify and classify objects in images and video streams.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tag: "Computer Vision",
    tagColor: "bg-accent",
    technologies: ["TensorFlow", "OpenCV", "Python", "Keras"],
    github: "https://github.com",
    demo: "https://demo.com",
    categories: ["computer-vision", "machine-learning"]
  },
  {
    title: "Web Scraping Pipeline",
    description: "Created an automated data collection system that extracts, transforms, and loads data from various websites into structured databases.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tag: "Web Scraping",
    tagColor: "bg-green-600",
    technologies: ["Python", "Beautiful Soup", "Selenium", "Pandas"],
    github: "https://github.com",
    demo: "https://demo.com",
    categories: ["data-science"]
  },
  {
    title: "Sentiment Analysis Tool",
    description: "Developed a tool that analyzes customer reviews and social media posts to determine sentiment and extract key insights for businesses.",
    image: "https://images.unsplash.com/photo-1546146477-15a587cd5fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    tag: "NLP",
    tagColor: "bg-purple-600",
    technologies: ["NLTK", "spaCy", "Transformers", "scikit-learn"],
    github: "https://github.com",
    demo: "https://demo.com",
    categories: ["nlp", "machine-learning"]
  }
];
