"use client";

import { useState } from "react";
import { content } from "@/data/content";
import MessageModal from "./MessageModal";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contact" className="py-24 bg-anthracite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-barlow font-bold text-4xl sm:text-5xl text-white mb-16 tracking-wider">
          CONTACT
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <a href={content.contact.cvFile} download className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-cyan text-white font-medium rounded-lg hover:bg-cyan/90 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {content.contact.cvButton}
            </a>
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {content.contact.contactButton}
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/70">
              <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${content.contact.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">{content.contact.phone}</a>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${content.contact.email}`} className="hover:text-white transition-colors">{content.contact.email}</a>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{content.contact.city}</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{content.contact.license}</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
            <span className="text-cyan font-medium">{content.contact.availability}</span>
          </div>
        </div>
      </div>

      <MessageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
