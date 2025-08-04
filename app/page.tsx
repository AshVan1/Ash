'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { JewelryHeroSection } from '@/components/ui/jewelry-hero-section'
import ChromeSignature3D from '@/components/ui/ChromeSignature3D'
import ColoredModel from '@/components/ui/ColoredModel'
import CircularText from '@/components/ui/CircularText'

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<string>("#C0C0C0") // Default silver
  const [currentPage, setCurrentPage] = useState(0) // Track which 4 models to show
  const [isLoading, setIsLoading] = useState(true) // Loading state
  const [modelsLoading, setModelsLoading] = useState(true) // 3D models loading state

  const getColorForSelection = (colorName: string) => {
    switch(colorName) {
      case "silver": return "#C0C0C0"
      case "gold": return "#FFD700"
      case "platinum": return "#E5E4E2"
      default: return "#C0C0C0"
    }
  }

  // All 16 models organized in groups of 4
  const allModels = [
    // Page 0: First 4 models
    [
      { path: "/engine.stl", name: "Engine Model" },
      { path: "/babylon.stl", name: "Babylon Model" },
      { path: "/jewelry-model.stl", name: "Jewelry Model" },
      { path: "/A ring.stl", name: "A Ring Model" }
    ],
    // Page 1: Next 4 models
    [
      { path: "/Bruno Size 7.75 US FINAL.stl", name: "Bruno Ring" },
      { path: "/Fixed cross (~recovered).stl", name: "Fixed Cross" },
      { path: "/girl ring 01 f (~recovered).stl", name: "Girl Ring" },
      { path: "/Miles Size 9 US.stl", name: "Miles Ring" }
    ],
    // Page 2: Next 4 models
    [
      { path: "/New idea.stl", name: "New Idea" },
      { path: "/notre damn.stl", name: "Notre Damn" },
      { path: "/Ring (~recovered).stl", name: "Ring Recovered" },
      { path: "/rng.stl", name: "RNG Model" }
    ],
    // Page 3: Last 4 models
    [
      { path: "/sfg.stl", name: "SFG Model" },
      { path: "/Yay.stl", name: "Yay Model" },
      { path: "/TOS.stl", name: "TOS Model" },
      { path: "/Untitled.stl", name: "Untitled Model" }
    ]
  ]

  const currentModels = allModels[currentPage]
  const totalPages = allModels.length

  const handleViewMore = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
    setModelsLoading(true) // Reset loading state when changing pages
  }

  const handleViewPrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    setModelsLoading(true) // Reset loading state when changing pages
  }

  // Hide loading state after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100) // Very short delay to show loading state
    return () => clearTimeout(timer)
  }, [])

  // Handle 3D models loading with 1-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setModelsLoading(false)
    }, 1000) // 1-second delay for model rendering
    return () => clearTimeout(timer)
  }, [currentPage]) // Reset when page changes

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900">
      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 flex items-center justify-center">
          <div className="text-off-white text-2xl font-bold animate-pulse">
            Loading...
          </div>
        </div>
      )}

      {/* 3D Jewelry Hero Section */}
      <JewelryHeroSection />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="fixed top-0 w-full z-50 py-6"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Left side - AD Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 flex items-center justify-start">
                <span className="text-off-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide hover:text-white transition-colors duration-200 uppercase font-['Oxygen', sans-serif]">
                  AD
                </span>
              </div>
            </motion.div>

            {/* Center - Navigation pills */}
            <div className="flex space-x-8 items-center ml-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                  })
                }}
              >
                <div className="h-18 w-44 flex items-center justify-center">
                  <span className="text-off-white text-xl font-bold tracking-wide hover:text-white transition-colors duration-200 uppercase font-['Oxygen', sans-serif]">
                  Portfolio
                  </span>
                </div>
                </motion.div>
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <div className="h-18 w-40 flex items-center justify-center">
                    <span className="text-off-white text-xl font-bold tracking-wide hover:text-white transition-colors duration-200 uppercase font-['Oxygen', sans-serif]">
                  About
                    </span>
                  </div>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <div className="h-18 w-44 flex items-center justify-center">
                    <span className="text-off-white text-xl font-bold tracking-wide hover:text-white transition-colors duration-200 uppercase font-['Oxygen', sans-serif]">
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

      {/* Portfolio Preview Section - positioned after 3D hero */}
      <section id="portfolio" className="py-24 container mx-auto px-4 relative z-10" style={{ marginTop: '300vh' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {modelsLoading ? (
            // Show 4 loading spinners for the 4 model slots
            <>
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={`loading-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    <div className="aspect-[4/5] flex items-center justify-center relative overflow-hidden">
                      <div className="spinner">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          ) : (
            currentModels.map((model, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="aspect-[4/5] flex items-center justify-center relative overflow-hidden">
                    <div className="w-full h-full">
                      <ColoredModel 
                        modelPath={model.path}
                        scale={1.5}
                        rotationSpeed={0.3}
                        color={selectedColor}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-12 space-x-12">
          <button
            onClick={handleViewPrevious}
            className="custom-nav-button"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p data-text="Back">Back</p>
          </button>

          <div className="text-off-white text-lg font-bold mx-8">
            {currentPage + 1} / {totalPages}
          </div>

          <button
            onClick={handleViewMore}
            className="custom-nav-button"
          >
            <p data-text="Next">Next</p>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Jewelry Designer Portfolio. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Behance</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .glass-radio-group {
          --bg: rgba(255, 255, 255, 0.06);
          --text: #e5e5e5;

          display: flex;
          position: relative;
          background: var(--bg);
          border-radius: 1rem;
          backdrop-filter: blur(12px);
          box-shadow:
            inset 1px 1px 4px rgba(255, 255, 255, 0.2),
            inset -1px -1px 6px rgba(0, 0, 0, 0.3),
            0 4px 12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          width: fit-content;
        }

        .glass-radio-group input {
          display: none;
        }

        .glass-radio-group label {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          font-size: 14px;
          padding: 0.8rem 1.6rem;
          cursor: pointer;
          font-weight: 600;
          letter-spacing: 0.3px;
          color: var(--text);
          position: relative;
          z-index: 2;
          transition: color 0.3s ease-in-out;
        }

        .glass-radio-group label:hover {
          color: white;
        }

        .glass-radio-group input:checked + label {
          color: #fff;
        }

        .glass-glider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: calc(100% / 3);
          border-radius: 1rem;
          z-index: 1;
          transition:
            transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
            background 0.4s ease-in-out,
            box-shadow 0.4s ease-in-out;
        }

        /* Silver */
        #glass-silver:checked ~ .glass-glider {
          transform: translateX(0%);
          background: linear-gradient(135deg, #c0c0c055, #e0e0e0);
          box-shadow:
            0 0 18px rgba(192, 192, 192, 0.5),
            0 0 10px rgba(255, 255, 255, 0.4) inset;
        }

        /* Gold */
        #glass-gold:checked ~ .glass-glider {
          transform: translateX(100%);
          background: linear-gradient(135deg, #ffd70055, #ffcc00);
          box-shadow:
            0 0 18px rgba(255, 215, 0, 0.5),
            0 0 10px rgba(255, 235, 150, 0.4) inset;
        }

        /* Platinum */
        #glass-platinum:checked ~ .glass-glider {
          transform: translateX(200%);
          background: linear-gradient(135deg, #d0e7ff55, #a0d8ff);
          box-shadow:
            0 0 18px rgba(160, 216, 255, 0.5),
            0 0 10px rgba(200, 240, 255, 0.4) inset;
        }

        /* Custom Navigation Buttons */
        .custom-nav-button {
          padding: 0;
          margin: 0;
          border: none;
          background: none;
          cursor: pointer;
        }

        .custom-nav-button {
          --primary-color: #FAF9F6;
          --hovered-color: #C0C0C0;
          position: relative;
          display: flex;
          font-weight: 600;
          font-size: 20px;
          gap: 0.5rem;
          align-items: center;
        }

        .custom-nav-button p {
          margin: 0;
          position: relative;
          font-size: 20px;
          color: var(--primary-color);
        }

        .custom-nav-button::after {
          position: absolute;
          content: "";
          width: 0;
          left: 0;
          bottom: -7px;
          background: var(--hovered-color);
          height: 2px;
          transition: 0.3s ease-out;
        }

        .custom-nav-button p::before {
          position: absolute;
          content: attr(data-text);
          width: 0%;
          inset: 0;
          color: var(--hovered-color);
          overflow: hidden;
          transition: 0.3s ease-out;
        }

        .custom-nav-button:hover::after {
          width: 100%;
        }

        .custom-nav-button:hover p::before {
          width: 100%;
        }

        .custom-nav-button:hover svg {
          transform: translateX(4px);
          color: var(--hovered-color);
        }

        .custom-nav-button svg {
          color: var(--primary-color);
          transition: 0.2s;
          position: relative;
          width: 15px;
          transition-delay: 0.2s;
        }

        /* Domino Spinner Animation */
        .spinner {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin-left: -75px;
        }

        .spinner span {
          position: absolute;
          top: 50%;
          left: var(--left);
          width: 35px;
          height: 7px;
          background: #ffff;
          animation: dominos 1s ease infinite;
          box-shadow: 2px 2px 3px 0px black;
        }

        .spinner span:nth-child(1) {
          --left: 80px;
          animation-delay: 0.125s;
        }

        .spinner span:nth-child(2) {
          --left: 70px;
          animation-delay: 0.3s;
        }

        .spinner span:nth-child(3) {
          left: 60px;
          animation-delay: 0.425s;
        }

        .spinner span:nth-child(4) {
          animation-delay: 0.54s;
          left: 50px;
        }

        .spinner span:nth-child(5) {
          animation-delay: 0.665s;
          left: 40px;
        }

        .spinner span:nth-child(6) {
          animation-delay: 0.79s;
          left: 30px;
        }

        .spinner span:nth-child(7) {
          animation-delay: 0.915s;
          left: 20px;
        }

        .spinner span:nth-child(8) {
          left: 10px;
        }

        @keyframes dominos {
          50% {
            opacity: 0.7;
          }

          75% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
          }

          80% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
} 