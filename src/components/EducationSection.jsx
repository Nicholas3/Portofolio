import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const EducationSection = () => {
   const educationData = [
      {
         school: "Binus University",
         major: "Computer Science",
         period: "2023 - Now",
         location: "Jakarta, Indonesia",
         desc: 
            <>
               Pursuing a Bachelor's degree in Computer Science, streaming in Network Technology.
               <span className="text-primary font-medium"><br></br>Current GPA: 3.81</span>
            </>,
         status: "Current",
      },
      {
         school: "SMA Sutomo 1 Medan",
         major: "Science Major",
         period: "2020 - 2023",
         location: "Medan, Indonesia",
         desc: "Completed high school education with a concentration in Science, building a strong foundation in mathematics and analytical thinking. ",
         status: "Graduated",
      },
   ];

   return (
      <section
         className="relative flex flex-col items-center justify-center px-6 md:px-16"
      >
         {/* Title */}
         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary">Education</span> Background
         </h2>

         <div className="max-w-3xl w-full space-y-6">
            {educationData.map((edu, index) => (
               <div
                  key={index}
                  className="gradient-border p-6 rounded-xl transition-transform duration-300 hover:scale-[1.02] card-hover"
               >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                     {/* Left side */}
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                           <GraduationCap className="w-5 h-5 text-primary" />
                           <h3 className="font-semibold text-xl text-muted-foreground">{edu.school}</h3>
                        </div>
                        <p className="text-sm text-primary mb-3 text-left font-semibold">{edu.major}</p>

                        {/* Date & Location */}
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                           <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-primary/70" />
                              <span>{edu.period}</span>
                           </div>
                           <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-primary/70" />
                              <span>{edu.location}</span>
                           </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed text-left">
                           {edu.desc}
                        </p>
                     </div>

                     {/* Right side (Status badge) */}
                     <div className="mt-4 md:mt-0">
                        <span
                           className={`px-4 py-1 text-xs font-medium rounded-full ${
                              edu.status === "Current"
                                 ? "bg-primary/20 text-primary"
                                 : "bg-green-500/20 text-green-400"
                           }`}
                        >
                           {edu.status}
                        </span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};
