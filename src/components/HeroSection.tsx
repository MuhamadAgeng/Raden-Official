import { motion } from "framer-motion";
import { MessageCircle, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=6282323233566&text=Halo%2C+saya+ingin+konsultasi+mengenai+pinjaman+online.&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/95 via-brown-dark/90 to-brown-dark/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <img 
              src="/logo.png" 
              alt="Raden & Partner" 
              className="h-24 w-auto object-contain mx-auto drop-shadow-lg"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8"
          >
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Solusi dan Konsultasi</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight"
          >
            Solusi Tepat untuk{" "}
            <span className="text-gold-gradient">Masalah Pinjaman Online</span>{" "}
            Anda
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto font-body"
          >
            Raden & Partner hadir membantu Anda menyelesaikan masalah pinjaman online 
            dengan pendekatan profesional dan solusi yang tepat sasaran.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="gradient-gold text-brown-dark font-semibold px-8 py-6 text-lg hover-gold-glow"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Konsultasi Gratis via WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-gold/50 text-gold hover:bg-gold/10 px-8 py-6 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Pelajari Lebih Lanjut
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { value: "500+", label: "Klien Terbantu" },
              { value: "98%", label: "Tingkat Keberhasilan" },
              { value: "24/7", label: "Layanan Konsultasi" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold font-display">{stat.value}</div>
                <div className="text-sm text-cream/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gold rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
