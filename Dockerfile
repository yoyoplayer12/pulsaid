# Use an official PHP runtime as a parent image
FROM php:7.4-apache

# Set the working directory to /var/www/html
WORKDIR /var/www/html

# Copy the current directory contents into the container at /var/www/html
COPY . /var/www/html

# Install any dependencies your PHP application requires
# For example, if you are using Composer, uncomment and modify the following line
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# RUN composer install

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variables (if needed)
# ENV VARIABLE_NAME=value

# Run apache when the container launches
CMD ["apache2-foreground"]
