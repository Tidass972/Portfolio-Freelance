"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Carlito Donparet",
    role: "CEO, Tech Innovators Inc.",
    image: "/profil1.webp",
    content: "Un professionnel exceptionnel qui a su transformer nos idées en une plateforme performante et intuitive. Son expertise technique et sa créativité ont été déterminantes pour notre succès."
  },
  {
    name: "Sophie Marvin",
    role: "Directrice Technique, Digital Solutions",
    image: "/profil2.webp",
    content: "Collaboration exemplaire et livraison dans les délais. Les solutions proposées ont dépassé nos attentes en termes de qualité et de performance."
  },
  {
    name: "Pascal Leroy",
    role: "Directeur Artistique, Creative Studio",
    image: "/profil3.webp",
    content: "Une approche unique combinant design et technologie. Le résultat final a parfaitement capturé l'essence de notre marque tout en étant techniquement robuste."
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ce qu&rsquo;ils disent de moi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-200 dark:border-gray-800 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-20 h-20 border-4 border-white dark:border-gray-900 shadow-lg relative before:absolute before:-inset-2 before:rounded-full before:bg-white/20 before:dark:bg-gray-900/20 before:blur-sm">
                  <AvatarImage src={testimonial.image} className="object-cover" />
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
