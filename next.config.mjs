/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'dfscms-dev.shega.co'
            },
            {
                protocol: 'https',
                hostname: 'dfscms-qa.shega.co'
            },
            {
                protocol: 'https',
                hostname: 'dfscms-uat.shega.co'
            },
            {
                protocol: 'https',
                hostname: 'dfscms.shega.co'
            },
            {
                protocol: 'https',
                hostname: 'digitalfinance.shega.co',
                pathname: '/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'akofada.shega.co',
                pathname: '/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'dfs-dev.shega.co',
                pathname: '/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'dfs-qa.shega.co',
                pathname: '/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'dfs-uat.shega.co',
                pathname: '/uploads/**'
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            }
        ]
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
