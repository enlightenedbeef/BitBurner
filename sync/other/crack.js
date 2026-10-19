/** @param {NS} ns */
export async function main(ns) {
    const sloppy = String(ns.args[0]);

    ns.brutessh(sloppy);
    ns.ftpcrack(sloppy);
    ns.relaysmtp(sloppy);
    ns.httpworm(sloppy);
    ns.sqlinject(sloppy);
    ns.nuke(sloppy);
    ns.toast(sloppy + " couldn't stop our illegal aliens...");
}