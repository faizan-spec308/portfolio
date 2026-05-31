import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ROLES = ['Software Engineer', 'Data Scientist', 'AI Builder', 'Product Owner']

function useTypewriter(words, typeSpeed = 75, deleteSpeed = 35, pauseMs = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const word = words[wordIdx]
    let t
    if (phase === 'typing') {
      if (display.length < word.length) {
        t = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), typeSpeed)
      } else {
        t = setTimeout(() => setPhase('deleting'), pauseMs)
      }
    } else {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay(display.slice(0, -1)), deleteSpeed)
      } else {
        setWordIdx((wordIdx + 1) % words.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(t)
  }, [display, phase, wordIdx, words, typeSpeed, deleteSpeed, pauseMs])

  return display
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-grid">

      {/* Background orbs */}
      <div className="orb" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,255,136,0.12) 0%, transparent 70%)',
        top: '-100px', right: '-100px',
      }} />
      <div className="orb" style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(82,130,255,0.08) 0%, transparent 70%)',
        bottom: '100px', left: '-80px',
        animationDelay: '4s', animationDirection: 'alternate-reverse',
      }} />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-28 pb-16">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-full mb-10"
          style={{ borderColor: 'rgba(0,255,136,0.3)', backgroundColor: 'rgba(0,255,136,0.05)' }}
        >
          <span className="pulse-ring" />
          <span className="font-mono text-xs" style={{ color: '#00ff88' }}>
            Available for Placement · June 2026
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
          {/* Left — main text */}
          <div>
            {/* Role typewriter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px" style={{ backgroundColor: '#00ff88' }} />
              <span className="font-mono text-sm" style={{ color: '#8892a4' }}>
                {role}<span className="typewriter-cursor" />
              </span>
            </motion.div>

            {/* Name — huge display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1
                className="font-syne font-extrabold leading-[0.88] tracking-tight mb-8 select-none"
                style={{ fontSize: 'clamp(4.5rem, 12vw, 10rem)', color: '#f0f0f0' }}
              >
                <span className="block">FAIZAN</span>
                <span
                  className="block"
                  style={{
                    WebkitTextStroke: '2px #f0f0f0',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  NAVEED
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-mono text-sm leading-7 max-w-lg mb-10"
              style={{ color: '#8892a4' }}
            >
              CS @ Brunel University London · Predicted First-Class Honours<br />
              I don't just learn it — I build it, ship it, and present it to Microsoft.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group font-mono text-sm px-7 py-3 font-medium flex items-center gap-2 transition-all duration-200"
                style={{ backgroundColor: '#00ff88', color: '#0a0f1e' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#00cc6a'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,255,136,0.35)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#00ff88'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                View My Work
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
              <a
                href="/portfolio/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-7 py-3 border transition-all duration-200 flex items-center gap-2"
                style={{ borderColor: 'rgba(0,255,136,0.4)', color: '#00ff88' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,255,136,0.07)'
                  e.currentTarget.style.borderColor = '#00ff88'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(0,255,136,0.4)'
                }}
              >
                Download CV ↓
              </a>
            </motion.div>

            {/* Currently bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex items-center gap-4 pt-8 border-t"
              style={{ borderColor: '#1a2540' }}
            >
              <span className="font-mono text-xs shrink-0" style={{ color: '#8892a4' }}>
                currently →
              </span>
              <div className="flex flex-wrap gap-4">
                {[
                  'Seeking placement 2026',
                  'Building agentic AI systems',
                  'Studying algorithms',
                ].map(item => (
                  <span key={item} className="font-mono text-xs" style={{ color: '#00ff88' }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — floating code card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="hidden lg:block shrink-0 mb-6"
          >
            <div
              className="w-72 rounded-lg p-5 font-mono text-xs leading-6"
              style={{
                backgroundColor: 'rgba(15, 26, 46, 0.9)',
                border: '1px solid #1a2540',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              <div className="flex items-center gap-1.5 mb-4">
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
                ))}
                <span className="ml-2 text-xs" style={{ color: '#8892a4' }}>faizan.py</span>
              </div>
              <div><span className="code-comment"># Faizan Naveed</span></div>
              <div className="mt-1">
                <span className="code-var">status</span>
                <span style={{ color: '#8892a4' }}> = </span>
                <span className="code-string">"Seeking Placement 2026"</span>
              </div>
              <div>
                <span className="code-var">skills</span>
                <span style={{ color: '#8892a4' }}> = [</span>
                <span className="code-string">"Python"</span>
                <span style={{ color: '#8892a4' }}>, </span>
                <span className="code-string">"React"</span>
                <span style={{ color: '#8892a4' }}>, </span>
                <span className="code-string">"PyTorch"</span>
                <span style={{ color: '#8892a4' }}>]</span>
              </div>
              <div>
                <span className="code-var">gpa</span>
                <span style={{ color: '#8892a4' }}> = </span>
                <span className="code-string">"Predicted First Class"</span>
              </div>
              <div className="mt-1">
                <span className="code-var">built</span>
                <span style={{ color: '#8892a4' }}> = [</span>
                <span className="code-string">"HillingOne"</span>
                <span style={{ color: '#8892a4' }}>, </span>
                <span className="code-string">"KnownLy"</span>
                <span style={{ color: '#8892a4' }}>,</span>
              </div>
              <div style={{ paddingLeft: '3.2rem' }}>
                <span style={{ color: '#8892a4' }}></span>
                <span className="code-string">"FraudDetect"</span>
                <span style={{ color: '#8892a4' }}>]</span>
              </div>
              <div className="mt-3 pt-3" style={{ borderTop: '1px solid #1a2540' }}>
                <span className="code-comment"># &gt;&gt;&gt; Let's build something.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="font-mono text-xs"
          style={{ color: '#8892a4' }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
