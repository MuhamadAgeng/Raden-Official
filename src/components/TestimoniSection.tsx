import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, MessageCircle, Eye, Users, User, UserCircle, Briefcase, Home, GraduationCap, Laptop, Users2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const TestimoniSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showFirstProof, setShowFirstProof] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Ratu Alisha",
      role: "Pengusaha",
      company: "PT. Maju Jaya",
      avatar: "user",
      content: "Raden & Partner sangat membantu saya menyelesaikan masalah pinjaman online melalui konsultasi personal. Profesional, cepat, dan transparan. Sangat direkomendasikan!",
      rating: 5,
      date: "2 bulan lalu",
      chatProof: "/bukti5.jpg",
      type: "individual"
    },
    {
      id: 2,
      name: "Siti Zulaicha",
      role: "Ibu Rumah Tangga",
      company: "Tangerang",
      avatar: "user",
      content: "Awalnya saya ragu, tapi setelah berkonsultasi personal dengan Raden & Partner, semua masalah pinjaman saya bisa terselesaikan dengan baik. Terima kasih!",
      rating: 5,
      date: "3 minggu lalu",
      chatProof: "/bukti4.jpg",
      type: "individual"
    },
    {
      id: 3,
      name: "Anita Rusdiana",
      role: "Wiraswasta",
      company: "Bandung",
      avatar: "user",
      content: "Saya sangat puas dengan hasil kerja Raden & Partner. Konsultasi personal sangat membantu menyelesaikan masalah pinjaman online yang rumit. Highly recommended!",
      rating: 5,
      date: "4 hari lalu",
      chatProof: "/bukti6.jpg",
      type: "individual"
    },
    {
      id: 4,
      name: "Yunita Bojonegoro",
      role: "Karyawan Swasta",
      company: "Jakarta",
      avatar: "users2",
      content: "Pelayanan yang sangat memuaskan! Join grup WhatsApp dan dapatkan solusi bersama ratusan klien lain. Pinjaman online yang sebelumnya sangat membingungkan menjadi jelas.",
      rating: 5,
      date: "1 bulan lalu",
      chatProof: "/bukti3.png",
      type: "group"
    },
    {
      id: 5,
      name: "Regina Risma",
      role: "Mahasiswa",
      company: "Universitas Indonesia",
      avatar: "users2",
      content: "Sebagai mahasiswa yang terjerat pinjol, saya sangat terbantu join grup konsultasi. Banyak sharing dari klien lain dan solusi dari tim Raden & Partner.",
      rating: 4,
      date: "1 minggu lalu",
      chatProof: "/bukti2.png",
      type: "group"
    },
    {
      id: 6,
      name: "Delyna Jatim",
      role: "Freelancer",
      company: "Surabaya",
      avatar: "users2",
      content: "Profesionalisme yang tinggi dan hasil yang memuaskan. Join grup WhatsApp dan dapatkan solusi bersama ratusan klien lain yang mengalami masalah serupa.",
      rating: 5,
      date: "2 hari lalu",
      chatProof: "/bukti1.png",
      type: "group"
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

  const renderAvatar = (avatarType: string) => {
    const iconClass = "w-12 h-12 text-gold bg-brown/20 rounded-full p-3";
    
    switch (avatarType) {
      case "briefcase":
        return <Briefcase className={iconClass} />;
      case "home":
        return <Home className={iconClass} />;
      case "laptop":
        return <Laptop className={iconClass} />;
      case "graduation-cap":
        return <GraduationCap className={iconClass} />;
      case "user":
        return <User className={iconClass} />;
      case "users2":
        return <Users2 className={iconClass} />;
      default:
        return <UserCircle className={iconClass} />;
    }
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
          <p className="text-cream/70 max-w-2xl mx-auto mb-4">
            Ratusan klien telah kami bantu menyelesaikan masalah pinjaman online. 
            Simak pengalaman mereka yang telah merasakan layanan terbaik kami.
          </p>
          <p className="text-gold max-w-2xl mx-auto mb-6 text-sm font-medium">
            💡 <strong>Ingin tahu proses nyata?</strong> Klik tombol "Personal/Grup" pada setiap testimoni untuk melihat bukti chat WhatsApp asli kami!
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex items-center gap-1 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
              <MessageCircle className="w-3 h-3 text-green-500" />
              <span className="text-xs text-green-500 font-medium">Dilengkapi Bukti Chat Asli</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <Eye className="w-3 h-3 text-blue-500" />
              <span className="text-xs text-blue-500 font-medium">100% Terverifikasi</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={testimonial.id === 1 ? "relative" : ""}
            >
              {testimonial.id === 1 && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-bounce">
                    📸 Lihat Contoh
                  </div>
                </div>
              )}
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
                  <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                    <div className="flex items-center gap-3">
                      {renderAvatar(testimonial.avatar)}
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
                    
                    {/* Chat Proof Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-300 group shadow-lg hover:shadow-green-500/25">
                          {testimonial.type === 'group' ? (
                            <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          ) : (
                            <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          )}
                          <span className="text-xs font-medium">
                            {testimonial.type === 'group' ? 'Grup' : 'Personal'}
                          </span>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md mx-auto">
                        <div className="space-y-4">
                          <div className="text-center">
                            <h3 className="font-display text-lg font-semibold text-brown-dark mb-2">
                              Bukti Chat - {testimonial.name}
                            </h3>
                            <div className="flex items-center justify-center gap-2 mb-2">
                              {testimonial.type === 'group' ? (
                                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                  <Users className="w-3 h-3" />
                                  Konsultasi Grup
                                </div>
                              ) : (
                                <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                  <User className="w-3 h-3" />
                                  Konsultasi Personal
                                </div>
                              )}
                            </div>
                            <p className="text-cream/60 text-sm mb-3">
                              {testimonial.type === 'group' 
                                ? 'Percakapan grup WhatsApp dengan ratusan klien' 
                                : 'Percakapan personal WhatsApp dengan klien'
                              }
                            </p>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                              <p className="text-green-800 text-sm font-semibold">
                                ✅ Bukti asli tanpa edit
                                ✅ Percakapan nyata klien kami
                                ✅ Privasi terjaga (nama disamarkan)
                              </p>
                            </div>
                          </div>
                          
                          {/* Chat Image Container */}
                          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              src={testimonial.chatProof}
                              alt={`Bukti chat dengan ${testimonial.name}`}
                              className="w-full h-auto max-h-96 object-contain"
                            />
                            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              Original
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <p className="text-cream/60 text-xs">
                              *Bukti chat asli dari klien yang telah kami bantu
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
