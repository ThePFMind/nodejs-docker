FROM node:0.12.7-slim

# Install nodemon
RUN npm install -g nodemon

# Define working directory
WORKDIR /src
ADD ./app /src

RUN npm install

# Expose port
EXPOSE 3000

# Run app using nodemon
CMD npm start
