yum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel

cat >> ~/.bashrc << EOF

export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.252.b09-2.el7_8.x86_64
export CLASSPATH=\$JAVA_HOME/jre/lib:\$JAVA_HOME/lib/tools.jar

PATH=\$PATH:\$JAVA_HOME/bin

export PATH

EOF

# shellcheck source=/root/.bashrc
source ~/.bashrc

java -version
javac -version


## NodeJS
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm install --lts
node -v
npm -v
