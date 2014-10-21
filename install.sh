#!/bin/bash

echo '*** SERVER INSTALLATION ***'
sudo npm install express --save
sudo npm install moviedb 

echo '*** CLIENT INSTALLATION ***'
sudo yo angular
sudo npm install grunt-autoprefixer --save-dev
sudo npm install karma --save-dev