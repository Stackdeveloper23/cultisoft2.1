# Usa una imagen base de PHP con Apache
FROM php:8.2-apache as build

# Instala dependencias del sistema
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql \
    && rm -rf /var/lib/apt/lists/*

# Copia el archivo composer.phar al contenedor
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Establece el directorio de trabajo
WORKDIR /home/site/wwwroot

# Copia los archivos al directorio de trabajo
COPY . .

# Asegura permisos adecuados para Apache
RUN chown -R www-data:www-data /home/site/wwwroot \
    && chown -R www-data:www-data /home/site/wwwroot/storage \
    && chown -R www-data:www-data /home/site/wwwroot/bootstrap/cache \
    && chmod -R 775 /home/site/wwwroot/storage \
    && chmod -R 775 /home/site/wwwroot/bootstrap/cache \
    && a2enmod rewrite

# Instala las dependencias de Composer
RUN composer install --no-dev --optimize-autoloader

# Copiar el archivo de configuración personalizado de Apache
COPY ./apache/laravel.conf /etc/apache2/sites-available/000-default.conf

# Expon el puerto 80
EXPOSE 80

# Comando para iniciar Apache en primer plano
CMD ["apache2-foreground"]
