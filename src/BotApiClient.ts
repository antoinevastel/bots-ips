const got = require('got');

interface RecentBotsIpInfo {
    ip: string;
    autonomousSystemOrganization: string;
    autonomousSystemNumber: number;
    country: string;
    time: string | Date;
}

interface IpInfo {
    ip: string;
    autonomousSystemOrganization: string;
    autonomousSystemNumber: number;
    country: string;
    events: string[] | Date[];
    matched: boolean;
}

interface ApiError {
    error: boolean;
    message: string;
    statusCode?: number;
}

export class BotApiClient {

   static USER_AGENT = 'bot-api-client-0.0.1';
   static PACKAGE_VERSION = '0.0.1';
   static API_DOMAIN = 'antoinevastel.com';

   httpClient: any;

   constructor() {
       this.httpClient = got.extend({
           responseType: 'json',
           prefixUrl: `https://${BotApiClient.API_DOMAIN}`,
           headers: {
               'user-agent': BotApiClient.USER_AGENT
           }
       })
   }

    async getRecentBotIps(): Promise<RecentBotsIpInfo[] | ApiError> {
        try {
            const response = await this.httpClient('bots/ips');

            if (response.statusCode === 200) {
                response.body.forEach((ipInfo: RecentBotsIpInfo) => {
                    ipInfo.time = new Date(ipInfo.time)
                })
                return response.body;
            }
            
            // If status code other than 200
            return {
                error: true,
                message: response.body,
                statusCode: response.statusCode
            }

        } catch (e: any) {
            throw Error(e.message)
        }
    }

    async verifyIp(ipAddress: string): Promise<IpInfo| ApiError> {
        try {
            const response = await this.httpClient(`bots/ip/${ipAddress}`);

            if (response.statusCode === 200) {
                response.body.events = response.body.events.map((eventIpTime: string) => {
                    return new Date(eventIpTime)
                });

                return response.body;
            }
            
            // If status code other than 200
            return {
                error: true,
                message: response.body,
                statusCode: response.statusCode
            }

        } catch (e: any) {
            throw Error(e.message)
        }
    }

    async verifyIps(ipAddresses: string[]): Promise<RecentBotsIpInfo[] | ApiError> {
        try {
            const response = await this.httpClient.post('bots/ips', {
                json: {
                    ips: ipAddresses
                },
                responseType: 'json'
            });
  

            if (response.statusCode === 200) {
                response.body.forEach((ipInfo: IpInfo) => {
                    ipInfo.events = ipInfo.events.map((eventIpTime: string|Date) => {
                        return new Date(eventIpTime)
                    });
                })
                return response.body;
            }
            
            // If status code other than 200
            return {
                error: true,
                message: response.body,
                statusCode: response.statusCode
            }

        } catch (e: any) {
            throw Error(e.message)
        }
    }
}
