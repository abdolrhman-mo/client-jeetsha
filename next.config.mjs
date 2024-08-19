/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '8000', // Add this if you're serving images from a specific port
              pathname: '/media/products/**', // Adjust the path to match your image URLs
            },
        ],
    }
};

export default nextConfig;
