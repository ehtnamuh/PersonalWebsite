/** @type {import('next').NextConfig} */
// const nextConfig = {output:"standalone"}
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: 'Samin-Bin-Karim/',
  images: {
    unoptimized: true, 
  },
};


module.exports = nextConfig
