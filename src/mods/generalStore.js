"use strict";

const generalStore = {};

const showGeneralStore = () => {
    try {
        if(Object.keys(generalStore).length > 0) return {...generalStore};
    } catch {
       console.error("Error on showGeneralStore");
    }
    return {};
};

const changeValue = (key,value) => {
    generalStore[key.toString()] = value;
    return true;
};

const setGeneralStoreKey = (data) => {
    try {
        const {key, value, mut} = data;
        if(typeof value === "undefined" || typeof key === "undefined") return false;
        if ((typeof generalStore[key] === "undefined")
            || (mut && generalStore[key])) {
            return changeValue(key, value);
        }
    } catch {
        console.error("Error on setGeneralStoreKey:", data);
    }
    return false;
};

const getGeneralValue = (key) => {
    try {
        if(key && generalStore[key]) return generalStore[key];
    } catch {
        console.error("Error on getGeneralValue:", key);
    }
    return undefined;
};

exports = module.exports = {
    ...{showGeneralStore},
    ...{setGeneralStoreKey},
    ...{getGeneralValue}
};