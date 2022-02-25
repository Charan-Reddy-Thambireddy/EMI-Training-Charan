import {result} from './result'

export class scoreBoard 
{

    private Results:result[]=[];

    addResult(newResult:result):void{
        this.Results.push(newResult);
    }

    updateScoreBoard():void{
        let output:string='<h2>Scoreboard</h2>';
        for (let index=0; index< this.Results.length; index++)
        {
            const Result:result = this.Results[index];
            output += '<h4>';
            output+=Result.playerName+' : '+ Result.score+' / '+ Result.problemCount+' for factor '+Result.factor;
            output+='</h4>';           
        }
        document.getElementById('scores')!.innerHTML=output;
    }
}
