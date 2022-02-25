import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'ConvertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value:string, Character:string):string {     
      
        return value.replace(new RegExp(Character, 'gi'),' ');;
    }
}