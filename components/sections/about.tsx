"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/skill-card";

const skills = {
  Frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/ui",
    "Redux",
    "Framer Motion",
  ],
  Backend: [
    "Node.js",
    "Ruby on Rails",
    "Supabase",
    "PostgreSQL",
    "Drizzle ORM",
    "REST APIs",
  ],
  "Tools & Methods": ["Git", "GitHub", "Vercel", "Docker", "TDD", "Figma"],
  Other: [
    "Responsive Design",
    "SEO",
    "Accessibility",
    "Performance Optimization",
    "Security",
  ],
};

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2022 - Present",
    description:
      "Building modern web applications for various clients, focusing on clean code and user experience.",
  },
  {
    role: "Mentor",
    company: "Microverse",
    period: "2022",
    description:
      "Mentored aspiring web developers through code reviews and technical guidance.",
  },
];

export default function About() {
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
    <section id="about" className="section-spacing px-4 pt-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            I&apos;m a results-driven Full-Stack Developer with 3+ years of
            experience building modern, scalable web applications. I specialize
            in Next.js, React, TypeScript, and Supabase, with growing expertise
            in Ruby on Rails and secure authentication systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 card-glass rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-slate-400 leading-relaxed">
              Beyond technical execution, I excel at remote collaboration and
              mentoring, ensuring high-quality, maintainable code is delivered
              on time. I&apos;m passionate about clean architecture,
              performance, and building products that users love.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 card-glass rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="border-l-2 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-lg">{exp.role}</h4>
                  <p className="text-cyan-400 text-sm">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-slate-400 text-sm mt-2">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-3xl font-bold mb-8">Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div key={category} variants={itemVariants}>
                <SkillCard category={category} skills={items} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
