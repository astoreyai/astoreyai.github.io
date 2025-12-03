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
          'astoreyai/money-talks',
          'astoreyai/ai_scientist',
          'astoreyai/claude-skills',
          'astoreyai/biometric_fingerprint_mcp',
        ],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'SIFTER — NASA Space Apps 2024',
          description:
            'ML-powered seismic detection for moonquakes and marsquakes. Python prototyping to C++ edge deployment under extreme power/bandwidth constraints. Apollo 12 & Mars InSight data.',
          imageUrl:
            'https://raw.githubusercontent.com/Bespoke-Robot-Society/SIFTER/main/docs/sifter-logo.png',
          link: 'https://github.com/Bespoke-Robot-Society/SIFTER',
        },
        {
          title: '100 Days of Machine Learning',
          description:
            'Complete 35-lesson curriculum from Python basics to XGBoost. Interactive Jupyter notebooks with Google Colab integration. Co-created educational resource.',
          imageUrl:
            'https://100daysofml.github.io/_static/100days_circle.jpg',
          link: 'https://100daysofml.github.io/',
        },
        {
          title: 'EE622: Advanced Biometrics Transformers',
          description:
            '10-week graduate course: Vision Transformers for fingerprint, face, gait, speaker, and ECG biometrics. Hands-on labs with SOCOFing, CelebA, ASVspoof datasets.',
          imageUrl: '',
          link: 'https://github.com/clarkson-edge/ee622',
        },
        {
          title: 'EE513: Embedded Systems Design',
          description:
            'Quarto textbook for embedded ML on Silicon Labs EFR32xG24. Gesture recognition, anomaly detection, posture classification on BLE microcontrollers.',
          imageUrl: '',
          link: 'https://github.com/clarkson-edge/ee513_book',
        },
      ],
    },
  },
  seo: {
    title: 'Aaron W. Storey | Explainable AI Researcher',
    description:
      'PhD Candidate at Clarkson University researching Explainable AI, Transformer Interpretability, and Adversarial ML. Opening the black box.',
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
    'Python',
    'PyTorch',
    'TensorFlow',
    'scikit-learn',
    'XGBoost',
    'Transformers',
    'Explainable AI',
    'Computer Vision',
    'NLP',
    'R',
    'SQL',
    'LaTeX',
    'Git',
    'Docker',
    'Linux',
    'Jupyter',
  ],
  experiences: [
    {
      company: 'Kymera Systems',
      position: 'AI Engineer',
      from: 'August 2025',
      to: 'Present',
      companyLink: 'https://kymera.systems',
    },
    {
      company: 'Clarkson University',
      position: 'Graduate Research Assistant',
      from: 'June 2025',
      to: 'Present',
      companyLink: 'https://www.clarkson.edu',
    },
    {
      company: 'Defense Health Agency',
      position: 'Data and Operations Analyst',
      from: 'September 2015',
      to: 'January 2018',
      companyLink: 'https://www.health.mil/About-MHS/OASDHA/Defense-Health-Agency',
    },
    {
      company: 'Defense Health Agency',
      position: 'Educational Technology Specialist',
      from: 'July 2013',
      to: 'September 2015',
      companyLink: 'https://www.health.mil/About-MHS/OASDHA/Defense-Health-Agency',
    },
    {
      company: 'US Army',
      position: 'Communications and IT Strategy Consultant',
      from: 'August 2002',
      to: 'July 2013',
      companyLink: 'https://www.army.mil',
    },
  ],
  certifications: [
    {
      name: 'CompTIA Security+',
      body: 'CompTIA',
      year: '',
      link: 'https://www.comptia.org/certifications/security',
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
      degree: 'PhD, Computer Science',
      from: '2024',
      to: '2026 (Expected)',
    },
    {
      institution: 'Maryville University',
      degree: 'MS, Artificial Intelligence',
      from: '2023',
      to: '2024',
    },
  ],
  publications: [
    {
      title: 'Beta Regression Framework for Bounded Biometric Performance Metrics',
      conferenceName: '',
      journalName: 'IEEE Transactions on Biometrics, Behavior, and Identity Science (T-BIOM)',
      authors: 'Aaron W. Storey',
      link: '',
      description:
        'Linear regression models predict impossible accuracy values (>100%) for bounded metrics. This paper introduces a beta regression framework maintaining valid bounds while providing interpretable coefficients for child face recognition analysis.',
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

  footer: `PhD Candidate | Explainable AI Researcher | Proposal: Jan 2026 | Defense: Nov 2026`,

  enablePWA: true,
};

export default CONFIG;
