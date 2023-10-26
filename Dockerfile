FROM node:alpine As development

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

# RUN npm install -g yarn
RUN yarn install

COPY . .

RUN yarn run build

FROM node:alpine As production 

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

# RUN npm install -g yarn
RUN yarn install --prod 

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]


