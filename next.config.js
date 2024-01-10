/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ssl.gstatic.com',"assets.leetcode.com","lh3.googleusercontent.com"],
  },
}

module.exports = nextConfig
