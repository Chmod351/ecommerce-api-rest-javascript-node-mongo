FROM node:14

WORKDIR /app

COPY package.json .
WORKDIR /app/server
RUN npm install

WORKDIR /app
COPY . /app

CMD [ "npm", "start" ]
