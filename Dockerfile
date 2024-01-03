FROM node:18-alpine3.19

COPY package.json /package.json

COPY index.js /index.js
RUN chmod +x index.js

COPY /utils /utils
RUN chmod +x utils

COPY /data /data

RUN yarn global add contentful-cli@3.1.37

ENTRYPOINT ["/index.js"]
