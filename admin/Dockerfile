# Etapa de construcción
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build --force

# Etapa de producción
FROM httpd:2.4
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/