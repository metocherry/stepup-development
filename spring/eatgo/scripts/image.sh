#!/usr/bin/env bash

version="latest"

if [ "$1" != '' ]
then
  version=$1
fi

docker build --tag centos7/jdk8:"$version" .
