"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import projects from "@/data/projects.json"

export function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="py-40 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Projets Phares
          </h2>
          <p className="text-muted-foreground">
            Découvrez mes réalisations les plus marquantes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col bg-background/50 backdrop-blur-sm">
                <div className="relative h-40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover shadow-md group-hover:shadow-lg transition-shadow"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-sm text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url}
                    className="mt-4 text-primary hover:underline"
                  >
                    Voir le projet →
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
