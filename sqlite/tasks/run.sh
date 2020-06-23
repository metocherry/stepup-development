#!/usr/bin/env bash

docker run \
  -it \
  --name sqlite \
  -v "$(pwd)"/:/app:cached \
  centos:latest \
  /bin/bash

