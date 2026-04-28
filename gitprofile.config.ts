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
          'astoreyai/teleprompt',
          'astoreyai/goblin-forge',
          'astoreyai/llm-memory-scoping-review',
          'astoreyai/claude-skills',
          'astoreyai/medicaid-kg',
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
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png',
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
          imageUrl: 'https://www.clarkson.edu/sites/default/files/2023-07/Green%20-%20Clarkson%20Shield.png',
          link: 'https://github.com/clarkson-edge/ee622',
        },
        {
          title: 'EE513: Embedded Systems Design',
          description:
            'Quarto textbook for embedded ML on Silicon Labs EFR32xG24. Gesture recognition, anomaly detection, posture classification on BLE microcontrollers.',
          imageUrl: 'https://www.clarkson.edu/sites/default/files/2023-07/Green%20-%20Clarkson%20Shield.png',
          link: 'https://github.com/clarkson-edge/ee513_book',
        },
      ],
    },
  },
  seo: {
    title: 'Aaron W. Storey | AI Researcher',
    description:
      'PhD Candidate at Clarkson University. Research: agentic AI systems, LLM safety & security, explainable AI (XAI), applied transformer architectures. Applications in biometric recognition, clinical decision support, and financial systems.',
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
    'Biometrics',
    'Computer Vision',
    'NLP',
    'Agentic AI',
    'Go',
    'R',
    'SQL',
    'LaTeX',
    'Git',
    'Docker',
    'Linux',
  ],
  experiences: [
    {
      company: 'Kymera Systems',
      position: 'Founder & CEO',
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
      to: '2027',
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
      title: 'Advanced Hardware Security on Embedded Processors: A 2026 Systematic Review',
      conferenceName: '',
      journalName: 'MDPI Electronics, 15(5), 1135 (2026)',
      authors: 'Ali Kia, Aaron W. Storey, Masudul H. Imtiaz',
      link: 'https://doi.org/10.3390/electronics15051135',
      description:
        'Systematic review of PQC, PUFs, hardware roots of trust, side-channel mitigations, and TEEs for IoT/embedded systems (2020-2026).',
    },
    {
      title: 'Falsifiable Attribution for Face Verification via Counterfactual Score Prediction',
      conferenceName: '',
      journalName: 'IEEE T-IFS (Submitted)',
      authors: 'Aaron W. Storey, Ajan Ahmed, Yash Sukhdeve, Masudul H. Imtiaz',
      link: 'https://github.com/astoreyai/falsifiable-attribution',
      description:
        'Perturbation-only falsification framework for XAI in face verification. Counterfactual score prediction with pre-registered thresholds, validated on 718 LFW images.',
    },
    {
      title: 'Beta Regression Framework for Bounded Biometric Performance in Child Face Recognition',
      conferenceName: '',
      journalName: 'IEEE T-BIOM (Revise & Resubmit)',
      authors: 'Aaron W. Storey, Masudul H. Imtiaz, Sumona Mondal',
      link: 'https://github.com/astoreyai/beta-regression',
      description:
        'Statistical framework maintaining valid bounds for biometric accuracy prediction. Addresses impossible predictions (>100%) from linear models.',
    },
    {
      title: 'Dual-Backbone Vision Transformers with Gaussian Uncertainty for Pediatric Facial Age Estimation',
      conferenceName: '',
      journalName: 'IEEE T-BIOM (Under Review)',
      authors: 'Aaron W. Storey, Munongedzi Mabhoko, Naveenkumar G. Venkataswamy, Masudul H. Imtiaz',
      link: '',
      description:
        'Swin + ViT ensemble with Gaussian uncertainty heads for pediatric age estimation (ages 4-16). MAE of 1.006 years with multi-seed identity-disjoint validation.',
    },
    {
      title: 'Nonparametric Template Persistence Curves for Child Face Recognition',
      conferenceName: '',
      journalName: 'IEEE T-BIOM (Submitted)',
      authors: 'Aaron W. Storey, Ajan Ahmed, Yash Sukhdeve, Masudul H. Imtiaz, Sumona Mondal',
      link: 'https://github.com/astoreyai/persistence-curve',
      description:
        'Template persistence curves with beta-GAM modeling for longitudinal child face recognition. Nonparametric approach to biometric template aging.',
    },
    {
      title: 'From Meaningful Information to Testable Explanations: AI Act/GDPR/Daubert for XAI Validation',
      conferenceName: '',
      journalName: 'IEEE T-BIOM (Submitted)',
      authors: 'Aaron W. Storey, John P. McCardle, Ajan Ahmed, Yash Sukhdeve, Masudul H. Imtiaz',
      link: 'https://github.com/astoreyai/xai-policy-standards',
      description:
        'Framework operationalizing multi-jurisdictional AI regulation (EU AI Act, GDPR, Daubert) into measurable XAI validation criteria for face verification.',
    },
    {
      title: 'NSPL: Neuro-Symbolic Prompt Logic for Secure Agentic AI',
      conferenceName: '',
      journalName: 'NeSy 2026 (Submitted)',
      authors: 'Aaron W. Storey, John P. McCardle',
      link: 'https://github.com/astoreyai/nspl',
      description:
        'Formal specification language combining neural execution with symbolic constraints for secure prompt engineering in agentic AI systems.',
    },
    {
      title: 'Face Image Quality Assessment: A Systematic Review 2018-2026',
      conferenceName: '',
      journalName: 'ACM Computing Surveys (Submitted)',
      authors: 'Aaron W. Storey, Ajan Ahmed, Masudul H. Imtiaz',
      link: 'https://github.com/astoreyai/fiqa-survey',
      description:
        'PRISMA 2020 systematic review of face image quality assessment methods, ISO 29794-5 alignment, and OFIQ evaluation (116+ references).',
    },
    {
      title: 'Affective Prompting and Persona Manipulation in Large Language Models',
      conferenceName: '',
      journalName: 'IEEE TAC (In Preparation)',
      authors: 'Aaron W. Storey, John P. McCardle, Ajan Ahmed, Yash Sukhdeve, Masudul H. Imtiaz',
      link: 'https://github.com/astoreyai/agentic',
      description:
        'PRISMA 2020 systematic review examining emotional prompting and persona-based control surfaces as attack vectors in agentic AI systems.',
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

  footer: `PhD Candidate | AI Researcher | Proposal: May 2026 | Walk: May 2027`,

  enablePWA: true,
};

export default CONFIG;
