
FROM node:18.12.1 as build

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm --max_old_space_size=254 run build

FROM nginx:1.19.2-alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
