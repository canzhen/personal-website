import React from 'react';
import { Code2, Layout, Database, Terminal } from 'lucide-react';

interface SkillsProps {
  t: (key: string) => string;
}

export function Skills({ t }: SkillsProps) {
  const skills = [
    {
      category: "Backend",
      icon: <Code2 className="w-6 h-6" />,
      items: ["Golang", "Node.js", "Java Spring", "REST APIs"]
    },
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      items: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      items: ["PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "Tools",
      icon: <Terminal className="w-6 h-6" />,
      items: ["Terraform", "Kubernetes", "Docker", "Git", "VS Code", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('skills.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                {skill.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{skill.category}</h3>
              <ul className="mt-2 text-gray-500">
                {skill.items.map((item) => (
                  <li key={item} className="mt-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}