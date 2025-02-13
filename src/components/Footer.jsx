"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (<footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="container grid gap-8 py-16 md:grid-cols-4">
        {/* Section À propos */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">À propos</h3>
          <p className="text-sm text-muted-foreground">
            {"Développeur web passionné, spécialisé dans la création d'expériences numériques modernes et performantes."}
          </p>
        </div>

        {/* Section Liens rapides */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Liens rapides</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projets
            </Link>
            <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Section Réseaux sociaux */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Réseaux sociaux</h3>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <FaGithub className="h-5 w-5"/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <FaLinkedin className="h-5 w-5"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <FaTwitter className="h-5 w-5"/>
            </a>
          </div>
        </div>

        {/* Section Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <form className="flex flex-col space-y-2">
            <input type="email" placeholder="Votre email" className="px-4 py-2 rounded-md border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
            <button type="submit" className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              {"S'abonner"}
            </button>
          </form>
        </div>
      </div>

      {/* Bas de footer */}
      <div className="border-t py-6">
        <div className="container flex items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} David Debarieux Tous droits réservés</p>
          <div className="flex space-x-4">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>);
}
