import { ReactNode } from "react";

// Define skill categories for filtering
export type SkillCategory = 
  | 'all'
  | 'machine-learning'
  | 'computer-vision'
  | 'nlp'
  | 'web-development'
  | 'data-science';

// Programming Languages Skills - without R as requested
export const languageSkills = [
  { name: "Python" },
  { name: "SQL" },
  { name: "Java" },
  { name: "C++" }
];

// Domain Skills - Computer Vision and NLP as requested
export const domainSkills = [
  {
    name: "Computer Vision",
    description: "Image processing, object detection, and recognition",
    icon: "📷",
    category: "computer-vision" as SkillCategory
  },
  {
    name: "Natural Language Processing",
    description: "Text analysis, sentiment analysis, and language generation",
    icon: "💬",
    category: "nlp" as SkillCategory
  },
  {
    name: "Machine Learning",
    description: "Classification, regression, and clustering algorithms",
    icon: "🧠",
    category: "machine-learning" as SkillCategory
  },
  {
    name: "Deep Learning",
    description: "Neural networks and advanced pattern recognition",
    icon: "🔮",
    category: "machine-learning" as SkillCategory
  },
  {
    name: "Generative AI",
    description: "LLMs, diffusion models, and content generation",
    icon: "✨",
    category: "machine-learning" as SkillCategory
  }
];

// Technology & Framework Skills - Added Web Scraping libraries
export const techSkills = [
  { 
    name: "TensorFlow", 
    icon: "📊",
    category: "machine-learning" as SkillCategory
  },
  { 
    name: "PyTorch", 
    icon: "🔥",
    category: "machine-learning" as SkillCategory
  },
  { 
    name: "Keras", 
    icon: "🧩",
    category: "machine-learning" as SkillCategory
  },
  { 
    name: "Pandas", 
    icon: "🐼",
    category: "data-science" as SkillCategory
  },
  { 
    name: "NumPy", 
    icon: "🔢",
    category: "data-science" as SkillCategory
  },
  { 
    name: "Scikit-learn", 
    icon: "🔍",
    category: "machine-learning" as SkillCategory
  },
  { 
    name: "OpenCV", 
    icon: "👁️",
    category: "computer-vision" as SkillCategory
  },
  { 
    name: "Beautiful Soup", 
    icon: "🍲",
    category: "data-science" as SkillCategory
  },
  { 
    name: "Selenium", 
    icon: "🌐",
    category: "data-science" as SkillCategory
  },
  { 
    name: "Hugging Face", 
    icon: "🤗",
    category: "nlp" as SkillCategory
  },
  { 
    name: "spaCy", 
    icon: "🔤",
    category: "nlp" as SkillCategory
  },
  { 
    name: "NLTK", 
    icon: "📝",
    category: "nlp" as SkillCategory
  },
  { 
    name: "LangChain", 
    icon: "⛓️",
    category: "nlp" as SkillCategory
  },
  { 
    name: "LlamaIndex", 
    icon: "📚",
    category: "nlp" as SkillCategory
  },
  { 
    name: "Flask", 
    icon: "🌐",
    category: "web-development" as SkillCategory
  },
  { 
    name: "FastAPI", 
    icon: "⚡",
    category: "web-development" as SkillCategory
  },
  { 
    name: "Streamlit", 
    icon: "📊",
    category: "web-development" as SkillCategory
  },
  { 
    name: "YOLO", 
    icon: "🎯",
    category: "computer-vision" as SkillCategory
  },
  { 
    name: "Transformers", 
    icon: "🤖",
    category: "nlp" as SkillCategory
  }
];

// Tool Skills - removed Docker as requested
export const toolSkills = [
  { 
    name: "Power BI", 
    icon: "📈"
  },
  { 
    name: "Excel", 
    icon: "📊"
  },
  { 
    name: "PowerPoint", 
    icon: "📑"
  },
  { 
    name: "Oracle SQL", 
    icon: "💾"
  },
  { 
    name: "Jupyter Notebook", 
    icon: "📓"
  },
  { 
    name: "Google Colab", 
    icon: "☁️"
  },
  { 
    name: "VS Studio", 
    icon: "💻"
  },
  { 
    name: "PyCharm", 
    icon: "🐍"
  },
  { 
    name: "Git", 
    icon: "🔄"
  }
];

// Soft Skills
export const softSkills = [
  { 
    name: "Problem Solving", 
    description: "Analytical approach to complex challenges",
    icon: "🧩"
  },
  { 
    name: "Self Learning", 
    description: "Continuously acquiring new skills independently",
    icon: "📚"
  },
  { 
    name: "Time Management", 
    description: "Efficiently organizing tasks and meeting deadlines",
    icon: "⏱️"
  },
  { 
    name: "Team Collaboration", 
    description: "Effective communication and teamwork",
    icon: "👥"
  },
  { 
    name: "Research", 
    description: "In-depth literature review and data analysis",
    icon: "🔎"
  }
];
