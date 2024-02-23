/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY || "",
    API_URL: process.env.API_URL || "",
    APP_CUSTOMER: process.env.APP_CUSTOMER || "",
    APP_WWW: process.env.APP_WWW || "",
    APP_VEHICLE: process.env.APP_VEHICLE || "",
    APP_DOCUMENT: process.env.APP_DOCUMENT || "",
    APP_NOTARY: process.env.APP_NOTARY || "",
    APP_COMPANY: process.env.APP_COMPANY || "https://empresa.portalfirma.cl/",
  },
};

export default nextConfig;
