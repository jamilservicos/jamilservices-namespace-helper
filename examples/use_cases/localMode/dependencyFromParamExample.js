"use strict";


exports = module.exports = (data) => {
    const {circular, instance} = data;
    if(circular) {
        console.log("getDepsExample is set?", (typeof instance.deps(circular) !== "undefined"));
    } else console.log("show all dependencies", instance.deps());
};