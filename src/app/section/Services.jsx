import { Code, Palette, Smartphone, Joystick } from "lucide-react";
import { useTheme } from "../../context/useTheme";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Pengembangan Website",
    description:
      "Kami membangun website modern, cepat, responsif, dan mudah dikelola sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    description:
      "Solusi aplikasi mobile berbasis Android & iOS yang stabil, ringan, dan memiliki UX yang optimal.",
  },
  {
    icon: Palette,
    title: "Desain Grafis & UI/UX",
    description:
      "Desain antarmuka yang estetis, mudah digunakan, dan difokuskan pada pengalaman pengguna.",
  },
  {
    icon: Joystick,
    title: "Pengembangan Game",
    description:
      "Pembuatan game 2D/3D untuk kebutuhan komersial, edukasi, maupun brand activation.",
  },
];

export const Services = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="services"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-2xl font-semibold">Layanan Kami</h1>
          <p
            className={`max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda
            berkembang dan tampil lebih profesional.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`p-8 rounded-xl shadow-sm hover:shadow-lg transition-all ${
                  darkMode
                    ? "bg-gray-800 hover:shadow-gray-700"
                    : "bg-white hover:shadow-gray-200"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4
                    ${darkMode ? "bg-orange-500" : "bg-orange-100"}
                  `}
                >
                  <Icon
                    className={`${darkMode ? "text-white" : "text-orange-500"}`}
                    size={24}
                  />
                </div>

                <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>

                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
