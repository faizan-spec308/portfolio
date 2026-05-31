import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { stats, education } from '../data/portfolio'

function CountUp({ target, suffix = '', duration = 1600 }) {
  const [val, setVal] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])

  useEffect(() => {
    if (!started || typeof target !== 'number') return
    const start = performance.now()
    const frame = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(ease * target))
      if (p < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [started, target, duration])

  return <span ref={ref}>{typeof target === 'number' ? val : target}{suffix}</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">// 01 — About</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#1a2540' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left — bio + education */}
          <div>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="font-syne font-extrabold mb-8 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f0f0f0' }}
            >
              The story<br />
              <span style={{ WebkitTextStroke: '1.5px #f0f0f0', WebkitTextFillColor: 'transparent' }}>
                so far.
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-4 mb-10"
            >
              {[
                "I'm a second-year BSc Computer Science student at Brunel University London — predicted a First-Class Honours degree — with a deep focus on software engineering, data science, and applied AI.",
                "I don't learn by watching tutorials. I learn by picking a real problem, building a real solution, and shipping it. That's how HillingOne, KnownLy, and a fraud detection system that processed 6 million transactions got built.",
                "Currently looking for a 12-month placement starting June 2026. If you're building something interesting, I want to be in the room.",
              ].map((p, i) => (
                <p key={i} className="font-mono text-sm leading-7" style={{ color: '#8892a4' }}>{p}</p>
              ))}
            </motion.div>

            {/* Personal quote */}
            <motion.blockquote
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="pl-5 py-1 mb-10"
              style={{ borderLeft: '2px solid #00ff88' }}
            >
              <p className="font-syne font-semibold text-base italic leading-relaxed" style={{ color: '#f0f0f0' }}>
                "I learn best when I'm building something real — every project here started as a genuine problem I wanted to solve."
              </p>
            </motion.blockquote>

            {/* Education */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="p-5 rounded-sm"
              style={{ backgroundColor: '#0d1526', border: '1px solid #1a2540' }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-syne font-bold text-sm" style={{ color: '#f0f0f0' }}>
                    {education.university}
                  </p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: '#00ff88' }}>
                    {education.degree} · {education.period}
                  </p>
                </div>
                <span className="font-mono text-xs px-2 py-1 shrink-0" style={{ backgroundColor: 'rgba(245,200,66,0.1)', color: '#f5c842', border: '1px solid rgba(245,200,66,0.2)' }}>
                  Predicted 1st
                </span>
              </div>
              <p className="font-mono text-xs mb-1" style={{ color: '#8892a4' }}>
                {education.modules.join(' · ')}
              </p>
              <p className="font-mono text-xs mt-2" style={{ color: '#f5c842' }}>
                🏆 {education.award}
              </p>
              <p className="font-mono text-xs mt-1" style={{ color: '#8892a4' }}>
                A-Levels: {education.alevels}
              </p>
            </motion.div>
          </div>

          {/* Right — stats */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-sm group"
                  style={{ backgroundColor: '#0d1526', border: '1px solid #1a2540' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a2540' }}
                >
                  <div
                    className="font-syne font-extrabold leading-none mb-2"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#00ff88' }}
                  >
                    <CountUp target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-mono text-xs" style={{ color: '#8892a4' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* What I bring */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="p-6 rounded-sm"
              style={{ backgroundColor: '#0d1526', border: '1px solid #1a2540' }}
            >
              <p className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: '#00ff88' }}>
                What I bring
              </p>
              {[
                { icon: '⚡', label: 'End-to-end delivery', desc: 'From Figma to deployed product' },
                { icon: '🤖', label: 'Applied AI / ML', desc: 'PyTorch, Scikit-learn, LLM APIs' },
                { icon: '🏗️', label: 'Full-stack development', desc: 'React + FastAPI + PostgreSQL' },
                { icon: '🎯', label: 'Product thinking', desc: 'Shipped as Product Owner, KnownLy' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 mb-4 last:mb-0"
                >
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-syne font-semibold text-sm" style={{ color: '#f0f0f0' }}>{item.label}</p>
                    <p className="font-mono text-xs" style={{ color: '#8892a4' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
