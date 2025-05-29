'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.', {
          duration: 5000,
          position: 'top-center',
        });
        reset();
      } else {
        throw new Error(result.message || 'Ошибка сервера');
      }
    } catch (error) {
      toast.error('Ошибка при отправке запроса. Пожалуйста, попробуйте позже или свяжитесь по телефону.', {
        duration: 5000,
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 ${className}`}>
      <h3 className="text-2xl font-bold mb-6 text-metal-900">Оставить заявку</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-metal-700">
            Ваше имя *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Пожалуйста, укажите имя' })}
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-metal-500 focus:ring-1 focus:ring-metal-500 outline-none transition"
            disabled={isSubmitting}
          />
          {errors.name && <p className="mt-1 text-red-500 text-sm">{String(errors.name.message)}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 text-metal-700">
            Телефон *
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone', {
              required: 'Пожалуйста, укажите телефон',
              pattern: {
                value: /^[\d\s+\-()]+$/,
                message: 'Введите корректный номер телефона',
              },
            })}
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-metal-500 focus:ring-1 focus:ring-metal-500 outline-none transition"
            disabled={isSubmitting}
          />
          {errors.phone && <p className="mt-1 text-red-500 text-sm">{String(errors.phone.message)}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-metal-700">
            Сообщение (необязательно)
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-metal-500 focus:ring-1 focus:ring-metal-500 outline-none transition"
            disabled={isSubmitting}
            placeholder="Опишите ваш запрос..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-metal-600 hover:bg-metal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 mt-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
        </button>
      </form>
    </div>
  );
}