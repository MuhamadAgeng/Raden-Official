import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Briefcase } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Award,
      title: "Berpengalaman",
      description: "Tim profesional dengan pengalaman bertahun-tahun dalam menangani kasus pinjaman online"
    },
    {
      icon: Users,
      title: "Pendekatan Personal",
      description: "Setiap kasus ditangani secara individual dengan solusi yang disesuaikan"
    },
    {
      icon: Target,
      title: "Fokus Solusi",
      description: "Berorientasi pada hasil dan solusi terbaik untuk setiap klien"
    },
    {
      icon: Briefcase,
      title: "Profesional",
      description: "Layanan konsultasi yang profesional dan dapat dipercaya"
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-6">
              Tentang <span className="text-gold">Raden & Partner</span>
            </h2>
            <p className="text-brown-light mb-6 leading-relaxed">
              Raden & Partner adalah layanan konsultasi profesional yang berfokus pada 
              penyelesaian masalah pinjaman online (pinjol). Kami memahami betapa 
              sulitnya situasi yang dihadapi oleh banyak orang yang terjebak dalam 
              masalah pinjaman online.
            </p>
            <p className="text-brown-light mb-8 leading-relaxed">
              Dengan tim yang berpengalaman dan pendekatan yang profesional, kami 
              berkomitmen untuk membantu Anda menemukan jalan keluar terbaik dari 
              masalah pinjaman online yang sedang Anda hadapi.
            </p>
            <div className="flex items-center gap-4">
              <img 
                src="/logo.png" 
                alt="Raden & Partner" 
                className="h-16 w-auto object-contain"
              />
              <div>
                <div className="font-display font-semibold text-brown-dark text-lg">Raden & Partner</div>
                <div className="text-gold text-sm">Konsultasi Pinjaman Online</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card hover-gold-glow"
              >
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-brown-dark" />
                </div>
                <h3 className="font-display font-semibold text-brown-dark text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
