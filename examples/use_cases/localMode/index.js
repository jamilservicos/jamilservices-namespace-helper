// noinspection DuplicatedCode

"use strict";

console.log("=== 'local mode' use case ===");

const localNS = require("../../..")({
    prefix: 'localNS',
    isolate: true
});

const dependencyLocalExample = require("./dependencyExample");
console.log("\n===================\n");
console.log("=== no deps added ===");
console.log("\n===================\n");

dependencyLocalExample("dependencyLocalExample");

console.log("\n===================\n");
console.log("=== dependencyLocalExample deps added ===");
console.log("\n===================\n");

localNS.deps("dependencyLocalExample", dependencyLocalExample);

dependencyLocalExample("dependencyLocalExample");
console.log("\n===================\n");
dependencyLocalExample();