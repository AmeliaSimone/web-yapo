/** @type {import('next').NextConfig} */
const nextConfig = {env: {
    API_KEY: process.env.API_KEY || "",
    API_URL: process.env.API_URL || "",
    APP_WWW: process.env.APP_WWW || "",
    APP_COMPANY: process.env.APP_COMPANY || "https://empresa.portalfirma.cl/",
    // GTAG: process.env.GTAG || "G-VD1ZTK1CYM",
  },};

export default nextConfig;
