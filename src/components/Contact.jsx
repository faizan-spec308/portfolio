import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { contact } from '../data/portfolio'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' })

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm('service_qxwm38r', 'template_m5bfese', formRef.current, 'SOn1DFV--_ZIzb9sj')
      setStatus('sent')
      setForm({ from_name: '', from_email: '', message: '' })
    } catch {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.from_name}`)
      const body = encodeURIComponent(`${form.message}\n\n—\n${form.from_name}\n${form.from_email}`)
      window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`)
      setStatus('idle')
    }
  }

  const inputStyle = {
    backgroundColor: 'rgba(13,21,38,0.8)',
    border: '1px solid #1a2540',
    color: '#f0f0f0',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: "'DM Mono', monospace",
  }

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">// 06 — Contact</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#1a2540' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
          >
            <h2
              className="font-syne font-extrabold leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#f0f0f0' }}
            >
              Let's build<br />
              <span style={{ WebkitTextStroke: '2px #00ff88', WebkitTextFillColor: 'transparent' }}>
                something.
              </span>
            </h2>

            <p className="font-mono text-sm leading-7 mb-10 max-w-sm" style={{ color: '#8892a4' }}>
              Open to placement roles starting June 2026. If you're working on something
              interesting — software, AI, data — I want to hear about it. I respond within 24 hours.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: '📧', label: contact.email, href: `mailto:${contact.email}` },
                { icon: '📱', label: contact.phone, href: `tel:${contact.phone}` },
                { icon: '📍', label: contact.location, href: null },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-sm w-5">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href}
                      className="font-mono text-sm transition-colors duration-200"
                      style={{ color: '#8892a4' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#00ff88'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8892a4'}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-mono text-sm" style={{ color: '#8892a4' }}>{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { label: 'GitHub', href: contact.github },
                { label: 'LinkedIn', href: contact.linkedin },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="font-mono text-xs px-4 py-2 border transition-all duration-200"
                  style={{ borderColor: '#1a2540', color: '#8892a4' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#00ff88'
                    e.currentTarget.style.color = '#00ff88'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1a2540'
                    e.currentTarget.style.color = '#8892a4'
                  }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
          >
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 p-16 border text-center rounded-sm"
                style={{ borderColor: 'rgba(0,255,136,0.3)', backgroundColor: 'rgba(0,255,136,0.03)' }}
              >
                <div className="text-4xl">✓</div>
                <p className="font-syne font-bold text-xl" style={{ color: '#00ff88' }}>Message sent.</p>
                <p className="font-mono text-xs" style={{ color: '#8892a4' }}>I'll reply within 24 hours.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: 'Name', name: 'from_name', type: 'text', placeholder: 'Your name', value: form.from_name },
                  { label: 'Email', name: 'from_email', type: 'email', placeholder: 'your@email.com', value: form.from_email },
                ].map(field => (
                  <div key={field.name}>
                    <label className="font-mono text-xs uppercase tracking-widest block mb-2" style={{ color: '#8892a4' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={field.value}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 text-sm rounded-sm"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#00ff88'}
                      onBlur={e => e.target.style.borderColor = '#1a2540'}
                    />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest block mb-2" style={{ color: '#8892a4' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    className="w-full px-4 py-3 text-sm rounded-sm resize-none"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#00ff88'}
                    onBlur={e => e.target.style.borderColor = '#1a2540'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 font-mono text-sm font-medium rounded-sm transition-all duration-200 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#00ff88', color: '#0a0f1e' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#00cc6a'
                    e.currentTarget.style.boxShadow = '0 0 28px rgba(0,255,136,0.3)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#00ff88'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {status === 'sending' ? 'Sending...' : <>Send Message <span>→</span></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
