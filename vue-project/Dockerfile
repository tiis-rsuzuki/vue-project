FROM node:lts-alpine as ui-build
WORKDIR /app
COPY package*.json ./
COPY default.conf ./
RUN npm install
COPY . .
RUN npm run local-build

FROM nginx:stable-alpine as production-stage
COPY --from=ui-build /app/dist /usr/share/nginx/html
COPY --from=ui-build /app/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]