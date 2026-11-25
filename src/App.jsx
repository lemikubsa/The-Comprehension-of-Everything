import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import authorPhoto from "./assets/author.png";

/* ==========================================================================
   SITE CONFIG
   ========================================================================== */
const AUTHOR_NAME = "Lemi Kubsa";
const EMAIL = "lemikubsa11@gmail.com";
const FORMSPREE_ID = "mqpqnwjp";

const SOCIALS = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@TheComprehensionofEverything",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "GitHub",
    href: "https://github.com/lemikubsa",
    evenodd: true,
    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thecomprehensionofeverything",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "articles", label: "Articles" },
  { id: "contact", label: "Contact" },
];

const THEMES = [
  { key: "dark", label: "Scholar Dark", dot: "bg-[#090c12] border-gold-500/60" },
  { key: "sepia", label: "Warm Sepia", dot: "bg-[#2b231b] border-amber-400/60" },
  { key: "light", label: "Parchment Light", dot: "bg-[#f7f4ee] border-stone-400" },
];

/* ==========================================================================
   1. CONTENT REPOSITORY.
   ========================================================================== */
const ARTICLES_DATA = [
  {
    id: "universal-grammar-of-programming",
    title: "The Universal Grammar Beneath Programming Languages",
    domain: "Computation",
    date: "November 2026",
    readTime: "7 min read",
    summary: "Why understanding state, abstraction, and control flow matters far more than memorizing the syntax of any single language.",
    body: `
      <p>To the newcomer, the landscape of computer science appears fragmented into hundreds of competing programming languages—each with its own punctuation, keywords, and tribal conventions. Yet beneath this surface diversity lies a remarkably small set of universal concepts.</p>
      <blockquote>"Syntax is merely the clothing of computation; data structures and state transitions are its anatomy."</blockquote>
      <h2>1. Memory, State, and Representation</h2>
      <p>Every program, regardless of whether it is written in C, Python, or JavaScript, performs the exact same fundamental task: it holds structured representations of reality in memory and transforms them over time according to explicit rules.</p>
      <h2>2. Abstraction as Cognitive Leverage</h2>
      <p>Human working memory is finite. Programming languages exist primarily to help human minds manage complexity by grouping low-level operations into named, predictable abstractions—functions, modules, and interfaces.</p>
      <p>When an engineer grasps these invariant foundations, picking up a new language becomes a matter of translation rather than reinvention.</p>
    `,
  },
  {
    id: "epistemology-of-first-principles",
    title: "First Principles and the Architecture of Clear Thinking",
    domain: "Epistemology",
    date: "November 2026",
    readTime: "6 min read",
    summary: "Deconstructing inherited assumptions down to foundational truths so we can reason independently in an era of noise.",
    body: `
      <p>Most human reasoning operates by analogy: we look at what others are doing and make slight variations. While analogy is efficient for routine tasks, it fails catastrophically when solving novel problems or evaluating complex truths.</p>
      <h2>Boil Things Down to Fundamental Axioms</h2>
      <p>The first principle is the first basis from which a thing is known. To reason from first principles is to interrogate every assumption until only irreducible facts remain, and then reconstruct understanding upward from that bedrock.</p>
      <blockquote>"He who understands principles can successfully select his own methods; he who tries methods, ignoring principles, is sure to have trouble." <br /> - Harrington Emerson</blockquote>
      <p>Whether designing software architecture or forming a worldview, clarity begins at the foundation.</p>
    `,
  },
  {
    id: "systems-and-emergence",
    title: "Emergence: How Simple Rules Generate Complex Worlds",
    domain: "Systems Theory",
    date: "November 2026",
    readTime: "8 min read",
    summary: "Exploring how local interactions among simple components give rise to intelligence, ecosystems, and resilient institutions.",
    body: `
      <p>Across nature and technology, the most sophisticated phenomena rarely arise from centralized micromanagement. Instead, they emerge from simple local rules repeated across networks of interacting nodes.</p>
      <h2>Feedback Loops and Stability</h2>
      <p>Every enduring system balances two forces: reinforcing loops that drive growth and adaptation, and balancing loops that prevent runaway instability. Understanding these feedback structures allows us to see why well-intentioned interventions sometimes produce unintended consequences.</p>
      <p>By studying systems holistically, we learn to design architectures—both human and computational—that remain resilient under stress.</p>
    `,
  },
  {
    id: "stoic-clarity-digital-age",
    title: "The Inner Citadel in an Age of Perpetual Distraction",
    domain: "Philosophy",
    date: "November 2026",
    readTime: "5 min read",
    summary: "Applying classical Stoic discipline to protect attention, cultivate deep comprehension, and act with deliberate purpose.",
    body: `
      <p>Attention is the rarest resource of the modern world. Every notification and algorithmic feed competes to fragment human focus into shallow, reactive intervals.</p>
      <h2>Guarding the Gate of Assent</h2>
      <p>Epictetus observed that we are disturbed not by events themselves, but by the judgments we form about them. In the same way, deep comprehension requires deliberate stillness—stepping back from immediate reaction to examine ideas with patience and rigor.</p>
    `,
  },
];

/* ==========================================================================
   2. CONCEPT NEXUS DATA
   ========================================================================== */

const NEXUS_NODES = [
  // CENTRAL PRINCIPLE
  {
    id: "unity",
    label: "Unity",
    domain: "All",
    desc: "The unity of knowledge: the understanding that every discipline, despite its distinct methods and subject matter, contributes to one interconnected intellectual whole.",
    x: 0.50, y: 0.48, r: 36
  },

  // EXISTING DISCIPLINES
  {
    id: "epistemology",
    label: "Epistemology",
    domain: "Epistemology",
    desc: "The philosophical study of knowledge, its origins, justification, limitations, and the conditions under which beliefs can be considered true.",
    x: 0.50, y: 0.16, r: 28
  },
  {
    id: "computation",
    label: "Computation",
    domain: "Computation",
    desc: "The study of information processing, algorithms, abstraction, programming languages, and the logical structures underlying computational systems.",
    x: 0.70, y: 0.21, r: 30
  },
  {
    id: "systems",
    label: "Systems Theory",
    domain: "Systems Theory",
    desc: "The study of interconnected components, feedback mechanisms, emergence, and the principles through which complex systems behave.",
    x: 0.83, y: 0.35, r: 29
  },
  {
    id: "philosophy",
    label: "Philosophy",
    domain: "Philosophy",
    desc: "The systematic examination of existence, reality, ethics, reason, consciousness, and the fundamental questions of human understanding.",
    x: 0.86, y: 0.53, r: 28
  },

  // NEW DISCIPLINES
  {
    id: "psychology",
    label: "Psychology",
    domain: "Psychology",
    desc: "The scientific study of the mind and behavior, examining cognition, emotion, perception, personality, development, and human experience.",
    x: 0.77, y: 0.69, r: 28
  },
  {
    id: "religious-studies",
    label: "Religious Studies",
    domain: "Religious Studies",
    desc: "The comparative and critical study of religious traditions, beliefs, practices, sacred texts, institutions, and their influence on human civilizations.",
    x: 0.60, y: 0.79, r: 29
  },
  {
    id: "arts",
    label: "Arts",
    domain: "Arts",
    desc: "The exploration of human creativity and expression through visual, performing, and other artistic forms, reflecting imagination, culture, and experience.",
    x: 0.40, y: 0.79, r: 25
  },
  {
    id: "mathematics",
    label: "Mathematics",
    domain: "Mathematics",
    desc: "The abstract study of quantity, structure, space, patterns, and change, providing rigorous foundations for reasoning and the description of reality.",
    x: 0.23, y: 0.69, r: 29
  },
  {
    id: "science",
    label: "Science",
    domain: "Science",
    desc: "The systematic investigation of the natural and physical world through observation, experimentation, evidence, and the formulation of explanatory theories.",
    x: 0.14, y: 0.53, r: 26
  },
  {
    id: "literature",
    label: "Literature",
    domain: "Literature",
    desc: "The study and creation of written expression, narrative, language, and ideas through which human experiences, cultures, and intellectual traditions are explored.",
    x: 0.17, y: 0.35, r: 27
  },
  {
    id: "economics",
    label: "Economics",
    domain: "Economics",
    desc: "The study of how individuals and societies allocate scarce resources, make decisions, organize production, and distribute wealth.",
    x: 0.30, y: 0.21, r: 27
  }
];



const NEXUS_EDGES = [
  // Every discipline connects to the central principle
  ["unity", "epistemology"],
  ["unity", "computation"],
  ["unity", "systems"],
  ["unity", "philosophy"],
  ["unity", "psychology"],
  ["unity", "religious-studies"],
  ["unity", "arts"],
  ["unity", "mathematics"],
  ["unity", "science"],
  ["unity", "literature"],
  ["unity", "economics"],

  // Relationships among disciplines
  ["epistemology", "philosophy"],
  ["epistemology", "science"],
  ["epistemology", "mathematics"],

  ["computation", "mathematics"],
  ["computation", "systems"],
  ["computation", "science"],

  ["systems", "science"],
  ["systems", "economics"],

  ["philosophy", "psychology"],
  ["philosophy", "religious-studies"],
  ["philosophy", "literature"],

  ["psychology", "science"],
  ["psychology", "arts"],

  ["religious-studies", "literature"],
  ["religious-studies", "arts"],

  ["arts", "literature"],

  ["mathematics", "science"],
  ["mathematics", "economics"],

  ["science", "economics"],
  ["literature", "economics"]
];


/* ==========================================================================
   SMALL SHARED PIECES
   ========================================================================== */
function SocialIcon({ social, className = "w-5 h-5" }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule={social.evenodd ? "evenodd" : undefined} clipRule={social.evenodd ? "evenodd" : undefined} d={social.path} />
    </svg>
  );
}

function ArticleCard({ article, onOpen }) {
  return (
    <article
      onClick={() => onOpen(article)}
      className="athenaeum-glass rounded-2xl p-6 flex flex-col justify-between hover:border-gold-400 transition-all duration-300 cursor-pointer group"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between font-sans text-[11px]">
          <span className="uppercase tracking-widest font-semibold text-theme-gold">{article.domain}</span>
          <span className="text-theme-secondary">{article.readTime}</span>
        </div>
        <h3 className="font-display text-xl font-bold text-theme-primary group-hover:text-theme-gold-bright transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-sm text-theme-secondary leading-relaxed line-clamp-3">{article.summary}</p>
      </div>
      <div className="pt-4 mt-5 border-t border-theme flex items-center justify-between font-sans text-xs">
        <span className="text-theme-secondary">{article.date}</span>
        <span className="text-theme-gold-bright font-medium group-hover:translate-x-1 transition-transform">Read Essay →</span>
      </div>
    </article>
  );
}

/* ==========================================================================
   HEADER
   ========================================================================== */
function Header({ page, navigate, theme, setTheme }) {
  const [themeOpen, setThemeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const themeRef = useRef(null);

  useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.className = `theme-${theme}`;
  document.documentElement.classList.toggle("dark", theme === "dark");
  try { localStorage.setItem("coe_theme", theme); } catch { /* ignore */ }
}, [theme]);

  const current = THEMES.find((t) => t.key === theme) ?? THEMES[0];

  return (
    <header className="sticky top-0 z-40 w-full athenaeum-glass border-b border-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <button onClick={() => navigate("home")} className="flex items-center space-x-3.5 text-left group focus:outline-none">
          <div className="relative w-11 h-11 rounded-xl athenaeum-elevated flex items-center justify-center shadow-lg group-hover:border-gold-400 transition-all">
            <svg className="w-9 h-9" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Personal Monogram">
              <rect x="2" y="2" width="40" height="40" rx="8" stroke="currentColor" className="text-theme-gold" strokeOpacity="0.45" strokeWidth="1.2" />
              <path d="M22 6V38" stroke="currentColor" className="text-theme-gold" strokeOpacity="0.25" strokeWidth="1" />
              {/* EDITABLE MONOGRAM: replace A and B with your initials */}
              <text x="12.5" y="27" textAnchor="middle" fill="currentColor" className="text-theme-gold-bright font-display font-bold" fontSize="14">L</text>
              <text x="31.5" y="27" textAnchor="middle" fill="currentColor" className="text-theme-gold font-display font-semibold" fontSize="14">K</text>
            </svg>
          </div>
          <div>
            <span className="block font-display text-base sm:text-lg md:text-xl font-bold tracking-wider text-theme-primary group-hover:text-theme-gold-bright transition-colors">
              THE COMPREHENSION OF EVERYTHING
            </span>
            <span className="block font-sans text-[10px] uppercase tracking-[0.22em] text-theme-gold font-medium">
              Inquiry Across Knowledge &amp; Computation
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 font-sans text-xs uppercase tracking-widest font-medium" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`px-4 py-2.5 rounded-lg transition-all ${
                page === item.id
                  ? "text-theme-gold-bright bg-gold-500/10 border border-gold-500/30"
                  : "text-theme-secondary hover:text-theme-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2.5">
          <div className="relative" ref={themeRef}>
            <button
              onClick={() => setThemeOpen((o) => !o)}
              className="px-3 py-2 rounded-lg athenaeum-elevated hover:border-gold-400 text-xs font-sans text-theme-secondary hover:text-theme-primary transition flex items-center gap-2"
              aria-label="Switch Color Theme"
            >
              <svg className="w-4 h-4 text-theme-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z" />
              </svg>
              <span className="hidden sm:inline font-medium">{current.label}</span>
            </button>

            {themeOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl athenaeum-elevated shadow-2xl py-1.5 z-50 font-sans text-xs border border-theme">
                {THEMES.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => { setTheme(t.key); setThemeOpen(false); }}
                    className="w-full text-left px-4 py-2.5 hover:bg-gold-500/10 text-theme-primary flex items-center justify-between transition"
                  >
                    <span>{t.label}</span>
                    <span className={`w-3 h-3 rounded-full border ${t.dot}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2.5 rounded-lg athenaeum-elevated text-theme-secondary hover:text-theme-primary"
            aria-label="Open Navigation Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-theme px-4 py-3 space-y-1.5 font-sans text-xs uppercase tracking-widest athenaeum-elevated">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { navigate(item.id); setMobileOpen(false); }}
              className="block w-full text-left px-3.5 py-2.5 rounded-lg text-theme-primary hover:bg-gold-500/10"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ==========================================================================
   CONCEPT NEXUS (canvas knowledge graph)
   ========================================================================== */
function ConceptNexus({ theme, onExplore }) {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const dragRef = useRef(null);
  const [activeId, setActiveId] = useState("unity");

  // Refs so the stable canvas handlers always see the latest values
  const themeRef = useRef(theme);
  const activeRef = useRef(activeId);
  themeRef.current = theme;
  activeRef.current = activeId;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.parentElement.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    const isLight = themeRef.current === "light";
    const strokeColor = isLight ? "rgba(154, 100, 44, 0.28)" : "rgba(209, 154, 102, 0.25)";
    const activeStroke = isLight ? "rgba(154, 100, 44, 0.75)" : "rgba(229, 192, 123, 0.75)";
    const nodeFill = isLight ? "#efeae0" : "#131824";
    const activeFill = isLight ? "#9a642c" : "#d19a66";
    const labelColor = isLight ? "#1c1917" : "#ece8e1";
    const active = activeRef.current;
    const nodes = nodesRef.current;

    NEXUS_EDGES.forEach(([fromId, toId]) => {
      const a = nodes.find((n) => n.id === fromId);
      const b = nodes.find((n) => n.id === toId);
      if (!a || !b) return;
      const hi = fromId === active || toId === active;
      ctx.beginPath();
      ctx.moveTo(a.px, a.py);
      ctx.lineTo(b.px, b.py);
      ctx.strokeStyle = hi ? activeStroke : strokeColor;
      ctx.lineWidth = hi ? 2 : 1.2;
      ctx.stroke();
    });

    nodes.forEach((node) => {
      const selected = node.id === active;
      ctx.save();
      ctx.beginPath();
      ctx.arc(node.px, node.py, node.r, 0, Math.PI * 2);
      ctx.fillStyle = selected ? activeFill : nodeFill;
      if (selected) {
        ctx.shadowColor = activeFill;
        ctx.shadowBlur = 18;
      }
      ctx.fill();
      ctx.lineWidth = selected ? 2.5 : 1.6;
      ctx.strokeStyle = activeFill;
      ctx.stroke();
      ctx.restore();

      ctx.font = "600 12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = labelColor;
      ctx.fillText(node.label, node.px, node.py + node.r + 18);
    });
  }, []);

  const layout = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
    nodesRef.current = NEXUS_NODES.map((n) => ({ ...n, px: n.x * rect.width, py: n.y * rect.height }));
    draw();
  }, [draw]);

  const coords = (clientX, clientY) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const pointerDown = (clientX, clientY) => {
    const pos = coords(clientX, clientY);
    const hit = nodesRef.current.find((n) => Math.hypot(n.px - pos.x, n.py - pos.y) <= n.r + 6);
    if (hit) {
      dragRef.current = hit;
      setActiveId(hit.id);
    }
  };

  useEffect(() => {
    const move = (clientX, clientY) => {
      const node = dragRef.current;
      if (!node || !canvasRef.current) return;
      const pos = coords(clientX, clientY);
      const rect = canvasRef.current.getBoundingClientRect();
      node.px = Math.max(40, Math.min(rect.width - 40, pos.x));
      node.py = Math.max(40, Math.min(rect.height - 40, pos.y));
      draw();
    };
    const onMouseMove = (e) => move(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (dragRef.current && e.touches.length === 1) move(e.touches[0].clientX, e.touches[0].clientY);
    };
    const up = () => { dragRef.current = null; };

    layout();
    window.addEventListener("resize", layout);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("resize", layout);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", up);
    };
  }, [layout, draw]);

  useEffect(() => { draw(); }, [theme, activeId, draw]);

  const resetView = () => {
    setActiveId("unity");
    layout();
  };

  const node = NEXUS_NODES.find((n) => n.id === activeId);
  const neighbors = NEXUS_EDGES
    .filter((edge) => edge.includes(node.id))
    .map((edge) => (edge[0] === node.id ? edge[1] : edge[0]))
    .map((id) => NEXUS_NODES.find((n) => n.id === id)?.label)
    .filter(Boolean);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="font-sans text-[11px] uppercase tracking-widest text-theme-gold font-semibold">Interactive Architecture</span>
          <h2 className="font-display text-2xl font-bold text-theme-primary">The Concept Nexus</h2>
        </div>
        <div className="flex items-center gap-2 font-sans text-xs">
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 relative rounded-2xl overflow-hidden athenaeum-glass h-[440px] sm:h-[500px]">
          <canvas
            ref={canvasRef}
            className="w-full h-full block cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => pointerDown(e.clientX, e.clientY)}
            onTouchStart={(e) => {
              if (e.touches.length === 1) pointerDown(e.touches[0].clientX, e.touches[0].clientY);
            }}
          />
        </div>

        <div className="athenaeum-glass rounded-2xl p-6 flex flex-col justify-between h-[440px] sm:h-[500px]">
          <div className="space-y-4 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-theme pb-3">
              <span className="font-sans text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-gold-500/15 text-theme-gold-bright font-semibold">
                {node.domain === "All" ? "Central Principle" : node.domain}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-theme-primary">{node.label}</h3>
            <p className="text-sm text-theme-secondary leading-relaxed">{node.desc}</p>
            <div className="pt-2">
              <span className="block font-sans text-[10px] uppercase tracking-widest text-theme-secondary mb-2">Connected Disciplines</span>
              <div className="flex flex-wrap gap-1.5 font-sans text-[11px]">
                {neighbors.map((lbl) => (
                  <span key={lbl} className="px-2.5 py-1 rounded-lg athenaeum-elevated text-theme-secondary">{lbl}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-theme font-sans text-xs">
            <button
              onClick={() => onExplore(node.domain)}
              className="w-full py-2.5 px-4 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 border border-gold-500/40 text-theme-gold-bright font-semibold uppercase tracking-wider transition"
            >
              {node.domain === "All" ? "Browse All Essays →" : `Read ${node.domain} Essays →`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   PAGES
   ========================================================================== */
function HomePage({ navigate, theme, openReader, exploreDomain }) {
  return (
    <div className="space-y-10">
      {/* Hero + About intro + photo */}
      <div className="athenaeum-glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-10">
          <div className="flex-1 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 font-sans text-[11px] uppercase tracking-widest text-theme-gold-bright">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
  
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary leading-tight">
              Consilience: The Unity of Knowledge
            </h1>

            <p className="text-base sm:text-lg text-theme-secondary leading-relaxed">
              Welcome. I am <strong className="text-theme-primary font-semibold">{AUTHOR_NAME}</strong>. I created <em>The Comprehension of Everything</em> as a dedicated space to share thoughtful essays across philosophy, religious studies, systems theory, science, and computation—while demonstrating clean, foundational software architecture crafted in code.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-theme">
              <div className="flex flex-wrap items-center gap-3 font-sans text-xs">
                <button onClick={() => navigate("articles")} className="px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-semibold uppercase tracking-wider transition shadow-lg">
                  Explore Articles
                </button>
                <button onClick={() => navigate("about")} className="px-5 py-3 rounded-xl athenaeum-elevated hover:border-gold-400 text-theme-primary font-medium uppercase tracking-wider transition">
                  Read Biography
                </button>
              </div>

              <div className="flex items-center gap-3 font-sans text-xs">
                <span className="text-[11px] uppercase tracking-wider text-theme-secondary mr-1">Connect:</span>
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.name} account`}
                    className="p-2.5 rounded-xl athenaeum-elevated hover:border-gold-400 text-theme-secondary hover:text-theme-gold-bright transition flex items-center gap-2"
                  >
                    <SocialIcon social={s} />
                    <span className="hidden lg:inline font-medium">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Author portrait */}
         <figure className="shrink-0 self-center">
               <img
                  src={authorPhoto}
                  alt={`Portrait of ${AUTHOR_NAME}`}
                  className="w-[300px] sm:w-[360px] lg:w-[440px] max-w-full h-auto rounded-2xl border border-theme object-cover drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
                />
          </figure>
        </div>
      </div>

      <ConceptNexus theme={theme} onExplore={exploreDomain} />

      <div className="space-y-5 pt-2">
        <div className="flex items-center justify-between border-b border-theme pb-3">
          <h2 className="font-display text-2xl font-bold text-theme-primary">Recent Writings</h2>
          <button onClick={() => navigate("articles")} className="font-sans text-xs uppercase tracking-widest text-theme-gold-bright hover:underline">
            View Full Archive →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_DATA.slice(0, 3).map((a) => (
            <ArticleCard key={a.id} article={a} onOpen={openReader} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto athenaeum-glass rounded-2xl p-8 md:p-12 space-y-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-7 border-b border-theme pb-8">
        {/* Author portrait */}
        <img
           src={authorPhoto}
           alt={`Portrait of ${AUTHOR_NAME}`}
           className="w-[260px] sm:w-[300px] max-w-full h-auto shrink-0 rounded-2xl border border-theme object-cover drop-shadow-xl [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
        />

        <div className="space-y-3 text-center sm:text-left">
          <span className="font-sans text-xs uppercase tracking-widest text-theme-gold font-semibold">Biography &amp; Intellectual Mission</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-theme-primary">{AUTHOR_NAME}</h1>
          <p className="text-base text-theme-secondary leading-relaxed">
            Independent thinker, writer, and student of knowledge and wisdom.
          </p>
        </div>
      </div>

      <div className="space-y-5 text-base sm:text-lg text-theme-primary leading-relaxed">
        <h2 className="font-display text-xl font-bold text-theme-gold-bright">Short Biography</h2>
        <p>
          My intellectual journey began with a fundamental curiosity: how can I improve myself intellectually, and the struggle I faced while trying to answer that question led me to the exploration of every aspect of knowledge and helped me in grasping most of the areas of knowledge. This place, The Comprehension of Everything serves as a place where I share beneficial insghts with my fellow human beings. Here, on this website I will be publishing Articles on every aspect of knowledge and, We are yet to reach a high level of understanding on the nature of knowledge and how it is used to interact with everything.
        </p>
      </div>
    </div>
  );
}

function ArticlesPage({ domainFilter, setDomainFilter, openReader }) {
  const [query, setQuery] = useState("");
  const domains = useMemo(() => ["All", ...new Set(ARTICLES_DATA.map((a) => a.domain))], []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return ARTICLES_DATA.filter((a) => {
      const matchesDomain = domainFilter === "All" || a.domain === domainFilter;
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.domain.toLowerCase().includes(q);
      return matchesDomain && matchesQuery;
    });
  }, [query, domainFilter]);

  return (
    <div className="space-y-8">
      <div className="athenaeum-glass rounded-2xl p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-theme-gold font-semibold">Published Articles</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-theme-primary mt-1">Articles Across Knowledge</h1>
            
          </div>

          <div className="relative w-full md:w-72 font-sans">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search essays or concepts..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl athenaeum-elevated text-xs text-theme-primary placeholder-stone-500 focus:outline-none focus:border-gold-400"
            />
            <svg className="w-4 h-4 text-theme-secondary absolute left-3 top-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-theme font-sans text-xs">
          {domains.map((d) => (
            <button
              key={d}
              onClick={() => setDomainFilter(d)}
              className={`px-3.5 py-1.5 rounded-full transition font-medium ${
                domainFilter === d
                  ? "bg-gold-500/20 text-theme-gold-bright border border-gold-500/40"
                  : "athenaeum-elevated text-theme-secondary hover:text-theme-primary"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full athenaeum-glass rounded-2xl p-12 text-center font-sans text-sm text-theme-secondary">
            No articles match your current filter or search term.
          </div>
        ) : (
          filtered.map((a) => <ArticleCard key={a.id} article={a} onOpen={openReader} />)
        )}
      </div>
    </div>
  );
}

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

function ContactPage({ prefill }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [feedback, setFeedback] = useState("");
  const messageRef = useRef(null);

  // Pre-fill subject when arriving from the essay reader
  useEffect(() => {
    if (prefill.subject) {
      setForm((f) => ({ ...f, subject: prefill.subject }));
      messageRef.current?.focus();
    }
  }, [prefill]);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const sendingRef = useRef(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (sendingRef.current) return; // prevents double-sending without changing the button
  sendingRef.current = true;

  const { name, email, subject, message } = Object.fromEntries(
    Object.entries(form).map(([k, v]) => [k, v.trim()])
  );

  setFeedback("Sending your inquiry...");

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: `[The Comprehension of Everything] ${subject}`,
        message,
      }),
    });

    if (res.ok) {
      setFeedback(`Thank you, ${name}. Your inquiry has been delivered.`);
      setForm(EMPTY_FORM);
    } else {
      setFeedback(`Sorry, delivery failed. Please write directly to ${EMAIL}.`);
    }
  } catch {
    setFeedback(`Network error. Please write directly to ${EMAIL}.`);
  } finally {
    sendingRef.current = false;
  }
};

  const inputCls = "w-full px-3.5 py-2.5 rounded-xl athenaeum-elevated text-theme-primary focus:outline-none focus:border-gold-400";
  const labelCls = "block uppercase tracking-wider text-theme-secondary mb-1.5 font-medium";

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      <div className="md:col-span-2 athenaeum-glass rounded-2xl p-8 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest text-theme-gold font-semibold">Correspondence</span>
          <h1 className="font-display text-3xl font-bold text-theme-primary">Get in Touch</h1>
          <p className="text-sm text-theme-secondary leading-relaxed">
            Whether you have a question regarding an article or wish to discuss an idea across disciplines, you are welcome to write directly.
          </p>
        </div>

        <div className="space-y-4 pt-6 border-t border-theme font-sans text-xs">
          <div>
            <span className="block uppercase tracking-wider text-theme-secondary text-[10px] mb-1">Direct Electronic Mail</span>
            <a href={`mailto:${EMAIL}`} className="text-sm font-medium text-theme-gold-bright hover:underline break-all">{EMAIL}</a>
          </div>
          <div>
            <span className="block uppercase tracking-wider text-theme-secondary text-[10px] mb-2">Social Channels</span>
            <div className="flex items-center gap-3 text-theme-secondary">
              {SOCIALS.map((s, i) => (
                <span key={s.name} className="flex items-center gap-3">
                  {i > 0 && <span>•</span>}
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-theme-gold-bright transition">{s.name}</a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-3 athenaeum-glass rounded-2xl p-8 space-y-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-theme-primary">Send a Question</h2>
          <p className="text-xs font-sans text-theme-secondary mt-1">Fill out the inquiry form below to compose and dispatch your message.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sender-name" className={labelCls}>Your Name</label>
              <input id="sender-name" type="text" required placeholder="e.g., example name" value={form.name} onChange={update("name")} className={inputCls} />
            </div>
            <div>
              <label htmlFor="sender-email" className={labelCls}>Your Email</label>
              <input id="sender-email" type="email" required placeholder="name@example.com" value={form.email} onChange={update("email")} className={inputCls} />
            </div>
          </div>
          <div>
            <label htmlFor="inquiry-subject" className={labelCls}>Related Article or Topic</label>
            <input id="inquiry-subject" type="text" required placeholder="e.g., Question on Systems Architecture" value={form.subject} onChange={update("subject")} className={inputCls} />
          </div>
          <div>
            <label htmlFor="inquiry-message" className={labelCls}>Your Question or Message</label>
            <textarea id="inquiry-message" ref={messageRef} rows={5} required placeholder="Write your question clearly here..." value={form.message} onChange={update("message")} className={`${inputCls} leading-relaxed`} />
          </div>
          <div className="pt-2 flex items-center justify-between gap-4">
            {feedback && <span className="text-theme-gold-bright font-medium">{feedback}</span>}
            <button type="submit" className="ml-auto px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-semibold uppercase tracking-wider transition shadow-lg">
              Send Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ==========================================================================
   ESSAY READER MODAL
   ========================================================================== */
function ReaderModal({ article, onClose, onAsk }) {
  const [fontPx, setFontPx] = useState(18);
  const [isSerif, setIsSerif] = useState(true);
  const [progress, setProgress] = useState(0);
  const modalRef = useRef(null);

  // Lock page scroll while open; reset scroll when the article changes
  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (modalRef.current) modalRef.current.scrollTop = 0;
    setProgress(0);
    return () => { document.body.style.overflow = ""; };
  }, [article]);

  const onScroll = (e) => {
    const el = e.currentTarget;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
  };

  const btn = "rounded-lg athenaeum-elevated";

  return (
    <div ref={modalRef} onScroll={onScroll} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl overflow-y-auto">
      <div className="fixed top-0 left-0 w-full h-1 bg-obsidian-900 z-50">
        <div className="h-full bg-gold-400 transition-all duration-100" style={{ width: `${progress}%` }} />
      </div>

      <div className="max-w-3xl mx-auto my-6 sm:my-10 px-4">
        <div className="athenaeum-glass rounded-2xl p-6 sm:p-12 shadow-2xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-theme pb-4 font-sans text-xs">
            <button onClick={onClose} className={`px-3.5 py-2 ${btn} hover:border-gold-400 text-theme-primary flex items-center gap-2 transition`}>
              <span>←</span> Back to Articles
            </button>
            <div className="flex items-center gap-2">
              <button onClick={() => setFontPx((p) => Math.max(15, p - 1))} className={`px-2.5 py-1.5 ${btn} text-theme-secondary hover:text-theme-primary`} title="Decrease Font Size">A-</button>
              <button onClick={() => setFontPx((p) => Math.min(24, p + 1))} className={`px-2.5 py-1.5 ${btn} text-theme-secondary hover:text-theme-primary`} title="Increase Font Size">A+</button>
              <button onClick={() => setIsSerif((s) => !s)} className={`px-3 py-1.5 ${btn} text-theme-gold-bright font-medium`}>
                {isSerif ? "Serif" : "Sans"}
              </button>
            </div>
          </div>

          <header className="space-y-4">
            <div className="flex items-center gap-3 font-sans text-xs">
              <span className="uppercase tracking-widest font-semibold text-theme-gold-bright">{article.domain}</span>
              <span className="text-theme-secondary">•</span>
              <span className="text-theme-secondary">{article.readTime}</span>
              <span className="text-theme-secondary">•</span>
              <span className="text-theme-secondary">{article.date}</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-bold text-theme-primary leading-tight">{article.title}</h1>
            <p className="text-base italic text-theme-secondary">{article.summary}</p>
          </header>

          <article
            className={`essay-prose ${isSerif ? "font-serif" : "font-sans"} text-theme-primary pt-4 border-t border-theme`}
            style={{ fontSize: `${fontPx}px` }}
            dangerouslySetInnerHTML={{ __html: article.body }}
          />

          <div className="pt-8 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
            <span className="text-theme-secondary">Have a thought or question about this essay?</span>
            <button onClick={onAsk} className={`px-4 py-2.5 ${btn} hover:border-gold-400 text-theme-gold-bright font-medium transition`}>
              Ask a Question via Contact →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   APP ROOT
   ========================================================================== */
function getInitialTheme() {
  try {
    const saved = localStorage.getItem("coe_theme");
    if (THEMES.some((t) => t.key === saved)) return saved;
  } catch { /* storage unavailable */ }
  return "light"; // Parchment Light is now the default
}

export default function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme);
  const [domainFilter, setDomainFilter] = useState("All");
  const [openArticle, setOpenArticle] = useState(null);
  const [prefill, setPrefill] = useState({ subject: "", nonce: 0 });

  // Apply theme classes to <body> and persist
  useEffect(() => {
    document.body.className = `theme-${theme}`;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("coe_theme", theme); } catch { /* ignore */ }
  }, [theme]);

  const navigate = useCallback((id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const exploreDomain = (domain) => {
    setDomainFilter(domain || "All");
    navigate("articles");
  };

  const askAboutArticle = () => {
    const title = openArticle?.title;
    setOpenArticle(null);
    navigate("contact");
    if (title) setPrefill((p) => ({ subject: `Question regarding: ${title}`, nonce: p.nonce + 1 }));
  };

  return (
    <div className="ambient-glow font-serif min-h-screen flex flex-col selection:bg-gold-500 selection:text-obsidian-950">
      <Header page={page} navigate={navigate} theme={theme} setTheme={setTheme} />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* key restarts the fade-in animation on every page change */}
        <section key={page} className="animate-fade-slide-in">
          {page === "home" && <HomePage navigate={navigate} theme={theme} openReader={setOpenArticle} exploreDomain={exploreDomain} />}
          {page === "about" && <AboutPage />}
          {page === "articles" && <ArticlesPage domainFilter={domainFilter} setDomainFilter={setDomainFilter} openReader={setOpenArticle} />}
          {page === "contact" && <ContactPage prefill={prefill} />}
        </section>
      </main>

      {openArticle && <ReaderModal article={openArticle} onClose={() => setOpenArticle(null)} onAsk={askAboutArticle} />}

      <footer className="border-t border-theme py-8 mt-12 font-sans text-xs text-theme-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-theme-primary tracking-wider">THE COMPREHENSION OF EVERYTHING</span>
          <p>© {new Date().getFullYear()} {AUTHOR_NAME}.</p>
        </div>
      </footer>
    </div>
  );
}
