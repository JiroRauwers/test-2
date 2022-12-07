/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['localhost', 'images.unsplash.com', 's3.sa-east-1.amazonaws.com', "content.centralcorretor.com.br"],
    },

    experimental: {
        appDir: true,
    }
}

module.exports = nextConfig
