/** @param {NS} ns */
export function Response(quote) {
    ns.tail(); ns.disableLog('ALL')
    let magenta = "\u001b[35m";
    let array = ns.read("/quasar/hacknetNodeBuy.txt").split('\n', 9)
    let random = Math.random() 								// Pick a random num between 0 & 1
    let scaled_random = random * array.length // Scale this random number by the size of our array 
    let index = Math.floor(scaled_random) 		// Round down (1.22135414 is not a usable index)
    return quote =`${magenta} ${array[index]}`
}

// export function Quirkpicker(array_input) {
//   let randNum = Math.random();
//   let randScaled = randNum * array_input.length;
//   let randIndex = Math.floor(randScaled);
//   let randValue = array_input[randIndex];
//   return randValue;
// }

// export function LinesList() {
// }