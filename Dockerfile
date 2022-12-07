FROM node:16-alpine3.16

COPY index.js /index.js
RUN chmod +x index.js
RUN yarn global add contentful-cli
ENTRYPOINT ["/index.js"]
