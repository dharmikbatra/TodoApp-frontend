export class UserComplete {
    _id:string;
    email:string;
    todos:string[];
    constructor(id:string,email:string,todos:string[]){
        this._id=id;
        this.email=email;
        this.todos=todos;

    }
}
