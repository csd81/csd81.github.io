import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'motion/react'

interface SectionProps {
  id: string
  tag?: string
  title?: string
  lead?: string
  children: ReactNode
}

export function Section({ id, tag, title, lead, children }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px -120px 0px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      className="section"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {tag && <span className="section-tag">{tag}</span>}
      {title && <h2>{title}</h2>}
      {lead && <p className="lead">{lead}</p>}
      {children}
    </motion.section>
  )
}
