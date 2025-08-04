'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ChromeSignature3D from '@/components/ui/ChromeSignature3D'
import { SparkleParticles } from '@/components/ui/SparkleParticles'
import BlurText from '@/components/ui/BlurText'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

export default function About() {
  const [isLoading, setIsLoading] = useState(true)

  // Hide loading state after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black relative">
      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div className="text-white text-2xl font-bold animate-pulse">
            Loading...
          </div>
        </div>
      )}

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-32">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="pt-20"
          >
            <BlurText 
              text="My Journey in Jewelry Design" 
              className="text-3xl md:text-4xl font-bold text-white mb-8 font-['Helvetica']"
              delay={100}
              stepDuration={0.4}
              animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
              animationTo={[
                { filter: 'blur(5px)', opacity: 0.5, y: 5 },
                { filter: 'blur(0px)', opacity: 1, y: 0 }
              ]}
              onAnimationComplete={() => {}}
            />
            <div className="space-y-6 text-gray-300 leading-relaxed text-xl font-['Helvetica']">
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
            className="relative pt-8 flex justify-end"
          >
            <div className="card">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                <path d="M2 17L12 22L22 17"/>
                <path d="M2 12L12 17L22 12"/>
              </svg>
              <div className="card__content">
                <h3 className="card__title">Jewelry Designer</h3>
                <p className="card__description">
                  Passionate about creating unique pieces that blend traditional craftsmanship with modern innovation. Each design tells a story and captures the essence of the wearer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .card {
          position: relative;
          width: 600px;
          height: 500px;
          background-color: #f2f2f2;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          perspective: 1000px;
          box-shadow: 0 0 0 5px #ffffff80;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card svg {
          width: 100px;
          fill: #333;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
        }

        .card__content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 50px;
          box-sizing: border-box;
          background-color: #f2f2f2;
          transform: rotateX(-90deg);
          transform-origin: bottom;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card:hover .card__content {
          transform: rotateX(0deg);
        }

        .card__title {
          margin: 0;
          font-size: 42px;
          color: #333;
          font-weight: 700;
        }

        .card:hover svg {
          scale: 0;
        }

        .card__description {
          margin: 25px 0 0;
          font-size: 20px;
          color: #777;
          line-height: 1.6;
        }
      `}</style>
    </div>
  )
} 