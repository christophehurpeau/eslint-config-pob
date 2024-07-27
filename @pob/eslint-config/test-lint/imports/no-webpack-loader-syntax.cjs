"use strict";

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const myModule = require("my-loader!./my-module");

exports.myModule = myModule;
