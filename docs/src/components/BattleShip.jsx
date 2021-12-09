const React = require('react');
const Tetris = require('react-tetris');
import '../styles/tetris.scss';

    export function BattleShip(){
    return(
        <div class="all">
            <h1 class="title" id="title">Tetris</h1>
            <Tetris>
            {({
                HeldPiece,
                Gameboard,
                PieceQueue,
                points,
                linesCleared,
                state,
                reset
            }) => (
                <div class="a">
                <HeldPiece />
                <div class="points">
                    <p id="validate">Points: {points}</p>
                    <p>Lines Cleared: {linesCleared}</p>
                    <div id="highscore"></div>
                </div>
                <Gameboard />
                <PieceQueue />
                {state === 'LOST' && (
                    <div class="gameover">
                        <h2 onLoad={update({points})}>Game Over</h2>
                        <button onClick={reset} class="newgame">New game</button>
                    </div>
                )}
                </div>
            )}
            </Tetris>
        </div>
    )
}

window.onload = function display(){
    if (document.getElementById("title").innerHTML == "Tetris"){
        var score = document.createElement("p");
        score.setAttribute("id", "p");
        document.getElementById("highscore").appendChild(score)
        if(localStorage.getItem(localStorage.getItem("ativo")) != null){
            score.innerHTML = "Highscore:" + localStorage.getItem(localStorage.getItem("ativo"));
        } else{
            score.innerHTML = "Highscore: 0";
        }
    }
}

function update(points){
    let valor = document.getElementById("highscore").innerHTML.replace(/\D/g, "");
    parseInt(valor);
    if (valor < points.points){
        localStorage.setItem(localStorage.getItem("ativo"), points.points);
        document.getElementById("p").innerHTML = "Highscore:" + localStorage.getItem(localStorage.getItem("ativo"));
        window.location.reload;
    }
}
