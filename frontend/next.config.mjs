/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend.jardindoscar.fr',
            }
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
