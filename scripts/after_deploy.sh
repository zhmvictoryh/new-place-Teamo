#!/bin/bash

echo 'script start'

cd /home/ubuntu/insplace
sudo docker stop $(sudo docker ps -aq)
sudo docker build -t insplace .
sudo docker run -p 5000:5000 -d insplace
sudo docker run -p 5001:5000 -d insplace
sudo docker run -p 5002:5000 -d insplace
