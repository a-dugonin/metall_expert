import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-12 md:py-20 bg-gradient-to-b from-metal-50 to-white overflow-hidden"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Микроразметка для организации */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Металл-Эксперт",
            "description": "Производитель инженерного оборудования для газовой инфраструктуры с 15-летним опытом",
            "foundingDate": "2008",
            "numberOfEmployees": "50+",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Россия",
              "addressRegion": "Краснодарский край"
            },
            "image": `${process.env.NEXT_PUBLIC_SITE_URL}/images/about-image.jpg`,
            "telephone": "+7 (XXX) XXX-XX-XX"
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Левая часть - Изображение с микроразметкой */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 w-full lg:w-[55%]"
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/about-image.jpg"
                alt="Производственные мощности компании Металл-Эксперт по изготовлению газового оборудования"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                itemProp="contentUrl"
              />
              <meta itemProp="description" content="Производственные цеха компании Металл-Эксперт" />

              {/* Бейдж с микроразметкой */}
              <div
                className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/95 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg"
                itemProp="foundingDate"
                content="2008"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 md:h-10 md:w-10 bg-metal-100 rounded-full flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-metal-800">15+</span>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-metal-800">лет работы</p>
                    <p className="text-xs text-metal-600">на рынке</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Правая часть - Текст с микроразметкой */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 space-y-6 text-metal-800"
            itemProp="mainContentOfPage"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="block text-metal-900 mb-2" itemProp="name">Металл-Эксперт</span>
              <div className="h-1.5 w-20 bg-metal-300 rounded-full" />
            </h2>

            <div className="space-y-5">
              <div className="relative pl-6 border-l-2 border-metal-300">
                <p className="text-lg md:text-xl leading-relaxed text-metal-700 mb-4" itemProp="description">
                  Более 15 лет производим инженерное оборудование для газовой инфраструктуры
                </p>
                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Стальные газовые коверы премиум-класса",
                    "Железобетонные подушки с антикоррозийной обработкой",
                    "Комплексные решения для монтажа"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3" itemProp="makesOffer" itemScope itemType="https://schema.org/Offer">
                      <div className="w-2 h-2 bg-metal-400 rounded-full mt-2" />
                      <p className="text-base md:text-lg" itemProp="name">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { value: "5 цехов", description: "Современное производство с лучшими технологиями" },
                  { value: "80%", description: "Доля рынка Краснодарского края по производству газовых каверов" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 md:p-5 bg-metal-50 rounded-xl"
                    itemProp="knowsAbout"
                    itemScope
                    itemType="https://schema.org/ItemList"
                  >
                    <p className="text-2xl md:text-3xl font-bold text-metal-900 mb-2" itemProp="name">{stat.value}</p>
                    <p className="text-metal-600 text-sm md:text-base" itemProp="description">{stat.description}</p>
                  </div>
                ))}
              </div>

              <div
                className="p-5 md:p-6 bg-metal-100 rounded-xl border border-metal-200"
                itemProp="review"
                itemScope
                itemType="https://schema.org/Review"
              >
                <p className="text-lg md:text-xl italic text-metal-800" itemProp="reviewBody">
                  "Каждое изделие проходит контроль качества"
                </p>
                <div className="mt-3 md:mt-4 flex items-center gap-2 text-metal-600">
                  <span className="text-xs md:text-sm" itemProp="author">Сертифицировано по ГОСТ</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}