FROM node:slim

WORKDIR /scripts

COPY . .
COPY ./package.json ./package-lock.json /scripts/

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]