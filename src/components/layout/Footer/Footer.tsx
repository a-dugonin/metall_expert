import { FaPhone, FaMapMarkerAlt, FaTelegram, FaWhatsapp, FaVk } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Основной фон */}
      <div className="absolute inset-0 bg-[#0f172a] z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-metal-900/80 to-metal-800/90 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-center bg-cover bg-no-repeat opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/40 z-0"></div>

      {/* Контент */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Блок 1: Логотип */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-4 w-40 h-auto">
                <Image
                  src="/images/logo-utv.png"
                  alt="Металл-Эксперт"
                  width={200}
                  height={80}
                  className="w-full h-auto logo-overlay"
                />
              </div>
              <p className="text-white/80 text-center md:text-left">
                Производитель инженерного оборудования для газовой инфраструктуры
              </p>
            </div>

            {/* Блок 2: Навигация */}
            <div className="flex justify-center">
              <nav className="grid grid-cols-2 gap-x-8 gap-y-2">
                {[
                  ['Главная', '#hero'],
                  ['О компании', '#about'],
                  ['Продукция', '#products'],
                  ['Преимущества', '#advantages'],
                  ['Клиенты', '#clients'],
                  ['Контакты', '#contacts']
                ].map(([title, url]) => (
                  <a
                    key={url}
                    href={url}
                    className="text-white hover:text-metal-200 transition-colors text-center md:text-left"
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Блок 3: Соцсети и контакты */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              <div className="flex space-x-4">
                <a
                  href="https://t.me/ваш_канал"
                  className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Telegram"
                >
                  <FaTelegram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://wa.me/79991112233"
                  className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://vk.com/ваша_группа"
                  className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="ВКонтакте"
                >
                  <FaVk className="w-5 h-5 text-white" />
                </a>
              </div>

              <div className="text-center md:text-right text-white/90">
                <div className="flex items-center justify-center md:justify-end">
                  <FaPhone className="mr-2 text-white/80" />
                  <a href="tel:+7XXX-XXX-XX-XX" className="hover:text-white transition-colors">
                    +7 (XXX) XXX-XX-XX
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-end mt-1">
                  <FaMapMarkerAlt className="mr-2 text-white/80" />
                  <span>Краснодар, ул. Дальняя, 27. оф. 415</span>
                </div>
              </div>
            </div>
          </div>

          {/* Нижняя часть - копирайт */}
          <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/60">
            <p>
              © 2010–{new Date().getFullYear()} ООО "Металл-Эксперт". Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}