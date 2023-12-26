/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  env: {
    API_URL: process.env.NODE_ENV === 'production'
      ? 'https://srmagazine.vercel.app'
      : 'http://127.0.0.1:3000',
  },
};

module.exports = nextConfig;
