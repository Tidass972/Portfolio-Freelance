"use client";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
const articles = [
    {
        title: "5 tendances de développement web à suivre en 2025",
        description: "Découvrez les technologies émergentes qui vont révolutionner le développement web dans les prochaines années.",
        image: "/images/blog/blog1.jpg",
        date: "15 Janvier 2025",
        tags: ["Tendances", "Technologie"]
    },
    {
        title: "Pourquoi choisir Next.js pour vos projets web ?",
        description: "Une analyse approfondie des avantages de Next.js pour le développement moderne d'applications web.",
        image: "/images/blog/blog2.jpg",
        date: "10 Janvier 2025",
        tags: ["Next.js", "Performance"]
    },
    {
        title: "Optimisation des performances web : les meilleures pratiques",
        description: "Guide complet pour améliorer les performances de vos applications web.",
        image: "/images/blog/blog3.jpg",
        date: "5 Janvier 2025",
        tags: ["Performance", "Optimisation"]
    }
];
export default function BlogSection() {
    return (<section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Blog & Ressources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (<Card key={index} className="hover:shadow-lg transition-shadow">
              <Link href="#">
                <div className="relative aspect-video overflow-hidden">
        <Image src={article.image} alt={article.title} width={800} height={450} className="rounded-lg object-cover w-full aspect-video" priority={index === 0}/>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    {article.tags.map((tag, i) => (<span key={i} className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {tag}
                      </span>))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.description}
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {article.date}
                  </div>
                </div>
              </Link>
            </Card>))}
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
            Voir tous les articles
          </Link>
        </div>
      </div>
    </section>);
}
