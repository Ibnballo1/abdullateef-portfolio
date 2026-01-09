"use client";

import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ibnballo1", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/abdullateef-bello/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com/webprotekh", label: "Twitter" },
    {
      icon: Mail,
      href: "mailto:belloabdullateef035@gmail.com",
      label: "Email",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl opacity-20" />

      <motion.div
        className="max-w-4xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro Text */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-blue-400 text-sm font-semibold tracking-wide">
            FULL-STACK DEVELOPER
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          I build modern web
          <br />
          applications that scale.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed"
        >
          Full-stack developer with 3+ years of experience building scalable
          applications using Next.js, React, TypeScript, and Supabase. I
          specialize in clean code, great user experiences, and solving complex
          problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Link
            href="#projects"
            className="button-primary inline-flex items-center justify-center gap-2 group"
          >
            View My Work
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="#contact"
            className="button-secondary inline-flex items-center justify-center"
          >
            Get In Touch
          </Link>
          {/* Download Resume */}
          <Link
            href="/Abdullateef Bello Resume_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center justify-center"
          >
            Download Resume
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 transform"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-slate-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
