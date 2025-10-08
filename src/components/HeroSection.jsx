import { ArrowDown, FileDown, FileText, Info, Mail } from "lucide-react";


export const HeroSection = () => {
   return (
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
         <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
               {/* Profile Photo */}
               <div className="flex justify-center mb-4 opacity-0 animate-fade-in">
                  <img
                     src="../images/profile_picture.jpg" // <-- replace with your actual path
                     alt="Nicholas Utama"
                     className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/40 shadow-[0_0_20px_rgba(96,165,250,0.4)]"
                  />
               </div>

               {/* Name */}
               <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                  <span className="text-primary opacity-0 animate-fade-in-delay-1"> Nicholas</span>
                  <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Utama</span>
               </h1>

               <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                  Computer Science Student
               </p>
               
               {/* button */}
               <div className="flex flex-wrap justify-center gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
                  <a
                     href="#contact"
                     className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:shadow-[0_0_15px_rgba(96,165,250,0.7)] transition-all duration-300"
                  >
                     <Mail className="h-5 w-5" />
                     Get in Touch
                  </a>

                  <a
                     href="https://docs.google.com/document/d/1Udm-qoVn8j2Or4w0XDTmPOxpm5_xw6IICpIesHDJjio/edit?usp=sharing"
                     target="_blank"
                     className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] transition-all duration-300"
                  >
                     <FileText className="h-5 w-5" />
                     View CV
                  </a>

                  <a
                     href="#about"
                     className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300"
                  >
                     <Info className="h-5 w-5" />
                     Learn More
                  </a>
               </div>

            </div>
         </div>

         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
         </div>
      </section>
   );
};