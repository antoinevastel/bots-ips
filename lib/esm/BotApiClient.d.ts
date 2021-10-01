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
export declare class BotApiClient {
    static USER_AGENT: string;
    static PACKAGE_VERSION: string;
    static API_DOMAIN: string;
    httpClient: any;
    constructor();
    getRecentBotIps(): Promise<RecentBotsIpInfo[] | ApiError>;
    verifyIp(ipAddress: string): Promise<IpInfo | ApiError>;
}
export {};
