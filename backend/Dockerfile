# Usa una imagen base de PHP con Apache
FROM php:8.2-apache

# Instala dependencias del sistema
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip \
    && rm -rf /var/lib/apt/lists/*

# Copia el archivo composer.phar al contenedor
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Establece el directorio de trabajo
WORKDIR /home/site/wwwroot/public

# Copia los archivos al directorio de trabajo
COPY . .

# Asegura permisos adecuados
RUN chown -R www-data:www-data /home/site/wwwroot/public \
    && a2enmod rewrite

# Instala las dependencias de Composer
RUN composer install --no-dev --optimize-autoloader

# Expon el puerto 80
EXPOSE 80