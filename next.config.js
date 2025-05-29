/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Перенесено на верхний уровень

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**'
      }
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true // Добавьте это для статического экспорта
  }
}

module.exports = nextConfig;


///** @type {import('next').NextConfig} */
//const nextConfig = {
//  output: 'export',
//  distDir: 'out', // принудительно задаем папку
//  images: {
//    unoptimized: true,
//  },
//  trailingSlash: true,
//  assetPrefix: './',
//};
//
//module.exports = nextConfig;