FROM vit100/nodejs

LABEL mainteainer="Vitaliy Markitanov"
WORKDIR /app

 #COPY app.js app.js
 #COPY package.json package.json
 #COPY package-lock.json package-lock.json

COPY ["app.js", "package.json", "./"]
#ENV PORT=100
#EXPOSE 100

RUN ["npm", "install"]

CMD [ "npm","start" ]
