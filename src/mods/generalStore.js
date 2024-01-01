"use strict";

const generalStore = {};

const showGeneralStore = (prefix) => {
    try {
        if (generalStore[prefix] && Object.keys(generalStore[prefix]).length > 0) return {...generalStore[prefix]};
    } catch {
        console.error("Error on showGeneralStore", prefix);
    }
    return {};
};

const changeValue = (data) => {
    const {prefix, key, value} = data;
    generalStore[prefix][key.toString()] = value;
    return true;
};

const setGeneralStoreKey = (data) => {
    try {
        const {key, value, mut, prefix} = data;
        if(typeof prefix === "undefined") return false;
        if (typeof generalStore[prefix] === "undefined") generalStore[prefix] = {};
        if (typeof value === "undefined" || typeof key === "undefined") return false;
        if ((typeof generalStore[prefix][key] === "undefined")
            || (mut && generalStore[prefix][key])) {
            return changeValue({prefix, key, value});
        }
    } catch {
        console.error("Error on setGeneralStoreKey:", data);
    }
    return false;
};

const getGeneralValue = (data) => {
    try {
        const {key, prefix} = data;
        if (prefix) {
            if (typeof generalStore[prefix] === "undefined") return undefined;
            if (key && generalStore[prefix][key]) return generalStore[prefix][key];
        }
    } catch {
        console.error("Error on getGeneralValue:", data);
    }
    return undefined;
};

exports = module.exports = {
    ...{showGeneralStore},
    ...{setGeneralStoreKey},
    ...{getGeneralValue}
};