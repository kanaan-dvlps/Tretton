FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g pm2

EXPOSE 9000

CMD pm2 start server.js --watch

# docker run -it --rm -p 9000:9000 tretton_test
