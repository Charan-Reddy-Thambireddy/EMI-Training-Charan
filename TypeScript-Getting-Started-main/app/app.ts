import {player} from './player';
import {Game} from './game';
import * as helpers from  './utility';

let newGame:Game;

document.getElementById('startGame')!.addEventListener('click',() =>{
    const Player: player = new player();
    Player.name = helpers.getValue('playername');

    const problemCount: number = Number(helpers.getValue('problemCount'));
    const factor: number = Number(helpers.getValue('factor'));

    newGame = new Game(Player, problemCount, factor);
    newGame.displayGame();
});

document.getElementById('calculate')!.addEventListener('click',()=>
{
    newGame.calculateScore();
});

