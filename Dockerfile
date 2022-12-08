FROM nginx:alpine
LABEL maintainer="my-demo-app"
# in windows, you need to use the following command to copy the dist folder to the container
COPY ./dist/my-demo-app /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]