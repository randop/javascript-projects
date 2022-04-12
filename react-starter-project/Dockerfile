FROM node:lts-alpine@sha256:38bc06c682ae1f89f4c06a5f40f7a07ae438ca437a2a04cf773e66960b2d75bc
ENV NODE_VERSION 16.14.2
ENV NODE_ENV production
RUN apk --no-cache add git
RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY docker.production.js .
RUN node docker.production.js
RUN npm install --production --no-optional --no-audit --no-package-lock --loglevel info && npm cache clean --force
COPY . .
COPY public/dist/index.html public/index.html

EXPOSE 3000
RUN npm install -g --no-audit --no-package-lock --production --loglevel info pm2@5.2.0
CMD ["pm2-runtime", "start", "ecosystem.config.js"]