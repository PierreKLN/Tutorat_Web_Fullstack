# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app

COPY package.json ./

RUN npm install --silent --only=prod

COPY ./src ./src
# Remove comment to copy the current db
# COPY ./db ./db

CMD ["npm", "start"]