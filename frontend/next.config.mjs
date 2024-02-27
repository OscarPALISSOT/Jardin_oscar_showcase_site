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
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
