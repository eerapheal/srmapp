/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  env: {
    API_URL: 'https://srmagazine.vercel.app',
  },
}

module.exports = nextConfig;
