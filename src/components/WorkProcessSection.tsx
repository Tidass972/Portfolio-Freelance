"use client"

import { motion } from "framer-motion"

const processSteps = [
  {
    step: 1,
    title: "Conception",
    description: "Analyse des besoins et création des wireframes",
    icon: "📐"
  },
  {
    step: 2,
    title: "Développement",
    description: "Implémentation des fonctionnalités avec tests unitaires",
    icon: "💻"
  },
  {
    step: 3,
    title: "Revue & Tests",
    description: "Validation des fonctionnalités et tests d'intégration",
    icon: "🧪"
  },
  {
    step: 4,
    title: "Déploiement",
    description: "Mise en production avec monitoring et optimisation",
    icon: "🚀"
  }
]

export function WorkProcessSection() {
  return (
    <section id="work-process" className="py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ma Méthodologie
          </h2>
          <p className="text-muted-foreground">
            Une approche structurée pour des résultats optimaux
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="text-sm text-muted-foreground mb-2">
                Étape {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
