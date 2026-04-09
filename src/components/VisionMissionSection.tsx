import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Users, BookOpen, Compass, CheckCircle } from "lucide-react";

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="visi-misi" className="py-20 bg-cream" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-6">
            Visi & <span className="text-gold">Misi</span>
          </h2>
          <p className="text-brown-light max-w-2xl mx-auto leading-relaxed">
            Komitmen kami untuk memberikan perlindungan hukum terbaik bagi masyarakat yang terjerat masalah pinjaman online
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Visi Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card p-8 rounded-xl shadow-card hover-gold-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center">
                  <Target className="w-6 h-6 text-brown-dark" />
                </div>
                <h3 className="font-display font-semibold text-brown-dark text-2xl">
                  <span className="text-gold"></span> Visi
                </h3>
              </div>
              <p className="text-brown-light leading-relaxed text-lg">
                Menjadi kantor hukum garda terdepan yang paling terpercaya di Indonesia dalam memberantas praktik kesewenang-wenangan pinjaman online ilegal serta memberikan solusi restrukturisasi yang adil pada pinjaman online Legal.
              </p>
            </div>
          </motion.div>

          {/* Misi Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card p-8 rounded-xl shadow-card hover-gold-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center">
                  <Compass className="w-6 h-6 text-brown-dark" />
                </div>
                <h3 className="font-display font-semibold text-brown-dark text-2xl">
                  <span className="text-gold"></span> Misi
                </h3>
              </div>
              
              <div className="space-y-6">
                {/* Misi 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-brown-dark w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-dark text-lg mb-2">
                      Menghentikan Teror
                    </h4>
                    <p className="text-brown-light leading-relaxed">
                      Melakukan tindakan hukum cepat dan tegas untuk menghentikan intimidasi, ancaman, serta penyebaran data pribadi oleh pihak pinjol.
                    </p>
                  </div>
                </div>

                {/* Misi 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-brown-dark w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-dark text-lg mb-2">
                      Edukasi Hukum
                    </h4>
                    <p className="text-brown-light leading-relaxed">
                      Memberikan pemahaman kepada masyarakat mengenai hak-hak hukum mereka sebagai debitur agar tidak mudah diintimidasi.
                    </p>
                  </div>
                </div>

                {/* Misi 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-brown-dark w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-dark text-lg mb-2">
                      Solusi Finansial yang Adil
                    </h4>
                    <p className="text-brown-light leading-relaxed">
                      Membantu klien bernegosiasi secara legal untuk mendapatkan keringanan pembayaran yang rasional pada pinjol resmi.
                    </p>
                  </div>
                </div>

                {/* Misi 4 */}
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-brown-dark w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-dark text-lg mb-2">
                      Pendampingan Psikologis-Hukum
                    </h4>
                    <p className="text-brown-light leading-relaxed">
                      Memberikan rasa aman secara hukum sehingga mental dan privasi klien tetap terjaga selama proses penyelesaian.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >

          
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
