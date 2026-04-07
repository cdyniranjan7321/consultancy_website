import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ApexConsul transformed our go-to-market strategy. Revenue grew 40% within the first year of engagement.",
    name: "Sarah Chen",
    role: "CEO, NovaTech Solutions",
  },
  {
    quote: "Their analytical rigor and strategic clarity gave our board the confidence to pursue a bold expansion plan.",
    name: "Marcus Williams",
    role: "CFO, Horizon Partners",
  },
  {
    quote: "Working with ApexConsul felt like adding a world-class strategy team overnight. Truly exceptional.",
    name: "Elena Rodriguez",
    role: "Managing Director, Atlas Group",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Client Voices</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">Trusted by Leaders</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-lg p-8 flex flex-col"
          >
            <Quote className="text-primary/40 mb-4" size={32} />
            <p className="font-body text-foreground leading-relaxed flex-1 italic">"{t.quote}"</p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-heading font-semibold">{t.name}</p>
              <p className="font-body text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
