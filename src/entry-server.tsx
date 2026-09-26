/* eslint-disable react-refresh/only-export-components -- Build-time server rendering; no browser refresh boundary. */
import { renderToStaticMarkup } from 'react-dom/server';
import {
  appointments,
  currentResearch,
  education,
  methods,
  profile,
  projects,
  publications,
} from './content';
import type { ReactNode } from 'react';

export const pages = [
  {
    id: 'home',
    path: '/',
    title: 'Overview',
    description:
      'Aaron W. Storey is an AI research engineer and PhD candidate working on trustworthy AI evaluation, model selection for language-based decisions, and responsible AI.',
  },
  {
    id: 'research',
    path: '/research/',
    title: 'Research & Software',
    description:
      'Doctoral research in progress on evaluating and selecting language classifiers for specific decisions, and research software by Aaron W. Storey: multi-agent systems, verification, biometrics, lunar terrain, and scientific data systems.',
  },
  {
    id: 'publications',
    path: '/publications/',
    title: 'Publications',
    description:
      'Publications by Aaron W. Storey on biometric evaluation, embedded hardware security, edge AI, and face recognition.',
  },
  {
    id: 'experience',
    path: '/experience/',
    title: 'Experience',
    description:
      'AI research engineering appointments, education, teaching, and earlier Army assignments of Aaron W. Storey.',
  },
  {
    id: 'cv',
    path: '/cv/',
    title: 'CV & Contact',
    description:
      'Download Aaron W. Storey’s academic CV and AI research engineer resume, and get in touch about research or engineering opportunities.',
  },
];

function DocumentLinks() {
  return (
    <div className="actions">
      <a className="button" href={profile.resume}>
        View resume <span>PDF, 2 pages</span>
      </a>
      <a className="button secondary" href={profile.cv}>
        Academic CV <span>PDF, 5 pages</span>
      </a>
    </div>
  );
}

function PageHeading({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="page-heading">
      <h1>{title}</h1>
      <p className="lead">{children}</p>
    </header>
  );
}

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="role">
            {profile.identity.split(' | ').map((part, index, parts) => (
              <span key={part}>
                <span className="role-part">
                  {index < parts.length - 1 ? `${part}\u00a0|` : part}
                </span>{' '}
              </span>
            ))}
          </p>
          <h1 id="intro-title">
            AI evaluation and
            <br />
            research software.
          </h1>
          <p className="lead">
            I’m Aaron Storey. My research focus is{' '}
            {profile.focus.charAt(0).toLowerCase() + profile.focus.slice(1)}
          </p>
          <p>
            This is{' '}
            <a href="/research/#current-research">
              doctoral research in progress
            </a>
            , advised by Dr. Jeanna Matthews at Clarkson University. I also
            build research software for agent collaboration, verification
            workflows, and scientific data, with earlier applications in
            biometric measurement, computer vision, and autonomous navigation.
          </p>
          <DocumentLinks />
          <p className="hero-context">
            PhD Candidate, Clarkson University
            <br />
            Independent AI Research Engineer, Kymera Systems LLC
          </p>
        </div>
        <aside className="portrait-panel">
          <img
            src="/aaron-storey.jpg"
            width="460"
            height="460"
            alt="Aaron Storey"
            fetchPriority="high"
          />
          <div className="portrait-caption">
            <strong>Research interests</strong>
            <span>{profile.interests}</span>
          </div>
        </aside>
      </section>
      <section className="section" aria-labelledby="selected-work">
        <div className="section-heading">
          <div>
            <h2 id="selected-work">Selected work</h2>
            <p>
              Tools for agent collaboration, biometric evaluation, and knowledge
              management.
            </p>
          </div>
          <a href="/research/">All research &amp; software</a>
        </div>
        <div className="selected-grid">
          {projects.slice(0, 3).map((project) => (
            <article className="selected-project" key={project.id}>
              <p className="meta">{project.area}</p>
              <h3>
                <a href={`/research/#${project.id}`}>{project.name}</a>
              </h3>
              <p>{project.summary}</p>
              <span className="language">{project.language}</span>
            </article>
          ))}
        </div>
      </section>
      <section
        className="section split-section"
        aria-labelledby="research-record"
      >
        <div>
          <h2 id="research-record">Selected publications</h2>
          <p>
            First author on three accepted conference papers and coauthor of a
            published systematic review. My selected work spans biometric
            evidence, embedded hardware security, and edge AI.
          </p>
          <a href="/publications/">Read the publication record</a>
        </div>
        <div className="feature-paper">
          <p className="meta">Published in Electronics · 2026</p>
          <h3>
            <a href={publications[0].url}>{publications[0].title}</a>
          </h3>
          <p>{publications[0].authors}</p>
        </div>
      </section>
      <section className="contact-strip" aria-labelledby="home-contact">
        <div>
          <h2 id="home-contact">Research &amp; collaboration</h2>
          <p>
            Research collaboration and AI research engineering opportunities.
          </p>
        </div>
        <a className="button" href={`mailto:${profile.email}`}>
          Get in touch
        </a>
      </section>
    </>
  );
}

function Research() {
  return (
    <>
      <PageHeading title="Research & software">
        My doctoral research concerns when a language classifier is adequate for
        a specific decision. I also build research software for agentic systems,
        verification, and scientific data.
      </PageHeading>
      <section
        className="note-panel current-research"
        id="current-research"
        aria-labelledby="current-research-title"
      >
        <div>
          <p className="status">{currentResearch.status}</p>
          <h2 id="current-research-title">Current doctoral research</h2>
          <p>{currentResearch.advisor}</p>
          <p>{currentResearch.affiliation}</p>
        </div>
        <div>
          <p>{currentResearch.summary}</p>
          <p>{currentResearch.detail}</p>
          <h3>Methods and tools</h3>
          <dl className="details">
            {methods.map((group) => (
              <div key={group.area}>
                <dt>{group.area}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="research-directions" aria-labelledby="directions">
        <h2 id="directions">Research interests</h2>
        <div className="three-columns">
          <div>
            <h3>Evaluation & model selection</h3>
            <p>
              Model evaluation and selection, uncertainty quantification and
              calibration, and NLP classification.
            </p>
          </div>
          <div>
            <h3>Decision support & responsible AI</h3>
            <p>
              Human-in-the-loop decision support, selective prediction and
              deferral to human reviewers, and responsible AI.
            </p>
          </div>
          <div>
            <h3>Agentic systems & verification</h3>
            <p>
              Model orchestration, structured tool use, persistent state, agent
              memory, and verification workflows.
            </p>
          </div>
        </div>
        <p className="record-note">
          Earlier research applications include biometric measurement, computer
          vision, sensor fusion, and GNSS-denied autonomous navigation.
        </p>
      </section>
      <section className="section" aria-labelledby="software">
        <div className="section-heading">
          <div>
            <h2 id="software">Research software</h2>
            <p>Source code, documentation, and evaluation workflows.</p>
          </div>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" id={project.id} key={project.id}>
              <div>
                <p className="meta">{project.area}</p>
                <h3>{project.name}</h3>
                <span className="language">{project.language}</span>
              </div>
              <div>
                <p className="project-summary">{project.summary}</p>
                <p>{project.description}</p>
                <div className="text-links">
                  <a href={project.url}>View {project.name} on GitHub</a>
                  {project.archive && (
                    <a href={project.archive}>Software archive DOI</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="note-panel" aria-labelledby="in-development">
        <div>
          <p className="status">Design stage</p>
          <h2 id="in-development">OpenFIQA Studio</h2>
        </div>
        <div>
          <p>
            A scientific IDE for biometric quality, verification research,
            controlled degradation experiments, and publication-artifact
            generation. The public work currently comprises product
            architecture, scientific schemas, and decision records.
          </p>
          <a href="https://github.com/astoreyai/openfiqa-studio">
            Read the architecture and design records
          </a>
        </div>
      </section>
    </>
  );
}

function Publications() {
  return (
    <>
      <PageHeading title="Publications">
        Selected work on biometric evidence, embedded hardware security, edge
        AI, and face recognition.
      </PageHeading>
      <p className="record-note">
        Publication record updated September 8, 2026.
      </p>
      {['Published', 'Accepted'].map((status) => (
        <section
          className="section publication-section"
          key={status}
          aria-labelledby={status.toLowerCase()}
        >
          <h2 id={status.toLowerCase()}>{status}</h2>
          {publications
            .filter((paper) => paper.status === status)
            .map((paper) => (
              <article className="publication" key={paper.title}>
                <div className="publication-year">{paper.year}</div>
                <div>
                  <p className="meta">{paper.venue}</p>
                  <h3>
                    {paper.url ? (
                      <a href={paper.url}>{paper.title}</a>
                    ) : (
                      paper.title
                    )}
                  </h3>
                  <p>{paper.authors}</p>
                  <p className="publication-detail">{paper.detail}</p>
                  {paper.url && (
                    <a href={paper.url}>Read the published paper</a>
                  )}
                </div>
              </article>
            ))}
        </section>
      ))}
      <div className="note-panel">
        <h2>Full academic record</h2>
        <div>
          <p>
            The academic CV includes research appointments, software, teaching,
            invited talks, service, and research support.
          </p>
          <div className="text-links">
            <a href={profile.cv}>View academic CV (PDF)</a>
            <a href={profile.orcid}>ORCID</a>
            <a href={profile.scholar}>Google Scholar</a>
          </div>
        </div>
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <PageHeading title="Experience">
        Research appointments, education, teaching, and earlier technical and
        operational experience.
      </PageHeading>
      <section className="section first-section" aria-labelledby="appointments">
        <h2 id="appointments">Research & engineering</h2>
        <div className="timeline">
          {appointments.map((job) => (
            <article className="timeline-row" key={job.organization}>
              <p className="meta">{job.dates}</p>
              <div>
                <h3>{job.role}</h3>
                <p className="organization">{job.organization}</p>
                <p>{job.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="education">
        <h2 id="education">Education</h2>
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-row" key={item.school}>
              <p className="meta">{item.dates}</p>
              <div>
                <h3>{item.degree}</h3>
                <p className="organization">{item.school}</p>
                {item.detail && <p>{item.detail}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="teaching">
        <h2 id="teaching">Teaching & invited talks</h2>
        <div className="two-columns">
          <article>
            <h3>Advanced Biometrics</h3>
            <p className="meta">Clarkson University · Summer 2025</p>
            <p>
              Developed graduate-level materials and delivered nine guest
              lectures for EE622, covering advanced biometric systems and
              Transformer architectures across biometric modalities.
            </p>
          </article>
          <article>
            <h3>100 Days of Machine Learning</h3>
            <p className="meta">Co-creator & contributor · 2023 to 2024</p>
            <p>
              A free, 35-lesson curriculum from Python foundations through
              applied machine learning and XGBoost, with instructional notebooks
              and supporting materials.
            </p>
            <a href="https://100daysofml.github.io/">Explore the curriculum</a>
          </article>
        </div>
        <div className="talk-list">
          <article>
            <h3>Behavioral Control Surfaces in Large Language Models</h3>
            <p>Invited seminar, Clarkson University, January 22, 2026.</p>
          </article>
          <article>
            <h3>
              Navigating Worlds Without GPS: Off-World Autonomous Navigation
            </h3>
            <p>
              Three-session public research seminar series, Clarkson University,
              June 18, June 25, and July 2, 2026.
            </p>
          </article>
        </div>
      </section>
      <section className="section split-section" aria-labelledby="earlier">
        <div>
          <h2 id="earlier">Earlier technical career</h2>
          <h3>United States Army</h3>
          <p className="meta">August 2002 to January 2018 · 15 years</p>
          <p>
            Medical operations, personnel leadership, technical training,
            information management, and deployed communications, including
            deployments to Iraq and Afghanistan.
          </p>
          <p>
            <strong>Data and Operations Analyst</strong>, September 2015 to
            January 2018. Army assignment at the Defense Health Agency,
            supporting operational analysis, information management, and data
            integrity.
          </p>
          <p>
            <strong>Educational Technology Specialist</strong>, July 2013 to
            September 2015. Army assignment at the Defense Health Agency,
            developing medical training, simulation, and instructional systems.
          </p>
          <p>
            <strong>Signal Plans and Operations</strong>, Kabul, 2012 to 2013.
            Army responsibilities included technical advising, fiber-network
            work, and deployed communications.
          </p>
          <h3>Career transition</h3>
          <p className="meta">January 2018 to July 2023</p>
          <p>
            Personal responsibilities and self-directed technical study
            preceding graduate education in artificial intelligence.
          </p>
        </div>
        <div>
          <h2>Service & credentials</h2>
          <dl className="details">
            <dt>Peer review</dt>
            <dd>Reviewer, IEEE AIBThings 2026</dd>
            <dt>Professional affiliation</dt>
            <dd>IEEE Member, since 2024</dd>
            <dt>Technical training</dt>
            <dd>CompTIA Security+ (earned during military service)</dd>
          </dl>
        </div>
      </section>
      <section className="note-panel" aria-labelledby="support">
        <h2 id="support">Research support</h2>
        <div>
          <p>
            My graduate research in biometrics at CITeR was supported by DHS
            Science and Technology.
          </p>
          <a href={profile.cv}>Details in the academic CV (PDF)</a>
        </div>
      </section>
    </>
  );
}

function CV() {
  return (
    <>
      <PageHeading title="CV & contact">
        Download my resume or academic CV, or get in touch about research and
        engineering opportunities.
      </PageHeading>
      <div className="document-grid">
        <article className="document">
          <p className="meta">AI research engineering · 2 pages</p>
          <h2>Resume</h2>
          <p>
            A concise account of current research, technical skills, selected
            software, publications, and earlier operational experience.
          </p>
          <a className="button" href={profile.resume}>
            View resume (PDF)
          </a>
          <a className="download" href={profile.resume} download>
            Download resume
          </a>
        </article>
        <article className="document">
          <p className="meta">Academic record · 5 pages</p>
          <h2>Curriculum vitae</h2>
          <p>
            The full record of education, publications, appointments, research
            software, teaching, talks, service, and research support.
          </p>
          <a className="button secondary" href={profile.cv}>
            View academic CV (PDF)
          </a>
          <a className="download" href={profile.cv} download>
            Download academic CV
          </a>
        </article>
      </div>
      <p className="record-note">Updated {profile.updated}.</p>
      <section className="section contact-layout" aria-labelledby="contact">
        <div>
          <h2 id="contact">Get in touch</h2>
          <p>
            For research collaboration and AI research engineering
            opportunities, email me with a brief description of the work.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <p>{profile.location}</p>
        </div>
        <div>
          <h2>Find my work</h2>
          <ul className="profile-links">
            <li>
              <a href={profile.github}>GitHub</a>
              <span>Research software and source code</span>
            </li>
            <li>
              <a href={profile.linkedin}>LinkedIn</a>
              <span>Professional profile</span>
            </li>
            <li>
              <a href={profile.orcid}>ORCID</a>
              <span>0009-0009-5560-0015</span>
            </li>
            <li>
              <a href={profile.scholar}>Google Scholar</a>
              <span>Publication profile</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

const content: Record<string, () => ReactNode> = {
  home: Home,
  research: Research,
  publications: Publications,
  experience: Experience,
  cv: CV,
};

export function render(pageId: string) {
  const page = pages.find((item) => item.id === pageId);
  if (!page) throw new Error(`Unknown page: ${pageId}`);
  const Body = content[page.id];
  const title =
    page.id === 'home'
      ? `${profile.name} | ${profile.title}`
      : `${page.title} | ${profile.name}`;
  const url = `https://astoreyai.github.io${page.path}`;
  return (
    '<!doctype html>' +
    renderToStaticMarkup(
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <meta name="description" content={page.description} />
          <link rel="canonical" href={url} />
          <meta name="theme-color" content="#254d78" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={page.description} />
          <meta property="og:url" content={url} />
          <meta
            property="og:image"
            content="https://astoreyai.github.io/aaron-storey.jpg"
          />
          <meta property="og:image:alt" content="Aaron Storey" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={page.description} />
          <meta
            name="twitter:image"
            content="https://astoreyai.github.io/aaron-storey.jpg"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="stylesheet" href="/portfolio.css" />
        </head>
        <body>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <header className="site-header">
            <div className="header-inner">
              <a className="brand" href="/" aria-label="Aaron W. Storey, home">
                <span className="monogram" aria-hidden="true">
                  AS
                </span>
                <span>Aaron W. Storey</span>
              </a>
              <nav aria-label="Main navigation">
                {pages.map((item) => (
                  <a
                    key={item.id}
                    href={item.path}
                    aria-current={item.id === page.id ? 'page' : undefined}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </header>
          <main id="main" tabIndex={-1} className={`container page-${page.id}`}>
            <Body />
          </main>
          <footer className="site-footer">
            <div className="footer-inner">
              <div>
                <strong>{profile.name}</strong>
                <p>
                  {profile.title}
                  <br />
                  {profile.location}
                </p>
              </div>
              <div className="footer-links">
                <a href={`mailto:${profile.email}`}>Email</a>
                <a href={profile.github}>GitHub</a>
                <a href={profile.linkedin}>LinkedIn</a>
                <a href={profile.orcid}>ORCID</a>
              </div>
              <p className="updated">Updated {profile.updated}</p>
            </div>
          </footer>
        </body>
      </html>,
    )
  );
}
