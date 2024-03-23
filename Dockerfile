# Step 1: Select base image
FROM node:latest

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Optional: if you are using yarn:
# COPY package.json yarn.lock ./

# Step 4: Install node modules
RUN npm install

# Optional: if you are using yarn:
# RUN yarn install

# Step 5: Copy the rest of your app's source code
COPY . .

# Step 6: Build your React app
RUN npm run build

# Step 7: Install server for serving the build files
RUN npm install -g serve

# Step 8: Define the network port that this container will listen on
EXPOSE 5000

# Step 9: Serve the app using serve
CMD ["serve", "-s", "build", "-l", "5000"]

