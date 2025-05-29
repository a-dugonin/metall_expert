'use client';

import { FiX, FiFileText, FiCheckCircle, FiInfo, FiBox, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  certificateImage?: string;
  certificatePdf?: string;
  specsImage?: string;
  specsPdf?: string;
  features: string[];
  keywords?: string[]; // Добавлено для SEO
};

const TAB_ITEMS = [
  { id: 'usage', label: 'Где используется?', schemaType: 'usage' },
  { id: 'production', label: 'Сроки изготовления', schemaType: 'productionLeadTime' },
  { id: 'specs', label: 'Характеристики', schemaType: 'productSpecification' },
  { id: 'delivery', label: 'Доставка', schemaType: 'deliveryMethod' },
  { id: 'pricing', label: 'Цены', schemaType: 'offers' },
  { id: 'certificate', label: 'Сертификат', schemaType: 'certification' },
];

const PRODUCT_CONTENT = {
  1: { // Ковер
    usage: [
      'Защита подземных газовых коммуникаций',
      'Контрольные узлы трубопроводов',
      'Штоки запорной арматуры'
    ],
    production: [
      'Стандартные: 3-5 рабочих дней',
      'Срочные: 1-2 рабочих дня (+20% к стоимости)'
    ],
    delivery: [
      'Самовывоз со склада в Москве',
      'Доставка по России транспортными компаниями'
    ],
    pricing: {
      description: 'Цены на газовые коверы стальные',
      cards: [
        {
          title: 'Толщина 10 мм',
          items: [
            { name: '⌀159 мм', price: '2 100 руб' },
            { name: '⌀219 мм', price: '3 000 руб' },
            { name: '⌀273 мм', price: '4 500 руб' },
            { name: '⌀325 мм', price: '5 000 руб' }
          ]
        },
        {
          title: 'Толщина 8 мм',
          items: [
            { name: '⌀159 мм', price: '2 000 руб' },
            { name: '⌀219 мм', price: '2 900 руб' },
            { name: '⌀273 мм', price: '4 200 руб' },
            { name: '⌀325 мм', price: '4 600 руб' }
          ]
        },
        {
          title: 'Толщина 6 мм',
          items: [
            { name: '⌀159 мм', price: '1 700 руб' },
            { name: '⌀219 мм', price: '2 700 руб' },
            { name: '⌀273 мм', price: '3 800 руб' },
            { name: '⌀325 мм', price: '4 000 руб' }
          ]
        },
        {
          title: 'Толщина 4 мм',
          items: [
            { name: '⌀159 мм', price: '1 500 руб' },
            { name: '⌀219 мм', price: '2 500 руб' },
            { name: '⌀273 мм', price: '—' },
            { name: '⌀325 мм', price: '—' }
          ]
        }
      ],
      note: 'При заказе от 10 штук предоставляется скидка 5%'
    }
  }
  // ... другие продукты
};

export default function ProductModal({
  product,
  onClose
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState('usage');
  const [showImage, setShowImage] = useState(true);

  if (!product) return null;

  const generateProductSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": `${process.env.NEXT_PUBLIC_SITE_URL}${product.image}`,
    "keywords": product.keywords?.join(', '),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "RUB",
      "price": "По запросу",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  });

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setShowImage(tabId !== 'specs' && tabId !== 'certificate');
  };

  const renderFileSection = (type: 'specs' | 'certificate') => {
    const image = type === 'specs' ? product.specsImage : product.certificateImage;
    const pdf = type === 'specs' ? product.specsPdf : product.certificatePdf;
    const label = type === 'specs' ? 'характеристики' : 'сертификат';
    const schemaType = type === 'specs' ? 'ProductSpecification' : 'Certification';

    return (
      <div className="space-y-4" itemScope itemType={`https://schema.org/${schemaType}`}>
        {image && (
          <div className="border border-metal-200 rounded-lg overflow-hidden">
            <Image
              src={image}
              width={600}
              height={400}
              className="w-full object-contain"
              alt={`${type === 'specs' ? 'Технические характеристики' : 'Сертификат соответствия'} для ${product.title}`}
              itemProp="image"
            />
          </div>
        )}
        {pdf && (
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            itemProp="url"
            aria-label={`Скачать ${label} для ${product.title} в формате PDF`}
          >
            <FiFileText size={16} />
            Скачать {label} (PDF)
          </a>
        )}
      </div>
    );
  };

  const renderDesktopPrices = () => (
    <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4">
      {PRODUCT_CONTENT[product.id as keyof typeof PRODUCT_CONTENT]?.pricing?.cards?.map((card, index) => (
        <div
          key={index}
          className="border border-metal-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <h4 className="font-semibold text-lg mb-3 text-primary flex items-center">
            <FiBox className="mr-2" size={18} />
            <span itemProp="name">{card.title}</span>
          </h4>
          <ul className="space-y-2">
            {card.items.map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center py-1.5 border-b border-metal-100 last:border-0"
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <span className="text-metal-700" itemProp="name">{item.name}</span>
                <span
                  className="font-semibold bg-primary/10 px-3 py-1 rounded text-sm"
                  itemProp="price"
                >
                  {item.price}
                </span>
                <meta itemProp="priceCurrency" content="RUB" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderMobilePrices = () => (
    <div className="md:hidden space-y-3">
      {PRODUCT_CONTENT[product.id as keyof typeof PRODUCT_CONTENT]?.pricing?.cards?.map((card, index) => (
        <details
          key={index}
          className="group border border-metal-200 rounded-lg overflow-hidden"
          open={index === 0}
          itemScope
          itemType="https://schema.org/Offer"
        >
          <summary className="list-none flex justify-between items-center p-3 cursor-pointer bg-metal-50 hover:bg-metal-100">
            <div className="flex items-center">
              <FiBox className="mr-2 text-primary" size={16} />
              <h4 className="font-semibold" itemProp="name">{card.title}</h4>
            </div>
            <FiChevronDown className="transform group-open:rotate-180 transition-transform text-metal-500" size={18} />
          </summary>
          <div className="p-3 bg-white">
            <ul className="space-y-2">
              {card.items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center py-1.5 border-b border-metal-100 last:border-0"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <span className="text-metal-700 text-sm" itemProp="name">{item.name}</span>
                  <span
                    className="font-semibold bg-primary/10 px-2 py-0.5 rounded text-sm"
                    itemProp="price"
                  >
                    {item.price}
                  </span>
                  <meta itemProp="priceCurrency" content="RUB" />
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );

  const renderTabContent = () => {
    const content = PRODUCT_CONTENT[product.id as keyof typeof PRODUCT_CONTENT];
    const activeTabInfo = TAB_ITEMS.find(tab => tab.id === activeTab);

    switch (activeTab) {
      case 'specs':
        return renderFileSection('specs');

      case 'certificate':
        return renderFileSection('certificate');

      case 'usage':
      case 'production':
      case 'delivery':
        return (
          <ul className="space-y-2" itemScope itemType={`https://schema.org/${activeTabInfo?.schemaType}`}>
            {content?.[activeTab]?.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span itemProp="description">{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'pricing':
        if (!content?.pricing) return null;

        return (
          <div className="space-y-4" itemScope itemType="https://schema.org/OfferCatalog">
            <h3 className="text-xl font-semibold text-center md:text-left" itemProp="name">
              {content.pricing.description}
            </h3>

            {renderDesktopPrices()}
            {renderMobilePrices()}

            {content.pricing.note && (
              <p
                className="text-sm text-metal-500 mt-4 flex items-start bg-metal-50 p-3 rounded-lg"
                itemProp="disambiguatingDescription"
              >
                <FiInfo className="flex-shrink-0 mt-0.5 mr-2 text-primary" size={16} />
                <span>{content.pricing.note}</span>
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Микроразметка для продукта */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema()) }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className={`relative bg-white rounded-xl ${activeTab === 'specs' || activeTab === 'certificate' ? 'max-w-3xl' : 'max-w-4xl'} w-full max-h-[90vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
              itemScope
              itemType="https://schema.org/Product"
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-metal-500 hover:text-metal-900 z-10"
                aria-label="Закрыть модальное окно"
              >
                <FiX size={20} />
              </button>

              <div className={`grid ${showImage ? 'md:grid-cols-2' : ''} gap-6 p-6`}>
                {showImage && (
                  <div
                    className="bg-white p-3 rounded-lg border border-metal-200 flex items-center justify-center"
                    itemProp="image"
                  >
                    <Image
                      src={product.image}
                      alt={`Изображение продукта ${product.title}`}
                      width={400}
                      height={400}
                      className="object-contain"
                      priority
                    />
                  </div>
                )}

                <div className={!showImage ? 'col-span-2' : ''}>
                  <h2 className="text-2xl font-bold mb-3" id="product-modal-title" itemProp="name">
                    {product.title}
                  </h2>

                  <div
                    className="flex flex-wrap gap-1 border-b border-metal-200 pb-1 mb-4"
                    role="tablist"
                  >
                    {TAB_ITEMS.map((tab) => {
                      if (tab.id === 'certificate' && !product.certificateImage && !product.certificatePdf) return null;
                      if (tab.id === 'specs' && !product.specsImage && !product.specsPdf) return null;

                      return (
                        <button
                          key={tab.id}
                          onClick={() => handleTabChange(tab.id)}
                          className={`px-3 py-1.5 rounded-t-md text-sm font-medium transition-colors ${
                            activeTab === tab.id ? 'bg-primary text-white' : 'text-metal-700 hover:bg-metal-100'
                          }`}
                          role="tab"
                          aria-selected={activeTab === tab.id}
                          aria-controls={`${tab.id}-tabpanel`}
                          id={`${tab.id}-tab`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  <div
                    id={`${activeTab}-tabpanel`}
                    aria-labelledby={`${activeTab}-tab`}
                    role="tabpanel"
                    tabIndex={0}
                    itemScope
                    itemType={`https://schema.org/${TAB_ITEMS.find(t => t.id === activeTab)?.schemaType || 'Thing'}`}
                  >
                    {renderTabContent()}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}