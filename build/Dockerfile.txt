FROM hypriot/rpi-node:7.4
MAINTAINER GICom <team@gicom.com.ar>

# Install Node-RED Globally
RUN npm install -g node-red

# Install generic extension for Node-RED
RUN npm install -g node-red-dashboard \
 && npm install -g node-red-node-feedparser \
 && npm install -g node-red-node-base64

# Install service based extensions for Node-RED
RUN npm install -g node-red-node-email \
 && npm install -g node-red-node-weather-underground \
 && npm install -g node-red-contrib-amqp

# Create volume for Node-RED storage
VOLUME /root/.node-red/

############# EDIT CONFIGS FILES

# Expose port 1880
EXPOSE 1880

# Setup start command
CMD node-red-pi --max-old-space-size=256





