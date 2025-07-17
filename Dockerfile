FROM node:18
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm", "run", "dev" ]
EXPOSE 5000