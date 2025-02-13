"use client";
import { Code, Cpu, Rocket, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Button from "@/components/ui/button";
const services = [
    {
        icon: <Code className="w-8 h-8"/>,
        title: "Développement Front-end",
        description: "Conception d'interfaces utilisateur modernes, rapides et adaptées à tous les appareils, grâce aux technologies web les plus récentes."
    },
    {
        icon: <Cpu className="w-8 h-8"/>,
        title: "Accessibilité Web",
        description: "Garantissez un site inclusif et conforme aux standards d’accessibilité pour toucher un public plus large et améliorer votre image."
    },
    {
        icon: <Rocket className="w-8 h-8"/>,
        title: "Optimisation SEO",
        description: "Boostez la visibilité de votre site sur les moteurs de recherche avec des performances optimales et un contenu stratégique."
    },
    {
        icon: <Search className="w-8 h-8"/>,
        title: "Audit Technique",
        description: "Diagnostic approfondi de votre application pour détecter et corriger les problèmes impactant vos performances."
    }
];
export default function ServicesSection() {
    return (<section id="services" className="py-20 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mes Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (<Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
                <Button variant="outline" className="mt-4 hover:scale-105 transition-transform duration-200">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>))}
        </div>
      </div>
    </section>);
}
