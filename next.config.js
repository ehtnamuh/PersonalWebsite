/** @type {import('next').NextConfig} */
// const nextConfig = {output:"standalone"}
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // <-- Add this line
  },
};


module.exports = nextConfig
