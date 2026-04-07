
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-6"
        >
          Strategic Excellence · Proven Results
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-4xl mx-auto"
        >
          Transforming Vision into{" "}
          <span className="text-gradient-gold">Measurable Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6"
        >
          We partner with ambitious organizations to unlock potential, drive innovation, and deliver sustainable competitive advantage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="bg-gradient-gold font-body font-semibold text-accent-foreground px-8 py-3.5 rounded-md shadow-gold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Schedule Consultation <ArrowRight size={18} />
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="border border-border font-body font-medium text-foreground px-8 py-3.5 rounded-md hover:bg-secondary transition-colors"
          >
            Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
