"use strict";

const dependencieStore = {};

const showDependencieStore = () => {
    try {
        if(Object.keys(dependencieStore).length > 0) return Object.keys(dependencieStore);
    } catch {
        console.error("Error on showDependencieStore");
    }
    return [];
};

const changeValue = (key,value) => {
    dependencieStore[key.toString()] = value;
    return true;
};

const setDependencieStoreKey = (data) => {
    try {
        const {key, value, mut} = data;
        if(typeof value === "undefined" || typeof key === "undefined") return false;
        if ((typeof dependencieStore[key] === "undefined")
            || (mut && dependencieStore[key])) {
            return changeValue(key, value);
        }
    } catch {
        console.error("Error on setDependencieStoreKey:", data);
    }
    return false;
};

const getDependencieValue = (key) => {
    try {
        if(key && dependencieStore[key]) return dependencieStore[key];
    } catch {
        console.error("Error on getDependencieValue:", key);
    }
    return undefined;
};

exports = module.exports = {
    ...{showDependencieStore},
    ...{setDependencieStoreKey},
    ...{getDependencieValue}
};