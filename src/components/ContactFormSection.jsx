"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import { Send } from "lucide-react";
export function ContactFormSection() {
    return (<section id="contact" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          Contactez-moi
        </h2>

        <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-lg rounded-2xl shadow-2xl shadow-blue-500/20 hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-white/80">
                  Nom complet
                </label>
                <Input id="name" placeholder="Votre nom" required className="bg-white/5 border-white/10 focus:ring-2 focus:ring-purple-500/50"/>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/80">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" required className="bg-white/5 border-white/10 focus:ring-2 focus:ring-purple-500/50"/>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-white/80">
                Message
              </label>
              <Textarea id="message" placeholder="Votre message..." rows={5} required className="bg-white/5 border-white/10 focus:ring-2 focus:ring-purple-500/50"/>
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Send className="mr-2 h-4 w-4"/>
              Envoyer le message
            </Button>
          </form>
        </Card>
      </div>
    </section>);
}
