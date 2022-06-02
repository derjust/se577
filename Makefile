#vars
IMAGEFULLNAME=se577

.PHONY: help build run

help:
	    @echo "Makefile commands:"
	    @echo "build"
	    @echo "run"
	    @echo "all"

.DEFAULT_GOAL := all

build:
	    @docker build -t ${IMAGEFULLNAME} .

push:
	    @docker run -p 3000:3000 ${IMAGEFULLNAME}

all: build run
