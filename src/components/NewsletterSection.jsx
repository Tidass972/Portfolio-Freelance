"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { Mail } from "lucide-react";
export function NewsletterSection() {
    return (<section id="newsletter" className="py-20 bg-secondary/10">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Restez informé
          </h2>
          <p className="text-muted-foreground mb-8">
            Recevez les dernières actualités, articles et conseils directement dans votre boîte mail.
          </p>

          <Card className="p-6">
            <form className="flex gap-4">
              <Input type="email" placeholder="Votre email" required className="flex-1"/>
              <Button type="submit">
                <Mail className="mr-2 h-4 w-4"/>
                S&#39;abonner
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-3">
              Nous ne partagerons jamais votre email.
            </p>
          </Card>
        </div>
      </div>
    </section>);
}
