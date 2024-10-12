/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fonts.gstatic.com',
            port: '',
            pathname: '/s/**',
          },
          {
            protocol: 'https',
            hostname: 'example.com', // Replace with your external image host
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;
