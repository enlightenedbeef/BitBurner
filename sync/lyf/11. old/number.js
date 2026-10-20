/** 
 * Largest and smallest numbers in Javascript.
 * 
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    ns.tprint(Number.MIN_VALUE); // 5e-324 // min possible number
    ns.tprint(Number.MIN_SAFE_INTEGER); // -9007199254740991 // min possible safe number
    ns.tprint(Number.MAX_VALUE); // 1.7976931348623157e+308 max possible value
    ns.tprint(Number.MAX_SAFE_INTEGER); // 9007199254740991 // max possible safe number
}