"use client";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
export function PricingSection() {
    return (<section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Mes offres de services
          </h2>
          <p className="text-muted-foreground">
            Des solutions adaptées à vos besoins et à votre budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan Basique */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Simplement</h3>
            <div className="text-4xl font-bold mb-6">500€</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary"/>
                Site vitrine simple
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary"/>
                Design responsive
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary"/>
                Intégration CMS basique
              </li>
            </ul>
            <button className="w-full">Choisir ce plan</button>
          </Card>

          {/* Plan Professionnel */}
          <Card className="p-8 border-primary">
            <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm w-fit mb-4">
              Le plus populaire
            </div>
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <div className="text-4xl font-bold mb-6">950€</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary"/>
                Application web complète sur mesure
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary"/>
                Logo personnalisé
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary"/>
                Images fournis
              </li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground">
              Choisir ce plan
            </button>
          </Card>

          {/* Plan Entreprise */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Identité</h3>
            <div className="text-4xl font-bold mb-6">350€</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary"/>
                Logo
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary"/>
                Blog
              </li>
              <li className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-primary"/>
                Création de Newletter
              </li>
            </ul>
            <button className="w-full">Nous contacter</button>
          </Card>
        </div>
      </div>
    </section>);
}
