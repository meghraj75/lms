FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production image
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
COPY public/images ./images  

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]