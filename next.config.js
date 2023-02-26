/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: ["live.staticflickr.com", "i.imgur.com", "i.ytimg.com"],
  },
};

module.exports = nextConfig;
