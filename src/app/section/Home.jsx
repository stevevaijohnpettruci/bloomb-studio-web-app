import { useTheme } from "../../context/useTheme";
import { motion } from "framer-motion";
import { ArrowBigRightDash } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  return (
    <section
      id="hero"
      className={`relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-4
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 to-black text-white"
            : "bg-gradient-to-b from-orange-600 to-orange-400 text-white"
        }`}
    >
      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
          Ubah Bisnismu
          <br />
          Dengan Inovasi Terbaru
        </h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl opacity-90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
        >
          Kami menawarkan untuk membantu anda dalam mengembangkan bisnis anda
          melalui pengelolaan sosial media.
        </motion.p>

        {/* Button */}
        <a href="#services">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 mx-auto py-2 px-5 border-2 border-white rounded-md font-semibold backdrop-blur-sm hover:bg-white hover:text-black transition-colors"
          >
            <ArrowBigRightDash size={20} />
            Mulai Sekarang!
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
};
