import { BookOpen, Rocket } from "lucide-react";

export const AboutSection = () => {
   const aboutCards = [
      {
         icon: <BookOpen className="w-6 h-6 text-primary" />,
         title: "Who I Am",
         desc: (
            <>
               Saya adalah <span className="font-semibold text-muted-foreground">Nicholas Utama</span>, saat ini sedang menempuh pendidikan S1 di jurusan <span className="text-primary">Computer Science</span> di Binus University. Saya memiliki minat yang kuat terhadap <span className="font-semibold"> teknologi, pemrograman,</span> dan <span className="font-semibold"> problem solving</span>. Saya berkomitmen untuk terus belajar, berkembang, serta menerapkan pengetahuan saya dalam menciptakan solusi yang bermanfaat di dunia teknologi.
            </>
         ),
      },
      {
         icon: <Rocket className="w-6 h-6 text-primary" />,
         title: "My Mindset",
         desc: (
            <>
               Saya terbuka terhadap <span className="text-primary font-semibold">tantangan baru</span>, senang berkolaborasi dengan orang lain, dan selalu berusaha untuk <span className="text-primary font-semibold"> terus tumbuh serta memperluas wawasan</span> dalam setiap kesempatan yang saya temui. Prinsip saya adalah <span className="italic"> learn, adapt, and make an impact.</span>
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
