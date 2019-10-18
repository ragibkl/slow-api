#!/usr/bin/env bash
source .env
TAG=${1:-latest}
# IMAGE_REGISTRY=docker.pkg.github.com/ragibkl/slow-api
IMAGE_REGISTRY=ragibkl/slow-api
FULL_TAG=$IMAGE_REGISTRY:$TAG

echo $FULL_TAG

docker build -t $FULL_TAG .
docker push $FULL_TAG
