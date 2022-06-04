#vars
IMAGEFULLNAME=se577

RANDOM_NUMBER = $(shell curl -sL https://generate-secret.now.sh/32)

.PHONY: help build run

help:
	    @echo "Makefile commands:"
		@echo "init"
	    @echo "build"
	    @echo "run"
	    @echo "all"

.DEFAULT_GOAL := all


init:
		@echo "Initalizing .env.local"
		@sed s/RANDOM_NUMBER/$(RANDOM_NUMBER)/g .env.local.example > .env.local

		@echo "Please update .env.local with proper GITHUB_ID and GITHUB_SECRET values"

build:
	    @docker build -t ${IMAGEFULLNAME} .

run:
	    @docker run -p 3000:3000 ${IMAGEFULLNAME}

all: build run
