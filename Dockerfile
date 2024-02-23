# Etapa de compilación
FROM node:18-alpine AS build

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la aplicación
COPY . .

# Instalar las dependencias y construir la aplicación
RUN yarn install
RUN yarn build

# Etapa de producción
FROM node:16-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la etapa de compilación
COPY --from=build /app ./

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 4518

# Comando para iniciar la aplicación
CMD ["yarn", "start"]
