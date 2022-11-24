FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
COPY default.conf ./
RUN npm install
COPY . .
RUN npm run prod-build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]