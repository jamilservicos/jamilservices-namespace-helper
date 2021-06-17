"use strict";
/**
 * @param {string} string
 * @return {(boolean || string)}
 */
exports = module.exports = (string) => {
    try {
        const t_string = ns.deps("typesHelper")({types: "string", data: string});
        if(typeof t_string === "object") throw t_string.error;

        return true;
    } catch (err) {
        return err.message;
    }
};