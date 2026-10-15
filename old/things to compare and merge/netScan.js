/** @param {NS} ns */
export async function main(ns) {
    ns.tail();
    // let targetNode = 0;
  
    //define var to store nodes as a set
    var nodeSet = new Set(["home"]); // Sets are 'uniques only' lists. js is stupid so we need to define the set in a weirding way
  
    //for each node scanned, append to set
    for (let node of nodeSet) {  // define var within for loop because fuck js. in = index of object, of = value of object
      //store scan in var
      let neighbours = ns.scan(node); // using node var to scan nodes iteratively
      //for each node in scan result, add to node list
      for (let neighbour of neighbours) {
        //add to node list
        nodeSet.add(neighbour); // dupes are skipped due to being a 'set'
      }
    };
    //prints to tail
    ns.print(nodeSet);
    //turn set into a string
    var data = "";
    while (true) {
      for (let nodeName of nodeSet) {
        // data += `${nodeName}\n`; // `` allows for vars in strings by using ${}
  
        var serverSecurityMinLevel = ns.getServerMinSecurityLevel(data);
        var serverSecurityLevel = ns.getServerSecurityLevel(data);
        var serverGrowth = ns.getServerGrowth(data);
        var serverMoneyAvailable = ns.getServerMoneyAvailable(data);
        var serverMaxMoney = ns.getServerMaxMoney(data);
        ns.print(`Server Stats: \n Security: \n Minimum Level:${serverSecurityMinLevel} \n Level: ${serverSecurityLevel} \n\n Money:    \n Max: ${serverMaxMoney} \n Available: ${serverMoneyAvailable} \n Growth: ${serverGrowth}`);
  
        await ns.asleep(300 * 1000);
      }
    }
    //saves as a file
    // ns.write("nodeMap.txt", data, "w");
  }