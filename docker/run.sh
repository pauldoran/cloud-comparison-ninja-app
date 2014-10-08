#!/bin/bash

curl -sSL https://get.docker.io/ | bash

crontab -l > mycron
echo "*/10 * * * * docker run -e $1 cloudcomparison.ninja:5000/perftest" >> mycron
crontab mycron
rm mycron
docker run -e $1 cloudcomparison.ninja:5000/perftest &
