import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Clock, Lock, Heart, TrendingUp, Shield } from "lucide-react";

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Shield,
      title: "Terpercaya & Terbukti",
      description: "Ratusan klien telah kami bantu dengan tingkat keberhasilan yang tinggi."
    },
    {
      icon: Clock,
      title: "Respon Cepat",
      description: "Tim kami siap merespon dan membantu Anda dalam waktu singkat."
    },
    {
      icon: Lock,
      title: "Kerahasiaan Terjamin",
      description: "Data dan informasi pribadi Anda dijaga dengan ketat."
    },
    {
      icon: Heart,
      title: "Pendekatan Humanis",
      description: "Kami memahami situasi Anda dan memberikan solusi dengan empati."
    },
    {
      icon: TrendingUp,
      title: "Hasil Nyata",
      description: "Fokus pada solusi yang memberikan hasil konkret untuk Anda."
    },
    {
      icon: CheckCircle,
      title: "Tanpa Biaya Tersembunyi",
      description: "Transparansi penuh dalam setiap layanan yang kami berikan."
    }
  ];

  return (
    <section id="keunggulan" className="py-20 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-4">
            Kenapa Memilih <span className="text-gold">Kami?</span>
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik dengan hasil yang nyata 
            untuk setiap klien yang mempercayakan masalahnya kepada kami.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-gold">
                <reason.icon className="w-6 h-6 text-brown-dark" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-brown-dark text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 md:p-12 rounded-2xl gradient-dark text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mb-4">
            Jangan Biarkan Masalah <span className="text-gold">Pinjol</span> Menghantui Anda
          </h3>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan temukan solusi 
            terbaik untuk masalah Anda.
          </p>
          <button
            onClick={() => window.open("https://api.whatsapp.com/send/?phone=6282323233566&type=phone_number&app_absent=0", "_blank")}
            className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-brown-dark font-semibold rounded-lg hover-gold-glow text-lg"
          >
            Konsultasi Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
