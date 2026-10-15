/** @param {NS} ns */
export async function main(ns) {
    const HOST = ns.args[0]
    ns.clear();
    var serverSecurityMinLevel = ns.getServerMinSecurityLevel();
    var serverSecurityLevel = ns.getServerSecurityLevel();
    var serverGrowth = ns.getServerGrowth();
    var serverMoneyAvailable = ns.getServerMoneyAvailable();
    var serverMaxMoney = ns.getServerMaxMoney();
    ns.print(`Server Stats: \n Security: \n Minimum Level:${serverSecurityMinLevel} \n Level: ${serverSecurityLevel} \n\n Money: \n Max: ${serverMaxMoney} \n Available: ${serverMoneyAvailable} \n Growth: ${serverGrowth} \n Weakening ${HOST}`);
  }