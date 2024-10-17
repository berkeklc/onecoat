FROM directus/directus:latest

# Environment Variables
ARG SECRET=SuperSecureRandomKey123!@#
ARG ADMIN_EMAIL=root@root.com
ARG ADMIN_PASSWORD=12root34
ARG DB_CLIENT=pg
ARG CUSTOM_DATABASE_URL=postgres://u1ap8aa3t30p9a:pcaca8a768ad99ca891ece2a6861e73e746371070140a925a00242b2cde3e9699@cdeuajkr4sf66s.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dfqce15pmnpls9
ARG DATABASE_URL=postgres://u1ap8aa3t30p9a:pcaca8a768ad99ca891ece2a6861e73e746371070140a925a00242b2cde3e9699@cdeuajkr4sf66s.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dfqce15pmnpls9
ARG WEBSOCKETS_ENABLED=true
ARG PUBLIC_URL=https://naturaonecoat-cc85b1fdbbef.herokuapp.com
ARG CORS_ENABLED=true
ARG CORS_ORIGIN=https://naturaonecoat.vercel.app

ENV SECRET=${SECRET}
ENV ADMIN_EMAIL=${ADMIN_EMAIL}
ENV ADMIN_PASSWORD=${ADMIN_PASSWORD}
ENV DB_CLIENT=${DB_CLIENT}
ENV CUSTOM_DATABASE_URL=${CUSTOM_DATABASE_URL}
ENV DATABASE_URL=${CUSTOM_DATABASE_URL}
ENV WEBSOCKETS_ENABLED=${WEBSOCKETS_ENABLED}
ENV PUBLIC_URL=${PUBLIC_URL}
ENV CORS_ENABLED=${CORS_ENABLED}
ENV CORS_ORIGIN=${CORS_ORIGIN}

# Set SSL configuration as a JSON object
ENV DB_SSL='{"rejectUnauthorized":false}'

# Expose the port Directus will run on
EXPOSE 8055

# Initialize the database and start Directus
CMD ["sh", "-c", "npx directus bootstrap && npx directus start"]
