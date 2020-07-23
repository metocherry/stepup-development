#!/usr/bin/env bash

dnf update -y
dnf install -y langpacks-en
dnf install -y unzip

# Install git
dnf install -y git
git --version

# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm install --lts
node -v
npm -v

# Install Deno
curl -fsSL https://deno.land/x/install/install.sh | sh
echo "" >> ~/.bashrc
echo export DENO_INSTALL="/root/.deno" >> ~/.bashrc
echo export PATH=\$PATH:\$DENO_INSTALL/bin >> ~/.bashrc

source ~/.bashrc

deno --version
