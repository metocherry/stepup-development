#!/usr/bin/env bash

docker run \
  -it \
  --rm \
  --name data-structure \
  -v "$(pwd)"/:/app:cached \
  metocherry/centos8-node-with-deno
