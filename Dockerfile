FROM node:18-alpine3.17

COPY package.json /package.json

COPY index.js /index.js
RUN chmod +x index.js

COPY /utils /utils
RUN chmod +x utils

COPY /data /data

RUN yarn global add contentful-cli@1.16.28

ENTRYPOINT ["/index.js"]
