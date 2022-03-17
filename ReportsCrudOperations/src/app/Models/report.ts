export class Report {
    id: number;
    from: string;
    to: string;
    dateCreated: Date;
    permanentLink:boolean;

    constructor(id:number,from:string,to:string,dateCreated:Date,permanentLink:boolean)
    {
        this.id=id;
        this.from=from;
        this.to=to;
        this.dateCreated=dateCreated;
        this.permanentLink=permanentLink;
    }
}
