/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // This option allows production builds to successfully complete even if your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
    output: 'export',
    images: {
      unoptimized: true, // Disable image optimization globally
    },
};

export default nextConfig;
