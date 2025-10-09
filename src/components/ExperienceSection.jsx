import { useState } from "react";
import { Briefcase, Calendar, MapPin, Info, X } from "lucide-react";

export const ExperienceSection = () => {
   const [selectedExp, setSelectedExp] = useState(null);

   const experienceData = [
      {
         title: "Member",
         company: "Bina Nusantara Computer Club (BNCC)",
         type: "Organization",
         period: "2023 - 2024",
         location: "Jakarta, Indonesia",
         desc: "I enrolled in their Java programming class with a duration of 1 year.",
         tags: ["Java", "JavaFX"],
         details: {
            description:
            <>
               During my time in <strong>BNCC</strong>, I took part in an intensive Java programming course that covered <strong>Object-Oriented Programming (OOP)</strong> concepts, <strong>GUI development</strong> using <strong>JavaFX</strong>, and several project-based assignments. 
               You can check my projects here:{" "}
               <a 
                  href="https://github.com/Nicholas3/LnTMidProject_Java-E_NicholasUtama"
                  target="_blank" 
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
               >
                  Mid Project
               </a>{" "}
               and{" "}
               <a 
                  href="https://github.com/Nicholas3/LNTFinalProject_Java-E_NicholasUtama"
                  target="_blank"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
               >
                  Final Project
               </a>.
               <br /> Additionally, I participated in the <strong>Activist Selection Program</strong>, where I gained valuable experience despite not being selected.
            </>,
            image: "../public/images/Java.png", // letakkan di public/images/
         },
      },
      {
         title: "Pelatihan pengenalan komputer bagi siswa SD",
         company: "TFI BINUS",
         type: "Volunteer",
         period: "1 month",
         location: "Jakarta, Indonesia",
         desc: "Volunteered as an instructor in a 5-week program that focused on teaching basic computer skills to elementary school students.",
         tags: ["Patience", "Adaptability", "Communication"],
         details: {
            description:
               <>
                  Conducted a series of <strong>basic computer literacy training sessions</strong> for elementary school students every Friday from <strong>3:00 PM to 5:00 PM</strong>, with five sessions starting from <strong>September 20</strong>. <br />
                  Through this experience, I learned the importance of <strong>patience</strong>, <strong>adaptability</strong>, and honed my <strong>communication skills</strong> while teaching young learners.
               </>,
            image: "../public/images/volunteer-1.jpg",
         },
      },
   ];

   return (
      <section id="experiences"className="relative flex flex-col items-center justify-center md:px-16 py-24 px-4 relative">
         {/* Title */}
         <h2 className="text-3xl md:text-4xl font-bold mb-3 mt-3 text-center">
            <span className="text-primary">My</span> Experience
         </h2>
         <p className="text-muted-foreground text-center max-w-2xl mb-10">
            A diverse range of experiences spanning technical work, organizational leadership, and community volunteer efforts.
         </p>

         <div className="max-w-3xl w-full space-y-6">
            {experienceData.map((exp, index) => (
               <div
                  key={index}
                  className="gradient-border p-6 rounded-xl transition-transform duration-300 hover:scale-[1.02] card-hover relative"
               >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                     {/* Left side */}
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                           <Briefcase className="w-5 h-5 text-primary" />
                           <h3 className="font-semibold text-lg text-muted-foreground">
                              {exp.title}
                           </h3>
                           <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full ml-2">
                              {exp.type}
                           </span>
                        </div>
                        <p className="text-sm text-primary mb-2 font-semibold text-left">
                           {exp.company}
                        </p>

                        {/* Date & Location */}
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                           <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-primary/70" />
                              <span>{exp.period}</span>
                           </div>
                           <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-primary/70" />
                              <span>{exp.location}</span>
                           </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                           {exp.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                           {exp.tags.map((tag, idx) => (
                              <span
                                 key={idx}
                                 className="bg-primary/10 text-primary/80 text-xs px-3 py-1 rounded-full"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>

                     {/* Expand Button */}
                     <button
                        onClick={() => setSelectedExp(exp)}
                        className="absolute top-4 right-4 text-primary hover:text-primary/80 transition-colors"
                        title="View more details"
                     >
                        <Info className="w-5 h-5" />
                     </button>
                  </div>
               </div>
            ))}
         </div>

         {/* Modal Popup */}
         {selectedExp && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
               <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg max-w-lg w-full relative border border-primary/30">
                  <button
                     onClick={() => setSelectedExp(null)}
                     className="absolute top-3 right-3 text-muted-foreground hover:text-white transition"
                  >
                     <X className="w-5 h-5" />
                  </button>

                  <h3 className="text-xl font-semibold text-primary mb-1">
                     {selectedExp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                     {selectedExp.company} • {selectedExp.period}
                  </p>

                  {selectedExp.details?.image && (
                     <img
                        src={selectedExp.details.image}
                        alt={selectedExp.title}
                        className="rounded-lg mb-4 w-full object-cover"
                     />
                  )}

                  <p className="text-sm text-gray-300 leading-relaxed text-justify">
                     {selectedExp.details?.description}
                  </p>
               </div>
            </div>
         )}
      </section>
   );
};
