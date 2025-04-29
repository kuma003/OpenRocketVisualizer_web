FROM node:22-bullseye

WORKDIR /app

RUN apt-get update && apt-get install -y \
  python3 \
  make \
  g++

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
