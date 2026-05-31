import { motion } from 'framer-motion'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">// 05 — Achievements</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#1a2540' }} />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: '#1a2540' }}>
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="p-7 group transition-all duration-300"
              style={{ backgroundColor: '#0a0f1e' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0d1526'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0a0f1e'}
            >
              <div className="text-3xl mb-5">{item.icon}</div>
              <h3 className="font-syne font-bold text-sm mb-2 leading-snug" style={{ color: '#f0f0f0' }}>
                {item.title}
              </h3>
              <p className="font-mono text-xs leading-5" style={{ color: '#8892a4' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
