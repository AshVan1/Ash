'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { JewelryHeroSection } from '@/components/ui/jewelry-hero-section'
import SpinningModel from '@/components/ui/SpinningModel'
import ChromeSignature3D from '@/components/ui/ChromeSignature3D'
import ColoredModel from '@/components/ui/ColoredModel'

const portfolioItems = [
  {
    id: 1,
    title: "Celestial Collection",
    category: "Fine Jewelry",
    modelPath: "/jewelry-model.stl",
    description: "Inspired by cosmic movements and stellar formations",
    materials: "18K White Gold, Lab-Grown Diamond",
    year: "2024"
  },
  {
    id: 2,
    title: "Geometric Fusion",
    category: "Contemporary",
    modelPath: "/jewelry-model.stl", 
    description: "Modern lines meeting classical elegance",
    materials: "Sterling Silver, Cultured Pearl",
    year: "2024"
  },
  {
    id: 3,
    title: "Heritage Series",
    category: "Traditional",
    modelPath: "/jewelry-model.stl",
    description: "Timeless designs with contemporary craftsmanship",
    materials: "18K Yellow Gold, Onyx",
    year: "2023"
  },
  {
    id: 4,
    title: "Minimalist Edge",
    category: "Modern",
    modelPath: "/jewelry-model.stl",
    description: "Clean lines and subtle sophistication",
    materials: "Titanium, Sapphire Accents",
    year: "2024"
  }
]

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState<string>("#C0C0C0") // Default silver

  const getColorForSelection = (colorName: string) => {
    switch(colorName) {
      case "silver": return "#C0C0C0"
      case "gold": return "#FFD700"
      case "platinum": return "#E5E4E2"
      default: return "#C0C0C0"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900">
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
                <span className="text-off-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide hover:text-white transition-colors duration-200">
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
                  <span className="text-off-white text-xl font-semibold tracking-wide hover:text-white transition-colors duration-200">
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
                    <span className="text-off-white text-xl font-semibold tracking-wide hover:text-white transition-colors duration-200">
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
                    <span className="text-off-white text-xl font-semibold tracking-wide hover:text-white transition-colors duration-200">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="relative overflow-hidden rounded-3xl">
                {/* 3D Model Viewer - Floating naturally */}
                <div className="aspect-[4/5] flex items-center justify-center relative overflow-hidden">
                  <div className="w-full h-full">
                    <ColoredModel 
                      modelPath={item.modelPath}
                      scale={1}
                      rotationSpeed={0.3}
                      color={selectedColor}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Content - Minimal and elegant */}
                <div className="mt-6 text-center">
                </div>
              </div>
            </motion.div>
          ))}
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

      {/* Detailed View Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.9, opacity: 0, rotateY: 15 }}
            className="bg-black/90 backdrop-blur-md rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const item = portfolioItems.find(i => i.id === selectedItem)
              if (!item) return null
              
              return (
                <>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-4xl font-bold text-white mb-3">{item.title}</h2>
                      <div className="text-silver-400 font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full inline-block">{item.category}</div>
                    </div>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="text-gray-400 hover:text-white text-3xl bg-black/40 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/60 transition-all duration-300"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="aspect-[3/4] rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="w-full h-full">
                        <ColoredModel 
                          modelPath={item.modelPath}
                          scale={1.2}
                          rotationSpeed={0.5}
                          color={selectedColor}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-4">Description</h3>
                        <p className="text-white leading-relaxed text-lg opacity-90">{item.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-white font-bold text-2xl mb-6">Details</h3>
                        <div className="space-y-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <strong className="text-silver-400 text-sm uppercase tracking-wide">Category</strong> 
                            <p className="text-white mt-1 text-lg">{item.category}</p>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <strong className="text-silver-400 text-sm uppercase tracking-wide">Year</strong> 
                            <p className="text-white mt-1 text-lg">{item.year}</p>
                          </div>
                          
                          {/* Glass Radio Group for Material Selection */}
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <strong className="text-silver-400 text-sm uppercase tracking-wide mb-4 block">Material</strong>
                            <div className="glass-radio-group">
                              <input type="radio" id="glass-silver" name="material" defaultChecked onChange={() => setSelectedColor("#C0C0C0")} />
                              <label htmlFor="glass-silver">Silver</label>
                              
                              <input type="radio" id="glass-gold" name="material" onChange={() => setSelectedColor("#FFD700")} />
                              <label htmlFor="glass-gold">Gold</label>
                              
                              <input type="radio" id="glass-platinum" name="material" onChange={() => setSelectedColor("#E5E4E2")} />
                              <label htmlFor="glass-platinum">Platinum</label>
                              
                              <div className="glass-glider"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 pt-6">
                        <button className="bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 flex-1">
                          Inquire About Piece
                        </button>
                        <button className="border border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300 flex-1">
                          View Process
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })()}
          </motion.div>
        </motion.div>
      )}

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
      `}</style>
    </div>
  )
} 