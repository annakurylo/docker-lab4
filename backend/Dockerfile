FROM node:16-alpine
RUN mkdir -p /backend
WORKDIR /backend
COPY package.json /backend
RUN npm install
COPY . /backend
EXPOSE 4000
CMD ["node", "server.js"]