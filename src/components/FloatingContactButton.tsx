import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Отслеживаем скролл
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {!isOpen ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl ${
                isScrolled ? 'bg-metal-700' : 'bg-metal-600'
              }`}
              onClick={() => setIsOpen(true)}
              aria-label="Контакты"
            >
              <FaPhone className="w-6 h-6" />
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-xl shadow-xl p-4 w-84 border border-metal-200"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-metal-900">Свяжитесь с нами</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-metal-400 hover:text-metal-600 transition-colors"
                  aria-label="Закрыть"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:+7XXX-XXX-XX-XX"
                  className="flex items-center gap-3 p-2 hover:bg-metal-50 rounded transition-colors"
                >
                  <div className="bg-metal-100 p-2 rounded-full">
                    <FaPhone className="text-metal-600" />
                  </div>
                  <div>
                    <div className="text-sm text-metal-500">Телефон</div>
                    <div className="font-medium text-metal-800">+7 (XXX) XXX-XX-XX</div>
                  </div>
                </a>

                <a
                  href="mailto:info@metal-expert.ru"
                  className="flex items-center gap-3 p-2 hover:bg-metal-50 rounded transition-colors"
                >
                  <div className="bg-metal-100 p-2 rounded-full">
                    <FaEnvelope className="text-metal-600" />
                  </div>
                  <div>
                    <div className="text-sm text-metal-500">Email</div>
                    <div className="font-medium text-metal-800">ooo.metallekspert@list.ru</div>
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}