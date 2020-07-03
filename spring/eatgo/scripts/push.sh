#!/usr/bin/env bash

docker image tag centos7/jdk8:latest metocherry/centos7-jdk8:latest
docker image push metocherry/centos7-jdk8

