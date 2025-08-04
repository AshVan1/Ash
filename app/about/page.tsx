'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ChromeSignature3D from '@/components/ui/ChromeSignature3D'
import { SparkleParticles } from '@/components/ui/SparkleParticles'
import BlurText from '@/components/ui/BlurText'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

export default function About() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Sparkle Particles Background */}
      <div className="absolute inset-0 z-0">
        <SparkleParticles
          className="w-full h-full"
          particleColor="#FFFFFF"
          maxParticleSize={4}
          minParticleSize={2}
          baseDensity={300}
          maxSpeed={1.2}
          maxOpacity={1.0}
          minParticleOpacity={0.8}
          opacityAnimationSpeed={0}
          particleShape="circle"
          enableHoverGrab={true}
          hoverMode="grab"
          backgroundColor="transparent"
          zIndexLevel={0}
          clickEffect={false}
        />
      </div>
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 py-6"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Left side - AD Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer"
              >
                <div className="h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 flex items-center justify-start">
                  <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide font-['Helvetica']">
                    AD
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Center - Navigation pills */}
            <div className="flex space-x-8 items-center ml-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => {
                  window.location.href = '/'
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                  })
                }}
              >
                <div className="h-18 w-44 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold tracking-wide font-['Helvetica']">
                    Portfolio
                  </span>
                </div>
                </motion.div>
                <div className="h-18 w-40 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold tracking-wide font-['Helvetica']">
                    About
                  </span>
                </div>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <div className="h-18 w-44 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold tracking-wide font-['Helvetica']">
                      Contact
                    </span>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Right side - Empty space for balance */}
            <div className="w-32 md:w-40 lg:w-48"></div>
          </div>
        </div>
      </motion.nav>

      {/* About Content */}
      <section className="pt-32 pb-16 container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <BlurText 
              text="My Journey in Jewelry Design" 
              className="text-3xl md:text-4xl font-bold text-white mb-8 font-['Helvetica']"
              delay={100}
              stepDuration={0.4}
            />
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-['Helvetica']">
              <p>
                With a passion for merging traditional craftsmanship with contemporary innovation, 
                I create jewelry pieces that tell stories and capture emotions. Each design is born 
                from a deep appreciation for the artistry that transforms raw materials into 
                meaningful treasures.
              </p>
              <p>
                My design philosophy centers on the belief that jewelry should be both beautiful 
                and meaningful, reflecting the wearer&apos;s personality while maintaining timeless appeal. 
                I draw inspiration from nature&apos;s geometric patterns, architectural forms, and the 
                interplay of light and shadow.
              </p>
              <p>
                Currently seeking an internship opportunity to further develop my skills and 
                contribute to a team of talented designers who share my passion for exceptional 
                craftsmanship and innovative design solutions.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border border-slate-600/50 flex items-center justify-center relative overflow-hidden">
              <div className="w-48 h-48 bg-gradient-to-br from-silver-400 to-silver-600 rounded-full opacity-50 floating" />
              <div className="absolute inset-0 shimmer opacity-20" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 