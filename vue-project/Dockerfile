FROM node:lts-alpine as ui-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run local-build

FROM node:lts-alpine as server-build
WORKDIR /app
COPY /backend/package*.json ./
RUN npm install
COPY backend/ .

FROM nginx:stable-alpine as production-stage
COPY --from=ui-build /app/dist /usr/share/nginx/html
COPY --from=server-build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]