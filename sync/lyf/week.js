/** 
 * Use this for new code.
 * 
 * Explain what the function is trying to accomplish.
 * 
 * never use var, only let or const, unless needed.
 * 
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Insert your code here.
    let weekend = 2;
    weekend = 3;
    const daysInWeek = 7;
    ns.tprint(weekend);
    ns.tprint(daysInWeek);
    // daysInWeek = 5; won't run, const are set in stone unless an object.
    ns.tprint(4.2e7);
    ns.tprint("9.6e1 = 96");
    ns.tprint(-5e3); // -5*1000
    ns.tprint(5e-3); // 5*-1000 | 5/1000
}