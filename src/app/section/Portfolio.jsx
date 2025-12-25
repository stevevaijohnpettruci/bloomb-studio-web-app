import { useState } from "react";
import { Code, Palette, Smartphone, Joystick } from "lucide-react";
import { useTheme } from "../../context/useTheme";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Web Development",
  "Mobile Development",
  "UI & UX Design",
  "Graphic Design",
  "Game Development",
];

const portfolioData = {
  "Web Development": [
    {
      icon: Code,
      title: "Website Game Developer Tasikmalaya",
      description:
        "Website profil komunitas Game Developer Tasikmalaya dengan informasi event, portofolio anggota, dan halaman komunitas interaktif.",
      url: "https://gamedevtasikmalaya.chatomz.com/",
    },
    {
      icon: Code,
      title: "Website Kuis Interaktif Bahasa Sunda",
      description:
        "Aplikasi kuis edukasi dengan sistem skor otomatis, leaderboard, dan antarmuka interaktif untuk pembelajaran bahasa Sunda.",
      url: "https://euy-lang.vercel.app/",
    },
    {
      icon: Code,
      title: "Website Profil Perusahaan",
      description:
        "Website company profile modern dengan desain responsif, navigasi elegan, dan struktur informasi yang profesional.",
      url: "https://www.bloomb-studio.site/",
    },
    {
      icon: Code,
      title: "Website Penjualan Merch Band Bambootown",
      description:
        "Website katalog dan pemesanan merchandise dengan tampilan visual kreatif serta sistem order yang sederhana dan user-friendly.",
      url: "https://bambootown-merch.vercel.app",
    },
  ],

  "Mobile Development": [
    {
      icon: Smartphone,
      title: "Aplikasi Penjualan Buket – PO Buket Rancah",
      description:
        "Aplikasi mobile untuk pemesanan buket lengkap dengan katalog produk, form order, dan desain minimalis yang nyaman digunakan.",
      url: "https://po-buket-rancah.vercel.app",
    },
  ],

  "UI & UX Design": [
    {
      icon: Palette,
      title: "UI/UX Mobile App IoT Monitoring – Ecoponds",
      description:
        "Desain UI/UX dashboard mobile untuk monitoring kualitas air kolam, suhu, dan parameter IoT secara real-time.",
      url: "https://www.figma.com/design/ZCmEetq8egYP9Ql3eGnFvH/ECOPONDS?node-id=0-1&p=f",
    },
    {
      icon: Palette,
      title: "UI/UX Mobile App Pemesanan Buket – PO Buket Rancah",
      description:
        "Perancangan flow pemesanan buket dari katalog hingga checkout dengan tampilan clean dan pengalaman pengguna yang sederhana.",
      url: "https://figma.com/file/buket-ui",
    },
  ],

  "Graphic Design": [
    {
      icon: Palette,
      title: "Re-design Brand Identity Cikara Studio",
      description:
        "Rebranding visual mencakup pembuatan logo baru, palet warna, tipografi, dan brand guideline lengkap.",
      url: "https://www.instagram.com/p/DQea8aIgVho/?igsh=MTVsNjdhZzlrMDU0aQ==",
    },
  ],

  "Game Development": [
    {
      icon: Joystick,
      title: "Wildlens AR Augmented Reality Game",
      description:
        "Game edukasi berbasis AR yang memungkinkan pemain mempelajari satwa melalui pengalaman interaktif.",
      url: "https://bloomb-creative.itch.io/wildlens-ar",
    },
  ],
};

export const Portfolio = () => {
  const [active, setActive] = useState("Web Development");
  const { darkMode } = useTheme();

  return (
    <section
      id="portfolio"
      className={`py-20 transition-colors duration-300 ${
        darkMode
          ? "bg-linear-to-br from-gray-900 to-gray-700 text-white"
          : "bg-linear-to-br from-orange-500 to-orange-400 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-3xl font-semibold">Portfolio Kami</h1>
          <p
            className={`max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-white/90"
            }`}
          >
            Jelajahi berbagai proyek yang telah kami kerjakan di berbagai bidang
            digital.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className={`flex bg-black/20 backdrop-blur-md rounded-xl p-3 overflow-x-auto gap-3 ${
            darkMode ? "bg-white/10" : "bg-black/20"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                active === cat
                  ? darkMode
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-orange-600 shadow-md"
                  : darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {portfolioData[active].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`p-8 rounded-xl transition-all shadow-sm hover:shadow-xl ${
                    darkMode
                      ? "bg-gray-800 hover:shadow-gray-700"
                      : "bg-white text-black hover:shadow-gray-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      darkMode ? "bg-orange-500" : "bg-orange-100"
                    }`}
                  >
                    <Icon
                      className={`${
                        darkMode ? "text-white" : "text-orange-600"
                      }`}
                      size={26}
                    />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    {item.description}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-4 px-4 py-2 text-sm font-medium rounded-lg transition ${
                      darkMode
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-orange-100 text-orange-600 hover:bg-orange-200"
                    }`}
                  >
                    Live Preview →
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
