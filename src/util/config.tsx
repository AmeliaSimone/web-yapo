import nextConfig from "../../next.config.mjs";

const config = {
  api_URL: nextConfig.env?.API_URL || "",
  api_key: nextConfig.env?.API_KEY || "",
  app_customer: nextConfig.env?.APP_CUSTOMER || "",
  app_www: nextConfig.env?.APP_WWW || "",
  app_vehicle: nextConfig.env?.APP_VEHICLE || "",
  app_document: nextConfig.env?.APP_DOCUMENT || "",
  app_notary: nextConfig.env?.APP_NOTARY || "",
  app_company: nextConfig.env?.APP_COMPANY || "https://empresa.portalfirma.cl/",
};

export default config;
