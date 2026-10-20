/** 
 * Use this for new code.
 * 
 * Explain what the function is trying to accomplish.
 * 
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Insert your code here.
    const n = 42;
    ns.tprint(typeof n); // is a number because of it being declared so above
    ns.tprint(typeof Infinity); // this is seen as Number.POSITIVE_INFINITY
}