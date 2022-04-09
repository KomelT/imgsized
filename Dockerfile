FROM alpine:latest

WORKDIR /app

#RUN git clone repository.git

RUN apk update

# https://rawpedia.rawtherapee.com/Command-Line_Options#RawTherapee_CLI -- Rawtherapee MANUAL
RUN apk add rawtherapee