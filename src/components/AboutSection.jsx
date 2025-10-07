import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
   return (
      <section id="about" className="py-24 px-4 relative">
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Passion</h3>

                  <p className="text-muted-foreground">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reiciendis sunt earum inventore illo harum repellendus voluptatibus doloremque facilis beatae voluptas porro fuga nesciunt cum quo praesentium, minima quisquam officiis.
                  </p>

                  <p className="text-muted-foreground">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe fugit id dignissimos cum. Omnis, dicta quia saepe consequuntur a, laudantium, alias dolores provident quibusdam velit ea exercitationem quisquam aliquam?
                  </p>

                  <div className="flex sm:flex-row gap-4 pt-4 justify-center">
                     <a href="#contact" className="cosmic-button">Get In Touch</a>

                     <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        View CV
                     </a>
                  </div>
               </div>

               
               {/* card section */}
               <div className="grid grid-cols-1 gap-6">
                  {[
                     {
                        icon: <Code className="h-6 w-6 text-primary" />,
                        title: "Student",
                        desc: "Passionate about AI, software development, and cloud computing.",
                     },
                     {
                        icon: <User className="h-6 w-6 text-primary" />,
                        title: "Collaborator",
                        desc: "Enjoys building creative and technical projects with a team.",
                     },
                     {
                        icon: <Briefcase className="h-6 w-6 text-primary" />,
                        title: "Experience",
                        desc: "Worked with React, Tailwind, and backend tech like Node.js & Laravel.",
                     },
                  ].map((card, index) => (
                     <div
                        key={index}
                        className="gradient-border p-6 card-hover rounded-xl transition-transform duration-300 hover:scale-105"
                     >
                        <div className="flex items-start gap-4">
                           <div className="p-3 rounded-full bg-primary/10">{card.icon}</div>
                           <div className="text-left">
                              <h4 className="font-semibold text-lg text-foreground">
                                 {card.title}
                              </h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                 {card.desc}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};