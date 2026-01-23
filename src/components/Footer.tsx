import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark border-t border-gold/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Raden & Partner" 
                className="h-14 w-auto object-contain"
              />
              <div>
                <div className="font-display font-bold text-cream text-xl">
                  Raden & Partner
                </div>
                <div className="text-gold text-sm">Konsultan Pinjol</div>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed">
              Solusi tepat untuk masalah pinjaman online Anda. 
              Kami hadir untuk membantu dengan profesional dan terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-cream text-lg mb-4">
              Tautan Cepat
            </h4>
            <ul className="space-y-2">
              {["Tentang Kami", "Layanan", "Keunggulan", "Hubungi Kami"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-cream text-lg mb-4">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+6282323233566" className="text-cream/60 hover:text-gold transition-colors text-sm">
                  +62 823-2323-3566
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-gold" />
                <a href="https://api.whatsapp.com/send/?phone=6282323233566&type=phone_number&app_absent=0" target="_blank" className="text-cream/60 hover:text-gold transition-colors text-sm">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:info@radenpartner.id" className="text-cream/60 hover:text-gold transition-colors text-sm">
                  info@radenpartner.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span className="text-cream/60 text-sm">
                  Home Raden<br />
                  Kp, Gg. Keramat Jl. Perintis No.004, RT.001, Pabuaran, Kec. Kemang, Kabupaten Bogor, Jawa Barat 16310
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gold/10 text-center">
          <p className="text-cream/40 text-sm">
            © {currentYear} Raden & Partner. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
