import {
  Linkedin,
  Instagram,
  Github,
} from "../../components/ui/SocialMediaIcon";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* LOGO + DESCRIPTION */}
          <div>
            <a href="#hero" className="inline-block">
              <img className="w-40" src="/Logo (2).png" alt="Company Logo" />
            </a>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Kembangkan bisnis
              anda melalui inovasi teknologi & pengelolaan sosial media.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "About", href: "#about" },
                { label: "Team", href: "#team" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES LIST */}
          <div>
            <h4 className="text-white font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Graphic Design",
                "Game Development",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ikuti kami di</h4>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                      bg-gray-800 hover:bg-orange-500 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Bloomb Studio. Hak Cipta.</p>
        </div>
      </div>
    </footer>
  );
};
