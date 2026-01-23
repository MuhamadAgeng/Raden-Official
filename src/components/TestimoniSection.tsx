import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimoniSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pengusaha",
      company: "PT. Maju Bersama",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Raden & Partner sangat membantu saya menyelesaikan masalah pinjaman online. Profesional, cepat, dan transparan. Sangat direkomendasikan!",
      rating: 5,
      date: "2 bulan lalu"
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      role: "Ibu Rumah Tangga",
      company: "Jakarta",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Awalnya saya ragu, tapi setelah berkonsultasi dengan Raden & Partner, semua masalah pinjaman saya bisa terselesaikan dengan baik. Terima kasih!",
      rating: 5,
      date: "1 bulan lalu"
    },
    {
      id: 3,
      name: "Ahmad Fauzi",
      role: "Karyawan Swasta",
      company: "Tangerang",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Pelayanan yang sangat memuaskan! Tim yang ahli dan solutif. Pinjaman online yang sebelumnya sangat membingungkan menjadi jelas dan terkelola dengan baik.",
      rating: 4,
      date: "3 minggu lalu"
    },
    {
      id: 4,
      name: "Dewi Lestari",
      role: "Wiraswasta",
      company: "Bandung",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Saya sangat puas dengan hasil kerja Raden & Partner. Mereka benar-benar memahami masalah saya dan memberikan solusi yang tepat. Highly recommended!",
      rating: 5,
      date: "1 minggu lalu"
    },
    {
      id: 5,
      name: "Rizki Pratama",
      role: "Mahasiswa",
      company: "Universitas Indonesia",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      content: "Sebagai mahasiswa yang terjerat pinjol, saya sangat terbantu dengan konsultasi dari Raden & Partner. Penjelasannya detail dan mudah dipahami.",
      rating: 5,
      date: "4 hari lalu"
    },
    {
      id: 6,
      name: "Maya Putri",
      role: "Freelancer",
      company: "Surabaya",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content: "Profesionalisme yang tinggi dan hasil yang memuaskan. Raden & Partner berhasil membantu saya keluar dari masalah pinjaman online yang sangat rumit.",
      rating: 5,
      date: "2 hari lalu"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-gold text-gold" : "text-gold/30"
        }`}
      />
    ));
  };

  return (
    <section id="testimoni" className="py-20 bg-brown/30" ref={ref}>
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
            Apa Kata <span className="text-gold">Klien Kami</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Ribuan klien telah kami bantu menyelesaikan masalah pinjaman online. 
            Simak pengalaman mereka yang telah merasakan layanan terbaik kami.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-brown/50 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-gold/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p className="text-cream/80 text-sm leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <div className="font-semibold text-cream">
                        {testimonial.name}
                      </div>
                      <div className="text-gold text-sm">
                        {testimonial.role}
                      </div>
                      <div className="text-cream/60 text-xs">
                        {testimonial.company} • {testimonial.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-2xl gradient-dark border border-gold/10">
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              Bergabunglah dengan <span className="text-gold">Ribuannya Klien Puas</span>
            </h3>
            <p className="text-cream/70 mb-6 max-w-xl mx-auto">
              Jangan biarkan masalah pinjaman online terus menghantui Anda. 
              Konsultasikan sekarang dan temukan solusi terbaik!
            </p>
            <button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=6282323233566&type=phone_number&app_absent=0", "_blank")}
              className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-brown-dark font-semibold rounded-lg hover-gold-glow text-lg"
            >
              Konsultasi Sekarang
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimoniSection;
