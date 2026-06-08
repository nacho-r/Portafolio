"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Atom,
  BadgeCheck,
  Bot,
  Braces,
  BriefcaseBusiness,
  Brush,
  Bug,
  Cloud,
  Code,
  CodeXml,
  Coffee,
  Database,
  DatabaseSearch,
  DatabaseZap,
  FileDown,
  FileText,
  FlaskConical,
  Gauge,
  GitBranch,
  Languages,
  Layers,
  Mail,
  MapPin,
  MonitorSmartphone,
  MousePointerClick,
  PlugZap,
  Puzzle,
  Repeat,
  Route,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Smartphone,
  SquareKanban,
  Terminal,
  UsersRound,
  Zap,
} from "lucide-react";
import { content, type Locale } from "@/lib/content";

const navIds = ["profile", "experience", "cases", "stack", "contact"] as const;

const profileLinks = {
  linkedin: "https://www.linkedin.com/in/isaac-i-romero-r",
  github: "https://github.com/nacho-r",
  cv: "/Isaac_CV.pdf",
};

const stackIconMap: Record<string, typeof Terminal> = {
  Selenium: Bot,
  Appium: Smartphone,
  Cucumber: Puzzle,
  Playwright: MonitorSmartphone,
  Cypress: MousePointerClick,
  Python: Braces,
  Java: Coffee,
  Postman: Send,
  SoapUI: PlugZap,
  "API REST": Route,
  "REST API": Route,
  JMeter: Gauge,
  LoadRunner: Zap,
  BrowserStack: Layers,
  "Regresión": Repeat,
  Regression: Repeat,
  "Defect Management": Bug,
  React: Atom,
  "Next.js": Code,
  Flutter: Smartphone,
  Django: Server,
  HTML5: CodeXml,
  CSS3: Brush,
  Prisma: DatabaseZap,
  PostgreSQL: Database,
  SQL: DatabaseSearch,
  "Virtualización de datos": DatabaseZap,
  "Data virtualization": DatabaseZap,
  Salesforce: Cloud,
  Git: GitBranch,
  Scrum: UsersRound,
  Kanban: SquareKanban,
  "Documentación QA": FileText,
  "QA Documentation": FileText,
};

const stackBrandIconMap: Record<string, string> = {
  Selenium: "https://cdn.simpleicons.org/selenium",
  Appium: "https://cdn.simpleicons.org/appium",
  Cucumber: "https://cdn.simpleicons.org/cucumber",
  Playwright: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  Cypress: "https://cdn.simpleicons.org/cypress/FFFFFF",
  Python: "https://cdn.simpleicons.org/python",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Postman: "https://cdn.simpleicons.org/postman",
  SoapUI: "https://images.icon-icons.com/1381/SVG/soapui_93772.svg",
  JMeter: "https://cdn.simpleicons.org/apachejmeter",
  LoadRunner: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/HPE_LoadRunner_logo.png/250px-HPE_LoadRunner_logo.png",
  BrowserStack: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/browserstack/browserstack-original.svg",
  React: "https://cdn.simpleicons.org/react",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  Flutter: "https://cdn.simpleicons.org/flutter",
  Django: "https://cdn.simpleicons.org/django",
  HTML5: "https://cdn.simpleicons.org/html5",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  Prisma: "https://cdn.simpleicons.org/prisma/FFFFFF",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql",
  Salesforce: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg",
  Git: "https://cdn.simpleicons.org/git",
};

function StackChipIcon({ item }: { item: string }) {
  const [failed, setFailed] = useState(false);
  const brandIcon = stackBrandIconMap[item];
  const FallbackIcon = stackIconMap[item] ?? Code;

  if (item === "SQL") {
    return (
      <strong className="stack-sql-icon" aria-hidden="true">
        SQL
      </strong>
    );
  }

  if (brandIcon && !failed) {
    return (
      <img
        src={brandIcon}
        alt=""
        aria-hidden="true"
        className="stack-brand-icon"
        onError={() => setFailed(true)}
      />
    );
  }

  return <FallbackIcon size={15} strokeWidth={2.2} />;
}

function GitHubLogo({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.71.12 2.51.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInLogo({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("es");
  const [typedAvailability, setTypedAvailability] = useState("");
  const t = content[locale];
  const nextLocale = locale === "es" ? "en" : "es";

  const nav = useMemo(
    () => t.nav.map((label, index) => ({ label, href: `#${navIds[index]}` })),
    [t.nav],
  );

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;
    const phrase = t.hero.availability;

    const tick = () => {
      setTypedAvailability(phrase.slice(0, index));

      if (!isDeleting && index < phrase.length) {
        index += 1;
        timeout = setTimeout(tick, 45);
        return;
      }

      if (!isDeleting && index === phrase.length) {
        isDeleting = true;
        timeout = setTimeout(tick, 1500);
        return;
      }

      if (isDeleting && index > 0) {
        index -= 1;
        timeout = setTimeout(tick, 24);
        return;
      }

      isDeleting = false;
      timeout = setTimeout(tick, 520);
    };

    tick();

    return () => clearTimeout(timeout);
  }, [t.hero.availability]);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [locale]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Isaac Romero">
          <span>IR</span>
        </a>

        <nav className="nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="icon-link"
            href={profileLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInLogo size={17} />
          </a>
          <a
            className="icon-link"
            href={profileLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubLogo size={17} />
          </a>
          <a
            className="icon-link"
            href={profileLinks.cv}
            download
            aria-label="Download CV"
            title="Download CV"
          >
            <FileDown size={17} />
          </a>

          <button className="language-button" onClick={() => setLocale(nextLocale)} type="button">
            <Languages size={16} />
            {locale.toUpperCase()}
          </button>
        </div>
      </header>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">
            <MapPin size={16} />
            {t.hero.eyebrow}
          </p>
          <h1>{t.hero.title}</h1>
          <h2>{t.hero.role}</h2>
          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <a className="button primary" href="#experience">
              <BriefcaseBusiness size={18} />
              {t.hero.primaryCta}
            </a>
            <a className="button ghost" href="#contact">
              <Mail size={18} />
              {t.hero.secondaryCta}
            </a>
          </div>

          <p className="availability">
            <BadgeCheck size={18} />
            <span className="typewriter">{typedAvailability}</span>
          </p>
        </div>
      </section>

      <section className="stats-band reveal-left" aria-label="Highlights" data-reveal>
        {t.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="profile" className="section section-grid reveal-right" data-reveal>
        <div>
          <p className="section-label">01</p>
          <h2>{t.about.title}</h2>
        </div>
        <p className="large-text">{t.about.body}</p>
      </section>

      <section id="experience" className="section reveal-left" data-reveal>
        <div className="section-heading">
          <p className="section-label">02</p>
          <h2>{t.experienceTitle}</h2>
        </div>

        <div className="timeline">
          {t.experience.map((item, index) => (
            <article
              className={`timeline-item reveal-row ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              key={`experience-${index}`}
              data-reveal
              style={{ ["--reveal-delay" as never]: `${index * 120}ms` }}
            >
              <div className="timeline-meta">
                <span>{item.period}</span>
              </div>
              <div className="timeline-content">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cases" className="section section-accent reveal-right" data-reveal>
        <div className="section-heading">
          <p className="section-label">03</p>
          <h2>{t.casesTitle}</h2>
          {t.casesSubtitle ? <p>{t.casesSubtitle}</p> : null}
        </div>

        <div className="case-grid">
          {t.cases.map((item, index) => (
            <article
              className={`case-card reveal-card ${index % 2 === 0 ? "reveal-up" : "reveal-right"}`}
              key={`case-${index}`}
              data-reveal
              style={{ ["--reveal-delay" as never]: `${index * 110}ms` }}
            >
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ArrowUpRight size={20} />
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="section reveal-left" data-reveal>
        <div className="section-heading">
          <p className="section-label">04</p>
          <h2>{t.stackTitle}</h2>
        </div>

        <div className="stack-grid">
          {t.stackGroups.map((group, index) => {
            const Icon = [Terminal, ShieldCheck, Sparkles, Database][index];
            return (
              <article
                className={`stack-card reveal-card ${index % 2 === 0 ? "reveal-up" : "reveal-right"}`}
                key={`stack-${index}`}
                data-reveal
                style={{ ["--reveal-delay" as never]: `${index * 120}ms` }}
              >
                <Icon size={24} />
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <span key={item}>
                      <StackChipIcon item={item} />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="education">
          <div>
            <p className="section-label">05</p>
            <h2>{t.education.title}</h2>
          </div>
          <div>
            <strong>{t.education.degree}</strong>
            <span>{t.education.period}</span>
            <p>{t.education.certs}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-pad reveal-right" data-reveal>
        <div>
          <p className="section-label">06</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
        </div>

        <div className="contact-actions">
          <a className="contact-link" href={`mailto:${t.contact.email}`}>
            <Mail size={20} />
            {t.contact.email}
          </a>
          <a className="contact-link" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            <LinkedInLogo size={20} />
            {t.contact.linkedin}
          </a>
          <a className="contact-link" href={profileLinks.github} target="_blank" rel="noreferrer">
            <GitHubLogo size={20} />
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
