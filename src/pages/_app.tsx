import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.scss';
import FloatingContactButton from '@/components/FloatingContactButton';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Отключаем автоматический скролл при загрузке страницы
    if (window.location.hash) {
      const cleanUrl = window.location.href.split('#')[0];
      window.history.replaceState({}, document.title, cleanUrl);
    }

    // Дополнительная защита от скролла
    const handleRouteChange = (url: string) => {
      if (url.includes('#')) {
        const [path] = url.split('#');
        router.replace(path, undefined, { shallow: true });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            maxWidth: '100%',
            padding: '1rem',
            fontSize: '0.875rem',
          },
          success: {
            style: {
              background: '#f0fdf4',
              color: '#166534',
              border: '1px solid #bbf7d0',
            },
          },
          error: {
            style: {
              background: '#fef2f2',
              color: '#b91c1c',
              border: '1px solid #fecaca',
            },
          },
        }}
      />
      <Component {...pageProps} />
      <FloatingContactButton />
    </>
  );
}