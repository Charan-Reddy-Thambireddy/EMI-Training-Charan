import { getValue} from './utility';
import {result} from './result';
import {player} from './player';
import {scoreBoard as ResultPanel} from './scoreBoard';

export class Game{
private scoreboard: ResultPanel = new ResultPanel();
constructor(public player:player, public problemCount:number, public factor: number)
{

}
displayGame(): void
{
    let gameForm:string ='';
    for(let i=1; i<=this.problemCount; i++)
    {
        gameForm+='<div class="form-group">';
        gameForm+='<Label for="answer'+i+'"class="col-sm-2 control-label">';
        gameForm+=String(this.factor)+'X'+i+' = </label>';
        gameForm+='<div class="col-sm-1"><input type="text" class="form-control" id="answer'+i+'"size="5" /></div>';
        gameForm+='</div>';
    }
    document.getElementById('game')!.innerHTML=gameForm;

    document.getElementById('calculate')!.removeAttribute('disabled');
}
calculateScore():void
{
    let score: number=0;
     for(let i=1; i<=this.problemCount;i++)
     {
         const answer:number= Number(getValue('answer'+i));
         if(i*this.factor === answer){
             score++;
         }
     }
     const Result:result={
        playerName:this.player.name,
        score:score,
        problemCount:this.problemCount,
        factor:this.factor
     }

     this.scoreboard.addResult(Result);
     this.scoreboard.updateScoreBoard();

     document.getElementById('calculate')!.setAttribute('disabled','true');
}

}

