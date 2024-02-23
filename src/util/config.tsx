import nextConfig from "../../next.config.mjs";

const config = {
  api_URL: nextConfig.env?.API_URL || "",
  api_key: nextConfig.env?.API_KEY || "",
  app_www: nextConfig.env?.APP_WWW || "",
  app_company:
    nextConfig.env?.APP_COMPANY || " https://empresa.portalfirma.cl/",

};

export default config;