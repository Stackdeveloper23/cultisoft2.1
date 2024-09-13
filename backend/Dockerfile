# Usa una imagen base de PHP con Apache
FROM php:8.2-apache

# Instala extensiones de PHP necesarias
RUN docker-php-ext-install pdo pdo_mysql

# Copia los archivos de la aplicación al contenedor
COPY . /var/www/html

# Establece el directorio de trabajo
WORKDIR /var/www/html

# Instala las dependencias de Composer
RUN curl -sS https://getcomposer.org/installer | php
RUN php composer.phar install --no-dev --optimize-autoloader

# Expon el puerto 80
EXPOSE 80