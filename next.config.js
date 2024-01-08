/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dio.me",
        port: "",
        pathname: "/certificates/**",
      },
      {
        protocol: "https",
        hostname: "hermes.digitalinnovation.one",
        port: "",
        pathname: "/certificates/**",
      },
    ],
  },
};

module.exports = nextConfig;
