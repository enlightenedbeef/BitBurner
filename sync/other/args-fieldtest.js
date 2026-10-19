/** @param {NS} ns */
export async function main(ns) {
  const args = ns.args;

  for (let i = 0; i < args.length; i++) {
    // ns.print(args[i], i);
    ns.toast(`${i} ${args[i]}`);
  }
}