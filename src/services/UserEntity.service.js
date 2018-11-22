import {shape} from './shape'; 

class UserEntityService {

    constructor(){
        this.userentity = shape;
    }

    createUserEntity (){
        return this.userentity;
    }
}

export default UserEntityService;