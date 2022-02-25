import {person} from './person';

export class player implements person
{
    name: string;
    formateName()
    {
        return this.name.toUpperCase();
    }

}