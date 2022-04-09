FROM alpine:latest

WORKDIR /app

#RUN git clone repository.git

RUN apk update

RUN apk add rawtherapee