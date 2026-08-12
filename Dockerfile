# Use official lightweight Node.js image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (leverages Docker cache)
COPY package*.json ./

# Install dependencies (clean install)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Verify the app works inside the container during build
RUN npm run test:coverage

# Default command (can be overridden)
CMD ["node", "-e", "console.log('Docker build & test successful!')"]