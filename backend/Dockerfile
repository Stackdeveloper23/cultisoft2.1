# Usa una imagen base de PHP con Apache
FROM php:8.2-apache

# Instala dependencias del sistema
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip \
    git

# Configura PHP
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd
RUN docker-php-ext-install zip


# Copia el archivo composer.phar al contenedor
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Establece el directorio de trabajo
WORKDIR /home/site/wwwroot/public

# Copia los archivos al directorio de trabajo
COPY . .


# Instala las dependencias de Composer
RUN composer install --no-dev --optimize-autoloader

# Expon el puerto 80
EXPOSE 80