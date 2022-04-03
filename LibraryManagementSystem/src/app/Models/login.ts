export class Login {
    userId:number;
    userName:string;
    password:string;
    role:number;
    valid:boolean

    constructor(userId:number,userName:string,password:string,role:number,valid:boolean)
    {
        this.userId=userId;
        this.userName=userName;
        this.password=password;
        this.role=role;
        this.valid=valid;
    }
}
