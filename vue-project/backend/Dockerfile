FROM node:slim

WORKDIR /scripts

COPY . .
COPY ./package.json ./package-lock.json /scripts/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]