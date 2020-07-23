FROM metocherry/centos8-node-with-deno

EXPOSE 3000

WORKDIR /app

COPY . .

CMD ["run", "--unstable", "--allow-net", "--allow-env", "--allow-read", "lib/main.ts"]
