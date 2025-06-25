"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import MatrixRain from "@/components/matrix-rain"
import VROverlay from "@/components/vr-overlay"
import { Atom, Beaker, Dna, Rocket, Users, ChevronRight, Zap, Globe, Menu, X } from "lucide-react"

export default function VirtualScienceCentrum() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 14,
    minutes: 32,
    seconds: 45,
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const labs = [
    {
      title: "Chemistry VR Lab",
      icon: <Beaker className="w-8 h-8" />,
      description:
        "Conduct molecular experiments, observe chemical reactions in real-time, and manipulate atomic structures safely.",
      color: "from-red-500 to-orange-600",
      borderColor: "border-red-500/50",
      hoverColor: "hover:border-red-500/50",
      textColor: "text-red-400",
      bgGradient: "from-red-900/30 to-orange-900/30",
    },
    {
      title: "Physics VR Lab",
      icon: <Atom className="w-8 h-8" />,
      description:
        "Explore mechanics, optics, and thermodynamics through interactive simulations and real-time calculations.",
      color: "from-blue-500 to-cyan-600",
      borderColor: "border-blue-500/50",
      hoverColor: "hover:border-blue-500/50",
      textColor: "text-blue-400",
      bgGradient: "from-blue-900/30 to-cyan-900/30",
    },
    {
      title: "Biology VR Lab",
      icon: <Dna className="w-8 h-8" />,
      description: "Journey through cellular structures, ecosystems, and anatomical systems with unprecedented detail.",
      color: "from-green-500 to-emerald-600",
      borderColor: "border-green-500/50",
      hoverColor: "hover:border-green-500/50",
      textColor: "text-green-400",
      bgGradient: "from-green-900/30 to-emerald-900/30",
    },
    {
      title: "Space Lab",
      icon: <Rocket className="w-8 h-8" />,
      description: "Astrophysics and space exploration in immersive virtual environments.",
      color: "from-purple-500 to-violet-600",
      borderColor: "border-purple-500/50",
      hoverColor: "hover:border-purple-500/50",
      textColor: "text-purple-400",
      bgGradient: "from-purple-900/30 to-violet-900/30",
    },
  ]

  const exhibits = [
    { title: "Quantum Tunneling Simulator", image: "/placeholder.svg?height=200&width=300" },
    { title: "DNA Helix Visualizer", image: "/placeholder.svg?height=200&width=300" },
    { title: "Chemical Reaction Chamber", image: "/placeholder.svg?height=200&width=300" },
    { title: "Particle Accelerator Model", image: "/placeholder.svg?height=200&width=300" },
    { title: "Molecular Dynamics Lab", image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Matrix Rain Effect */}
      <MatrixRain />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center animate-glow">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                DOST VR Science Centrum
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a
                href="#vr-labs"
                className="text-white hover:text-purple-300 transition-all duration-300 font-medium relative group"
              >
                VR Labs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#simulations"
                className="text-gray-400 hover:text-white transition-all duration-300 font-medium relative group"
              >
                Simulations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#analytics"
                className="text-gray-400 hover:text-white transition-all duration-300 font-medium relative group"
              >
                Analytics
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#curriculum"
                className="text-gray-400 hover:text-white transition-all duration-300 font-medium relative group"
              >
                Curriculum
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#dashboard"
                className="text-gray-400 hover:text-white transition-all duration-300 font-medium relative group"
              >
                Dashboard
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* VR Access Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <VROverlay />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
              <nav className="flex flex-col gap-4 pt-4">
                <a
                  href="#vr-labs"
                  className="text-white hover:text-purple-300 transition-colors duration-300 font-medium py-2"
                >
                  VR Labs
                </a>
                <a
                  href="#simulations"
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  Simulations
                </a>
                <a
                  href="#analytics"
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  Analytics
                </a>
                <a
                  href="#curriculum"
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  Curriculum
                </a>
                <a
                  href="#dashboard"
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  Dashboard
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-float-delayed opacity-40"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-violet-400 rounded-full animate-bounce-slow opacity-50"></div>
          <div className="absolute top-60 right-40 w-2 h-2 bg-cyan-400 rounded-full animate-float-slow opacity-30"></div>
          <div className="absolute top-80 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-orbit opacity-40"></div>
        </div>

        {/* Hero Badge */}
        <div className="mb-12 animate-float">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/90 to-violet-600/90 backdrop-blur-sm text-white text-sm font-medium border border-purple-400/30 shadow-lg shadow-purple-500/25">
            <span className="mr-3 text-xs font-bold bg-white/20 px-3 py-1 rounded-full animate-pulse">2025</span>
            Next-Gen VR Science Platform
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16 max-w-6xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-slide-up">
            <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
              Virtual Science
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-100 via-purple-100 to-white bg-clip-text text-transparent">
              Tour
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Inspiring students to explore, question, and discover through immersive VR experiences, interactive
            simulations, and standards-aligned lessons—anywhere, every day.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-20 z-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button className="group bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40">
            <span className="flex items-center gap-3">
              <svg
                className="w-6 h-6 group-hover:animate-wiggle"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Start VR Tour
            </span>
          </Button>
          <Button
            variant="outline"
            className="group border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-3">
              <svg
                className="w-6 h-6 group-hover:animate-rotate-slow"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Explore Virtual Labs
            </span>
          </Button>
        </div>

        {/* Large Purple Glow Effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-radial from-purple-600/40 via-purple-500/20 to-transparent blur-3xl animate-pulse-glow"></div>
        </div>

        {/* Secondary Glow Layer */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div
            className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-blue-500/30 via-purple-400/15 to-transparent blur-2xl animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Horizon Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </main>

      {/* VR Labs Section */}
      <section id="vr-labs" className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-violet-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-scale-pulse"></div>
              VR Laboratory Environments
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-slide-up">
              Immersive Virtual Laboratories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Step into fully interactive 3D laboratories where safety meets unlimited exploration
            </p>
          </div>

          {/* VR Labs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {labs.map((lab, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/20 rounded-2xl p-6 border border-gray-800 ${lab.hoverColor} transition-all duration-500 transform hover:scale-105 animate-float`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${lab.color.replace("from-", "from-").replace("to-", "to-")}/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* VR Preview Window */}
                <div
                  className={`relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br ${lab.bgGradient} h-48 flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

                  {/* Lab Icon Animation */}
                  <div className="relative z-10">
                    <div className="w-20 h-20 relative animate-rotate-slow">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${lab.color} rounded-full flex items-center justify-center`}
                        >
                          {lab.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${lab.color} rounded-full flex items-center justify-center animate-scale-pulse`}
                  >
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className={`text-xl font-semibold mb-3 text-white group-hover:${lab.textColor} transition-colors`}>
                  {lab.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">{lab.description}</p>

                <div className="flex items-center justify-between">
                  <div
                    className={`flex items-center ${lab.textColor} group-hover:${lab.textColor.replace("400", "300")} transition-colors`}
                  >
                    <span className="text-sm font-medium">Enter Lab</span>
                    <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">VR Ready</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* VR Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-pulse">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">360° Immersion</h4>
              <p className="text-gray-400 text-sm">Full 360-degree virtual environments</p>
            </div>

            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-pulse">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Hand Tracking</h4>
              <p className="text-gray-400 text-sm">Natural gesture controls and interactions</p>
            </div>

            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-pulse">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Safe Environment</h4>
              <p className="text-gray-400 text-sm">Risk-free experimentation and learning</p>
            </div>

            <div className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-pulse">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Collaboration</h4>
              <p className="text-gray-400 text-sm">Multi-user virtual classrooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Simulations Section */}
      <section id="simulations" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-scale-pulse"></div>
              Interactive Simulations
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">AI-Powered Learning Simulations</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Experience adaptive simulations that respond to your learning style and pace
            </p>
          </div>

          {/* Simulation Dashboard */}
          <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-2xl p-8 border border-gray-800 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Live Simulation Preview */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Live Physics Simulation</h3>
                <div className="bg-black/50 rounded-xl p-6 border border-gray-700">
                  {/* Pendulum Simulation */}
                  <div className="relative h-64 flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 w-1 h-32 bg-gray-400 transform -translate-x-1/2"></div>
                    <div className="absolute top-32 left-1/2 w-8 h-8 bg-yellow-400 rounded-full transform -translate-x-1/2 animate-wiggle"></div>
                    <div className="absolute bottom-0 left-0 right-0 text-center">
                      <div className="inline-flex items-center gap-4 bg-gray-800/50 rounded-lg px-4 py-2">
                        <span className="text-sm text-gray-300">Gravity:</span>
                        <input type="range" min="1" max="20" defaultValue="9.8" className="w-20" />
                        <span className="text-sm text-white">9.8 m/s²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulation Controls */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Simulation Controls</h3>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Simulation Speed</span>
                      <span className="text-blue-400">1.0x</span>
                    </div>
                    <input type="range" min="0.1" max="3" step="0.1" defaultValue="1" className="w-full" />
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Mass (kg)</span>
                      <span className="text-green-400">2.5</span>
                    </div>
                    <input type="range" min="0.5" max="10" step="0.1" defaultValue="2.5" className="w-full" />
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">String Length (m)</span>
                      <span className="text-purple-400">1.2</span>
                    </div>
                    <input type="range" min="0.5" max="3" step="0.1" defaultValue="1.2" className="w-full" />
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">Start Simulation</Button>
                    <Button className="flex-1 bg-red-600 hover:bg-red-700">Reset</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulation Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:animate-rotate-slow">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Physics Simulations</h3>
              <p className="text-gray-400 mb-4">Mechanics, waves, thermodynamics, and quantum physics</p>
              <div className="text-purple-400 text-sm font-medium">25+ Simulations Available</div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/50 to-red-900/20 rounded-2xl p-6 border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:animate-bounce-slow">
                <Beaker className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Chemistry Reactions</h3>
              <p className="text-gray-400 mb-4">Molecular interactions, reaction kinetics, and equilibrium</p>
              <div className="text-red-400 text-sm font-medium">30+ Reactions Available</div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/50 to-green-900/20 rounded-2xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:animate-scale-pulse">
                <Dna className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Biology Systems</h3>
              <p className="text-gray-400 mb-4">Cellular processes, genetics, and ecosystem dynamics</p>
              <div className="text-green-400 text-sm font-medium">20+ Systems Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analytics Section */}
      <section id="analytics" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 text-green-300 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-scale-pulse"></div>
              Data Analysis & Visualization
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Scientific Data Analytics</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transform experimental data into meaningful insights with advanced visualization tools
            </p>
          </div>

          {/* Analytics Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Live Chart */}
            <div className="bg-gradient-to-br from-gray-900/50 to-green-900/20 rounded-2xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105 animate-float">
              <h3 className="text-xl font-bold text-white mb-6">Real-Time Data Visualization</h3>
              <div className="bg-black/50 rounded-xl p-4 h-64 flex items-center justify-center relative overflow-hidden">
                {/* Animated Chart Bars */}
                <div className="flex items-end gap-2 z-10">
                  <div
                    className="w-4 h-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t animate-bounce"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="w-4 h-24 bg-gradient-to-t from-green-600 to-green-400 rounded-t animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-4 h-12 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <div
                    className="w-4 h-20 bg-gradient-to-t from-red-600 to-red-400 rounded-t animate-bounce"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                  <div
                    className="w-4 h-8 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t animate-bounce"
                    style={{ animationDelay: "0.8s" }}
                  ></div>
                  <div
                    className="w-4 h-18 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t animate-bounce"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                {/* Animated Grid Lines */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-500 animate-pulse"></div>
                  <div
                    className="absolute top-2/4 left-0 right-0 h-px bg-gray-500 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute top-3/4 left-0 right-0 h-px bg-gray-500 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute top-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Temperature</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 bg-red-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <span className="text-sm text-gray-300">Pressure</span>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-sm transform hover:scale-105 transition-all duration-300">
                  Export Data
                </Button>
              </div>
            </div>

            {/* CER Framework */}
            <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">CER Framework Tool</h3>
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <label className="block text-sm font-medium text-purple-300 mb-2">Claim</label>
                  <textarea
                    className="w-full bg-black/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    rows={2}
                    placeholder="State your scientific claim..."
                  ></textarea>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <label className="block text-sm font-medium text-blue-300 mb-2">Evidence</label>
                  <textarea
                    className="w-full bg-black/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    rows={3}
                    placeholder="Provide supporting evidence from your data..."
                  ></textarea>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <label className="block text-sm font-medium text-green-300 mb-2">Reasoning</label>
                  <textarea
                    className="w-full bg-black/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none"
                    rows={3}
                    placeholder="Explain how your evidence supports your claim..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Generate CER Report
                </Button>
              </div>
            </div>
          </div>

          {/* Data Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-pulse">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Graph Builder</h4>
              <p className="text-gray-400 text-sm">Create custom charts and graphs</p>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-pulse">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Statistical Analysis</h4>
              <p className="text-gray-400 text-sm">Advanced statistical calculations</p>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-pulse">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Data Export</h4>
              <p className="text-gray-400 text-sm">Export in multiple formats</p>
            </div>

            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-pulse">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Collaboration</h4>
              <p className="text-gray-400 text-sm">Share and collaborate on data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Standards Section */}
      <section id="curriculum" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-scale-pulse"></div>
              Standards-Aligned Curriculum
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Educational Standards Integration</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive alignment with NGSS, Common Core, and international educational standards
            </p>
          </div>

          {/* Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* NGSS Standards */}
            <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">NGSS Standards</h3>
                  <p className="text-blue-300 text-sm">Next Generation Science Standards</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">K-12 Physical Science</span>
                  <span className="text-green-400 text-xs">✓ Aligned</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">Life Science Standards</span>
                  <span className="text-green-400 text-xs">✓ Aligned</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">Earth & Space Science</span>
                  <span className="text-green-400 text-xs">✓ Aligned</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">Engineering Design</span>
                  <span className="text-green-400 text-xs">✓ Aligned</span>
                </div>
              </div>
            </div>

            {/* Common Core Standards */}
            <div className="bg-gradient-to-br from-gray-900/50 to-green-900/20 rounded-2xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Common Core</h3>
                  <p className="text-green-300 text-sm">Mathematics Integration</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">Mathematical Practices</span>
                  <span className="text-green-400 text-xs">✓ Integrated</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">Data Analysis</span>
                  <span className="text-green-400 text-xs">✓ Integrated</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">Problem Solving</span>
                  <span className="text-green-400 text-xs">✓ Integrated</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">Statistical Reasoning</span>
                  <span className="text-green-400 text-xs">✓ Integrated</span>
                </div>
              </div>
            </div>

            {/* International Standards */}
            <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">International</h3>
                  <p className="text-purple-300 text-sm">IB, Cambridge, UNESCO</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">IB Science Curriculum</span>
                  <span className="text-green-400 text-xs">✓ Compatible</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">Cambridge IGCSE</span>
                  <span className="text-green-400 text-xs">✓ Compatible</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">UNESCO Framework</span>
                  <span className="text-green-400 text-xs">✓ Compatible</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-gray-300 text-sm">Global Competency</span>
                  <span className="text-green-400 text-xs">✓ Compatible</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Builder */}
          <div className="bg-gradient-to-br from-gray-900/50 to-orange-900/20 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Interactive Lesson Builder</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-orange-300 mb-4">Drag & Drop Components</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-white">VR Experience</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <Atom className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white">Interactive Simulation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <span className="text-white">Data Analysis Tool</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors">
                    <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-white">Assessment Quiz</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-300 mb-4">Lesson Preview</h4>
                <div className="bg-black/50 rounded-xl p-6 border border-gray-700 min-h-64">
                  <div className="text-center text-gray-400 py-12">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <p>Drag components here to build your lesson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Dashboard Section */}
      <section id="dashboard" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 animate-scale-pulse"></div>
              User Management Dashboard
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Comprehensive Learning Analytics</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Track progress, manage classrooms, and gain insights into learning patterns
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Student Progress */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">Student Progress Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">JS</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">John Smith</p>
                      <p className="text-gray-400 text-sm">Grade 10 - Physics</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-green-400 text-sm font-medium">85%</span>
                    </div>
                    <p className="text-gray-400 text-xs">12 labs completed</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">MJ</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Maria Johnson</p>
                      <p className="text-gray-400 text-sm">Grade 10 - Chemistry</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-blue-400 text-sm font-medium">92%</span>
                    </div>
                    <p className="text-gray-400 text-xs">15 labs completed</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AB</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Alex Brown</p>
                      <p className="text-gray-400 text-sm">Grade 10 - Biology</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-3/5 h-full bg-yellow-500 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-yellow-400 text-sm font-medium">68%</span>
                    </div>
                    <p className="text-gray-400 text-xs">8 labs completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900/50 to-green-900/20 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">Active Students</h4>
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">1,247</div>
                <div className="text-sm text-gray-400">+12% from last month</div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">VR Sessions</h4>
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">3,892</div>
                <div className="text-sm text-gray-400">This week</div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/20 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">Completion Rate</h4>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">87.3%</div>
                <div className="text-sm text-gray-400">Average across all labs</div>
              </div>
            </div>
          </div>

          {/* Assessment Tools */}
          <div className="bg-gradient-to-br from-gray-900/50 to-red-900/20 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Assessment & Evaluation Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Quiz Builder</h4>
                <p className="text-gray-400 text-sm">Create adaptive assessments</p>
              </div>

              <div className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Rubric Creator</h4>
                <p className="text-gray-400 text-sm">Standards-based rubrics</p>
              </div>

              <div className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Progress Tracking</h4>
                <p className="text-gray-400 text-sm">Real-time analytics</p>
              </div>

              <div className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Report Generator</h4>
                <p className="text-gray-400 text-sm">Automated reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-black border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Section - Logo and Tagline */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center animate-glow">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-semibold text-white">DOST VR Science</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Made remotely with <span className="text-purple-400">💜</span> and passion
                <br />
                <span className="text-gray-300">– DOST Science Centrum.</span>
              </p>
            </div>

            {/* VR Experiences */}
            <div>
              <h4 className="text-white font-semibold mb-6">VR Experiences</h4>
              <div className="space-y-4">
                <a href="#vr-labs" className="block text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  Virtual Labs
                </a>
                <a
                  href="#simulations"
                  className="block text-gray-400 hover:text-purple-300 transition-colors duration-300"
                >
                  AI Simulations
                </a>
                <a
                  href="#analytics"
                  className="block text-gray-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Data Analytics
                </a>
                <a
                  href="#curriculum"
                  className="block text-gray-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Curriculum Builder
                </a>
                <a
                  href="#dashboard"
                  className="block text-gray-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Learning Dashboard
                </a>
              </div>
            </div>

            {/* Educational Standards */}
            <div>
              <h4 className="text-white font-semibold mb-6">Standards</h4>
              <div className="space-y-4">
                <a href="#" className="block text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  NGSS Alignment
                </a>
                <a href="#" className="block text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  Common Core
                </a>
                <a href="#" className="block text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  International Standards
                </a>
                <a href="#" className="block text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  Assessment Tools
                </a>
              </div>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className="text-white font-semibold mb-6">Support</h4>
              <div className="space-y-4">
                <div className="flex flex-col gap-3">
                  <VROverlay />
                  <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                    Technical Support
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                    Training Resources
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-300">
                    API Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Government Links Section */}
          <div className="mt-16 pt-8 border-t border-gray-800/50">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-3">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Site Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Accessibility
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Privacy Program
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Copyrights
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Vulnerability Disclosure
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Freedom of Information
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Environmental Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Scientific Integrity
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Information Quality Standards
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                DOST.gov.ph
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Science.gov.ph
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Gov.ph
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Vote.gov.ph
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 DOST Virtual Science Centrum - Powered by AI & VR Technology</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg z-40 transform hover:scale-110 animate-glow"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}
