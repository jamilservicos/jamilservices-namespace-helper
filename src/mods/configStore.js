"use strict";

const configStore = {};

const showConfigStore = () => {
    try {
        if(Object.keys(configStore).length > 0) return {...configStore};
    } catch {
        console.error("Error on showConfigStore");
    }
    return {};
};

const changeValue = (key,value) => {
    configStore[key.toString()] = value;
    return true;
};

const setConfigStoreKey = (data) => {
    try {
        const {key, value, mut} = data;
        if(typeof value === "undefined" || typeof key === "undefined") return false;
        if ((typeof configStore[key] === "undefined")
            || (mut && configStore[key])) {
            return changeValue(key, value);
        }
    } catch {
        console.error("Error on setConfigStoreKey:", data);
    }
    return false;
};

const getConfigValue = (key) => {
    try {
        if(key && configStore[key]) return configStore[key];
    } catch {
        console.error("Error on getConfigValue:", key);
    }
    return undefined;
};

exports = module.exports = {
    ...{showConfigStore},
    ...{setConfigStoreKey},
    ...{getConfigValue}
};