// File: constants/aboutData.ts
export const aboutData = {
  hero: {
    headline: "About Anxsys!",
    description:
      "We're a dynamic software firm specializing in cutting-edge digital solutions that help businesses navigate the fast-paced tech world. Our expertise includes bespoke software, cloud architectures, and digital strategies, transforming obstacles into efficient, scalable systems.",
    stats: [
      { value: "27+", label: "Projects Completed" },
      { value: "18+", label: "Skilled Professionals" },
      { value: "10+", label: "Global Reach" },
    ],
  },

  mission: {
    title: "Our Mission",
    statement:
      "To equip global organizations with advanced software that sparks innovation, boosts efficiency, and delivers enduring value. We're devoted to excellence in tech, helping clients meet their objectives and lead in the digital era.",
  },

  vision: {
    title: "Our Vision",
    pillars: [
      {
        icon: "Users",
        title: "Client Empowerment",
        description:
          "We focus on providing tangible results and building enduring collaborations. Your success drives us, and we strive to surpass expectations in every interaction.",
      },
      {
        icon: "TrendingUp",
        title: "Team Growth",
        description:
          "We nurture our talent with ongoing education, skill enhancement, and advancement paths. Creativity blooms when our team is empowered to excel.",
      },
      {
        icon: "Heart",
        title: "Community Impact",
        description:
          "We prioritize ethical operations and positive contributions to society and the environment. Sustainability and community involvement define us.",
      },
    ],
  },

  values: [
    {
      title: "Uncompromising Quality",
      description:
        "We uphold superior standards in all endeavors. From coding to UX, excellence is paramount. Our thorough testing guarantees durable, dependable, and scalable products.",
    },
    {
      title: "Empathetic Partnership",
      description:
        "We grasp clients' distinct needs and offer supportive, attentive assistance. Our team is committed to building trust through every engagement.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We own our responsibilities and pursue enhancement relentlessly. Our culture of accountability fosters growth for team and clients alike.",
    },
    {
      title: "Collaborative Innovation",
      description:
        "Ideas thrive in a supportive, joyful setting. We promote teamwork, creativity, and well-being to fuel innovation.",
    },
  ],

  leadership: [
    {
      name: "Michael Anderson",
      position: "CEO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    },
    {
      name: "Sarah Chen",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    },
    {
      name: "David Martinez",
      position: "COO",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    },
    {
      name: "Emily Thompson",
      position: "Head of Projects",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    },
    {
      name: "James Wilson",
      position: "Innovation Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    },
    {
      name: "Rachel Foster",
      position: "Client Success Director",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop",
    },
  ],

  approach: {
    title: "Our Methodology",
    description:
      "Blending agile practices with technical prowess, we create innovative, practical, and long-lasting solutions.",
    steps: [
      {
        icon: "Lightbulb",
        title: "Ideation & Planning",
        description:
          "We delve into your objectives, hurdles, and aspirations to craft a customized strategy.",
      },
      {
        icon: "Code",
        title: "Build & Innovate",
        description:
          "Our specialists develop robust, performant systems with the latest tech.",
      },
      {
        icon: "TestTube",
        title: "Validation & QA",
        description:
          "Comprehensive testing secures reliability and deployment readiness.",
      },
      {
        icon: "Rocket",
        title: "Launch & Maintain",
        description:
          "Seamless rollout and continuous support optimize your ROI.",
      },
    ],
  },

  compliance: {
    title: "Ethics & Compliance",
    description:
      "ANXSYS adheres to top-tier standards in security, privacy, and ethics. We ensure data protection and compliance with global regulations like GDPR, ISO 27001, and SOC 2. Trust is built on transparency and integrity.",
  },

  roadmap: {
    title: "Future Roadmap",
    description:
      "Looking ahead, we're advancing AI, cloud tech, and partnerships to amplify client value.",
    milestones: [
      {
        year: "2025",
        title: "AI & Automation Rollout",
        description:
          "Introducing AI tools for enhanced productivity and insights.",
      },
      {
        year: "2026",
        title: "International Growth",
        description:
          "Expanding presence in Europe and Asia-Pacific markets.",
      },
      {
        year: "2027",
        title: "Eco-Innovation",
        description:
          "Pioneering sustainable tech and achieving net-zero goals.",
      },
    ],
  },
} as const;