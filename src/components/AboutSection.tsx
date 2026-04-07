
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "98%", label: "Client Retention" },
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">Who We Are</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Built on Insight, Driven by <span className="text-gradient-gold">Impact</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            ApexConsul is a premier management consultancy that partners with CEOs, boards, and leadership teams to solve their most complex challenges.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Our multidisciplinary team combines deep industry knowledge with cutting-edge analytical tools to deliver actionable strategies that create lasting value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-lg p-6 text-center"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold">{stat.value}</p>
              <p className="font-body text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
