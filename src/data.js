export const profile = {
  name: 'Vikas Sinha',
  roles: [
    'Frontend Developer', 1800,
    'React.js · Redux Toolkit', 1800,
    'AI / LLM Integrations', 1800,
  ],
  about:
    '5+ years building enterprise web apps and AI-enabled workflows with React, Node.js and MongoDB. Cut page-load time by 30%, deployment turnaround by 20%, and lifted multi-project delivery efficiency by 25% through reusable architecture.',
  location: 'New Delhi, India',
  email: 'sinhavikas234@gmail.com',
  phone: '+91 8447350788',
  github: 'https://github.com/NeXTcanCode',
  linkedin: 'https://linkedin.com/in/vikas-sinha-7171aa75',
}

export const projects = [
  {
    title: 'ModelWise Pi',
    tag: 'Pi Extension · npm · LLM Cost Optimization',
    desc: 'Pi extension that cuts LLM cost: a cheap model reads the repo and briefs your primary model, and caches what it has read so unchanged files are never re-processed, saving input and output tokens.',
    live: 'https://www.npmjs.com/package/@nextuplodsonnpm/modelwise-pi',
  },
  {
    title: 'Enterprise RAG',
    tag: 'React · Vector Search · Node',
    desc: 'Retrieval-Augmented Generation over enterprise data with custom embeddings to cut hallucinations.',
    live: 'https://next-code-navigator.netlify.app',
  },
  {
    title: 'ModelWise',
    tag: 'React · Node · Groq · Hugging Face',
    desc: 'Cost-aware AI router that scores prompt complexity and sends each query to the cheapest capable LLM.',
    live: 'https://model-wise.netlify.app',
  },
  {
    title: 'Kanban by Next',
    tag: 'React · Redux Toolkit · Tailwind',
    desc: 'Hierarchy-based Kanban with dynamic RBAC for cross-department task assignment and monitoring.',
    live: 'https://kanbanbynext.netlify.app',
  },
  {
    title: 'DMRC Fare & Route Planner',
    tag: 'React · Node · Express',
    desc: 'Calculates Delhi Metro fares and shows routes on a map to plan journeys between stations.',
    live: 'https://next-calculates-dmrc-fare.netlify.app',
  },
  {
    title: 'Family Comes First',
    tag: 'React · Node · Geolocation API',
    desc: 'Family members share and view live locations on an interactive map in real time.',
    live: 'https://family-comes-first.netlify.app',
  },
]

export const skills = [
  'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Redux Toolkit', 'TanStack Query', 'Next.js',
  'Tailwind CSS', 'MUI', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO',
  'REST APIs', 'JWT', 'LLM Integration', 'Vite', 'Webpack', 'Git',
]

export const experience = [
  {
    period: 'Jun 2024 — Now',
    role: 'Front-End Developer',
    org: 'Entab Infotech',
    points: [
      'Led frontend architecture for a collaborative productivity platform with a real-time Minutes of Meeting module.',
      'Code-splitting and lazy loading cut page-load time by 30%.',
      'Reusable React component library reduced deployment turnaround by 20%.',
    ],
  },
  {
    period: 'Dec 2020 — Jun 2024',
    role: 'Web Developer & Technical Lead',
    org: 'PoshInvites',
    points: [
      'Founded and scaled the internal web engineering vertical.',
      'Improved delivery efficiency by 25% via Agile planning; mentored juniors and ran code reviews.',
    ],
  },
]

export const education = 'B.Tech CSE — Krishna Institute of Engineering and Technology, 2016 · MERN Stack — IIT Kanpur'
