interface SocialLink {
  platform: string;
  url: string;
  username: string;
}

interface TechFocus {
  title: string;
  items: string[];
}

interface Skill {
  name: string;
  skills: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoLink: string;
  githubLink: string;
}

interface VolunteerStats {
  label: string;
  value: string;
  description: string;
}

interface Profile {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  image: string;
  social: SocialLink[];
  about: {
    paragraphs: string[];
    techFocus: string[];
  };
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  volunteer: {
    organization: string;
    role: string;
    period: string;
    description: string[];
    stats: VolunteerStats[];
  };
}

export const profile: Profile = {
  name: "ASAD",
  title: "AI & Web Automation Developer",
  subtitle: "Chatbots | No-Code | code | web developer",
  email: "asadazhar5612@gmail.com",
  phone: "+92 328 9743113",
  location: "Pakistan",
  image: "https://github.com/info-Asad.png",
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/info-Asad",
      username: "@info-Asad"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/a-s-a-d/",
      username: "@a-s-a-d"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/okiee._.asad",
      username: "@okiee._.asad"
    }
  ],
  about: {
    paragraphs: [
      "I am a passionate AI & Web Automation Developer specializing in building intelligent systems that bridge technology and real-world applications. With hands-on expertise in Flowise AI, low-code/no-code tools, and LLM integration, I design scalable solutions that empower both businesses and individuals.",

      "My approach blends deep technical proficiency with a full-stack development mindset, allowing me to craft solutions from concept to deployment. I focus on solving meaningful problems and enhancing digital experiences through automation, custom chatbot systems, and hybrid integration projects.",

      "Beyond development, I’m committed to digital literacy education. Through volunteer teaching, I help students and beginners gain essential tech skills and confidence to explore the digital world."
    ],
    techFocus: [
      "Flowise AI & LLM Integration",
      "Supabase & Database Solutions",
      "Chatbot Development",
      "Code/low-Code Platforms",
      "React & Modern Frontend",
      "Automation Workflows"
    ]
  },
  skills: [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
    },
    {
      name: "Web Tech",
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS"]
    },
    {
      name: "Frameworks/Tools",
      skills: ["Express.js", "React Query",  "Webpack", "Git", "Docker"]
    },
    {
      name: "Databases",
      skills: ["Supabase", "PostgreSQL", "MongoDB", "Firebase", "Redis"]
    },
    {
      name: "AI Tools",
      skills: ["Flowise AI", "LangChain", "OpenAI API", "HuggingFace", "TensorFlow.js", "LLM Integration"]
    },
    {
      name: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration", "Project Management", "User-Centered Design"]
    },
    {
      name: "Dev Tools & IDEs",
      skills: ["Cursor (AI IDE)", "Visual Studio", "Xcode", "Postman", "Git"]
    },
    {
      name: "Teaching Skills",
      skills: ["Curriculum Development", "Digital Literacy", "One-on-One Mentoring", "Workshop Facilitation"]
    }
    
  ],
  experience: [
    
    {
      title: "Frontend Developer",
      company: "as interni in Lofty Logix",
      period: "May 2023-Aug 2024. 3mos",
      description: "Developing modern web applications using React, Next.js, and other cutting-edge technologies. Specializing in integrating AI tools and automation workflows into business applications.",
      skills: ["React", "Next.js", "TypeScript", "AI Integration", "UI/UX Design"]
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "Nov 2023-Present. 1yr 7mos",
      description: "Providing custom web development and AI integration services for clients globally. Building chatbots, automation tools, and web applications that enhance productivity and user experience.",
      skills: ["Flowise AI", "LLM Integration", "Web Development", "Chatbots", "Business Automation"]
    },
    {
      title: "Volunteer Teacher",
      company: "Makki Madani Islamic Centre",
      period: "jun 2025 - Present. 5mos",
      description: "Teaching digital literacy and basic programming concepts to students. Developing curriculum and educational materials to make technology accessible to all age groups.",
      skills: ["Education", "Curriculum Development", "Digital Literacy", "Mentoring"]
    }
    
    
  ],
  projects: [
    {
      title: "Fist Portfolio",
      description: "A beginner-friendly portfolio website showcasing my early web development journey, built with HTML, CSS, and JavaScript and i think i take vey big work 😂",
      image: "https://raw.githubusercontent.com/info-Asad/portfolio/refs/heads/main/port-2.png",
      tags: ["HTML", "CSS", "JavaScript", "Php"],
      category: "Personal project",
      demoLink: "https://github.com/info-Asad/portfolio/",
      githubLink: "https://github.com/info-Asad/portfolio/"
    },
    {
      title: "customer support chatbot",
      description: "An AI base Customer Support Chatbot that designed to answer user questions based on a set of training data, web scraping for E-commerce business",
      image: "https://raw.githubusercontent.com/info-Asad/langchain/refs/heads/main/screenshot1.png",
      tags: ["Flowise ai", "OpenAI", "react js", "APIs"],
      category: "Chatbot",
      demoLink: "https://github.com/info-Asad/customer-support-chatbot/",
      githubLink: "https://github.com/info-Asad/customer-support-chatbot/"
    },
    {
      title: "Digital Literacy Platform",
      description: "Educational portal designed to teach basic digital skills to people of all ages through interactive lessons and exercises.",
      image: "https://images.pexels.com/photos/5428263/pexels-photo-5428263.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tags: ["React", "Firebase", "Education", "UI/UX", "Accessibility"],
      category: "Education",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Quick Translator Extension",
      description: "Quick Translator is a lightweight and efficient browser extension that provides instant translations of selected text or entire web pages. Perfect for students, travelers, and professionals who need quick language assistance while browsing the web.",
      image: "https://qubika.com/wp-content/uploads/2024/12/extensions-chrome-1536x1024.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Automation",
      demoLink: "https://github.com/info-Asad/Quick-Translator-extension",
      githubLink: "https://github.com/info-Asad/Quick-Translator-extension"
    },
    {
      title: "Personal Finance Assistant",
      description: "AI-powered chatbot that helps users manage finances, track expenses, and receive personalized financial advice. Yes, but it was not successful.😭😭😭😭😭😭😭😭😭😭",
      image: "https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tags: ["flowise ai", "react.js", "Supabase", "Finance"],
      category: "Personal project",
      demoLink: "",
      githubLink: ""
    },
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for online retailers to visualize sales data, inventory, and customer analytics.",
      image: "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1600",
      tags: ["Dashboard", "React", "Recharts", "Data Visualization", "UI/UX"],
      category: "UI",
      demoLink: "#",
      githubLink: "#"
    }
  ],
  volunteer: {
    organization: "Makki Madani Islamic Centre",
    role: "Technology Instructor",
    period: "2018 - Present",
    description: [
      "I've been volunteering as a technology instructor at Makki Madani Islamic Centre, teaching digital literacy to students and community members of all ages.",
"My focus is on bridging the digital divide by designing accessible, skill-level appropriate curricula and offering hands-on support with real-world tech challenges.",
"This experience has been deeply rewarding, allowing me to combine my technical skills with a passion for education and community service — helping others build confidence in using technology."    ],
    stats: [
      {
        label: "Students Mentored",
        value: "30+",
        description: "Provided individual guidance to students of various age groups"
      },
      {
        label: "Teaching Hours",
        value: "150+",
        description: "Dedicated hours teaching digital literacy and technology skills"
      },
      {
        label: "Years",
        value: "1+",
        description: "Consistent commitment to volunteering and community service"
      }
    ]
  }

};
export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills & Technologies' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Get In Touch' }
  

];