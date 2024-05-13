/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/company',
        permanent: true,
      },
      {
        source: '/api/:path*',
        destination: 'https://localhost:7144/api/:path*', // Proxy to Backend
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
