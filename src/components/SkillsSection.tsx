"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: "React",
    level: 95,
    icon: "react.svg",
    description: "Création d'interfaces utilisateur modernes et performantes",
    color: "linear-gradient(to bottom, #87CEFA, #0000FF)"
  },
  {
    name: "Next.js", 
    level: 90,
    icon: "nextjs.svg",
    description: "Développement d'applications full-stack",
    color: "linear-gradient(to bottom, #D3D3D3, rgba(0, 0, 0.50, 0.95))"
  },
  {
    name: "TypeScript",
    level: 85,
    icon: "typescript.svg",
    description: "Typage statique pour un code plus robuste et maintenable",
    color: "linear-gradient(to bottom, #87CEEB, #000080)"
  },
  {
    name: "Node.js",
    level: 80,
    icon: "nodejs.svg",
    description: "Développement backend scalable et performant",
    color: "linear-gradient(to bottom, #90EE90, #006400)"
  },
  {
    name: "Tailwind CSS",
    level: 95,
    icon: "tailwindcss.svg",
    description: "Stylisation rapide avec des classes utilitaires",
    color: "linear-gradient(to bottom, #00FFFF, #008B8B)"
  },
  {
    name: "GraphQL",
    level: 55,
    icon: "graphql.svg",
    description: "API modernes et flexibles pour les applications web",
    color: "linear-gradient(to bottom, #FF69B4, #8B008B)"
  }
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-texturina text-gray-900 dark:text-white">
          Compétences Techniques
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const gradientColor = skill.color.split(',')[1]?.trim() || '#000000';
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ 
                      background: skill.color,
                      backgroundImage: skill.color,
                      boxShadow: `0 4px 6px -1px ${gradientColor}, 0 2px 4px -2px ${gradientColor}`
                    }}
                  >
                    <img 
                      src={`/images/skills/${skill.icon}`}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <p className="text-sm text-black dark:text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div 
                    className="relative"
                    style={{ 
                      '--progress-color': skill.color.split(',')[1]?.trim() || '#000000'
                    } as React.CSSProperties}
                  >
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar"
                        style={{ 
                          width: `${skill.level}%`,
                          transformOrigin: 'left',
                          animation: 'progress-grow 1s ease-out forwards',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      />
                      <div 
                        className="skill-progress-hover"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between text-sm text-black dark:text-gray-300">
                  <span>Maîtrise</span>
                  <span>{skill.level}%</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
