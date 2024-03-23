# Step 1: Select base image with specific Node.js version
FROM node:20.11.1

# Step 2: Install a specific npm version
RUN npm install -g npm@8.13.1

# Step 3: Set the working directory in the container
WORKDIR /app

# Step 4: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 5: Install node modules
RUN npm install

# Step 6: Copy the rest of your app's source code
COPY . .

# Step 7: Build your React app
RUN npm run build

# Step 8: Install server for serving the build files
RUN npm install -g serve

# Step 9: Define the network port that this container will listen on
EXPOSE 5000

# Step 10: Serve the app using serve
CMD ["serve", "-s", "build", "-l", "5000"]

