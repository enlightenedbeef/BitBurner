/** @param {NS} ns */
export async function main(ns) {
    const HOST = ns.args[0]
    while (true) {
      await ns.weaken(HOST);
      await ns.grow(HOST);
      await ns.weaken(HOST);
      await ns.hack(HOST);
    }
  }