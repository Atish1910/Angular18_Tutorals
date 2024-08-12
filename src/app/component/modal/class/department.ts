export class User {
    id : number;
    name : string;
    username : string;
    email : string;

    constructor(){
        this.id = 0;
        this.name = '';
        this.username = '';
        this.email = ''
    }
}

export class DepartMent {
    departmentId : number;
    departmentName : string;
    departmentLogo : string;


    constructor (){
        this.departmentId = 0;
        this.departmentName = '';
        this.departmentLogo = '';
    }
}