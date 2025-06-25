"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Atom,
  Beaker,
  Dna,
  Rocket,
  Play,
  Calendar,
  Clock,
  Users,
  Lock,
  Github,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
  Zap,
  Microscope,
  Globe,
} from "lucide-react"

export default function VirtualScienceCentrum() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 14,
    minutes: 32,
    seconds: 45,
  })

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
      title: "Physics Lab",
      icon: <Atom className="w-8 h-8" />,
      description: "Explore quantum mechanics and particle physics",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Chemistry Lab",
      icon: <Beaker className="w-8 h-8" />,
      description: "Molecular interactions and reactions",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Biology Lab",
      icon: <Dna className="w-8 h-8" />,
      description: "DNA sequencing and cellular biology",
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "Space Lab",
      icon: <Rocket className="w-8 h-8" />,
      description: "Astrophysics and space exploration",
      color: "from-orange-500 to-red-600",
    },
  ]

  const exhibits = [
    { title: "Quantum Tunneling Simulator", image: "/placeholder.svg?height=200&width=300" },
    { title: "DNA Helix Visualizer", image: "/placeholder.svg?height=200&width=300" },
    { title: "Solar System Explorer", image: "/placeholder.svg?height=200&width=300" },
    { title: "Chemical Reaction Chamber", image: "/placeholder.svg?height=200&width=300" },
    { title: "Particle Accelerator Model", image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Virtual Science Centrum
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#labs" className="hover:text-cyan-400 transition-colors">
              Labs
            </a>
            <a href="#exhibits" className="hover:text-green-400 transition-colors">
              Exhibits
            </a>
            <a href="#events" className="hover:text-purple-400 transition-colors">
              Events
            </a>
            <a href="#portal" className="hover:text-blue-400 transition-colors">
              Portal
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Step Into the Future of Science
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Explore virtual laboratories, conduct experiments, and discover the mysteries of the universe in our
            immersive digital science center.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            <Play className="w-6 h-6 mr-3" />
            Start Exploring
          </Button>
        </div>
      </section>

      {/* Virtual Labs Showcase */}
      <section id="labs" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Virtual Laboratories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {labs.map((lab, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${lab.color} flex items-center justify-center text-white`}
                  >
                    {lab.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{lab.title}</h3>
                  <p className="text-gray-400 mb-6">{lab.description}</p>
                  <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Enter Lab
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Exhibits Preview */}
      <section id="exhibits" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
            Interactive Exhibits
          </h2>
          <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
            {exhibits.map((exhibit, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <Microscope className="w-16 h-16 text-purple-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{exhibit.title}</h3>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Zap className="w-4 h-4 mr-2" />
                    Launch Exhibit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Missions Section */}
      <section id="events" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Upcoming Events & Missions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Countdown Timer */}
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Next Live Experiment
                </h3>
                <div className="grid grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{timeLeft.days}</div>
                    <div className="text-gray-400">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">{timeLeft.hours}</div>
                    <div className="text-gray-400">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">{timeLeft.minutes}</div>
                    <div className="text-gray-400">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">{timeLeft.seconds}</div>
                    <div className="text-gray-400">Seconds</div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Join Live Event
                </Button>
              </CardContent>
            </Card>

            {/* Event Details */}
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Mission: Mars Exploration
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-3 text-blue-400" />
                    Duration: 2 hours
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-3 text-green-400" />
                    Max participants: 50 students
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Globe className="w-5 h-5 mr-3 text-purple-400" />
                    Virtual Reality Experience
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                  >
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Portal / Login Panel */}
      <section id="portal" className="relative z-10 py-20 px-6">
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-900/70 border-gray-700 backdrop-blur-md shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Student Portal
              </h2>
              <div className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg py-3">
                  <Lock className="w-5 h-5 mr-2" />
                  Access Portal
                </Button>
                <div className="text-center">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    New student? Create account
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Virtual Science Centrum
              </h3>
              <p className="text-gray-400">
                Inspiring the next generation of scientists through immersive virtual experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#labs" className="hover:text-cyan-400 transition-colors">
                    Virtual Labs
                  </a>
                </li>
                <li>
                  <a href="#exhibits" className="hover:text-green-400 transition-colors">
                    Exhibits
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-purple-400 transition-colors">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Virtual Science Centrum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
