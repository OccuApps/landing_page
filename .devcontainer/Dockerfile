FROM mcr.microsoft.com/devcontainers/javascript-node:0-18

# Install Vue CLI globally
RUN npm install -g @vue/cli

# Install additional development tools
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends git curl