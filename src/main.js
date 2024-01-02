"use strict";

const {NameSpaceHelper} = require("./mods/nameSpaceHelper");

let instances = {};

const autoLoaderNameSpace = (config = {}) => {
    try {
        let prefixGlobal = 'ns';
        let enableGlobal = true;

        const {mut, prefix, isolate} = config;
        if(isolate) enableGlobal = false;
        if (typeof prefix === "string") prefixGlobal = prefix.toString();
        if (typeof instances[prefixGlobal] === "undefined") {
            instances[prefixGlobal] = new NameSpaceHelper({mut, prefix: prefixGlobal});
        }
        if (enableGlobal) global[prefixGlobal] = instances[prefixGlobal];
        return instances[prefixGlobal];
    } catch {
        console.error("Error on init NameSpaceHelper");
    }
    return {};
};

exports = module.exports = autoLoaderNameSpace;