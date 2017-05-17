#!/bin/bash

lasso --output-dir build --minify --main main.js && mv build/{main,first-mate-web}.js
lasso --output-dir build --main main.js && mv build/{main,first-mate-web.dev}.js
lasso --output-dir build --main main.js --inject-into test.html
