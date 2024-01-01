"use strict";

const appNS = global["appNS"]; // unnecessary, just to avoid the warning "Unresolved variable or type appNS" in the editors

exports = module.exports = (circular) => {
    if(circular) {
        console.log("getDepsExample is set?", (typeof appNS.deps(circular) !== "undefined"));
    } else console.log("show all dependencies", appNS.deps());
};