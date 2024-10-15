/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // This option allows production builds to successfully complete even if your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
};

export default nextConfig;
