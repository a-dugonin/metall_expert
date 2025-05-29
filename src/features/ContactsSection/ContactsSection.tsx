import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaTelegram, FaWhatsapp, FaVk } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';

export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className="py-16 md:py-24 bg-white"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Микроразметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Металл-Эксперт",
            "image": `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.jpg`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Промышленная, 42",
              "addressLocality": "Краснодар",
              "addressRegion": "Краснодарский край",
              "postalCode": "350000",
              "addressCountry": "RU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "45.0448",
              "longitude": "38.976"
            },
            "url": process.env.NEXT_PUBLIC_SITE_URL,
            "telephone": "+7(XXX)XXX-XX-XX",
            "openingHours": "Mo-Fr 08:00-18:00"
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-metal-900 mb-4">
            Готовы к сотрудничеству!
          </h2>
          <p className="text-lg text-metal-600 max-w-2xl mx-auto">
            Давайте обсудим ваш проект и найдем оптимальное решение
          </p>
          <div className="h-1 w-24 bg-metal-300 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-stretch">
          {/* Блок контактов */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold mb-6 text-metal-900">Наш офис</h3>

            <div className="space-y-5 flex-grow">
              <div className="flex items-start gap-4">
                <div className="bg-metal-100 p-3 rounded-full flex-shrink-0">
                  <FaMapMarkerAlt className="text-metal-600 text-xl" />
                </div>
                <div>
                  <a
                    href="https://yandex.ru/maps/?text=ул.+Дальняя,+27,+Краснодар"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-metal-800 hover:text-metal-600 transition-colors block"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">ул. Дальняя, 27. оф. 405</span>,{' '}
                    <span itemProp="addressLocality">Краснодар</span>
                  </a>
                  <p className="text-metal-500 text-sm mt-1">Офис</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-metal-100 p-3 rounded-full flex-shrink-0">
                  <FaPhone className="text-metal-600 text-xl" />
                </div>
                <div>
                  <a
                    href="tel:+7XXX-XXX-XX-XX"
                    className="text-metal-800 hover:text-metal-600 transition-colors text-lg block"
                    itemProp="telephone"
                  >
                    +7 (XXX) XXX-XX-XX
                  </a>
                  <p className="text-metal-500 text-sm mt-1">Отдел продаж</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-metal-100 p-3 rounded-full flex-shrink-0">
                  <FaEnvelope className="text-metal-600 text-xl" />
                </div>
                <div>
                  <a
                    href="mailto:info@metal-expert.ru"
                    className="text-metal-800 hover:text-metal-600 transition-colors text-lg block"
                    itemProp="email"
                  >
                    ooo.metallekspert@list.ru
                  </a>
                  <p className="text-metal-500 text-sm mt-1">Общие вопросы</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200">
                <p className="text-metal-500 text-sm">
                  <span className="font-medium">Режим работы:</span>{' '}
                  <span itemProp="openingHours">Пн-Пт 08:00-18:00</span>
                </p>
              </div>
            </div>

            {/* Соцсети */}
            <div className="mt-8">
              <h4 className="font-medium mb-4 text-metal-700">Свяжитесь удобным способом:</h4>
              <div className="flex gap-3">
                {[
                  { icon: <FaTelegram className="text-xl" />, url: "#", name: "Telegram", color: "bg-[#0088cc]" },
                  { icon: <FaWhatsapp className="text-xl" />, url: "#", name: "WhatsApp", color: "bg-[#25D366]" },
                  { icon: <FaVk className="text-xl" />, url: "#", name: "VKontakte", color: "bg-[#0077FF]" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`${social.color} text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-sm hover:opacity-90`}
                    aria-label={social.name}
                    itemProp="sameAs"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ContactForm className="h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}