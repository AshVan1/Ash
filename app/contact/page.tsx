'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import ChromeSignature3D from '@/components/ui/ChromeSignature3D'
import { SparkleParticles } from '@/components/ui/SparkleParticles'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For now, just show success (in real app, you'd send to your backend)
    setSubmitStatus('success')
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitStatus('idle')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative">
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
            {/* Left side - 3D Signature */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer"
              >
                <div className="h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48">
                  <ChromeSignature3D 
                    text="J. Cooper"
                    size={0.7}
                    height={0.08}
                    className="w-full h-full"
                  />
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
                <div className="h-18 w-44">
                  <ChromeSignature3D 
                    text="Portfolio"
                    size={1.0}
                    height={0.12}
                    className="w-full h-full"
                  />
                </div>
                </motion.div>
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <div className="h-18 w-40">
                    <ChromeSignature3D 
                      text="About"
                      size={1.0}
                      height={0.12}
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>
              </Link>
                <div className="h-18 w-44">
                  <ChromeSignature3D 
                    text="Contact"
                    size={1.0}
                    height={0.12}
                    className="w-full h-full"
                  />
                </div>
            </div>

            {/* Right side - Empty space for balance */}
            <div className="w-32 md:w-40 lg:w-48"></div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 container mx-auto px-4 relative z-10">
      </section>

      {/* Minimal Contact Info */}
      <section className="py-32 container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-20"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-white font-semibold text-4xl md:text-6xl">Email</h3>
              <p className="text-white text-3xl md:text-5xl font-light tracking-wide">jewelry.designer@example.com</p>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-white font-semibold text-4xl md:text-6xl">Phone</h3>
              <p className="text-white text-3xl md:text-5xl font-light tracking-wide">+1 (555) 123-4567</p>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-white font-semibold text-4xl md:text-6xl">LinkedIn</h3>
              <p className="text-white text-3xl md:text-5xl font-light tracking-wide">linkedin.com/in/jewelrydesigner</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 