import config from "@/util/config";
const navBarOption = [
  {
    title: "Empresas",
    path: config.app_company,
  },
  {
    title: "Nosotros",
    path: config.app_www + "/about",
  },
  {
    title: "Mandatos",
    path: config.app_www + "/mandate",
  },
  {
    title: "Transferencia en línea",
    path: config.app_www + "/vehicle",
  },
  // {
  //   title: "Gestor documental",
  //   path: config.app_www + "/gestor",
  // },
  {
    title: "Firma tu documento",
    path: config.app_www + "/document",
  },
  {
    title: "Preguntas frecuentes",
    path: config.app_www + "/questions",
  },
  {
    title: "Notaria",
    path: config.app_www + "/notary",
  },
  // {
  //   title: "Registrate",
  //   path: config.app_www + "/signUp",
  // },

  // {
  //   title: "Acceso clientes",
  //   path: config.app_www + "/signIn",
  // },
  {
    title: "Contacto",
    path: config.app_www + "/contact",
  },
];

export { navBarOption };