"use client";

interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="card-glass rounded-xl p-6 hover:border-slate-700/50 transition-all">
      <h4 className="font-semibold text-lg mb-4 text-blue-400">{category}</h4>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-slate-400 text-sm flex items-center">
            <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
