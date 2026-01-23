import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#tentang", label: "Tentang" },
    { href: "#layanan", label: "Layanan" },
    { href: "#keunggulan", label: "Keunggulan" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#kontak", label: "Kontak" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brown-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Raden & Partner" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <div className="font-display font-bold text-cream text-lg leading-tight">
                Raden & Partner
              </div>
              <div className="text-gold text-xs">Konsultan Pinjol</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-cream/80 hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=6282323233566&type=phone_number&app_absent=0", "_blank")}
              className="gradient-gold text-brown-dark font-semibold hover-gold-glow"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Konsultasi
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-cream p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brown-dark/98 backdrop-blur-md border-t border-gold/10"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-cream/80 hover:text-gold transition-colors font-medium text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => window.open("https://api.whatsapp.com/send/?phone=6282323233566&type=phone_number&app_absent=0", "_blank")}
                className="gradient-gold text-brown-dark font-semibold mt-2"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Konsultasi via WhatsApp
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
