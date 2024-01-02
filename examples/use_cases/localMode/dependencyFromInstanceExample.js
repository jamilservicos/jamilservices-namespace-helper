"use strict";

const localNS = require("../../..")({
    prefix: 'localNS',
    isolate: true
});

exports = module.exports = (circular) => {
    if(circular) {
        console.log("getDepsExample is set?", (typeof localNS.deps(circular) !== "undefined"));
    } else console.log("show all dependencies", localNS.deps());
};