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
          'dustgym/dustgym',
          'astoreyai/roversim',
          'astoreyai/medicaid-kg',
          'astoreyai/gestalt',
          'astoreyai/universe',
          'astoreyai/teleprompt',
          'astoreyai/claude-skills',
        ],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'ARGUS (dissertation, private repo)',
          description:
            'Active, illumination-aware, multi-positional navigation for a reconfigurable NASA IPEx lunar excavation rover. Solar heading, cast-shadow geometry, and the rover\'s own posture become navigation instruments, fused into one drift-bounded, fiducial-free SE(2) pose-graph estimator with stereo depth and 8-camera landmark triangulation. In development at proposal stage; built and tested in the dustgym lunar simulator.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png',
          link: '',
        },
        {
          title: 'dustgym',
          description:
            'Open-source conserved-physics lunar surface simulator. Godot photometric render (Hapke / Lommel-Seeliger BRDF) with grazing-sun cast shadows on real LOLA terrain, 8-camera LAC-style rig, IPEx energy and terramechanics model, mission planner, Gymnasium RL suite. Contributor (terramechanics weight-coupling, RL / scheduler / planner layers); core terramechanics authority by J. McCardle.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png',
          link: 'https://github.com/dustgym/dustgym',
        },
        {
          title: 'Lunar Navigation Scoping Review (PRISMA-ScR)',
          description:
            'Reproducible PRISMA-ScR scoping review of SLAM and autonomous navigation for lunar surface operations: 2,004 records after de-duplication, 1,161 eligible across five strands (rover navigation, SLAM/VIO, GNSS-denied localization, IPEx/RASSOR lineage, learned world models), 89 content-verified references. IEEE Access draft, in preparation.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png',
          link: '',
        },
        {
          title: 'GeoForge (image geolocation)',
          description:
            'Geospatial intelligence: image geolocation via CLIP/embedding retrieval and OSINT cue extraction, benchmarked on OSV-5M. (Private repo.)',
          imageUrl: '',
          link: '',
        },
        {
          title: 'age-est: Pediatric Facial Age Estimation',
          description:
            'Deep facial age estimation under identity-disjoint evaluation. Swin / ViT / ConvNeXt ensembles (best MAE 0.979 years), MediaPipe pupil alignment, temperature-scaled calibration, leakage-audited GroupShuffleSplit. Prior research foundation (private repo).',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Hyperface',
          description:
            'Hyperbolic-geometry face recognition (ArcFace / AdaFace / MagFace, 98%+ on LFW) with single-view FLAME 3D reconstruction. Prior research foundation (private repo).',
          imageUrl: '',
          link: '',
        },
        {
          title: 'SIFTER: NASA Space Apps 2024',
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
      ],
    },
  },
  seo: {
    title: 'Aaron W. Storey | Autonomous Navigation, Geospatial & AI Vision Researcher',
    description:
      'PhD Candidate at Clarkson University: autonomous navigation and SLAM for lunar surface robots (ARGUS, NASA IPEx lineage), geospatial intelligence and image geolocation, AI vision, and perturbation/ablation transparency testing for machine learning systems.',
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
    'SLAM',
    'Autonomous Navigation',
    'Robotics',
    'Sensor Fusion',
    'Motion Planning',
    'Pose-Graph Estimation',
    'Active Perception',
    'Geospatial Intelligence',
    'Image Geolocation',
    'Computer Vision',
    'Perturbation/Ablation Testing',
    'ML Transparency & Evaluation',
    'ROS2',
    'Gymnasium',
    'PyTorch',
    'OpenCV',
    'TensorFlow',
    'scikit-learn',
    'Python',
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
      position: 'Founder & AI Engineer',
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
      company: 'US Army',
      position: 'Communications and Information Technology',
      from: 'August 2002',
      to: 'January 2018',
      companyLink: 'https://www.army.mil',
    },
  ],
  certifications: [
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
      title: 'SLAM and Autonomous Navigation for Lunar Surface Operations: A PRISMA-ScR Scoping Review',
      conferenceName: '',
      journalName: 'IEEE Access (in preparation)',
      authors: 'Aaron W. Storey, Masudul H. Imtiaz',
      link: '',
      description:
        'Current research. Reproducible PRISMA-ScR scoping review of SLAM and autonomous navigation for lunar surface operations: 2,004 records after de-duplication, 1,161 eligible across five strands, 89 content-verified references. IEEE Access draft.',
    },
    {
      title: 'Active, Illumination-Aware, Multi-Positional Navigation for a Reconfigurable Lunar Excavation Rover',
      conferenceName: '',
      journalName: 'RA-L / IROS / Journal of Field Robotics (in preparation)',
      authors: 'Aaron W. Storey, Masudul H. Imtiaz',
      link: '',
      description:
        'Current research (dissertation system and method paper). Solar heading, cast-shadow geometry, and the rover\'s own reconfigurable posture fused into one drift-bounded, fiducial-free SE(2) pose-graph estimator for the NASA IPEx lunar excavation rover. In development at proposal stage.',
    },
    {
      title: 'Advanced Hardware Security on Embedded Processors: A 2026 Systematic Review',
      conferenceName: '',
      journalName: 'MDPI Electronics, 15(5), 1135 (2026)',
      authors: 'Ali Kia, Aaron W. Storey, Masudul H. Imtiaz',
      link: 'https://doi.org/10.3390/electronics15051135',
      description:
        'Prior research. Systematic review of PQC, PUFs, hardware roots of trust, side-channel mitigations, and TEEs for IoT/embedded systems (2020-2026).',
    },
    {
      title: 'Falsifiable Attribution for Face Verification via Counterfactual Score Prediction',
      conferenceName: '',
      journalName: 'IEEE T-IFS (Submitted)',
      authors: 'Aaron W. Storey, Ajan Ahmed, Yash Sukhdeve, Masudul H. Imtiaz',
      link: '',
      description:
        'Prior research. Perturbation-only falsification framework for XAI in face verification. Counterfactual score prediction with pre-registered thresholds, validated on 718 LFW images.',
    },
    {
      title: 'Beta Regression Framework for Bounded Biometric Performance in Child Face Recognition',
      conferenceName: '',
      journalName: 'IEEE T-BIOM (Revise & Resubmit)',
      authors: 'Aaron W. Storey, Masudul H. Imtiaz, Sumona Mondal',
      link: '',
      description:
        'Prior research. Statistical framework maintaining valid bounds for biometric accuracy prediction. Addresses impossible predictions (>100%) from linear models.',
    },
    {
      title: 'Dual-Backbone Vision Transformers with Gaussian Uncertainty for Pediatric Facial Age Estimation',
      conferenceName: '',
      journalName: 'IEEE T-BIOM (Under Review)',
      authors: 'Aaron W. Storey, Munongedzi Mabhoko, Naveenkumar G. Venkataswamy, Masudul H. Imtiaz',
      link: '',
      description:
        'Prior research. Swin + ViT ensemble with Gaussian uncertainty heads for pediatric age estimation (ages 4-16). MAE of 1.006 years with multi-seed identity-disjoint validation.',
    },
    {
      title: 'Nonparametric Template Persistence Curves for Child Face Recognition',
      conferenceName: '',
      journalName: 'IEEE T-BIOM (Submitted)',
      authors: 'Aaron W. Storey, Ajan Ahmed, Yash Sukhdeve, Masudul H. Imtiaz, Sumona Mondal',
      link: '',
      description:
        'Prior research. Template persistence curves with beta-GAM modeling for longitudinal child face recognition. Nonparametric approach to biometric template aging.',
    },
    {
      title: 'From Meaningful Information to Testable Explanations: AI Act/GDPR/Daubert for XAI Validation',
      conferenceName: '',
      journalName: 'IEEE T-BIOM (Submitted)',
      authors: 'Aaron W. Storey, John P. McCardle, Ajan Ahmed, Yash Sukhdeve, Masudul H. Imtiaz',
      link: '',
      description:
        'Prior research. Framework operationalizing multi-jurisdictional AI regulation (EU AI Act, GDPR, Daubert) into measurable XAI validation criteria for face verification.',
    },
    {
      title: 'NSPL: Neuro-Symbolic Prompt Logic for Secure Agentic AI',
      conferenceName: '',
      journalName: 'NeSy 2026 (Submitted)',
      authors: 'Aaron W. Storey, John P. McCardle',
      link: '',
      description:
        'Prior research. Formal specification language combining neural execution with symbolic constraints for secure prompt engineering in agentic AI systems.',
    },
    {
      title: 'Face Image Quality Assessment: A Systematic Review 2018-2026',
      conferenceName: '',
      journalName: 'ACM Computing Surveys (Submitted)',
      authors: 'Aaron W. Storey, Ajan Ahmed, Masudul H. Imtiaz',
      link: '',
      description:
        'Prior research. PRISMA 2020 systematic review of face image quality assessment methods, ISO 29794-5 alignment, and OFIQ evaluation (116+ references).',
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

  footer: `PhD Candidate | Autonomous Navigation & Lunar Surface Autonomy | Geospatial & AI Vision | Transparency Testing | Walk: May 2027`,

  enablePWA: true,
};

export default CONFIG;
