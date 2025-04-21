# Usa una imagen base oficial de Node.js
FROM node:23-slim


# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY app/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY app/. ./

# Expone el puerto que usa tu app
EXPOSE 3000

# Comando por defecto para iniciar la app
CMD ["npm", "start"]

