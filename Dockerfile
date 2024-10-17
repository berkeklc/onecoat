FROM directus/directus:latest

# Environment Variables
ARG SECRET=SuperSecureRandomKey123!@#
ARG ADMIN_EMAIL=root@root.com
ARG ADMIN_PASSWORD=12root34
ARG DB_CLIENT=pg
ARG CUSTOM_DATABASE_URL=postgres://u6q399niki4pkm:pbdaae4f2aaacd2685d2bb210db9921bb2e9b4b04ec0ba444cc1cd250de1a7724@c2v3jin4rntblb.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d553ngv6q8lrkk
ARG WEBSOCKETS_ENABLED=true
ARG PUBLIC_URL=https://naturaonecoat-cc85b1fdbbef.herokuapp.com
ARG CORS_ENABLED=true
ARG CORS_ORIGIN=https://naturaonecoat.vercel.app

ENV SECRET=${SECRET}
ENV ADMIN_EMAIL=${ADMIN_EMAIL}
ENV ADMIN_PASSWORD=${ADMIN_PASSWORD}
ENV DB_CLIENT=${DB_CLIENT}
ENV CUSTOM_DATABASE_URL=${CUSTOM_DATABASE_URL}
ENV WEBSOCKETS_ENABLED=${WEBSOCKETS_ENABLED}
ENV PUBLIC_URL=${PUBLIC_URL}
ENV CORS_ENABLED=${CORS_ENABLED}
ENV CORS_ORIGIN=${CORS_ORIGIN}

# Set SSL configuration as a JSON object
ENV DB_SSL='{"rejectUnauthorized":false}'

# Expose the port Directus will run on
EXPOSE 8055

# Initialize the database and start Directus
CMD ["sh", "-c", "npx directus bootstrap && npx directus start"]