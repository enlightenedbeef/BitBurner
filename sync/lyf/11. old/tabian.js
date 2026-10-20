/** 
 * Use this for new code.
 * 
 * Explain what the function is trying to accomplish.
 * 
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Insert your code here.
    // /
    // + /bin
    // + /etc
    // + /home
    // | + tabby
    // |  + Cattop
    // |  + FishpPic
    // |  + Meowsic
    // + /usr
    let l1 = "\/";
    let l2 = "\n\+ \/bin";
    let l3 = "\n\+ \/etc";
    let l4 = "\n\+ \/home";
    let l5 = "\n\| \+ tabby";
    let l6 = "\n\|    \+ Cattop";
    let l7 = "\n\|    \+ FishPic";
    let l8 = "\n\|    \+ Meowsic";
    let l9 = "\n\+ \/use";

    ns.tprintf(`\n${l1}${l2}${l3}${l4}${l5}${l6}${l7}${l8}${l9}`)
}