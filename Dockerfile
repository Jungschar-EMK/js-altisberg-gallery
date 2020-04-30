# build stage
FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . .

# production stage
EXPOSE 80
CMD [ "node", "app.ts" ]