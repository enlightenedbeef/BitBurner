/** @param {NS} ns **/
export async function main(ns) {
    const purchaseNodeBatch = 3;  // Number of nodes to purchase in each batch
    const levelBatch = 40;        // Number of levels to upgrade per node in each batch
    const ramBatch = 1;           // Number of RAM upgrades per node in each batch
    const coreBatch = 3;          // Number of core upgrades per node in each batch
    const moneyBuffer = 50000000; // Money cushion to keep in the player's account

    while (true) {
        // Check money after the buffer is accounted for
        const availableMoney = ns.getServerMoneyAvailable("home") - moneyBuffer;

        for (let i = 0; i < purchaseNodeBatch; i++) {
            if (ns.hacknet.getPurchaseNodeCost() <= availableMoney) {
                ns.hacknet.purchaseNode();
            }
        }

        const nodeCount = ns.hacknet.numNodes();

        // Upgrade levels in batches
        for (let i = 0; i < nodeCount; i++) {
            for (let j = 0; j < levelBatch; j++) {
                if (ns.hacknet.getLevelUpgradeCost(i, 1) <= availableMoney) {
                    ns.hacknet.upgradeLevel(i, 1);
                } else {
                    break;
                }
            }
        }

        // Upgrade RAM in batches
        for (let i = 0; i < nodeCount; i++) {
            for (let j = 0; j < ramBatch; j++) {
                if (ns.hacknet.getRamUpgradeCost(i, 1) <= availableMoney) {
                    ns.hacknet.upgradeRam(i, 1);
                } else {
                    break;
                }
            }
        }

        // Upgrade cores in batches
        for (let i = 0; i < nodeCount; i++) {
            for (let j = 0; j < coreBatch; j++) {
                if (ns.hacknet.getCoreUpgradeCost(i, 1) <= availableMoney) {
                    ns.hacknet.upgradeCore(i, 1);
                } else {
                    break;
                }
            }
        }

        // Delay before the next batch of upgrades
        await ns.sleep(5000);
    }
}
