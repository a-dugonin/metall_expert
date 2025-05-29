import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-content relative"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Скрытая микроразметка организации */}
      <div className="sr-only" itemScope itemType="https://schema.org/Organization">
        <h1 itemProp="name">Металл-Эксперт</h1>
        <p itemProp="description">Производитель газового оборудования с 2008 года</p>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Краснодар</span>
          <span itemProp="addressRegion">Краснодарский край</span>
          <span itemProp="addressCountry">Россия</span>
        </div>
        <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} itemProp="telephone">+7 (XXX) XXX-XX-XX</a>
        <div itemProp="makesOffer" itemScope itemType="https://schema.org/OfferCatalog">
          <h2>Продукция</h2>
          <ul>
            <li itemProp="itemListElement">Газовые коверы стальные</li>
            <li itemProp="itemListElement">Железобетонные основания</li>
            <li itemProp="itemListElement">Шкафы газораспределительные</li>
            <li itemProp="itemListElement">Контрольные трубки</li>
          </ul>
        </div>
      </div>

      {/* Основной контент */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Логотип с оптимизацией */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12 w-full relative"
        >
          <Image
            src="/images/logo-utv.png"
            alt="Металл-Эксперт - производитель инженерного оборудования для газовой инфраструктуры"
            width={1200}
            height={400}
            className="w-full max-w-4xl mx-auto logo-overlay object-contain"
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 60vw"
            itemProp="logo"
            loading="eager"
          />
        </motion.div>

        {/* Заголовок и кнопка */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center space-y-6 md:space-y-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.5rem] font-bold text-center max-w-3xl md:max-w-4xl xl:max-w-5xl mx-auto
                        leading-tight font-industrial bg-clip-text text-transparent
                        bg-gradient-to-r from-metal-200 to-metal-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
                        px-2"
              itemProp="headline">
            Производство инженерного оборудования для газовой инфраструктуры
          </h1>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-metal-400/30 to-metal-600/30
                          rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300">
            </div>
            <Link
              href="#products"
              className="relative inline-block px-6 py-3 md:px-10 md:py-4 xl:px-12 xl:py-5 bg-gradient-to-br from-metal-600 to-metal-800
                        text-sm sm:text-base md:text-lg font-bold text-white uppercase tracking-wider rounded-lg
                        border-2 border-metal-300/50 hover:border-metal-200/70
                        transition-all duration-300 hover:shadow-industrial-xl
                        shadow-industrial-lg"
              aria-label="Смотреть продукцию Металл-Эксперт"
              itemProp="potentialAction"
              prefetch={false}
            >
              Смотреть продукцию
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Оптимизированная микроразметка */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Металл-Эксперт",
            "url": process.env.NEXT_PUBLIC_SITE_URL,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${process.env.NEXT_PUBLIC_SITE_URL}/#products`,
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Металл-Эксперт",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo-utv.png`
            }
          })
        }}
      />
    </section>
  );
}