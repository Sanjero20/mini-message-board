FROM node:18-alpine

RUN npm i -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "preview"]


