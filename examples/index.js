"use strict";

require("..")();
ns.deps("typesHelper", require("@jamilservices/types-helper"));
ns.deps("example", require("./test"));
const test1 = require("./test1");
console.log(ns.storage("end"));
