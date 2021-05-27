# An node image to start from
FROM node:8.9.3-alpine

# Create a directory in a container
RUN mkdir -p /usr/src/app

# Copy files from app forlder to a directory in a container
COPY ./app/* /usr/src/app/

# Change current container directory
WORKDIR /usr/src/app

# Gather node dependencies
RUN npm install

# run the application
CMD node /usr/src/app/index.js
