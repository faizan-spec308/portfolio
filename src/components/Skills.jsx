import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

const ALL_TOOLS = [
  'Git', 'GitHub', 'Docker', 'AWS', 'Power BI', 'Tableau', 'Jira',
  'Wireshark', 'Ubuntu Linux', 'Google Gemini API', 'MATLAB', 'Microsoft 365',
  'VS Code', 'Postman', 'Figma', 'Streamlit', 'MLFlow',
]

function Marquee() {
  const doubled = [...ALL_TOOLS, ...ALL_TOOLS]
  return (
    <div className="marquee-track py-2">
      <div className="marquee-inner">
        {doubled.map((tool, i) => (
          <span
            key={i}
            className="font-mono text-xs px-4 py-1.5 mx-2 rounded-full border shrink-0"
            style={{ borderColor: '#1a2540', color: '#8892a4', backgroundColor: '#0d1526' }}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}

const CORE_SKILLS = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL', 'TypeScript'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML / CSS', 'Tailwind CSS', 'Leaflet.js', 'Recharts', 'Figma'],
  },
  {
    category: 'Backend & Data',
    items: ['FastAPI', 'Spring Boot', 'PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs', 'WebSocket'],
  },
  {
    category: 'ML & AI',
    items: ['PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit', 'MLFlow', 'Gemini API'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 lg:px-12" style={{ backgroundColor: 'rgba(13,21,38,0.5)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">// 02 — Skills</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#1a2540' }} />
        </motion.div>

        {/* Core skills — table layout */}
        <div className="space-y-0 mb-16">
          {CORE_SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
              className="grid sm:grid-cols-[160px_1fr] gap-6 py-6 border-t"
              style={{ borderColor: '#1a2540' }}
            >
              <div className="flex items-start pt-1">
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: '#00ff88' }}>
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + i * 0.04, duration: 0.25 }}
                    className="skill-tag font-mono text-xs px-3 py-1.5 rounded-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="border-t" style={{ borderColor: '#1a2540' }} />
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-4 py-3 border rounded-sm mb-16"
          style={{ borderColor: '#1a2540', backgroundColor: '#0d1526' }}
        >
          <span className="text-lg">📜</span>
          <div>
            <p className="font-mono text-xs" style={{ color: '#f0f0f0' }}>Machine Learning & AI Ethics</p>
            <p className="font-mono text-xs mt-0.5" style={{ color: '#8892a4' }}>
              Coursera · <span style={{ color: '#f5c842' }}>In Progress</span>
            </p>
          </div>
        </motion.div>

        {/* Tools marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: '#8892a4' }}>
            Tools & Platforms
          </p>
          <Marquee />
        </motion.div>
      </div>
    </section>
  )
}
