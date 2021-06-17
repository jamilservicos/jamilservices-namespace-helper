"use strict";
const test2 = require("./test2");
const success_example = ns.deps("example")("string");
if(typeof success_example === "boolean") console.log("success_example:", "successfully completed!");
