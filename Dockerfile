FROM node:12-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 3333
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
