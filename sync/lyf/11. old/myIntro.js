/** 
 * Use this for new code.
 * 
 * What's my tpe?
 * 
 * @param {NS} ns The Netscript API.
 */
export async function main(ns) {
    // Insert your code here.
    const myTitle = "Enlightened";
    const myName = "Beef";
    const myAge = 30;
    let myFaveFood = "Pizza";

    let o = `My name is The ${myTitle}${myName}, but you can call me ` + myName;
    let u = "I'm " + myAge + " years old.";
    let t = 'My fave food is ' + `${myFaveFood}`;

    ns.tprint(o);
    ns.tprint(u);
    ns.tprint(t);
}