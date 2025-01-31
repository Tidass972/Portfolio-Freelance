import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function AboutSection() {
  return (
    <section id="about" className="py-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/images/Codeur.jpg"
              alt="David Debarieux - Développeur Web Front-end"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent [--tw-drop-shadow: 0_20px_13px_rgb(0 0 0 / 0.3)] drop-shadow-[--tw-drop-shadow] hover:[--tw-drop-shadow: 0_25px_25px_rgb(0 0 0 / 0.4)] transition-all duration-300 relative after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-[30%] after:bg-gradient-to-t after:from-blue-600/30 after:to-purple-600/0 after:scale-y-[-1] after:blur-[4px] after:opacity-70 hover:after:opacity-100 after:transition-opacity after:duration-300">
              À propos de moi
            </h2>
            
            <div className="space-y-6">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
  {"Développeur front-end expérimenté, spécialisé dans la création d'interfaces web modernes et performantes. "}
  {"Expert en technologies web actuelles, je conçois des expériences utilisateur intuitives et engageantes, "}
  {"tout en assurant performance et réactivité des applications."}
</p>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Compétences clés */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/20 dark:from-gray-800/50 dark:to-gray-800/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Compétences clés
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge 
                      variant="secondary" 
                      className="relative overflow-hidden group font-medium text-black hover:text-black dark:text-gray-300 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white/70 to-white/30 dark:from-gray-800/70 dark:to-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-300/50 dark:hover:border-gray-600/50"
                    >
                      <span className="relative z-10">React</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className="relative overflow-hidden group font-medium text-black hover:text-black dark:text-gray-300 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white/70 to-white/30 dark:from-gray-800/70 dark:to-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-300/50 dark:hover:border-gray-600/50"
                    >
                      <span className="relative z-10">Next.js</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className="relative overflow-hidden group font-medium text-black hover:text-black dark:text-gray-300 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white/70 to-white/30 dark:from-gray-800/70 dark:to-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-300/50 dark:hover:border-gray-600/50"
                    >
                      <span className="relative z-10">TypeScript</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className="relative overflow-hidden group font-medium text-black hover:text-black dark:text-gray-300 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white/70 to-white/30 dark:from-gray-800/70 dark:to-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-300/50 dark:hover:border-gray-600/50"
                    >
                      <span className="relative z-10">Node.js</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className="relative overflow-hidden group font-medium text-black hover:text-black dark:text-gray-300 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white/70 to-white/30 dark:from-gray-800/70 dark:to-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-300/50 dark:hover:border-gray-600/50"
                    >
                      <span className="relative z-10">Tailwind CSS</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className="relative overflow-hidden group font-medium text-black hover:text-black dark:text-gray-300 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white/70 to-white/30 dark:from-gray-800/70 dark:to-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-300/50 dark:hover:border-gray-600/50"
                    >
                      <span className="relative z-10">PostgreSQL</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Badge>
                  </div>
                </div>

                {/* Certifications */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/20 dark:from-gray-800/50 dark:to-gray-800/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Certifications
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge 
                      variant="secondary" 
                      className="relative overflow-hidden group font-medium text-black hover:text-black dark:text-gray-300 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white/70 to-white/30 dark:from-gray-800/70 dark:to-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-300/50 dark:hover:border-gray-600/50"
                    >
                      <span className="relative z-10">AWS Certified</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className="relative overflow-hidden group font-medium text-black hover:text-black dark:text-gray-300 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white/70 to-white/30 dark:from-gray-800/70 dark:to-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-gray-300/50 dark:hover:border-gray-600/50"
                    >
                      <span className="relative z-10">Google Cloud</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
