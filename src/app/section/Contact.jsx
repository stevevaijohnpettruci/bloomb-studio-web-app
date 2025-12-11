import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const accessKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", accessKey);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("botcheck", "");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await res.json();

    if (data.success) {
      toast.success(
        "Pesan berhasil dikirim! Kami akan menghubungi Anda segera."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Gagal mengirim pesan. Silakan coba lagi.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="mb-4 text-3xl font-semibold">Hubungi Kami</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Punya proyek atau ingin bertanya? Kirimkan pesan Anda, dan kami akan
            membalas secepatnya.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* CONTACT FORM */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <input type="hidden" name="botcheck" />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@anda.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-gray-700">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Apa yang bisa kami bantu?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan kebutuhan atau proyek Anda..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-400 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="mb-2">Email</h3>
              <p className="text-gray-600">bloombcreativestudios@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="mb-2">Telepon</h3>
              <p className="text-gray-600">+62 878 3228 2111</p>
              <p className="text-gray-600">+62 855 5922 7241</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="mb-2">Alamat Kantor</h3>
              <p className="text-gray-600">
                Jl. Moch Bagowi <br />
                Sukamantri, Ciawi, Tasikmalaya <br />
                Jawa Barat, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
