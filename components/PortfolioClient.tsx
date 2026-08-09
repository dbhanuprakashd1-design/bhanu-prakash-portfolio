 "use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Github,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Server,
  Sparkles,
  Terminal,
  X
} from "lucide-react";

const skills = [
  ["HTML5", 95], ["CSS3", 92], ["JavaScript", 90], ["jQuery", 86],
  ["Bootstrap", 90], ["Tailwind CSS", 94], ["React.js", 90], ["Next.js", 74],
  ["Node.js", 76], ["REST APIs / Postman", 86], ["Git / GitHub", 88],
  ["AWS EC2", 72], ["Vercel", 90], ["WordPress", 90], ["WordPress Server Setup", 78]
];

const experience = [
  {
    company: "Medify Health Solutions",
    role: "Frontend Developer",
    period: "Dec 2025 — Present",
    tag: "Current",
    points: [
      "Develop responsive healthcare web experiences using HTML, CSS, Bootstrap, JavaScript and jQuery.",
      "Build and improve consultation, doctor, nurse, diagnostic, surgery, cart and checkout interfaces.",
      "Implement dynamic UI behaviour, AJAX/API integrations, responsive layouts and reusable frontend components.",
      "Work across Medify Home / Medify Mart workflows, testing and production website improvements.",
      "Contribute to WordPress content, SEO, hosting/server setup and deployment-related work."
    ]
  },
  {
    company: "Medify Health Solutions",
    role: "Frontend Developer Intern",
    period: "Sep 2025 — Dec 2025",
    tag: "Internship",
    points: [
      "Worked on frontend development, AJAX-driven functionality and responsive UI improvements.",
      "Supported WordPress customization and website content implementation.",
      "Collaborated with the development team on real-world healthcare product pages and user flows."
    ]
  },
  {
    company: "Vstand4U Solutions",
    role: "Java & Python Full Stack Intern",
    period: "Earlier Experience",
    tag: "Internship",
    points: [
      "Worked on full-stack development concepts using Java and Python.",
      "Practiced frontend, backend and database workflows while building application features.",
      "Gained hands-on exposure to software development lifecycle and team-based implementation."
    ]
  }
];

const projects = [
  {
    number: "01",
    title: "BSGB Bhavani Farms",
    type: "Personal Project",
    description:
      "A responsive sheep and goat farming website designed to present the farm, breeds, services, gallery and video content with a clean modern experience.",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "Responsive UI"],
    result: "Live on Vercel",
    url: "https://bsgb-bhavani-farms.vercel.app/"
  },
  {
    number: "02",
    title: "ShopEase E-Commerce",
    type: "Personal Project",
    description:
      "A modern React e-commerce application with product browsing, cart state, checkout flow and responsive shopping interfaces.",
    stack: ["React.js", "Tailwind CSS", "Context API", "JavaScript", "Responsive UI"],
    result: "Live on Vercel",
    url: "https://shopease-self.vercel.app/"
  },
  {
    number: "03",
    title: "Medify Healthcare Platform",
    type: "Professional Project",
    description:
      "Worked on the Medify healthcare application in development, contributing to responsive UI, healthcare service flows, frontend functionality and testing across the platform.",
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"],
    result: "Professional Experience",
    url: "https://app.medifyhome.com/"
  },
  {
    number: "04",
    title: "MedifyMart",
    type: "Professional Project",
    description:
      "Worked on the MedifyMart medical equipment marketplace, including product listing interfaces, rental/sell product flows, cart-related UI and responsive improvements.",
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"],
    result: "Professional Experience",
    url: "https://app.medifyhome.com/MedifyMart"
  },
  {
    number: "05",
    title: "Medifyhome WordPress Website",
    type: "Professional Project",
    description:
      "Worked on the Medifyhome WordPress website and its content/SEO workflow, including page publishing, responsive UI updates, WordPress customization and website/server-related tasks.",
    stack: ["WordPress", "HTML5", "CSS3", "JavaScript", "SEO", "Server Setup"],
    result: "Professional Experience",
    url: "https://medifyhome.com/"
  }
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function PortfolioClient() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      }),
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const nav = ["home", "about", "skills", "experience", "projects", "contact"];

  return (
    <>
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav glass">
          <button className="logo" onClick={() => scrollToId("home")}>
            <span className="logo-mark">B</span>
            <span>BHANU<span className="accent">.</span></span>
          </button>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {nav.map((item) => (
              <button
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => {
                  scrollToId(item);
                  setOpen(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <section id="home" className="hero section">
        <div className="hero-grid" />
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-inner">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse" /> FRONTEND DEVELOPER · WEB ENGINEER</div>
            <h1>
              I build <span className="gradient-text">fast, modern</span>
              <br /> web experiences.
            </h1>
            <p className="hero-sub">
              Bhanu Prakash — a frontend developer focused on responsive interfaces,
              React/Next.js applications, SEO-friendly websites and production deployment.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollToId("projects")}>
                Explore my work <ArrowUpRight size={18} />
              </button>
              <button className="ghost-btn" onClick={() => scrollToId("contact")}>
                Let&apos;s connect <Mail size={17} />
              </button>
            </div>
            <div className="quick-stats">
              <div><strong>15+</strong><span>Technologies</span></div>
              <div><strong>1+ years</strong><span>Work experiences</span></div>
              <div><strong>2+</strong><span>Featured projects</span></div>
            </div>
          </div>

          <div className="hero-card-wrap reveal delay-2">
            <div className="floating-chip chip-one"><Code2 size={16}/> React + Next.js</div>
            <div className="floating-chip chip-two"><Globe2 size={16}/> SEO Ready</div>
            <div className="profile-card profile-photo-card">
  <div className="profile-photo-wrapper">
    <Image
      src="/profile.jpg"
      alt="Bhanu Prakash - Frontend Developer"
      width={600}
      height={600}
      priority
      className="profile-photo"
    />

    <div className="photo-glow"></div>
  </div>

  <div className="profile-info">
    <div>
      <h3>Bhanu Prakash</h3>
      <p>Frontend Developer</p>
    </div>

    <div className="status-line">
      <span></span>
      Available for opportunities
    </div>
  </div>
</div>
          </div>
        </div>
        <button className="scroll-down" onClick={() => scrollToId("about")}><ArrowDown size={17}/> Scroll to explore</button>
      </section>

      <section id="about" className="section section-dark">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-number">01 / ABOUT</span>
            <h2>More than pixels.<br /><span className="muted">I build useful products.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="lead">
                I&apos;m a Frontend Developer with experience building responsive,
user-friendly web applications using React.js, JavaScript,
HTML, CSS, Bootstrap and Tailwind CSS. I also work with
Next.js, WordPress, REST APIs, Git, GitHub, Vercel and AWS EC2.
              </p>
              <p>
                My work spans modern React interfaces, traditional JavaScript/jQuery
                applications, WordPress websites, SEO implementation, API testing and
                deployment workflows. I care about both the user experience and the
                engineering behind it.
              </p>
              <p>
                I&apos;m especially interested in building applications that are fast,
                accessible, mobile-friendly and easy for teams to maintain.
              </p>
              <button className="text-btn" onClick={() => scrollToId("experience")}>View experience <ArrowUpRight size={16}/></button>
            </div>
            <div className="about-cards reveal delay-1">
              <div className="mini-card"><MonitorSmartphone/><span><b>Responsive First</b><small>Desktop, tablet & mobile</small></span></div>
              <div className="mini-card"><Sparkles/><span><b>Modern UI</b><small>Animation without sacrificing UX</small></span></div>
              <div className="mini-card"><Server/><span><b>Deployment</b><small>Vercel, AWS EC2 & servers</small></span></div>
              <div className="mini-card"><Layers3/><span><b>Full Workflow</b><small>UI → API → CMS → deployment</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-number">02 / TOOLKIT</span>
            <h2>My technical<br /><span className="muted">toolbox.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map(([name, value], index) => (
              <div className="skill-row reveal" style={{ animationDelay: `${index * 45}ms` }} key={name}>
                <div className="skill-meta"><span>{name}</span><span>{value}%</span></div>
                <div className="skill-track"><div className="skill-fill" style={{ width: `${value}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="tech-marquee">
            <div className="marquee-track">
              {["HTML5","CSS3","JavaScript","jQuery","Bootstrap","Tailwind CSS","React.js","Next.js","Node.js","Postman","Git","GitHub","AWS EC2","Vercel","WordPress","SEO"].concat(["HTML5","CSS3","JavaScript","jQuery","Bootstrap","Tailwind CSS","React.js","Next.js","Node.js","Postman","Git","GitHub","AWS EC2","Vercel","WordPress","SEO"]).map((x, i) => (
                <span key={i}>{x}<i>✦</i></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-dark">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-number">03 / EXPERIENCE</span>
            <h2>Where I&apos;ve<br /><span className="muted">made an impact.</span></h2>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item reveal" key={`${item.company}-${index}`}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-date">{item.period}</div>
                <div className="experience-card">
                  <div className="exp-top">
                    <div>
                      <span className="tag">{item.tag}</span>
                      <h3>{item.role}</h3>
                      <h4>{item.company}</h4>
                    </div>
                    <BriefcaseBusiness size={25}/>
                  </div>
                  <ul>
                    {item.points.map((point) => <li key={point}><CheckCircle2 size={15}/>{point}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-number">04 / PROJECTS</span>
            <h2>Selected work<br /><span className="muted">built to solve problems.</span></h2>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <article className="project-card reveal" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className={`project-visual visual-${(index % 2) + 1}`}>
                  <div className="visual-window">
                    <div className="visual-bar"><i/><i/><i/></div>
                    <div className="visual-content">
                      <div className="fake-heading">{project.title}</div>
                      <div className="fake-search">{project.type}</div>
                      <div className={index % 2 === 0 ? "fake-cards" : "fake-products"}>
                        <span/><span/><span/>{index % 2 === 1 && <span/>}
                      </div>
                      <div className="fake-cart">{project.result}</div>
                    </div>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-top"><span>{project.type}</span><span>{project.result}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack">{project.stack.map((x) => <span key={x}>{x}</span>)}</div>
                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                    View live project <ArrowUpRight size={17}/>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-box reveal">
            <div className="contact-glow" />
            <span className="section-number">05 / CONTACT</span>
            <h2>Have a project<br /><span className="gradient-text">in mind?</span></h2>
            <p>Let&apos;s build something fast, useful and memorable.</p>
            <div className="contact-actions">
              <a href="dbhanuprakash.d1@gmail.com" className="primary-btn"><Mail size={18}/> Email me</a>
              <a href="https://github.com/dbhanuprakashd1-design?tab=repositories" target="_blank" rel="noreferrer" className="ghost-btn"><Github size={18}/> GitHub</a>
             <a
                href="www.linkedin.com/in/bhanu-prakash-derangula-94011532a"
                target="_blank"
                rel="noreferrer"
                className="ghost-btn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 8.99h3.57v11.46H3.56V8.99z" />
                </svg>
                LinkedIn
              </a>
            </div>
            <div className="contact-meta">
              <span><MapPin size={16}/> India</span>
              <span><Terminal size={16}/> Frontend Developer</span>
              <span><Database size={16}/> React · Next.js · Node</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Bhanu Prakash</span>
        <span>Designed & built with Next.js + Tailwind CSS</span>
        <button onClick={() => scrollToId("home")}>Back to top ↑</button>
      </footer>
    </>
  );
}
