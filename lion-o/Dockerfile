FROM alpine:3.7 AS SystemOS
RUN apk update \
	&& apk add --update nodejs nodejs-npm \
    && npm install pm2 -g 
WORKDIR /app
COPY ./package.json ./package.json
RUN npm install
COPY *.js ./
COPY './public/' '/app/public/'
COPY './routes/' '/app/routes/'
COPY './views/' '/app/views/'
ENV PORT=7000
CMD ["pm2-runtime", "/app/app.js"]