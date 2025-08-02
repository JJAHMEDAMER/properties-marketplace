FROM node:20-alpine
RUN apk add --no-cache curl

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

RUN npx prisma generate

RUN npm run build
EXPOSE 5000

CMD ["npm", "run", "serve"]