SHELL := /bin/bash

dev-dependencies:
	docker-compose -f docker/docker-compose.yaml up -d

dev:
	yarn install --frozen-lockfile && \
	docker stop $$(docker ps -q --filter name=node_limit_redis*) || true > /dev/null && \
	docker-compose -f docker/docker-compose.yaml up -d && \
	yarn start:dev

dev-turn-off:
	docker stop $$(docker ps -q --filter name=node_limit_redis*) || true > /dev/null