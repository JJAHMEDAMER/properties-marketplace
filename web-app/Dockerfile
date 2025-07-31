FROM node:20-alpine
WORKDIR /app

# Install dependencies based on lockfile
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm i --frozen-lockfile; \
  else npm ci; \
  fi

COPY . .

RUN npm run build
ENV NODE_ENV production

EXPOSE 3000

# Next.js production server command
CMD ["npm", "start"]