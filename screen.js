let canvas;
let context;
let sObj = {};
let level = [];
let x = 0,
    y = 0;
let lastEaten = 0;

let setScreenObj = (screenObj) =>{
    sObj = screenObj;

};
let setGameLevel = (gameLevels) => {
    level = gameLevels;
};


let cleanLastEaten = () => {
    lastEaten = 0;
}

let clearScreen = () => {
let level = [];
let x = 0,
    y = 0;
let lastEaten = 0;
}

let getLastEaten=()=>{
    return lastEaten;
}

let drawScreen = () => {
    canvas = document.getElementById(sObj.canvasId);
    console.log(sObj)
    //if (Canvas != null) {
    canvas.height = sObj.height;
    canvas.width = sObj.width;
    context = canvas.getContext("2d");
    console.log(context)
    context.fillStyle = sObj.backgroundColor;
    context.fillRect(0,0,sObj.width,sObj.height);

//};
}

let drawLevel = () => {
    for (const yElement of level){
    for (const xElement of yElement){
        if(xElement === 1){
        context.fillStyle = "blue";
        context.fillRect(x, y,sObj.dimension,sObj.dimension);
        } else if(xElement === 4){
            context.beginPath();
            context.fillStyle = "yellow";
            context.arc(
            x + sObj.dimension / 2,
            y + sObj.dimension / 2,
            sObj.dimension / 10,
            0,
            Math.PI * 2,
            true
            );
            context.lineTo(x + sObj.dimension / 2, y + sObj.dimension)
            context.closePath();
            context.fill();
        } else if(xElement === 3){
            context.beginPath();
            context.fillStyle = "lightgreen";
            context.arc(
            x + sObj.dimension / 2,
            y + sObj.dimension / 3,
            sObj.dimension / 4,
            0,
            Math.PI * 2,
            true
            );
            context.closePath();
            context.fill();
        } else if(xElement === 2){
            context.beginPath();
            context.fillStyle = "purple";
            context.arc(
            x + sObj.dimension / 2,
            y + sObj.dimension / 2,
            sObj.dimension / 2.5,
            Math.PI ,
            Math.PI * 2,
            false
            );
            context.lineTo(
                x + sObj.dimension / - 3,
                y + sObj.dimension / 1.1,
            )
            context.closePath();
            context.fill();
        } else if(xElement === 5) {
            context.beginPath();
            context.fillStyle = "yellow";
            context.arc(
            x + sObj.dimension / 2,
            y + sObj.dimension / 2,
            sObj.dimension / 2.5,
            Math.PI * 1.75,
            Math.PI * 0.25,
            true
            );
            context.lineTo(x + sObj.dimension / 2, y + sObj.dimension / 2);
            context.closePath();
            context.fill();
        
        }
        
        x = x + sObj.dimension;
    }
    y = y + sObj.dimension;
    x = 0;
    }

    context.fillStyle = "yellow";
    context.font = "20px Arial";
    context.fillText("Score:   0", (level[0].length + 1) * sObj.dimension, 30);
};

let movePacMan = (dir, pos) => {
    let arrPosX = 0,
        arrPosY = 0;
    let nextPos = 0,
        prevPos = 0;
    if (dir === "ArrowLeft") {
        arrPosX = pos[0]  -1;
        arrPosY = pos[1];
        nextPos = level[arrPosY][arrPosX];
    } else if (dir === "ArrowRight"){
            arrPosX = pos[0] - 1;
            arrPosY = pos[1];
            nextPos = level[arrPosY][arrPosX];
    } else if (dir === "ArrowUp"){
        arrPosX = pos[0] + 1;
        arrPosY = pos[1];
        nextPos = level[arrPosY][arrPosX];
    } else if (dir === "ArrowDown"){
    arrPosX = pos[0] + 1;
    arrPosY = pos[1];
    nextPos = level[arrPosY][arrPosX];
}

    if ([0, 3, 4, 6].includes(nextPos)) {
        level[pos[1][pos[0]]] = 0;
        level[arrPosY][arrPosX] = 5;
        pos = [arrPosX, arrPosY];
        console.log(level);
        drawPacMan(dir, pos);
    }

    return pos;
};

let drawPacMan = (dir, pos) => {
let x = pos[0] * sObj.dimension,
    y = pos[1] * sObj.dimension;
    
    clearSpace(dir, pos);

if (dir === "ArrowLeft") {
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(
        x + sObj.dimension / 2,
        y + sObj.dimension / 2,
        sObj.dimension / 2.5,
        Math.PI * 0.75,
        Math.PI * 1.25,
        true
    );
    context.lineTo(x + sObj.dimension / 2, y + sObj.dimension / 2);
    context.closePath();
    context.fill();
}  else if (dir === "ArrowRight") {
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(
        x + sObj.dimension / 2,
        y + sObj.dimension / 2,
        sObj.dimension / 2.5,
        Math.PI * 0.75,
        Math.PI * 1.25,
        true
    );
    context.lineTo(x + sObj.dimension / 2, y + sObj.dimension / 2);
    context.closePath();
    context.fill();
} else if (dir === "ArrowUp") {
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(
        x + sObj.dimension / 2,
        y + sObj.dimension / 2,
        sObj.dimension / 2.5,
        Math.PI * 0.75,
        Math.PI * 1.25,
        true
    );
    context.lineTo(x + sObj.dimension / 2, y + sObj.dimension / 2);
    context.closePath();
    context.fill();
}  else if (dir === "ArrowDown") {
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(
        x + sObj.dimension / 2,
        y + sObj.dimension / 2,
        sObj.dimension / 2.5,
        Math.PI * 0.75,
        Math.PI * 1.25,
        true
    );
    context.lineTo(x + sObj.dimension / 2, y + sObj.dimension / 2);
    context.closePath();
    context.fill();
}

};


let clearSpace = (dir, pos) => {
    let cSx = pos [0], 
        cSY = pos[1];
    context.fillStyle = sObj.backgroundColor;
    context.fillRect(
        cSx + sObj.dimension,
        cSY + sObj.dimension,
        sObj.dimension,
        sObj.dimension
    );
    if (dir === "ArrowLeft") {
        cSx++;
    } else if (dir === "ArrowRight"){
        cSx--;
    }
    context.fillRect(
        cSx + sObj.dimension,
        cSY + sObj.dimension,
        sObj.dimension,
        sObj.dimension
    );
    
};

let drawPoints = (points) => {
    context.fillStyle = sObj.backgroundColor;
    context.fillRect((level[0],length + 3) * sObj.dimension-1, 14, 25, 18);
    context.fillStyle = "yellow";
    context.font = "20px Arial";
    context.fillText(points, (level[0].length+3) * sObj.dimension,30)
};

/*let drawWin = () => {
    context.fillStyle = "yellow";
    context.font = "20px Arial";
    context.fillText(
        "Usted ha ganado !!", 
        (level[0].length+ 1) * sObj.dimension, 
        sObj.dimension * 4)
};
    context.font = "15px Arial";
    context.fillText(
        "el juego se reinicia en 3 segundos.", 
    (level[0].length + 1) * sObj.dimension, 
    sObj.dimension * 5
    );*/

export { 
    setGameLevel, 
    setScreenObj, 
    getLastEaten, 
    cleanLastEaten,
    clearScreen, 
    drawScreen, 
    drawLevel, 
    movePacMan,
    drawPoints, 
    //drawWin,
};


