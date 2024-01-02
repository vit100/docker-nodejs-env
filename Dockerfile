FROM node:latest

LABEL mainteainer="Vitaliy Markitanov"
WORKDIR /app

COPY ["app.js", "package.json", "./"]
#ENV PORT=100
#EXPOSE 100

RUN ["npm", "install"]

CMD [ "npm","start" ]
