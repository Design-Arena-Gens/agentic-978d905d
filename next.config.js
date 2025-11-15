/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'chqfunawciniepaqtdbd.supabase.co' },
      { protocol: 'https', hostname: 'www.ideabrowser.com' },
      { protocol: 'https', hostname: 'ideabrowser.com' }
    ]
  }
};

module.exports = nextConfig;
