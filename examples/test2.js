"use strict";
ns.storage("end", "the test was a success!");
const error_example = ns.deps("example")(123);
if(typeof error_example === "string") console.log("error_example:", error_example);