"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function VROverlay() {
  const [isOpen, setIsOpen] = useState(false)

  const openVR = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeVR = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <Button
        onClick={openVR}
        className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 animate-glow"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        Enter VR
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <svg
                className="w-16 h-16 text-white"
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
            <h2 className="text-4xl font-bold text-white mb-4">Entering VR Mode</h2>
            <p className="text-xl text-gray-300 mb-8">
              Put on your VR headset and prepare for an immersive science experience
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={closeVR}
                variant="outline"
                className="bg-gray-600 hover:bg-gray-700 text-white border-gray-600"
              >
                Cancel
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                Continue to VR
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
