# Etapa de construcción
FROM node:20 as build
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
RUN npm run build

# Etapa de producción
FROM httpd:2.4
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/