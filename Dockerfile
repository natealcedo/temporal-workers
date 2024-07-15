# Base Stage
FROM node:20 as base
WORKDIR /app
# Ensure your base image is compatible with your host architecture
# Install any necessary system dependencies for @temporalio/core-bridge
RUN npm install -g pnpm
COPY package*.json ./
RUN pnpm install
COPY . .

# Build Stage
FROM base as builder
RUN pnpm build

# Final Stage
FROM node:20
WORKDIR /app
# Copying built files and package.json, then installing production dependencies
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install -g pnpm && pnpm install --only=production
CMD ["node", "dist/index.js"]