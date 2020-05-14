FROM nodered/node-red-docker AS builder
MAINTAINER GICom <team@gicom.com.ar>

ENV REFRESHED_AT=2020-04-16

USER root

# Install Node-RED Globally & generic extension for Node-RED
RUN npm install -g --unsafe-perm=true node-red-dashboard \
 && npm install -g --unsafe-perm=true node-red-node-feedparser \
 && npm install -g --unsafe-perm=true node-red-contrib-moment \
 && npm install -g --unsafe-perm=true node-red-node-base64 \
 && npm install -g --unsafe-perm=true node-red-node-email \
 && npm install -g --unsafe-perm=true node-red-contrib-amqp \
 && npm install -g --unsafe-perm=true node-gyp \
 && npm install -g --unsafe-perm=true node-pre-gyp \
 && npm install -g --unsafe-perm=true node-red-contrib-grpc \
 && npm install -g --unsafe-perm=true node-red-node-smooth

# && npm audit fix  \
# && npm install -g --unsafe-perm=true bufferutil \
# && npm install -g --unsafe-perm=true utf-8-validate \
# && npm install -g --unsafe-perm=true node-red-contrib-sun-position


# Create volume for Node-RED storage
VOLUME /data

# Expose port 1880
EXPOSE 1880

# Setup start command
#CMD node-red-pi --max-old-space-size=256

COPY settings.js  /root/.node-red/settings.js
