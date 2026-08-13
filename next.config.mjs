/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/estacao-da-comida',
  images: {
    unoptimized: true,
  },
}

export default nextConfig