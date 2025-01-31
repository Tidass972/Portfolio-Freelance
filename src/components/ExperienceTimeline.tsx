"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "@radix-ui/react-icons"

const experiences = [
  {
    company: "Tech Innovators",
    position: "Développeur Full Stack",
    startDate: "2023-01",
    endDate: "Présent",
    description: "Développement d'applications web modernes avec React et Node.js",
    technologies: ["React", "Node.js", "TypeScript", "GraphQL"],
  },
  {
    company: "Web Solutions",
    position: "Développeur Front-end",
    startDate: "2021-06",
    endDate: "2022-12",
    description: "Création d'interfaces utilisateur performantes et accessibles",
    technologies: ["React", "Redux", "Sass", "Jest"],
  },
  {
    company: "Code Masters",
    position: "Développeur Junior",
    startDate: "2020-01",
    endDate: "2021-05",
    description: "Participation à des projets web variés et apprentissage des bonnes pratiques",
    technologies: ["JavaScript", "HTML", "CSS", "PHP"],
  },
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Parcours Professionnel
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 w-px h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-16`}
              >
                <div className="w-1/2 transform transition-all duration-500 hover:scale-105">
                  <Card className="p-8 rounded-3xl shadow-2xl hover:shadow-3xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center gap-3 mb-6">
                      <CalendarIcon className="w-6 h-6 text-blue-500" />
                      <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {exp.position} @ {exp.company}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-1 transition-transform"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
