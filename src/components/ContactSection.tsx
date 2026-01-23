import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const waMessage = `Halo%20Raden%20%26%20Partner%2C%0A%0ANama%3A%20${formData.name}%0ATelepon%3A%20${formData.phone}%0AEmail%3A%20${formData.email}%0A%0APesan%3A%0A${formData.message}`;
    window.open(`https://api.whatsapp.com/send/?phone=6282323233566&text=${waMessage}&type=phone_number&app_absent=0`, "_blank");
    
    toast.success("Anda akan diarahkan ke WhatsApp...");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      value: "+62 823-2323-3566",
      link: "tel:+6282323233566"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+62 823-2323-3566",
      link: "https://api.whatsapp.com/send/?phone=6282323233566&type=phone_number&app_absent=0"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@radenpartner.id",
      link: "mailto:info@radenpartner.id"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "Senin - Sabtu, 08:00 - 20:00",
      link: null
    }
  ];

  return (
    <section id="kontak" className="py-20 gradient-dark" ref={ref}>
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
            Hubungi <span className="text-gold">Kami</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda 
            menemukan solusi terbaik untuk masalah pinjaman online Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-brown/50 border border-gold/10"
                >
                  <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-brown-dark" />
                  </div>
                  <h3 className="font-semibold text-cream mb-1">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      className="text-gold hover:text-gold-light transition-colors text-sm"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-cream/60 text-sm">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden h-64 bg-brown/50 flex items-center justify-center border border-gold/10">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="text-cream/60">Home Raden<br />Kp, Gg. Keramat Jl. Perintis No.004, RT.001, Pabuaran, Kec. Kemang, Kabupaten Bogor, Jawa Barat 16310</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-cream text-sm mb-2 block">Nama Lengkap</label>
                  <Input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-brown/50 border-gold/20 text-cream placeholder:text-cream/40 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-cream text-sm mb-2 block">Nomor Telepon</label>
                  <Input
                    type="tel"
                    placeholder="08xx-xxxx-xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-brown/50 border-gold/20 text-cream placeholder:text-cream/40 focus:border-gold"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-cream text-sm mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-brown/50 border-gold/20 text-cream placeholder:text-cream/40 focus:border-gold"
                />
              </div>

              <div>
                <label className="text-cream text-sm mb-2 block">Pesan</label>
                <Textarea
                  placeholder="Ceritakan masalah Anda..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-brown/50 border-gold/20 text-cream placeholder:text-cream/40 focus:border-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-gold text-brown-dark font-semibold hover-gold-glow"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
