// noinspection DuplicatedCode

"use strict";

console.log("=== 'local mode' use case ===");

const localNS = require("../../..")({
    prefix: 'localNS',
    isolate: true
});

const dependencyFromInstanceExample = require("./dependencyFromInstanceExample");
const dependencyFromParamExample = require("./dependencyFromParamExample");
console.log("\n===================\n");
console.log("=== no deps added ===");
console.log("\n===================\n");

dependencyFromInstanceExample("dependencyLocalExample");

console.log("\n===================\n");
console.log("=== dependencyLocalExample deps added ===");
console.log("\n===================\n");

localNS.deps("dependencyLocalExample", dependencyFromInstanceExample);

console.log("\n===================\n");
console.log("=== dependencyLocalExample from Instance ===");
console.log("\n===================\n");

dependencyFromInstanceExample("dependencyLocalExample");
console.log("\n===================\n");
dependencyFromInstanceExample();

console.log("\n===================\n");
console.log("=== dependencyLocalExample from Parameter ===");
console.log("\n===================\n");

dependencyFromParamExample({
    circular: "dependencyLocalExample",
    instance: localNS
});
console.log("\n===================\n");
dependencyFromParamExample({
    instance: localNS
});