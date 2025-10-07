import { ArrowRight, Brain, ExternalLink, Github, Layers, Monitor, Server } from "lucide-react";

const projects = [
   {
      id: 1,
      title: "Nutrifit",
      description:
         "Aplikasi yang dibuat untuk menyediakan rekomendasi nutrisi, dan membuat hidup lebih sehat sesuai dengan SDG 2 dan 3. Pada project ini peran saya adalah membuat prototype dari figma, membuat frontend dengan React Native, berkolaborasi secara aktif dalam tim, serta berkontribusi pada laporan projek.",
      tags: ["Figma", "React Native", "Expo Go"],
      icon: <Layers className="text-primary w-6 h-6" />,
      url: "#",
   },
   {
      id: 2,
      title: "Ubuntu Server & Storage Security Implementation",
      description:
         "Mengerjakan dokumentasi terkait keamanan server serta pengelolaan storage pada Ubuntu Server. Cakupan proyek ini meliputi konfigurasi SSH, pengaturan firewall, serta penerapan Logical Volume Manager, dan full disk encryption (LUKS).",
      tags: ["Ubuntu"],
      icon: <Server className="text-primary w-6 h-6" />,
      url: "#",
   },
   {
      id: 3,
      title: "Accent Classification",
      description:
         "Mengembangkan model klasifikasi aksen menggunakan ECAPA-TDNN untuk mengatasi masalah catastrophic forgetting pada sistem pengenalan suara. Pada projek ini peran saya adalah menyusun paper, mendesign poster penelitian, menyusun script presentasi, mencari references, dan berkolaborasi secara aktif dalam tim.",
      tags: ["ECAPA-TDNN", "Python"],
      icon: <Brain className="text-primary w-6 h-6" />,
      url: "#",
   },
   {
      id: 4,
      title: "Ashpatl 9 Rejens",
      description:
         "Website yang bertema game racing yang terinspirasi dari Ashpatl 9 yang merupakan project saya pada Semester 2. Projek ini dimulai dengan prototyping dengan Figma, lalu diimplementasikan dengan HTML, CSS, dan JS.",
      tags: ["Figma", "HTML", "CSS", "JavaScript"],
      icon: <Monitor className="text-primary w-6 h-6" />,
      url: "#",
   },
];

export const ProjectsSection = () => {
   return (
      <section id="projects" className="py-24 px-4 relative">
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
               Here are some of my recent/highlighted projects in my university.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project) => (
                  <div
                  key={project.id}
                  className="group bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md card-hover p-6 border border-white/10 hover:border-primary/50 transition-all duration-300"
                  >
                     <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           {project.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                     </div>

                     <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                           <span
                              key={tag}
                              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                           >
                              {tag}
                           </span>
                        ))}
                     </div>

                     <p className="text-justify text-muted-foreground text-sm mb-6">
                        {project.description}
                     </p>

                     <div className="flex justify-between items-center">
                        <a
                           href={project.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                           View Project <ExternalLink size={18} />
                        </a>
                     </div>
                  </div>
               ))}
            </div>

            <div className="text-center mt-12">
               <a
                  href="https://github.com/Nicholas3"
                  className="cosmic-button w-fit flex items-center mx-auto gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Github size={18} /> Check My Github <ArrowRight size={16} />
               </a>
            </div>
         </div>
      </section>
   );
};