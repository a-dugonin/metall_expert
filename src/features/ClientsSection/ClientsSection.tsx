import Image from 'next/image';
import { motion } from 'framer-motion';

const CLIENTS = [
  {
    name: "Газпром Газораспределение Краснодар",
    logo: "/logos/gazprom.png",
    url: "https://www.gazpromgk.ru/"
  },
  {
    name: "СантехНефтеГаз",
    logo: "/logos/santeh.png",
    url: "https://www.ingenerio.ru/"
  },
  {
    name: "Роснефть",
    logo: "/logos/rosneft.png",
    url: "https://www.rosneft.ru/"
  },
  {
    name: "Автодор",
    logo: "/logos/autodor.png",
    url: "https://avtodor-tr.ru/"
  },
  {
    name: "Росводоканал",
    logo: "/logos/vodokanal.png",
    url: "https://www.rosvodokanal.ru/"
  },
  {
    name: "МУП УИС",
    logo: "/logos/uis.png",
    url: "https://mup-uis.ru/"
  },
];

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-metal-900 mb-4">
            Нам доверяют
          </h2>
          <div className="h-1.5 w-20 bg-metal-300 rounded-full mx-auto" />
        </motion.div>

        {/* Два ряда по три логотипа */}
        <div className="space-y-8 md:space-y-12">
          {/* Первый ряд */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {CLIENTS.slice(0, 3).map((client, index) => (
              <ClientLogo key={client.name} client={client} index={index} />
            ))}
          </div>

          {/* Второй ряд */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {CLIENTS.slice(3, 6).map((client, index) => (
              <ClientLogo key={client.name} client={client} index={index + 3} />
            ))}
          </div>
        </div>

        {/* Дополнительный текст */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="inline-block px-6 py-3 bg-white rounded-full shadow-sm text-sm md:text-base border border-gray-200">
            Более <span className="font-bold text-metal-800">10 лет</span> успешного сотрудничества
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Вынесенный компонент логотипа для удобства
function ClientLogo({ client, index }: { client: typeof CLIENTS[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex justify-center"
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
    >
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="group flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full h-full border border-gray-100 hover:border-metal-200"
        aria-label={`${client.name} - наш клиент`}
        itemProp="item"
      >
        <div className="relative w-full h-16 md:h-20">
          <Image
            src={client.logo}
            alt={`Логотип ${client.name}`}
            fill
            className="object-contain object-center grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            sizes="(max-width: 640px) 120px, 160px"
            loading="eager"
          />
        </div>
        <meta itemProp="position" content={String(index + 1)} />
      </a>
    </motion.div>
  );
}