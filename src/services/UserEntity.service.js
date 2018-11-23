// import Fingerprint from 'fingerprintjs2';
// import {shape} from './shape'; 

//https://geoiplookup.io/api

class UserEntityService {

    constructor(){
        // return new Promise( ( resolve, reject ) => {
        //     console.log("resolving 1");
        //     resolve( {ksahd:123} );
        // })
        setTimeout(this.returnUserEntity, 1000);
    }

    getFingerPrint = (num) => {        
    }

    getUserAgent = () => {
    }

    getGeoIP = () => {
    }

    returnUserEntity = () => {
        return {dasuhd: 123}
    }

}

export default UserEntityService;