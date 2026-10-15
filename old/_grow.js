/** @param {NS} ns */
export async function main(ns) {
    const HOST = ns.args[0];
  while (true) {
      await ns.grow(HOST);
    }
  }