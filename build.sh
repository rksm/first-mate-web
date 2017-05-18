#!/bin/bash

lasso --output-dir build --minify --main main.js && mv build/{main,first-mate-web}.js

cat ./fix-read-source.js >> build/first-mate-web.js
