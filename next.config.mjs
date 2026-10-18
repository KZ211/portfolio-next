/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site images live in public/images. Add a host here only if you load
  // images from another domain with next/image.
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'drive.google.com' }],
  },
};

export default nextConfig;
