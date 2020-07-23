# Deno

You can find modules you want in https://deno.land/x/


## Run with docker

```shell
docker run \
  --rm \
  -it \
  --name deno-api \
  -p 3000:3000 \
  -v "$(pwd)"/:/app:cached \
  metocherry/centos8-node-with-deno
```

## Build and Psh Image

```bash
docker image build -t metocherry/centos8-node-with-deno:latest .
docker image push -t metocherry/centos8-node-with-deno:latest
```

error -> denied: requested access to the resource is denied

```bash
docker login
```


## Command Lines

### run

```bash
deno run <file_name>
```

with server:

```bash
deno run --allow-net <file_name>
```

- `--allow-net` : Allow network access

with server:

redownload

```bash
deno run --allow-net --reload <file_name>
```


### fmt

Format source files

```bash
deno fmt <file_name>
```

# Docker Image

```dockerfile
FROM centos:latest

COPY ./bootstrap.sh /

RUN bash /bootstrap.sh
```

## Pacakges

- [oak](https://deno.land/x/oak) : middleware framework for Deno's http server, including a router middleware.
- [docker](https://dev.to/fhsinchy/develop-and-dockerize-a-blogging-api-with-deno-oak-and-mysql-170e)
