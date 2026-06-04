/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend.jardindoscar.fr',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'http',
                hostname: 'directus-jardindoscar',
            }
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
