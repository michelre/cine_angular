#!/bin/bash

echo '*** SERVER INSTALLATION ***'
sudo npm install express
sudo npm install moviedb 

echo '*** CLIENT INSTALLATION ***'
sudo yo angular
sudo npm install grunt-autoprefixer
sudo npm install karma