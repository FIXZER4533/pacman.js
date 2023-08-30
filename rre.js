import { 
    setScreenObj, 
    setGameLevel,
    cleanLastEaten,
    getLastEaten, 
    drawLevel,
    clearScreen, 
    drawPoints,
    drawScreen, 
    movePacMan,
    //drawWin,
    } 
    from "./screen.js";
import { gameLevels } from "./L.js";
import { getPosition, getLevelPills, cloneArray } from "./utility.js";
import { sObj } from "./config.js";

let currentLevel = 0;
let inGameLevel = {};
let pacPos = [];
let points = 0;
let pillsToWin = 0;
let totalLevelpills = 0;
let gameTime;

class Juego {
    constructor() {
        this.new;

        //blockScrollPage();
        
    }
    new =()=>{
        setScreenObj(sObj);
        drawScreen();
        setGameLevel(cloneArray(gameLevels[currentLevel]));
        drawLevel();
    }
    play = () => {
        clearScreen();
        inGameLevel = cloneArray(gameLevels[currentLevel]);
        setGameLevel(inGameLevel);
        pacPos = getPosition(inGameLevel, 5); //[8, 11]
        totalLevelpills = getLevelPills(inGameLevel, [4, 3]);

        //Captura de Teclado
        let moveHandler = (e) => {
            //[8,11]
        if (
            ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
                e.key
            )
        )
            pacPos = movePacMan(e.key, pacPos);
            //Despues de ejecutar [7,11]
        };
        document.addEventListener("keydown", moveHandler);

        //moveGhost
        gameTime = setInterval(() =>{}, 500 / sObj.speed);
    };
    scoreValidacion =(moveHandler)=>{
            if ([4,3] . includes(getLastEaten())) pillsToWin++;
            if (getLastEaten()===4) points += sObj.pointCat.pill;
            if (getLastEaten()===3) points += sObj.pointCat.superPill;
            if (getLastEaten()===6) points += sObj.pointCat.ghost;
            cleanLastEaten();
            drawPoints(points);


            //Win
    if (pillsToWin === totalLevelpills){
        clearInterval(gameTime),
        document.removeEventListener("keydown", moveHandler, false);
        this.win();
    }
};
win = () => {
    currentLevel++;
    inGameLevel = {};
    pacPos = [];
    points = 0;
    pillsToWin = 0;
    totalLevelpills = 0;
    drawWin();
    let resetGame = setInterval(()=> {
        this.new();
        this.play();
        clearInterval(resetGame);
    }, 3000)
    };
}

let juegoPacMan = new Juego();
juegoPacMan.play();
