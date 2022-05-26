FROM node:16-alpine

RUN mkdir -o /usr/app
WORKDIR /usr/app

COPY ./ ./


RUN npm install
RUN npm run build

EXPOSE 3030

CMD ["npm", "start"]


