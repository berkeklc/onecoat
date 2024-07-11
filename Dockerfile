FROM directus/directus:latest

# Environment Variables
ARG SECRET=SuperSecureRandomKey123!@#
ARG ADMIN_EMAIL=root@root.com
ARG ADMIN_PASSWORD=12root34
ARG DB_CLIENT=pg
ARG DB_HOST=c8lj070d5ubs83.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com
ARG DB_PORT=5432
ARG DB_DATABASE=ddf8fhht60hi19
ARG DB_USER=u7hipdmfa7bhhl
ARG DB_PASSWORD=p1b8fcbcbcc880da4d33d24ab758ab42e3a0da154e8c29e7d683025caeba43d0c
ARG WEBSOCKETS_ENABLED=true
ARG PUBLIC_URL=https://naturaonecoat-cc85b1fdbbef.herokuapp.com

ENV SECRET=${SECRET}
ENV ADMIN_EMAIL=${ADMIN_EMAIL}
ENV ADMIN_PASSWORD=${ADMIN_PASSWORD}
ENV DB_CLIENT=${DB_CLIENT}
ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV DB_DATABASE=${DB_DATABASE}
ENV DB_USER=${DB_USER}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV WEBSOCKETS_ENABLED=${WEBSOCKETS_ENABLED}
ENV PUBLIC_URL=${PUBLIC_URL}

# Set SSL configuration as a JSON object
ENV DB_SSL='{"rejectUnauthorized":false}'

# Expose the port Directus will run on
EXPOSE 8055

# Initialize the database and start Directus
CMD ["sh", "-c", "npx directus bootstrap && npx directus start"]
