import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
   return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
         <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
               I'm always open to discussing new opportunities or collaboration. Feel free to reach out.
            </p>

            <div className="flex flex-col items-center space-y-10">
               {/* Contact Info Box */}
               <div className="w-full max-w-3xl bg-card/30 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(96,165,250,0.2)] transition-shadow duration-500">
                  <h3 className="text-2xl font-semibold text-center mb-8">
                     Contact Information
                  </h3>

                  <div className="space-y-6">
                     {/* Email */}
                     <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-6 py-4 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] transition-all duration-300">
                        <Mail className="h-6 w-6 text-blue-400 mr-4" />
                        <div>
                           <h4 className="font-medium text-muted-foreground text-justify">Email</h4>
                           <a
                              href="mailto:nicholasutama6@gmail.com"
                              className="text-muted-foreground hover:text-blue-400 transition-colors"
                           >
                              nicholasutama6@gmail.com
                           </a>
                        </div>
                     </div>

                     {/* Phone */}
                     <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-6 py-4 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] transition-all duration-300">
                        <Phone className="h-6 w-6 text-blue-400 mr-4" />
                        <div>
                           <h4 className="font-medium text-muted-foreground text-justify">Phone</h4>
                           <p className="text-muted-foreground">08882123131</p>
                        </div>
                     </div>

                     {/* Location */}
                     <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-6 py-4 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] transition-all duration-300">
                        <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                        <div>
                           <h4 className="font-medium text-muted-foreground text-justify">Location</h4>
                           <p className="text-muted-foreground">Kemanggisan</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Connect With Me Box */}
               <div className="w-full max-w-3xl bg-card/30 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(96,165,250,0.2)] transition-shadow duration-500">
                  <h4 className="font-medium text-center mb-6 text-xl">
                     Connect With <span className="text-primary"> Me </span>
                  </h4>
                  <div className="flex justify-center space-x-6">
                     <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-all duration-300"
                     >
                        <Linkedin className="h-6 w-6 text-blue-400" />
                     </a>

                     <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-all duration-300"
                     >
                        <Github className="h-6 w-6 text-blue-400" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
  );
};
