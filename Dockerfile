FROM archlinux:latest

WORKDIR /app

#RUN git clone repository.git

RUN pacman -Syy

RUN pacman -S --noconfirm imagemagick