import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileText, 
  ShieldCheck, 
  MessageSquare, 
  Scale, 
  BookOpen, 
  HeadphonesIcon 
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: FileText,
      title: "Analisis Kasus",
      description: "Analisis menyeluruh terhadap situasi pinjaman online Anda untuk menentukan langkah terbaik."
    },
    {
      icon: ShieldCheck,
      title: "Perlindungan Data",
      description: "Membantu melindungi data pribadi Anda dari penyalahgunaan oleh pihak pinjol ilegal."
    },
    {
      icon: MessageSquare,
      title: "Negosiasi",
      description: "Pendampingan dalam proses negosiasi dengan pihak pemberi pinjaman untuk mencapai kesepakatan."
    },
    {
      icon: Scale,
      title: "Konsultasi Hukum",
      description: "Konsultasi terkait aspek hukum dan hak-hak Anda sebagai konsumen pinjaman online."
    },
    {
      icon: BookOpen,
      title: "Edukasi Keuangan",
      description: "Program edukasi untuk membantu Anda mengelola keuangan dengan lebih baik ke depannya."
    },
    {
      icon: HeadphonesIcon,
      title: "Pendampingan 24/7",
      description: "Tim support siap membantu Anda kapan saja dengan respon cepat dan profesional."
    }
  ];

  return (
    <section id="layanan" className="py-20 gradient-dark" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
            Layanan <span className="text-gold">Kami</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan komprehensif untuk membantu Anda 
            menyelesaikan masalah pinjaman online dengan solusi terbaik.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-8 rounded-2xl bg-brown/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6 group-hover:shadow-gold transition-all duration-300">
                <service.icon className="w-7 h-7 text-brown-dark" />
              </div>
              <h3 className="font-display font-semibold text-cream text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-cream/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
