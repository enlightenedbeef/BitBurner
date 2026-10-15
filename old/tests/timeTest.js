async function main() {
    loopWithTimer();

 async function buyNodes() {
    // Function to buy nodes
    console.log("Buying nodes...");
    // Simulate node buying with a delay, replace with actual code
    await new Promise(resolve => setTimeout(resolve, 1000));
}

async function loopWithTimer() {
    const loopTime = 15 * 60 * 1000; // 15 minutes in milliseconds

    while (true) {
        await buyNodes(); // Call the function to buy nodes

        let remainingTime = loopTime;

        const interval = setInterval(() => {
            remainingTime -= 1000;
            const minutes = Math.floor(remainingTime / 60000);
            const seconds = Math.floor((remainingTime % 60000) / 1000);

            console.log(`Time remaining: ${minutes}m ${seconds}s`);
        }, 1000);

        // Wait for 15 minutes
        await new Promise(resolve => setTimeout(() => {
            clearInterval(interval); // Stop the interval
            resolve();
        }, loopTime));
    }
}
}