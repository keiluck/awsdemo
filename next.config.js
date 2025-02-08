/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // 让 Next.js 生成静态 HTML
    images: {
      unoptimized: true,  // 解决 AWS Amplify 不支持 Image Optimization
    },
  };
  
  module.exports = nextConfig;
  