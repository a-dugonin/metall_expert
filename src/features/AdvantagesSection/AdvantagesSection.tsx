import React from 'react';
import { motion } from 'framer-motion';
import { FaBoxOpen, FaShippingFast, FaMedal, FaHandshake, FaRubleSign, FaWarehouse } from 'react-icons/fa';

const AdvantagesSection = () => {
  const stats = [
    { value: '25 000+', label: 'произведенных изделий', icon: <FaBoxOpen className="text-metal-500" /> },
    { value: '5 000+', label: 'выполненных заказов', icon: <FaShippingFast className="text-metal-500" /> },
    { value: '150+', label: 'постоянных клиентов', icon: <FaHandshake className="text-metal-500" /> }
  ];

  const advantages = [
    {
      title: 'Индивидуальный подход',
      description: 'Персональный менеджер для каждого клиента',
      icon: <FaHandshake className="text-metal-500" />
    },
    {
      title: 'Нестандартные решения',
      description: 'Изготовление продукции по вашим чертежам и ТУ',
      icon: <FaMedal className="text-metal-500" />
    },
    {
      title: 'Бесплатная доставка',
      description: 'По Краснодарскому краю при заказе от 100 000 ₽',
      icon: <FaShippingFast className="text-metal-500" />
    },
    {
      title: 'Гарантия качества',
      description: '100% гарантия на всю продукцию',
      icon: <FaMedal className="text-metal-500" />
    },
    {
      title: 'Доступные цены',
      description: 'Прямое производство без посредников',
      icon: <FaRubleSign className="text-metal-500" />
    },
    {
      title: 'Складская программа',
      description: 'Всегда в наличии 80% ассортимента',
      icon: <FaWarehouse className="text-metal-500" />
    }
  ];

  return (
    <section
      id="advantages"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок с микроразметкой */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-metal mb-12 md:mb-16"
          itemProp="name"
        >
          Почему выбирают нас
        </motion.h2>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <div className="text-4xl md:text-5xl font-bold text-metal mb-2" itemProp="name">
                {stat.icon}
                <span className="block mt-2">{stat.value}</span>
              </div>
              <p className="text-lg text-gray-600" itemProp="description">
                {stat.label}
              </p>
              <meta itemProp="position" content={String(index + 1)} />
            </motion.div>
          ))}
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-metal" itemProp="name">
                  {advantage.title}
                </h3>
              </div>
              <p className="text-gray-600 ml-10" itemProp="description">
                {advantage.description}
              </p>
              <meta itemProp="position" content={String(index + 4)} />
            </motion.div>
          ))}
        </div>

        {/* Дополнительная микроразметка */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Металл-Эксперт",
              "description": "Производство инженерного оборудования для газовой инфраструктуры",
              "makesOffer": {
                "@type": "OfferCatalog",
                "name": "Наши преимущества",
                "itemListElement": advantages.map((adv, index) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": adv.title,
                    "description": adv.description
                  }
                }))
              }
            })
          }}
        />
      </div>
    </section>
  );
};

export default AdvantagesSection;