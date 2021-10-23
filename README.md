# Bots-ips API client

NodeJS client to access the [bot IPs API](https://antoinevastel.com/bot/2021/09/26/bots-ips-api-doc.html).


## Install
```
npm install bots-ips
```

## Usage

### Recent bot IPs

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

### Verify one IP addresses

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

### Verify a batch of IP addresses

Verify if several IP addresses have been used by bots:
```javascript
const {BotApiClient} = require('bots-ips');

(async () => {
    const client = new BotApiClient();

    const infoIps = await client.verifyIps(["185.82.126.222", "202.74.73.51", "202.74.73.53"]);
    console.log(infoIps);
})();

/*
    [
    {
        matched: false,
        ip: '202.74.73.51',
        events: [],
        autonomousSystemOrganization: 'PT Global Port Binekatara',
        autonomousSystemNumber: 24522,
        country: 'ID'
    },
    {
        matched: false,
        ip: '202.74.73.53',
        events: [],
        autonomousSystemOrganization: 'PT Global Port Binekatara',
        autonomousSystemNumber: 24522,
        country: 'ID'
    },
    {
        matched: true,
        ip: '185.82.126.222',
        autonomousSystemOrganization: 'Sia Nano IT',
        autonomousSystemNumber: 52173,
        country: 'LV',
        events: [
        2021-10-03T00:00:26.138Z,
        2021-10-03T12:00:13.452Z,
        2021-10-04T00:00:19.792Z,
        2021-10-04T12:00:11.733Z,
        ...
        2021-10-16T00:00:13.588Z,
        2021-10-16T12:00:11.173Z,
        2021-10-17T00:00:17.365Z
        ]
    }
    ]
*/
```

## Sponsor

Feel free to support this project by [becoming a Patron.](https://www.patreon.com/malicious_bots_ips_api)

All donations are used to improve the malicious bot IPs API:
- Improve infrastructure;
- Increase number of data sources (honeypots, proxies).