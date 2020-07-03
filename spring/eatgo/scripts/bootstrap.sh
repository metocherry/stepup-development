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
