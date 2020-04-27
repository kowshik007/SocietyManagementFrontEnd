export class Society{
    public id: number;
    public name: string;
    public status: number;
    public createdTimestamp: any;
    public updatedTimestamp: any;
    constructor(name: string,status: number){
        this.name=name;
        this.status=status;
    }
}