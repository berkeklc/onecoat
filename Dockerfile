FROM directus/directus:latest

# Environment Variables
ENV SECRET SuperSecureRandomKey123!@#
ENV ADMIN_EMAIL root@root.com
ENV ADMIN_PASSWORD 12root34
ENV DB_CLIENT sqlite3
ENV DB_FILENAME /directus/database/data.db
ENV WEBSOCKETS_ENABLED true
ENV PUBLIC_URL https://naturaonecoat-cc85b1fdbbef.herokuapp.com

# Expose the port Directus will run on
EXPOSE 8055

# Initialize the database and start Directus
CMD ["sh", "-c", "npx directus bootstrap && npx directus start"]
