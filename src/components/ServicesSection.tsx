import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Lightbulb, Shield, Globe } from "lucide-react";

const services = [
  { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven strategies to accelerate revenue growth and market expansion." },
  { icon: Users, title: "Organizational Design", desc: "Optimizing structures and talent to maximize operational efficiency." },
  { icon: BarChart3, title: "Performance Analytics", desc: "Deep-dive analytics to identify opportunities and track key metrics." },
  { icon: Lightbulb, title: "Innovation Advisory", desc: "Guiding digital transformation and emerging technology adoption." },
  { icon: Shield, title: "Risk Management", desc: "Comprehensive frameworks to mitigate risk and ensure compliance." },
  { icon: Globe, title: "Market Entry", desc: "End-to-end support for entering new markets and geographies." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">What We Do</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">Our Expertise</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
