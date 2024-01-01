// noinspection DuplicatedCode

"use strict";

console.log("=== 'global mode' use case ===");

require("../../..")({
    prefix: 'appNS'
});

const appNS = global["appNS"]; // unnecessary, just to avoid the warning "Unresolved variable or type appNS" in the editors

const dependencyGlobalExample = require("./dependencyExample");
console.log("\n===================\n");
console.log("=== no deps added ===");
console.log("\n===================\n");

dependencyGlobalExample("dependencyGlobalExample");

console.log("\n===================\n");
console.log("=== dependencyGlobalExample deps added ===");
console.log("\n===================\n");

appNS.deps("dependencyGlobalExample", dependencyGlobalExample);

dependencyGlobalExample("dependencyGlobalExample");
console.log("\n===================\n");
dependencyGlobalExample();