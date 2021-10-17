const {BotApiClient} = require('../lib/cjs/BotApiClient.js');

(async () => {
    const client = new BotApiClient();
    const botIps = await client.getRecentBotIps();
    console.log(botIps[0]);

    const testIp = await client.verifyIp("67.203.60.76");
    console.log(testIp);

    const infoIps = await client.verifyIps(["185.82.126.222", "202.74.73.51", "202.74.73.53"]);
    console.log(infoIps);
})();