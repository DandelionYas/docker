# Specify a base image
FROM alpine

# Install some dependencies
COPY ./ ./
RUN apk add --update nodejs npm
RUN npm install

# Default command
CMD ["npm", "start"]
