/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cfnfbgicglwlecbqvdka.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
