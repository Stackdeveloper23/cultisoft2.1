# Etapa de construcción
FROM node:20 as build
WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

# Etapa de producción
FROM httpd:2.4
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/