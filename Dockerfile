# Use an official Nginx image as a base
FROM nginx:alpine

# Copy the HTML and CSS files to the Nginx server's HTML directory
COPY ./portfolio.html/index.html /usr/share/nginx/html/index.html
COPY ./portfolio.html/portfolio.css /usr/share/nginx/html/portfolio.css
COPY ./portfolio.html/images /usr/share/nginx/html/images

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]