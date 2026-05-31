import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
      className="project-row group"
    >
      <div className="py-8 grid sm:grid-cols-[60px_1fr_auto] gap-6 items-start">

        {/* Number */}
        <span
          className="font-syne font-extrabold text-3xl leading-none pt-1 select-none"
          style={{ color: '#1a2540', transition: 'color 0.25s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'rgba(0,255,136,0.2)'}
          onMouseLeave={e => e.currentTarget.style.color = '#1a2540'}
        >
          {num}
        </span>

        {/* Content */}
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="font-syne font-bold text-xl" style={{ color: '#f0f0f0' }}>
              {project.title}
            </h3>
            {project.featured && (
              <span className="font-mono text-xs px-2 py-0.5" style={{
                backgroundColor: 'rgba(0,255,136,0.1)',
                color: '#00ff88',
                border: '1px solid rgba(0,255,136,0.25)',
              }}>
                Featured
              </span>
            )}
            {project.badge && project.badge.startsWith('🏆') && (
              <span className="text-sm" title={project.badge}>🏆</span>
            )}
            {project.badge && project.badge.startsWith('🥇') && (
              <span className="text-sm" title={project.badge}>🥇</span>
            )}
          </div>

          <p className="font-mono text-xs leading-5 mb-4 max-w-xl" style={{ color: '#8892a4' }}>
            {project.tagline}
          </p>

          {project.stats && (
            <p className="font-mono text-xs mb-3" style={{ color: '#00ff88' }}>↗ {project.stats}</p>
          )}

          {project.badge && !project.badge.startsWith('🏆') && !project.badge.startsWith('🥇') && (
            <p className="font-mono text-xs mb-3" style={{ color: '#f5c842' }}>{project.badge}</p>
          )}

          {project.role && (
            <span className="inline-block font-mono text-xs px-2 py-0.5 border mb-3"
              style={{ borderColor: '#00ff88', color: '#00ff88' }}>
              {project.role}
            </span>
          )}

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map(t => (
              <span key={t} className="font-mono text-xs px-2 py-0.5 rounded-sm"
                style={{ backgroundColor: 'rgba(26,37,64,0.8)', color: '#8892a4', border: '1px solid #1a2540' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 items-end pt-1 shrink-0">
          <Link
            to={`/projects/${project.id}`}
            className="font-mono text-xs flex items-center gap-1.5 transition-all duration-200 opacity-0 group-hover:opacity-100"
            style={{ color: '#00ff88' }}
          >
            Details →
          </Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"
              className="font-mono text-xs transition-colors duration-200"
              style={{ color: '#8892a4' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00ff88'}
              onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer"
              className="font-mono text-xs transition-colors duration-200"
              style={{ color: '#8892a4' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00ff88'}
              onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
