FROM node:16-alpine3.16

COPY package.json /package.json

COPY index.js /index.js
RUN chmod +x index.js

COPY /utils /utils
RUN chmod +x utils

RUN yarn global add contentful-cli

ENTRYPOINT ["/index.js"]
