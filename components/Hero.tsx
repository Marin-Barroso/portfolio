"use client";

import { useState } from "react";
import { content } from "@/data/content";
import MessageModal from "./MessageModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-anthracite">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="font-barlow font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4">
          {content.hero.name}
        </h1>
        <p className="text-cyan text-xl sm:text-2xl md:text-3xl font-medium mb-6">
          {content.hero.subtitle}
        </p>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          {content.hero.tagline}
        </p>

        <div className="inline-flex items-center px-4 py-2 bg-cyan/10 border border-cyan/30 rounded-full mb-10">
          <span className="w-2 h-2 bg-cyan rounded-full mr-3 animate-pulse" />
          <span className="text-cyan font-medium">{content.hero.badge}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#missions" className="px-8 py-4 bg-cyan text-white font-medium rounded-lg hover:bg-cyan/90 transition-colors">
            {content.hero.buttons.missions}
          </a>
          <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
            {content.hero.buttons.contact}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-barlow font-bold text-cyan mb-2">
              {content.missions.length}
            </div>
            <div className="text-white/60 text-sm">Missions détaillées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-barlow font-bold text-cyan mb-2">
              {content.timeline.experiences.filter(e => e.isAutomotive).length}
            </div>
            <div className="text-white/60 text-sm">Stages en garage et atelier</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-barlow font-bold text-cyan mb-2">
              2 ans
            </div>
            <div className="text-white/60 text-sm">Jiu-Jitsu brésilien</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-barlow font-bold text-cyan mb-2">
              15 ans
            </div>
            <div className="text-white/60 text-sm">Accordéon</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <MessageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
