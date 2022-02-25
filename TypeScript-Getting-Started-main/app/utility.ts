
function getInputValue(ElementID: string) : string
{

    const Inputvalue= (<HTMLInputElement>document.getElementById(ElementID)).value;

    return Inputvalue;

}

function logger(message:string): void{
    console.log(message);
}

export{getInputValue as getValue, logger}
