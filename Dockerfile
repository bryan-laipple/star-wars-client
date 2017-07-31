FROM node:6.11-alpine

# update packages
RUN apk add --no-cache --update \
		gzip

# copy src
WORKDIR /app
COPY . /app

# build and compress assets
RUN npm install \
	&& npm run build:prod \
  && gzip dist/*bundle*

# start
CMD ["npm", "run", "start:prod"]
