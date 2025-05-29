import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/features/AboutSection';
import HeroSection from '@/features/HeroSection';
import ProductsSection from '@/features/ProductsSection';
import AdvantagesSection from '@/features/AdvantagesSection';
import ClientsSection from '@/features/ClientsSection';
import ContactsSection from '@/features/ContactsSection';

export default function Home() {
  return (
    <>
      {/* Общий контейнер для хедера и hero-секции с единым фоном */}
      <div className="hero-root">
        <Header />
        <HeroSection />
      </div>

      {/* Основное содержимое страницы */}
      <main>
        {/* Секция "О компании" */}
        <AboutSection />

        {/* Секция "Продукция" */}
        <ProductsSection />

        {/* Секция "Преимущества" */}
        <AdvantagesSection />

        {/* Секция "Преимущества" */}
        <ClientsSection />

        {/* Секция "Контакты" */}
        <ContactsSection />

      </main>

      {/* Футер */}
      <Footer />
    </>
  );
}