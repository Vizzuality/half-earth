### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-alpine as builder

RUN mkdir /app
COPY package.json yarn.lock ./app/

WORKDIR /app

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN yarn install && mkdir -p /app/src && mkdir -p /app/config && mkdir -p /app/public 


COPY .babelrc .postcssrc ./
COPY src ./src
COPY config ./config
COPY public ./public

## Build the angular app in production mode and store the artifacts in dist folder

RUN npm run build


### STAGE 2: Setup ###
FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
