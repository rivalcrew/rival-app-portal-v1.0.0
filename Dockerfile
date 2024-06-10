# Use the official lightweight Node.js 14 image
FROM node:18.17.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the Next.js app in production mode
CMD ["npm", "start"]
