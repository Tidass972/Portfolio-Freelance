import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedHeader } from "./AnimatedHeader";
import { Texturina } from 'next/font/google';

const texturina = Texturina({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-texturina'
});

interface HeroSectionProps {
  name: string;
  tagline: string;
  backgroundImage: string;
}

export default function HeroSection({
  name = "David Debarieux",
  tagline = "Transformez votre activité avec un site vitrine irrésistible, conçu pour attirer et fidéliser vos clients.",
  backgroundImage = "/images/hero.jpg"
}: HeroSectionProps) {
  return (
    <section 
      className="relative min-h-[120vh] flex items-center justify-center py-40"
      aria-label="Section d'accueil"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Fond d'écran moderne avec des éléments technologiques"
          fill
          className="object-cover h-[120vh]"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />
        <div 
          className="absolute inset-0 bg-black/50" 
          aria-hidden="true"
        />
      </div>

      <div className="text-center space-y-6 max-w-2xl px-4 animate-fade-in-up">
        <AnimatedHeader 
          text={name}
          className={`text-4xl md:text-5xl font-bold text-white ${texturina.variable} font-texturina`}
        />
        <p className="text-lg md:text-xl text-gray-100">
          {tagline}
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            variant="default" 
            size="lg"
            aria-label="Voir mes projets"
            className="hover:scale-105 transition-transform duration-200"
            href="#projects"
          >
            Voir mes projets
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            aria-label="Me contacter"
            className="hover:scale-105 transition-transform duration-200"
            href="#contact"
          >
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  );
}
