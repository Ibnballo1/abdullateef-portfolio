"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "belloabdullateef035@gmail.com",
    href: "mailto:belloabdullateef035@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/abdullateef-bello/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my repos",
    href: "https://github.com/ibnballo1",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@webprotekh",
    href: "https://twitter.com/webprotekh",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-spacing px-4 pt-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s create something amazing
            together. Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-glass rounded-xl p-6 hover:border-slate-700/50 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                        <Icon size={24} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.label}</h3>
                        <p className="text-slate-400 text-sm">{method.value}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 text-center text-slate-400"
        >
          <p>
            © {new Date().getFullYear()} Abdullateef Bello. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed and built with Next.js, React, Tailwind CSS, and Framer
            Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
