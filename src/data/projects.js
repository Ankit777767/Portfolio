// Featured = large "Act II" cards. Keep this to your 2 strongest, most
// current projects — that's what recruiters actually look at first.
export const featuredProjects = [
  {
    id: "auteur",
    title: "Auteur",
    tagline: "A conversational movie recommender that actually gets your taste.",
    description:
      "An end-to-end recommendation engine that reasons about film the way a person would — combining semantic search over a film corpus with LLM-driven conversation, instead of a static ratings matrix. The backend embeds plot, tone, and thematic descriptors with Sentence Transformers into a ChromaDB vector store, retrieves candidates, and hands them to an LLM (via Groq) to explain and refine picks in natural conversation, backed by live metadata from TMDB.",
    stack: [
      "FastAPI",
      "React",
      "Tailwind CSS",
      "ChromaDB",
      "Sentence Transformers",
      "Groq API",
      "TMDB API",
    ],
    year: "June 2026 — Present",
    status: "In active development",
    links: {
      demo: "", // TODO
      github: "", // TODO
    },
  },
  {
    id: "research",
    title: "Research",
    tagline: "Two papers, two very different lessons in rigor.",
    description:
      "Vision-Transformer research carried out during an IIT Mandi research internship, spanning generative image quality and media forensics.",
    stack: ["PyTorch", "Vision Transformers", "Computer Vision"],
    year: "May2025",
    status: "Ongoing",
    papers: [
      {
        title: "PRISM",
        subtitle: "A transformer-based super-resolution model",
        venue: "Published — NCVPRIPG 2025",
        link: "", // TODO: add DOI / arXiv / conference link
      },
      {
        title: "Deepfake Detection",
        subtitle:
          "A robustness-focused approach to synthetic media detection, currently addressing reviewer feedback on novelty, ablations, and robustness testing",
        venue: "Under revision",
        link: "", // TODO: add link once available
      },
    ],
    links: {
      demo: "",
      github: "",
    },
  },
];

// Secondary = smaller "Act III" grid. Add or remove freely.
export const otherProjects = [
  {
    id: "quizforge",
    title: "QuizForge",
    tagline: "An agentic quiz-generation platform.",
    description:
      "Generates structured quizzes from source material using a LangGraph agent pipeline, with LlamaIndex + ChromaDB for retrieval and PostgreSQL/Redis for persistence and caching.",
    stack: ["LangGraph", "FastAPI", "LlamaIndex", "ChromaDB", "PostgreSQL", "Redis"],
    links: { demo: "", github: "" },
  },
  {
    id: "pharmapulse",
    title: "PharmaPulse",
    tagline: "US Prescriber and Trial Intelligence Dashboard.",
    description:
      "An analytics dashboard for exploring US prescriber behavior and clinical trial activity — PostgreSQL for storage, analytical SQL for the heavy lifting, and Power BI for the reporting layer.",
    stack: ["PostgreSQL", "Analytical SQL", "Power BI"],
    links: { demo: "", github: "" },
  },
];
