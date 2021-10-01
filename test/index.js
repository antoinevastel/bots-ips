const {BotApiClient} = require('../lib/cjs/BotApiClient.js');

(async () => {
    const client = new BotApiClient();
    const botIps = await client.getRecentBotIps();
    console.log(botIps[0]);

    const testIp = await client.verifyIp("67.203.60.76");
    console.log(testIp);
})();