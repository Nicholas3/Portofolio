import { Award, Code, ShieldCheck, Users, Lightbulb, Crown, MessageCircle, Globe, Shield, Cloud } from "lucide-react";

export const SkillsSection = () => {
   return (
      <section id="skills" className="py-24 px-4 relative">
         <div className="container mx-auto max-w-5xl">
            {/* Title  */}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               My <span className="text-primary">Skills</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Certified Courses -> later change to the certification*/}
               <div className="space-y-6 gradient-border p-6 card-hover rounded-xl transition-transform duration-300 hover:scale-105">
                  <h3 className="pb-6 text-2xl font-semibold text-primary">
                     Certified Online Course Completion
                  </h3>

                  <div className="flex flex-col justify-center items-center gap-6">
                     <a
                     href="https://www.credly.com/badges/532ade21-0c1e-4fa9-a855-7597eae68508"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-3 border border-white/30 hover:border-blue-400 transition-all duration-300 rounded-xl px-6 py-4 bg-white/5 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] w-full md:w-3/4"
                     >
                        <Shield className="text-2xl text-blue-400" />
                        <span className="text-lg font-medium text-left">
                           Introduction to Cyber Security <br />
                           <span className="text-sm text-gray-300">
                              by Cisco Networking Academy
                           </span>
                        </span>
                     </a>

                     <a
                     href="https://drive.google.com/file/d/1LJHUJPcxBpkpQAi0OYygCZpv2kRvtWYB/view?usp=sharing"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-3 border border-white/30 hover:border-yellow-400 transition-all duration-300 rounded-xl px-6 py-4 bg-white/5 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] w-full md:w-3/4"
                     >
                        <Cloud className="text-2xl text-yellow-400" />
                        <span className="text-lg font-medium text-left">
                           AWS Cloud Practitioner Essential <br />
                           <span className="text-sm text-gray-300">
                              by skillbuilder.aws
                           </span>
                        </span>
                     </a>
                  </div>
               </div>


               {/* ===== Skills Cards ===== */}
               <div className="space-y-8">
                  {/* Hard Skills */}
                  <div className="gradient-border p-6 card-hover rounded-xl transition-transform duration-300 hover:scale-105">
                     <h3 className="text-2xl font-semibold text-primary mb-6">
                        Hard Skills
                     </h3>

                     <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 border border-primary/20 rounded-xl p-3 hover:bg-primary/5 transition">
                           <Code className="h-5 w-5 text-primary" />
                           <span className="text-foreground/90 font-medium">
                              Programming and Development
                           </span>
                        </div>

                        <div className="flex items-center gap-3 border border-primary/20 rounded-xl p-3 hover:bg-primary/5 transition">
                           <ShieldCheck className="h-5 w-5 text-primary" />
                           <span className="text-foreground/90 font-medium">
                              Networking and Security
                           </span>
                        </div>
                     </div>
                  </div>

                  {/* Soft Skills */}
                  <div className="gradient-border p-6 card-hover rounded-xl transition-transform duration-300 hover:scale-105">
                     <h3 className="text-2xl font-semibold text-primary mb-6">
                        Soft Skills
                     </h3>

                     <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 border border-primary/20 rounded-xl p-3 hover:bg-primary/5 transition">
                           <Users className="h-5 w-5 text-primary" />
                           <span className="text-foreground/90 font-medium">Teamwork</span>
                        </div>

                        <div className="flex items-center gap-3 border border-primary/20 rounded-xl p-3 hover:bg-primary/5 transition">
                           <Lightbulb className="h-5 w-5 text-primary" />
                           <span className="text-foreground/90 font-medium">Problem Solving</span>
                        </div>

                        <div className="flex items-center gap-3 border border-primary/20 rounded-xl p-3 hover:bg-primary/5 transition">
                           <Crown className="h-5 w-5 text-primary" />
                           <span className="text-foreground/90 font-medium">Leadership</span>
                        </div>

                        <div className="flex items-center gap-3 border border-primary/20 rounded-xl p-3 hover:bg-primary/5 transition">
                           <MessageCircle className="h-5 w-5 text-primary" />
                           <span className="text-foreground/90 font-medium">Communication</span>
                        </div>

                        <div className="flex items-center gap-3 border border-primary/20 rounded-xl p-3 hover:bg-primary/5 transition">
                           <Globe className="h-5 w-5 text-primary" />
                           <span className="text-foreground/90 font-medium">
                              Proficient in English
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
