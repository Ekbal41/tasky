/** @type {import('next').NextConfig} */
const nextConfig = {
    // for images hosted on a CDN
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },]
    },
}

module.exports = nextConfig
