import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media and Publicity (MNP) | AnC Council",
  description: "Explore the Media and Publicity vertical of AnC Council at IIT Kanpur — branding, creative content, and strategic outreach.",
};

export default function MNPPage() {
  const domains = [
    {
      title: "Branding & Design",
      description: "Crafting impactful visuals, posters, and identity systems that give AnC's initiatives a strong and recognizable presence.",
      icon: (
        <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v3m-6 13l6-6m0 0l6 6m-6-6V3" />
        </svg>
      )
    },
    {
      title: "Digital Presence",
      description: "Managing social media, the council's website, and online channels to ensure consistent, timely, and engaging communication.",
      icon: (
        <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 010 18 15.3 15.3 0 010-18z" />
        </svg>
      )
    },
    {
      title: "Strategic Outreach",
      description: "Ensuring academic and career opportunities reach every student through well-timed, well-targeted publicity campaigns.",
      icon: (
        <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    }
  ];

  const socials = [
    {
      label: "LinkedIn",
      href: "https://in.linkedin.com/company/anciitk",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/anciitk/?hl=en",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
        </svg>
      )
    },
    {
      label: "Medium",
      href: "https://medium.com/@ug_anc",
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-35 md:pt-40 xl:pb-20 xl:pt-46">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent dark:from-indigo-900/15 pointer-events-none"></div>
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 mb-6">
              Official Student Council Vertical
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Media and Publicity <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">(MNP)</span>
            </h1>
            <p className="text-lg md:text-xl text-waterloo dark:text-manatee mb-8 leading-relaxed">
              The Media and Publicity Vertical of AnC Council at IIT Kanpur is dedicated to strengthening the council&apos;s communication and outreach through effective branding, creative content, and strategic publicity. We focus on designing impactful visuals, managing digital presence, and ensuring that important academic and career opportunities reach students effectively. Through consistent communication and innovative approaches, we aim to enhance student engagement and build a strong identity for AnC&apos;s initiatives.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="#domains"
                className="bg-primary hover:bg-primaryho text-white font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Our Domains
              </a>
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 text-black dark:text-white border border-stroke dark:border-strokedark font-medium px-6 py-3 rounded-full transition-all duration-300"
                >
                  {social.icon}
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About & Core Domains Section */}
      <section id="domains" className="py-16 md:py-24 bg-gray-50 dark:bg-blacksection border-t border-stroke dark:border-strokedark">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Focus Domains</h2>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 mb-4"></div>
            <p className="text-waterloo dark:text-manatee">
              Our work spans across branding, digital communication, and outreach — making sure AnC&apos;s voice reaches every student clearly and consistently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {domains.map((domain, i) => (
              <div
                key={i}
                className="bg-white dark:bg-black rounded-2xl border border-stroke dark:border-strokedark p-8 transition-all duration-300 hover:shadow-solid-4 hover:-translate-y-1"
              >
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 w-fit mb-6">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{domain.title}</h3>
                <p className="text-waterloo dark:text-manatee text-sm leading-relaxed">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
