import * as Quasar from 'myFunctions.js'
import * as Quirks from 'quasar/quasarResponse.js'

/** @param {NS} ns */
export async function main(ns) {

  while (true) { //create loop for purchasing logic
    var nodes = hackNets(); //fetch node details, store in node
    var nodeLimit = 19; //Pre-set node limit
    var cushion = 100000000; // spare cash minimum
    //var nodeLimit = ns.hacknet.maxNumNodes(); //set limit to max possible
    if (nodes.length < nodeLimit) { //only buy nodes until nodeLimit is reached
      buyNodes(); //GIMME NODE >:C
      nodes = hackNets(); //updating node stats with node just purchased
    };
    // in vs of: x = what you want, y = is 0 start list, then 'in' gives x's position and 'of' gives its value
    for (let node in nodes) { //create loop with condition 
      // buy upgrade if limit not reached
      if (nodes[node].cores < 16) { buyCores(node) };
      if (nodes[node].ram < 64) { buyRam(node) };
      if (nodes[node].level < 200) { buyLevels(node) };
    }
    // use timer to allow money gain, add check later
    ns.print("Waiting for cashflow...")
    await ns.asleep(1 * 1000);
    // for (let time = (900); time > 0; time--) {
    //   ns.print(`${time} seconds left until next purchase...`)
    //   await ns.sleep(time*1000)
    // }
    // getCoreUpgradeCost(index, n)	Calculate the cost of upgrading hacknet node cores.
    // getLevelUpgradeCost(index, n)	Calculate the cost of upgrading hacknet node levels.
    // getNodeStats(index)	Get the stats of a hacknet node.
    // getPurchaseNodeCost()	Get the price of the next hacknet node.
    // getRamUpgradeCost(index, n)	Calculate the cost of upgrading hacknet node RAM.
    // maxNumNodes()	Get the maximum number of hacknet nodes.
    // numNodes()	Get the number of hacknet nodes you own.
    // purchaseNode()	Purchase a new hacknet node.
    // upgradeCore(index, n)	Upgrade the core of a hacknet node.
    // upgradeLevel(index, n)	Upgrade the level of a hacknet node.
    // upgradeRam(index, n)	Upgrade the RAM of a hacknet node.
  }
  // setTimeout()

  //=================//
  //=== FUNCTIONS ===//
  //=================//



  // gets money amount on home
  function budget() { return ns.getServerMoneyAvailable("home") };
  /**
   * gets info of owned nodes
   * @returns list of objects
   */
  function hackNets() {
    /**
     * Number of nodes
     */
    let hackNetCount = ns.hacknet.numNodes();
    /**
     * list that stores node details as objects
     */
    let nodeStats = [];

    // loop that inits at 0, curr node is less than node count, increment by 1
    for (let currentNode = 0; currentNode < hackNetCount; currentNode++)
    // get the current node, append object to node stats list
    { nodeStats.push(ns.hacknet.getNodeStats(currentNode)) };
    return nodeStats;
  };

  /**
   * buys nodes if sufficient cash available
   */
  function buyNodes() {

    // if budget is more than node upgrade cost limit, purchase
    if ((budget() - ns.hacknet.getPurchaseNodeCost()) > cushion && budget() > cushion) {
      ns.hacknet.purchaseNode();
      // ns.print(`Hucking a boulder your mom +${hackNets().length}`);
      // ns.print(`${Quirks.Response}`);
      ns.print(`Buying Node: ${nodes[nodes.length - 1].name}`)
    };
  };
  /**
   * buys cores if sufficient cash available
   */
  function buyCores(node) {
    // if budget is more than core upgrade cost limit, purchase
    if ((budget() - ns.hacknet.getCoreUpgradeCost(node)) > cushion && budget() > cushion) {
      ns.hacknet.upgradeCore(node);
      // ns.print(`Buying Node Core: ${nodes[node].name}`);
    };
  };
  /**
   * buys ram if sufficient cash available
   */
  function buyRam(node) {

    // if budget is more than ram upgrade cost limit, purchase
    if ((budget() - ns.hacknet.getRamUpgradeCost(node)) > cushion && budget() > cushion) {
      ns.hacknet.upgradeRam(node);
      // ns.print(`Buying Node RAM: ${nodes[node].name}`);
    };
  };
  /**
   * buys levels if sufficient cash available
   */
  function buyLevels(node) {

    // if budget is more than levels upgrade cost limit, purchase
    if ((budget() > ns.hacknet.getLevelUpgradeCost(node)) > cushion && budget() > cushion) {
      ns.hacknet.upgradeLevel(node);
      // if (node % 10 == 0) { ns.print(`Buying Node Level: ${nodes[node].name}`) }
    };
  };
}