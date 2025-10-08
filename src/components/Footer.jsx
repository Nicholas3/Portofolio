import { ArrowUp } from "lucide-react";

export const Footer = () => {
   return(
      <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
         <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} NicholasUtama. All rights reserved</p>

         <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 shadow-[0_0_6px_rgba(168,85,247,0.2)] hover:shadow-[0_0_11px_rgba(168,85,247,0.5)] scroll-smooth">
            <ArrowUp size={20} />
         </a>
      </footer>
   );
};