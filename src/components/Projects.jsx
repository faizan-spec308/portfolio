import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="section-label">// 03 — Projects</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#1a2540' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}
          className="font-syne font-bold mb-12"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#f0f0f0' }}
        >
          Things I've{' '}
          <span style={{ WebkitTextStroke: '1.5px #f0f0f0', WebkitTextFillColor: 'transparent' }}>
            actually built.
          </span>
        </motion.p>

        {/* Project list */}
        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
          className="font-mono text-xs mt-8 pt-8 border-t"
          style={{ color: '#8892a4', borderColor: '#1a2540' }}
        >
          More on{' '}
          <a
            href="https://github.com/faizan-spec308"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200"
            style={{ color: '#00ff88' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            github.com/faizan-spec308 ↗
          </a>
        </motion.p>
      </div>
    </section>
  )
}
