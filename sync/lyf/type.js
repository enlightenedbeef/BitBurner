/**
 * What's my type?
 *
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    const s = "Tabby";
    ns.tprint(typeof s); // this is a string due to its declaration above.
    ns.tprint(typeof ""); // this is a string due to it being an empty string as denoted by the surrounding ""
}