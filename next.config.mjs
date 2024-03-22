/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "traffic.aniccadatatest.com",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;
