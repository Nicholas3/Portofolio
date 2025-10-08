import { BookOpen, Rocket } from "lucide-react";

export const AboutSection = () => {
   const aboutCards = [
      {
         icon: <BookOpen className="w-6 h-6 text-primary" />,
         title: "Who I Am",
         desc: (
            <>
               My name is <span className="font-semibold text-muted-foreground">Nicholas Utama</span>, currently pursuing a Bachelor's degree in <span className="text-primary">Computer Science</span> at Binus University. I have a strong passion for <span className="font-semibold"> technology, coding,</span> and<span className="font-semibold"> problem-solving.</span> I'm dedicated to continuous learning and growth in the tech field, focusing on <span className="font-semibold">practical applications</span> and <span className="font-semibold">real-world impact.</span> In addition to my academic focus, I have a strong interest in <span className="text-primary font-semibold"> Cloud Computing</span> and <span className="text-primary font-semibold">Cyber Security.</span>
            </>
         ),
      },
      {
         icon: <Rocket className="w-6 h-6 text-primary" />,
         title: "My Mindset",
         desc: (
            <>
               I'm always open to <span className="text-primary font-semibold">new challenges</span>, enjoy collaborating with others, and constantly strive to <span className="text-primary font-semibold"> grow and expand my knowledge</span> through every opportunity I encounter. My guiding principle is <span className="italic"> "learn, adapt, and make an impact."</span>
            </>
         ),
      },
   ];


   return (
      <section
         id="about"
         className="py-24 px-4 relative"
      >
         <div className="max-w-4xl mx-auto text-center md:text-left space-y-10 z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
               {aboutCards.map((card, index) => (
                  <div
                     key={index}
                     className="gradient-border p-6 card-hover rounded-xl transition-transform duration-300 hover:scale-105"
                  >
                     {/* Header row: icon + title */}
                     <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 rounded-full bg-primary/10">{card.icon}</div>
                        <h4 className="font-semibold text-lg text-foreground">{card.title}</h4>
                     </div>

                     {/* Description below */}
                     <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                        {card.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
