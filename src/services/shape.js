
import UAParser from 'ua-parser-js';
const ua = new UAParser();


export const shape = {
    fingerprint: null,
    useragent:{
        browser: ua.getBrowser(),
        device: ua.getDevice(),
        engine: ua.getEngine(),
        OS: ua.getOS(), 
        CPU: ua.getCPU(), 
    },
    geoiplookup:{
        ip: null,
        isp: null,
        org: null,
        hostname: null,
        longitude: null,
        latitude: null,
        postal_code: null,
        city: null,
        country_code: null,
        country_name: null,
        continent_code: null,
        region: null,
        district: null,
        timezone_name: null,
        connection_type: null,
        asn: null,
        currency_code: null,
        currency_name: null,
        success: null,
        cached: null,
    }
}