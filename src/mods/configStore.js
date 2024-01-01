"use strict";

const configStore = {};

const showConfigStore = (prefix) => {
    try {
        if (configStore[prefix] && Object.keys(configStore[prefix]).length > 0) return {...configStore[prefix]};
    } catch {
        console.error("Error on showConfigStore", prefix);
    }
    return {};
};

const changeValue = (data) => {
    const {prefix, key, value} = data;
    configStore[prefix][key.toString()] = value;
    return true;
};

const setConfigStoreKey = (data) => {
    try {
        const {key, value, mut, prefix} = data;
        if(typeof prefix === "undefined") return false;
        if (typeof configStore[prefix] === "undefined") configStore[prefix] = {};
        if (typeof value === "undefined" || typeof key === "undefined") return false;
        if ((typeof configStore[prefix][key] === "undefined")
            || (mut && configStore[prefix][key])) {
            return changeValue({prefix, key, value});
        }
    } catch {
        console.error("Error on setConfigStoreKey:", data);
    }
    return false;
};

const getConfigValue = (data) => {
    try {
        const {key, prefix} = data;
        if ((prefix) && (typeof configStore[prefix] === "undefined")) return undefined;
        if (key && configStore[prefix][key]) return configStore[prefix][key];
    } catch {
        console.error("Error on getConfigValue:", data);
    }
    return undefined;
};

exports = module.exports = {
    ...{showConfigStore},
    ...{setConfigStoreKey},
    ...{getConfigValue}
};