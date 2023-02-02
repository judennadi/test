FROM jenkins/agent:alpine-jdk11
USER root
RUN apk update
RUN apk add nodejs npm
USER jenkins