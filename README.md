# Bots-ips API client

NodeJS client to access the [bot IPs API](https://antoinevastel.com/bot/2021/09/26/bots-ips-api-doc.html).


## Install
```
npm install bots-ips
```

## Usage

Get a list of recent bots IPs:
```javascript
const {BotApiClient} = require('bots-ips');

(async () => {
    const client = new BotApiClient();
    const recentBotIps = await client.getRecentBotIps();
    console.log(recentBotIps);
})();

/*
    [{
            ip: '217.145.224.11',
            autonomousSystemOrganization: 'Global Layer B.V.',
            autonomousSystemNumber: 49453,
            country: 'BR',
            time: 2021-10-01T17:37:12.074Z
    },
    {
        ip: '194.87.35.154',
        autonomousSystemOrganization: 'ST-BGP',
        autonomousSystemNumber: 46844,
        country: 'MX',
        time: 2021-10-01T17:37:11.363Z
    },
    ...
    {
        ip: '150.129.176.103',
        autonomousSystemOrganization: 'SITI NETWORKS LIMITED',
        autonomousSystemNumber: 17747,
        country: 'IN',
        time: 2021-10-01T17:36:53.399Z
    }]
*/
```

Verify if an IP address has been used by a bot:
```javascript
const {BotApiClient} = require('bots-ips');

(async () => {
    const client = new BotApiClient();
    const testIp = await client.verifyIp("67.203.60.76");
    console.log(testIp);
})();

/*
    {
        matched: true,
        ip: '67.203.60.76',
        autonomousSystemOrganization: 'AS-COLOAM',
        autonomousSystemNumber: 21769,
        country: 'US',
        events: [
            2021-09-15T18:09:37.971Z,
            2021-09-16T12:20:40.468Z,
            2021-09-17T14:37:19.648Z,
            ...
            2021-10-01T11:24:33.452Z,
            2021-10-01T12:36:16.030Z,
            2021-10-01T13:43:38.251Z
        ]
    }
*/
```

