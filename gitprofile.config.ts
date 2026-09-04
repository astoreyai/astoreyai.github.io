// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'astoreyai',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, set base to '/'.
   */
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: [
          'astoreyai/circle',
          'AVHBAC/ofiqpy',
          'astoreyai/okf-tools',
          'astoreyai/lunar-terrain-sidecar',
          'astoreyai/swinvit-face-verification',
          'astoreyai/medicaid-kg',
        ],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'OpenFIQA Studio',
          description:
            'Local-first scientific IDE for biometric quality, verification research, controlled degradation experiments, reproducible evaluation, and publication-artifact generation. In development: the public repository currently contains the product architecture, scientific schemas, decision records, and phased build plan; the application remains under construction.',
          imageUrl: '',
          link: 'https://github.com/astoreyai/openfiqa-studio',
        },
        {
          title: '100 Days of Machine Learning',
          description:
            'Daily machine learning practice notebooks and experiments, documenting concept learning with hands-on implementations.',
          imageUrl: '',
          link: 'https://github.com/astoreyai/100-days-of-ML',
        },
      ],
    },
  },
  seo: {
    title:
      'Aaron W. Storey | AI Research Engineer, Trustworthy Agentic Systems',
    description:
      'AI research engineer and PhD Candidate at Clarkson University working on trustworthy agentic systems, verification engineering, multi-agent AI, AI reliability, and autonomous systems.',
    imageURL: '',
  },
  social: {
    linkedin: 'astoreyai',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'astoreyai',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://orcid.org/0009-0009-5560-0015',
    phone: '',
    email: 'storeyaw@clarkson.edu',
  },
  resume: {
    fileUrl: '', // Add CV URL when available
  },
  skills: [
    'Multi-Agent Systems',
    'Agentic AI',
    'Model Orchestration',
    'Tool-Using Agents',
    'Agent Memory',
    'Knowledge Graphs',
    'Verification & Validation',
    'AI Reliability',
    'Provenance',
    'Uncertainty Quantification',
    'Explainable AI',
    'Reproducible Evaluation',
    'PyTorch',
    'scikit-learn',
    'Vision Transformers',
    'Computer Vision',
    'Face Image Quality',
    'ROS2',
    'OpenCV',
    'SLAM',
    'Sensor Fusion',
    'GNSS-Denied Navigation',
    'Python',
    'R',
    'SQL',
    'FastAPI',
    'DuckDB',
    'Docker',
    'Linux',
    'Git',
    'LaTeX',
  ],
  experiences: [
    {
      company: 'Kymera Systems LLC',
      position: 'Independent AI Research Engineer',
      from: 'August 2025',
      to: 'Present',
      companyLink: 'https://kymera.systems',
    },
    {
      company: 'Clarkson University, AVHBAC Lab',
      position: 'Graduate Research Assistant, Autonomous Systems and AI',
      from: 'June 2026',
      to: 'Present',
      companyLink: 'https://www.clarkson.edu',
    },
    {
      company: 'Clarkson University, CITeR',
      position: 'Graduate Research Assistant, Trustworthy AI and Biometrics',
      from: 'June 2025',
      to: 'May 2026',
      companyLink: 'https://www.clarkson.edu',
    },
    {
      company: 'Defense Health Agency',
      position:
        'Data and Operations Analyst; Educational Technology Specialist',
      from: 'July 2013',
      to: 'January 2018',
      companyLink: 'https://www.health.mil',
    },
    {
      company: 'United States Army',
      position: 'Technical Leadership, IT Strategy, and Operations Roles',
      from: 'August 2002',
      to: 'January 2018',
      companyLink: 'https://www.army.mil',
    },
  ],
  certifications: [
    {
      name: 'CompTIA Security+',
      body: 'CompTIA',
      year: '',
      link: 'https://www.comptia.org',
    },
    {
      name: 'IEEE Member',
      body: 'Institute of Electrical and Electronics Engineers',
      year: '2024',
      link: 'https://www.ieee.org',
    },
  ],
  educations: [
    {
      institution: 'Clarkson University',
      degree: 'Ph.D. Candidate, Computer Science',
      from: '2025',
      to: 'Present',
    },
    {
      institution: 'Maryville University of Saint Louis',
      degree: 'M.S., Artificial Intelligence',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'American Military University',
      degree: 'B.S., Information Technology',
      from: '',
      to: '2017',
    },
  ],
  publications: [
    {
      title:
        'Advanced Hardware Security on Embedded Processors: A 2026 Systematic Review',
      journalName: 'Electronics, 15(5), 1135 (2026)',
      authors: 'Ali Kia, Aaron W. Storey, Masudul H. Imtiaz',
      link: 'https://doi.org/10.3390/electronics15051135',
      description:
        'Systematic review of post-quantum cryptography, physical unclonable functions, hardware roots of trust, side-channel mitigations, and trusted execution environments for embedded and IoT processors.',
    },
    {
      title: 'A Three-Channel Audit of the Biometric Evidence Chain',
      conferenceName: 'IEEE AIBThings 2026 (accepted)',
      authors: 'Aaron W. Storey, Masudul H. Imtiaz',
    },
    {
      title: 'LLM on the Edge: A 2026 Perspective',
      conferenceName: 'IEEE AIBThings 2026 (accepted)',
      authors: 'Aaron W. Storey, Ali Kia, Masudul H. Imtiaz',
    },
    {
      title:
        'Nonparametric Template Persistence Curves for Child Face Recognition via Beta Generalized Additive Models',
      conferenceName: 'IEEE UEMCON 2026 (accepted)',
      authors:
        'Aaron W. Storey, Ajan Ahmed, Yash Sukhdeve, Masudul H. Imtiaz, Sumona Mondal',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium',
    username: 'astoreyai',
    limit: 3,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes
    themes: [
      'light',
      'dark',
      'nord',
      'corporate',
      'business',
      'forest',
      'aqua',
      'lofi',
      'winter',
      'dim',
      'sunset',
      'procyon',
    ],
  },

  footer: `AI Research Engineer | Trustworthy Agentic Systems | Verification Engineering, Multi-Agent AI, AI Reliability | PhD Candidate, Clarkson University`,

  enablePWA: true,
};

export default CONFIG;
