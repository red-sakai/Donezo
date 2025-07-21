"use client"
import Image from "next/image";
import Link from "next/link";

// main landing page component for donezo task management app
export default function Home() {
  return (
    // main container with dark gradient background
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* hero section with animated background and main content */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* floating animated background elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden">
          {/* top-right floating gradient circle */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full blur-3xl animate-float"></div>
          {/* bottom-left floating gradient circle */}
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full blur-3xl animate-float-delayed"></div>
          {/* center pulsing gradient circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* main content container with responsive grid layout */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* left column: text content and call-to-action buttons */}
            <div className="text-center lg:text-left space-y-8 animate-slide-up">

              {/* main heading with gradient text effect */}
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent leading-tight mb-6">
                  Welcome to
                  <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Donezo
                  </span>
                </h1>
                {/* descriptive paragraph explaining the app's purpose */}
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Your personal task management companion that helps you stay organized and productive. 
                  <span className="block mt-2 font-medium text-gray-100">Get things done, one task at a time.</span>
                </p>
              </div>

              {/* desktop call-to-action buttons with hover effects */}
              <div className="hidden lg:flex items-center gap-6">
                {/* primary register button with gradient background */}
                <Link href="/register" className="group">
                  <button className="relative bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group-hover:scale-105">
                    <span className="relative z-10">Start Organizing</span>
                    {/* hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
                {/* secondary login button with glass morphism effect */}
                <Link href="/login" className="group">
                  <button className="relative bg-gray-800/80 backdrop-blur-sm text-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-600/50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group-hover:bg-gray-700/80">
                    Sign In
                  </button>
                </Link>
              </div>

              {/* feature highlights with icons - desktop only */}
              <div className="hidden lg:flex items-center gap-8 pt-8">
                {/* personal & private feature */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    {/* checkmark icon */}
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Personal & Private</span>
                </div>
                {/* easy to use feature */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Easy to Use</span>
                </div>
                {/* always accessible feature */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Always Accessible</span>
                </div>
              </div>
            </div>

            {/* right column: laptop showcase image - desktop only */}
            <div className="hidden lg:flex justify-center items-center animate-slide-up-delayed">
              <Image
                src="/donezo laptop.png"
                alt="Donezo laptop showcase"
                width={800}
                height={600}
                className="transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile sticky call-to-action section at bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50 p-6 shadow-2xl">
          <div className="max-w-sm mx-auto space-y-4">
            {/* mobile primary button */}
            <Link href="/register">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform active:scale-95 transition-all duration-200">
                Start Organizing
              </button>
            </Link>
            {/* mobile secondary button */}
            <Link href="/login">
              <button className="w-full bg-gray-700 text-gray-100 py-4 rounded-2xl font-semibold text-lg border border-gray-600 hover:bg-gray-600 transform active:scale-95 transition-all duration-200">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* global styles for animations and custom scrollbar */}
      <style jsx global>{`
        /* floating animation for background elements */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        /* delayed floating animation with different timing */
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        /* slide up animation for content entrance */
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* delayed slide up animation for staggered entrance */
        @keyframes slide-up-delayed {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* animation class definitions */
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delayed {
          animation: slide-up-delayed 0.8s ease-out 0.2s both;
        }
        
        /* smooth scrolling behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* custom scrollbar styling for webkit browsers */
        body::-webkit-scrollbar {
          width: 8px;
        }
        
        body::-webkit-scrollbar-track {
          background: transparent;
        }
        
        body::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 4px;
        }
        
        body::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.8);
        }
      `}</style>
    </main>
  );
}