export class User{
    firstname   : string;
    lastname    : string;
    email       : string;
    color       : string;
    constructor(firstname : string, lastname : string, email : string){
        this.firstname = firstname;
        this.lastname  = lastname;
        this.email     = email;
        this.color     = "#" + Math.floor(Math.random()*16777215).toString(16)
    }
    getFullName(){
        return this.lastname + " " + this.firstname;
    }
}