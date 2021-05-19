# Specify a base image
FROM alpine

# Specify the working directory
WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN apk add --update nodejs npm
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]
