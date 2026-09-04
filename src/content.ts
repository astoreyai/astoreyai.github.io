// Public content transcribed from the reviewed September 4, 2026 CV and resume.
// Keep private career records and unselected manuscripts outside this repository.
export const profile = {
  name: 'Aaron W. Storey',
  title: 'AI Research Engineer',
  focus: 'Trustworthy agentic systems and verification engineering',
  email: 'storeyaw@clarkson.edu',
  location: 'San Antonio, Texas',
  github: 'https://github.com/astoreyai',
  linkedin: 'https://www.linkedin.com/in/astoreyai/',
  orcid: 'https://orcid.org/0009-0009-5560-0015',
  scholar: 'https://scholar.google.com/citations?user=NIFsdDIAAAAJ',
  updated: 'September 4, 2026',
  cv: '/documents/Aaron_W_Storey_CV.pdf',
  resume: '/documents/Aaron_W_Storey_Resume.pdf',
};

export const projects = [
  {
    id: 'circle',
    name: 'circle',
    area: 'Agent collaboration',
    language: 'Go',
    url: 'https://github.com/astoreyai/circle',
    summary:
      'Shared memory and review workflows for research teams and AI assistants.',
    description:
      'GitHub-native collaboration with a built-in knowledge graph and 22 MCP tools. Tracks artifacts, review gates, context packs, and distributed tasks using git as the shared substrate.',
  },
  {
    id: 'ofiqpy',
    name: 'ofiqpy',
    area: 'Biometric measurement',
    language: 'Python',
    url: 'https://github.com/AVHBAC/ofiqpy',
    summary:
      'Face-image-quality measurement with a reference comparison workflow.',
    description:
      'Python implementation of the fixed BSI OFIQ v1.1.0 profile: 27 quality components plus the unified quality score. Includes configuration and model integrity checks and a live C++ comparison workflow.',
  },
  {
    id: 'okf-tools',
    name: 'okf-tools',
    area: 'Knowledge integrity',
    language: 'Python',
    url: 'https://github.com/astoreyai/okf-tools',
    summary:
      'Validation that checks what a knowledge bundle means, as well as its format.',
    description:
      'Tools to validate, lint, migrate, and index Open Knowledge Format bundles. Detects broken relationships and silent semantic failures that basic conformance checks do not reject.',
  },
  {
    id: 'lunar-terrain-sidecar',
    name: 'lunar-terrain-sidecar',
    area: 'Autonomous systems',
    language: 'TypeScript / Godot',
    url: 'https://github.com/astoreyai/lunar-terrain-sidecar',
    summary:
      'Lunar terrain authoring grounded in real south-polar terrain products.',
    description:
      'Terrain generation, authoring, and preprocessing for Godot robotics simulation. Uses LOLA/PGDA terrain products, ephemeris-derived illumination, explicit provenance, automated validation, and CI.',
    archive: 'https://doi.org/10.5281/zenodo.22014046',
  },
  {
    id: 'swinvit-face-verification',
    name: 'swinvit-face-verification',
    area: 'Computer vision',
    language: 'Python / Jupyter',
    url: 'https://github.com/astoreyai/swinvit-face-verification',
    summary: 'A common evaluation interface for SwinFace and ArcFace encoders.',
    description:
      'Reproducible face verification over public benchmark data, with documented provisioning, integrity checks, metrics, limitations, and optional mixed-effects analysis.',
  },
  {
    id: 'medicaid-kg',
    name: 'medicaid-kg',
    area: 'Scientific data systems',
    language: 'Python / TypeScript',
    url: 'https://github.com/astoreyai/medicaid-kg',
    summary:
      'Knowledge-graph and geospatial exploration of Medicaid provider spending.',
    description:
      'An exploration system for a 227-million-row HHS T-MSIS dataset. Combines DuckDB, NetworkX, FastAPI, React, MapLibre/deck.gl, and agent-assisted querying.',
  },
];

export const publications = [
  {
    title:
      'Advanced Hardware Security on Embedded Processors: A 2026 Systematic Review',
    authors: 'Ali Kia, Aaron W. Storey, Masudul H. Imtiaz',
    venue: 'Electronics, 15(5), 1135',
    year: '2026',
    status: 'Published',
    url: 'https://doi.org/10.3390/electronics15051135',
    detail: 'Published March 9, 2026.',
  },
  {
    title: 'A Three-Channel Audit of the Biometric Evidence Chain',
    authors: 'Aaron W. Storey, Masudul H. Imtiaz',
    venue: 'IEEE AIBThings 2026',
    year: '2026',
    status: 'Accepted',
    detail: 'Accepted; publication forthcoming.',
  },
  {
    title: 'LLM on the Edge: A 2026 Perspective',
    authors: 'Aaron W. Storey, Ali Kia, Masudul H. Imtiaz',
    venue: 'IEEE AIBThings 2026',
    year: '2026',
    status: 'Accepted',
    detail: 'Accepted; publication forthcoming.',
  },
  {
    title:
      'Nonparametric Template Persistence Curves for Child Face Recognition via Beta Generalized Additive Models',
    authors:
      'Aaron W. Storey, Ajan Ahmed, Yash Sukhdeve, Masudul H. Imtiaz, Sumona Mondal',
    venue: 'IEEE UEMCON 2026',
    year: '2026',
    status: 'Accepted',
    detail: 'Accepted.',
  },
];

export const appointments = [
  {
    dates: 'June 2026 to present',
    role: 'Graduate Research Assistant, Autonomous Systems and AI',
    organization: 'Clarkson University, AVHBAC Laboratory',
    detail:
      'Develop simulation and evaluation workflows for GNSS-denied navigation, state estimation, sensor fusion, and lunar surface perception. Investigate visual odometry, pose-graph optimization, and terrain-referenced localization. Released ofiqpy on PyPI under AVHBAC.',
  },
  {
    dates: 'August 2025 to present',
    role: 'Independent AI Research Engineer',
    organization: 'Kymera Systems LLC',
    detail:
      'Develop agentic and multi-agent research prototypes combining heterogeneous models, structured tool use, and evaluation workflows. Build verification workflows, experimental agent-memory systems, and open-source research tools as an individual contributor.',
  },
  {
    dates: 'June 2025 to May 2026',
    role: 'Graduate Research Assistant, Trustworthy AI and Biometrics',
    organization: 'Clarkson University, CITeR',
    detail:
      'Conducted face-image-quality and biometric evaluation research involving attribution faithfulness, calibration, uncertainty, and data quality. Built reproducible Python workflows for counterfactual analysis, perturbation testing, and standards-oriented measurement.',
  },
];

export const education = [
  {
    dates: '2025 to present',
    degree: 'PhD Candidate, Computer Science',
    school: 'Clarkson University',
    detail: 'Advisor: Masudul H. Imtiaz.',
  },
  {
    dates: '2023 to 2024',
    degree: 'MS, Artificial Intelligence',
    school: 'Maryville University of Saint Louis',
    detail: 'Conferred December 2024.',
  },
  {
    dates: '2017',
    degree: 'BS, Information Technology',
    school: 'American Military University',
    detail: '',
  },
];
