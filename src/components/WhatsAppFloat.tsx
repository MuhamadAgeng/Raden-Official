import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=6282323233566&text=Halo%2C+saya+ingin+konsultasi+mengenai+pinjaman+online.&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </motion.a>
  );
};

export default WhatsAppFloat;
