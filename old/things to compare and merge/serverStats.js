/** @param {NS} ns */
export async function main(ns) {
    var nodeSet = new Set(["home"]);
    for (let node of nodeSet) { let neighbours = ns.scan(node); for (let neighbour of neighbours) { nodeSet.add(neighbour) }
    }; ns.print(nodeSet);
    var data = "";
    for (let nodeName of nodeSet) {
      data += `${nodeName}\n`;
    
    ns.clearLog();
    var serverSecurityMinLevel = ns.getServerMinSecurityLevel(host);
    var serverSecurityLevel = ns.getServerSecurityLevel(host);
    var serverGrowth = ns.getServerGrowth(host);
    var serverMoneyAvailable = ns.getServerMoneyAvailable(host);
    var serverMaxMoney = ns.getServerMaxMoney(host);
    ns.print(`Server Stats: \n Security: \n Minimum Level:${serverSecurityMinLevel} \n Level: ${serverSecurityLevel} \n\n Money: \n Max: ${serverMaxMoney} \n Available: ${serverMoneyAvailable} \n Growth: ${serverGrowth}`);
  }
  }