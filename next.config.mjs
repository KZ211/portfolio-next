/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
    {
        protocol: 'https',
        hostname: 'drive.google.com',
    },
    {
        protocol: 'https',
        hostname: 'assets-global.website-files.com',
    }
    ],
    }
};

export default nextConfig;
