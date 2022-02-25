import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    
    @Input() rating:number=0 ;
    @Input() name:string='';
    cropWidth:number=75;
    @Output() ratingClicked: EventEmitter<string[]>=new EventEmitter<string[]>();

    ngOnChanges(): void {
        this.cropWidth=this.rating*75/5;
    }

    onClick():void{
        let example:string[];
        this.ratingClicked.emit([`The rating of ${this.name} is`,this.rating.toString()]);
    }

}