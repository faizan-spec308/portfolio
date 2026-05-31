import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 lg:px-12" style={{ backgroundColor: 'rgba(13,21,38,0.5)' }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">// 04 — Experience</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#1a2540' }} />
        </motion.div>

        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #00ff88 60%, transparent)' }} />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: 'easeOut' }}
                className="relative"
              >
                <div className="absolute -left-6 top-2 w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: '#00ff88', boxShadow: '0 0 8px rgba(0,255,136,0.5)', transform: 'translateX(-50%)' }} />

                <div className="p-6 rounded-sm border transition-all duration-300"
                  style={{ backgroundColor: '#0d1526', borderColor: '#1a2540' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,255,136,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#1a2540'}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <h3 className="font-syne font-bold text-base" style={{ color: '#f0f0f0' }}>
                      {job.title}
                    </h3>
                    <span className="font-mono text-xs shrink-0" style={{ color: '#00ff88' }}>
                      {job.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs mb-5" style={{ color: '#8892a4' }}>
                    {job.company} · {job.location}
                  </p>
                  <ul className="space-y-2.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="font-mono text-xs leading-5 flex gap-3" style={{ color: '#8892a4' }}>
                        <span className="shrink-0 mt-0.5" style={{ color: '#00ff88' }}>▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
