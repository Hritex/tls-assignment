FROM node:14 as base
WORKDIR ./src/index
COPY package*.json ./
RUN npm i
COPY . .

FROM base as production
ENV NODE_PATH=./build
RUN npm run build