'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiBox } from 'react-icons/fi';
import ProductModal from '@/components/ProductModal';

interface Product {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  features: string[];
  certificateImage?: string;
  certificatePdf?: string;
  specsImage?: string;
  specsPdf?: string;
  keywords: string[];
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Газовые коверы стальные',
    description: 'Производство стальных газовых коверов с полимерным покрытием по ГОСТ. Доступные диаметры от 159 до 325 мм.',
    shortDescription: 'Стальные газовые коверы с полимерным покрытием по ГОСТ. Диаметры 159-325 мм. Доставка по России.',
    image: '/images/products/kover.jpg',
    features: [
      'Герметичное прилегание к горловине',
      'Усиленные ребра жесткости',
      'Возможность индивидуальных размеров',
      'Антикоррозийная защита',
      'Срок службы 15+ лет'
    ],
    certificateImage: '/images/certificates/kover.jpg',
    certificatePdf: '/documents/certificates/kover.pdf',
    specsImage: '/images/specs/kover_desc.png',
    specsPdf: '/documents/specs/kover_desc.pdf',
    keywords: [
      'газовый ковер',
      'стальной ковер',
      'ковер для газопровода',
      'купить газовый ковер',
      'ковер ГОСТ',
      'полимерное покрытие ковера'
    ],
  },
  {
    id: 2,
    title: 'Железобетонные основания под ковер',
    description: 'Промышленные железобетонные подушки для газового оборудования с армированием проволокой ВР-1 Ø 3 мм',
    shortDescription: 'Железобетонные подушки для газового оборудования. Армирование проволокой ВР-1. Доставка по РФ.',
    image: '/images/products/podushka.jpg',
    features: [
      'Плоскость поверхности ±2 мм',
      'Монтажные петли',
      'Устойчивость к сезонным подвижкам грунта',
      'Марка бетона М300',
      'Морозостойкость F200'
    ],
    certificateImage: '/images/certificates/concrete-certificate.jpg',
    certificatePdf: '/documents/certificates/concrete-certificate.pdf',
    specsImage: '/images/specs/concrete-specs.png',
    specsPdf: '/documents/specs/concrete-technical-specs.pdf',
    keywords: [
      'железобетонное основание',
      'подушка под ковер',
      'жб основание',
      'купить основание для газового ковера',
      'бетонная подушка',
      'основание для газового оборудования'
    ],
  },
  {
    id: 3,
    title: 'Контрольные трубки газопровода',
    description: 'Профессиональные контрольные трубки для мониторинга герметичности подземных газовых коммуникаций с защитными колпаками',
    shortDescription: 'Контрольные трубки для газопровода с защитными колпаками. Коррозионностойкие. Сертифицированы.',
    image: '/images/products/trubka.png',
    features: [
      'Защитный колпак из ABS-пластика',
      'Резьбовые соединения',
      'Возможность забора проб без земляных работ',
      'Антивандальное исполнение',
      'Рабочее давление до 1,2 МПа'
    ],
    certificateImage: '/images/certificates/tube-certificate.jpg',
    certificatePdf: '/documents/certificates/tube-certificate.pdf',
    specsImage: '/images/specs/tube-specs.png',
    specsPdf: '/documents/specs/tube-technical-specs.pdf',
    keywords: [
      'контрольная трубка',
      'трубка для газопровода',
      'купить контрольную трубку',
      'газовое оборудование',
      'мониторинг газопровода',
      'защитная трубка'
    ],
  },
  {
    id: 4,
    title: 'Шкафы газораспределительные ШГР',
    description: 'Защитные металлические шкафы для узлов учета и регулирования давления газа с усиленной конструкцией',
    shortDescription: 'Металлические шкафы ШГР для газового оборудования. Антивандальные. Производство Россия.',
    image: '/images/products/shkaf.png',
    features: [
      'Вентиляционные жалюзи с сеткой',
      'Петли с защитой от снятия',
      'Гарантия 5 лет',
      'Толщина металла 1,5-2 мм',
      'Защита от несанкционированного доступа'
    ],
    certificateImage: '/images/certificates/cabinet-certificate.jpg',
    certificatePdf: '/documents/certificates/cabinet-certificate.pdf',
    specsImage: '/images/specs/cabinet-specs.png',
    specsPdf: '/documents/specs/cabinet-technical-specs.pdf',
    keywords: [
      'шкаф газораспределительный',
      'ШГР',
      'металлический шкаф для газа',
      'купить шкаф ШГР',
      'шкаф для газового оборудования',
      'антивандальный шкаф'
    ],
  },
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-12 md:py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": PRODUCTS.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.title,
                "description": product.description,
                "image": `${process.env.NEXT_PUBLIC_SITE_URL}${product.image}`,
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "RUB",
                  "price": "По запросу",
                  "availability": "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition"
                }
              }
            }))
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Газовое оборудование и комплектующие
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Качественные комплектующие для газовой инфраструктуры с доставкой по всей России
          </p>
        </motion.header>

        <div className="space-y-16 md:space-y-24">
          {PRODUCTS.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="lg:w-1/2 w-full h-[280px] sm:h-[350px] md:h-[400px] relative group">
                <div className="absolute inset-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-200
                              transition-all duration-500 group-hover:bg-gray-100 group-hover:shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.shortDescription}
                    fill
                    className="object-contain p-6 transition-transform duration-500
                              group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading={index > 1 ? "lazy" : "eager"}
                    quality={index > 1 ? 75 : 85}
                    priority={index < 2}
                  />
                </div>
              </div>

              <div className="lg:w-1/2 w-full space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  {product.shortDescription}
                </p>

                <ul className="space-y-2 md:space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  aria-label={`Подробнее о продукте: ${product.title}`}
                  onClick={() => setSelectedProduct(product)}
                  className="mt-6 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg
                            flex items-center gap-3 text-base md:text-lg font-medium
                            shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <FiBox className="text-xl" />
                  Подробнее о продукте
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}