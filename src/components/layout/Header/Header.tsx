'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';

const NAV_ITEMS = [
  { id: 'about', label: 'О компании' },
  { id: 'products', label: 'Продукция' },
  { id: 'advantages', label: 'Преимущества' },
  { id: 'contacts', label: 'Контакты' }
];

const PHONE_NUMBER = '+7 (XXX) XXX-XX-XX';
const CLEAN_PHONE = PHONE_NUMBER.replace(/[^0-9]/g, '');

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.querySelector('.menu-button');

      if (isMenuOpen && menu && !menu.contains(e.target as Node) &&
          button && !button.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="hero-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Десктоп навигация */}
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map(item => (
            <Link key={item.id} href={`/#${item.id}`} className="text-white hover:text-metal-200 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Телефон для десктопа */}
        <a
          href={`tel:${CLEAN_PHONE}`}
          className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 transition-colors"
        >
          <FiPhone className="text-white w-5 h-5" />
          <span className="text-white font-medium">{PHONE_NUMBER}</span>
        </a>

        {/* Мобильные элементы */}
        <div className="flex md:hidden items-center w-full justify-between">
          {/* Телефон для мобильных */}
          <a
            href={`tel:${CLEAN_PHONE}`}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 transition-colors"
          >
            <FiPhone className="text-white w-5 h-5" />
            <span className="text-white font-medium">{PHONE_NUMBER}</span>
          </a>

          {/* Кнопка меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button text-white font-medium bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 transition-colors"
          >
            {isMenuOpen ? 'Закрыть' : 'Меню'}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div
            className="absolute top-16 right-4 w-64 bg-white shadow-xl rounded-lg overflow-hidden animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_ITEMS.map(item => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className="block px-6 py-4 text-gray-800 hover:bg-gray-100 border-b border-gray-100 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}