"use strict";

console.log("\n=========================================================\n");
console.log("custom prefix appNS to 'global mode' user case will used");
console.log("\n=========================================================\n");

require("./globalMode");

console.log("\n=========================================================\n");
console.log("custom prefix localNS to 'local mode' user case will used");
console.log("\n=========================================================\n");

require("./localMode");