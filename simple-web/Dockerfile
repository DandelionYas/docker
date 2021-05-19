# Specify a base image
FROM alpine

# Specify the working directory
WORKDIR /usr/app

# Install some dependencies
COPY ./ ./
RUN apk add --update nodejs npm
RUN npm install

# Default command
CMD ["npm", "start"]
