# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app

COPY package.json ./

RUN npm install --silent --only=prod

COPY ./src ./src
COPY ./public ./public
RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]