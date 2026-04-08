type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Muaz Ahmad — Portfolio",
    fullName: "Muaz Ahmad",
    email: "mianmuaz5444@gmail.com",
  },
  hero: {
    name: "Muaz Ahmad",
    p: ["I specialize in Cybersecurity and the architecture of", "Intelligent Systems through Machine Learning and Deep Learning."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a Computer Science student (Class of 2028) with a strong passion 
      for managing and leading software projects. My primary focus revolves around 
      the intersection of Cybersecurity and Artificial Intelligence, where I specialize 
      in designing advanced Machine Learning and Deep Learning architectures. 
      While I am deeply engaged in these fields, I also maintain a strong technical 
      foundation in C++, Python, and Object-Oriented Programming (OOP) developed 
      through multiple technical milestones. I aim to bridge the gap between 
      technical excellence and software administration by leading teams to build 
      secure, intelligent, and scalable solutions.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my skills through real-world examples, 
      reflecting my ability to lead developments in management systems, game design, 
      and AI research. Each project represents my commitment to clean code and 
      effective software architecture.`,
    },
  },
};
