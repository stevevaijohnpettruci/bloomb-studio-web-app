import {
  Linkedin,
  Instagram,
  Github,
} from "../../components/ui/SocialMediaIcon";
import { useTheme } from "../../context/useTheme";
import { motion } from "framer-motion";

const team = [
  {
    name: "Adhi Nur Ramadan",
    role: "Web Developer, Game Developer & Founder",
    image: "/img/Foto Adhi.jpeg",
    bio: "Berpengalaman dalam pembuatan aplikasi web, game, serta pengembangan sistem digital untuk kebutuhan bisnis.",
    social_media: [
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/adhi-nur-ramadan-9b4077349/",
      },
      {
        icon: Instagram,
        href: "https://www.instagram.com/adhi_nurrrrr?igsh=aHk3MnN3bnB2NWsy",
      },
      { icon: Github, href: "https://github.com" },
    ],
  },
  {
    name: "Mochamad Nurdin Al Ghifary Kurniawan",
    role: "Mobile Developer & Co-Founder",
    image: "/img/Foto Ipay.jpeg",
    bio: "Fokus pada pengembangan aplikasi mobile dengan performa tinggi dan pengalaman pengguna yang optimal.",
    social_media: [
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/alghifaryipay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        icon: Instagram,
        href: "https://www.instagram.com/alghifaryipay?igsh=NHo5Z21lcHl5YmFj",
      },
      {
        icon: Github,
        href: "https://github.com/alghifaryipay/alghifaryipay.github.io",
      },
    ],
  },
  {
    name: "Raden Grayninda Aghniswara Kusumaningrat",
    role: "UI/UX Designer & Co-Founder",
    image: "/img/Foto Gray.jpeg",
    bio: "Menghasilkan desain interface modern, estetis, dan berfokus pada kenyamanan serta kemudahan pengguna.",
    social_media: [
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/raden-grayninda-aghniswara-kusumaningrat-b78b6a354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        icon: Instagram,
        href: "https://www.instagram.com/grrayx_?igsh=NHk2dnF3M3ZxY2lx",
      },
      { icon: Github, href: "" },
    ],
  },
];

export const Team = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="team"
      className={`py-20 transition-colors duration-300 ${
        darkMode
          ? "bg-linear-to-bl from-black to-gray-700 text-white"
          : "bg-gray-50 text-black"
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
          <h2 className="mb-4 font-semibold text-2xl">Tim Kami</h2>
          <p
            className={`max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Kami adalah tim profesional yang berdedikasi untuk menghasilkan
            solusi digital modern yang memberikan dampak nyata bagi bisnis Anda.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`
                text-center group p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow
                ${
                  darkMode
                    ? "bg-gray-800 hover:shadow-gray-700"
                    : "bg-white hover:shadow-gray-200"
                }
              `}
            >
              {/* Image */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="mb-1 font-semibold text-lg">{member.name}</h3>

              {/* Role */}
              <p className="mb-2 text-orange-500 font-medium">{member.role}</p>

              {/* Bio */}
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } mb-4`}
              >
                {member.bio}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3">
                {member.social_media.map((soc, i) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={i}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        w-9 h-9 flex items-center justify-center rounded-full transition-colors
                        ${
                          darkMode
                            ? "bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white"
                            : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"
                        }
                      `}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
