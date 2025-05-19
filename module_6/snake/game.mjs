"use strict";

//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { TGameBoard, GameBoardSize, TBoardCell } from "./gameBoard.mjs";
import { TSnake, EDirection } from "./snake.mjs";
import { TBait } from "./bait.mjs";
import { SMenu } from "./menu.mjs";
//-----------------------------------------------------------------------------------------
//----------- variables and object --------------------------------------------------------
//-----------------------------------------------------------------------------------------
const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);
let gameSpeed = 4; // Game speed multiplier;
let hndUpdateGame = null;
export const EGameStatus = { Idle: 0, Playing: 1, Pause: 2, GameOver: 3 };

// prettier-ignore
export const SheetData = {
  Head:     { x:   0, y:   0, width:  38, height:  38, count:  4 },
  Body:     { x:   0, y:  38, width:  38, height:  38, count:  6 },
  Tail:     { x:   0, y:  76, width:  38, height:  38, count:  4 },
  Bait:     { x:   0, y: 114, width:  38, height:  38, count:  1 },
  Play:     { x:   0, y: 155, width: 202, height: 202, count: 10 },
  GameOver: { x:   0, y: 647, width: 856, height: 580, count:  1 },
  Home:     { x:  65, y: 995, width: 169, height: 167, count:  1 },
  Retry:    { x: 614, y: 995, width: 169, height: 167, count:  1 },
  Resume:   { x:   0, y: 357, width: 202, height: 202, count: 10 },
  Number:   { x:   0, y: 560, width:  81, height:  86, count: 10 },
};


export const GameProps = {
  gameBoard: null,
  gameStatus: EGameStatus.Playing,
  snake: null,
  bait: null,
  score: 100,
  baitEaten: 0,
  menu: null,
  finalScore: 0,
  growth: false, // Add this flag to control snake growth
};

//------------------------------------------------------------------------------------------
//----------- Exported functions -----------------------------------------------------------
//------------------------------------------------------------------------------------------

export function newGame() {
  // Stop any existing update interval
  if (hndUpdateGame) {
    clearInterval(hndUpdateGame);
  }

  GameProps.gameBoard = new TGameBoard();
  GameProps.snake = new TSnake(spcvs, new TBoardCell(5, 5)); // Initialize snake with a starting position
  GameProps.bait = new TBait(spcvs); // Initialize bait with a starting position
  gameSpeed = 4; // Reset game speed
  GameProps.score = 50; // Reset score
  GameProps.baitEaten = 0; // Reset baitEaten
  GameProps.finalScore = 0; // Reset finalScore
  GameProps.growth = false; // Reset growth flag
  
  // Setup game update interval
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed);
}



export function bateIsEaten() {
  console.log("Bait eaten!");
  
  // Increment counters
  GameProps.baitEaten++;
  GameProps.finalScore += GameProps.score;
  GameProps.score = 50;
  
  console.log("Bait eaten: " + GameProps.baitEaten.toString() + ", Score: " + GameProps.finalScore.toString());
  
  // Set flag to grow snake on next update to avoid collision issues
  GameProps.growth = true;
  
  // Move bait to new position
  GameProps.bait.update();
  
  // Only increase speed every 3 baits to avoid making game too fast
  if (GameProps.baitEaten % 3 === 0) {
    increaseGameSpeed();
  }

}


//------------------------------------------------------------------------------------------
//----------- functions -------------------------------------------------------------------
//------------------------------------------------------------------------------------------


function loadGame() {
  cvs.width = GameBoardSize.Cols * SheetData.Head.width;
  cvs.height = GameBoardSize.Rows * SheetData.Head.height;

  GameProps.gameStatus = EGameStatus.Idle; // change game status to Idle

  /* Create the game menu here */ 
  GameProps.menu = new SMenu(spcvs);

  requestAnimationFrame(drawGame);
  console.log("Game canvas is rendering!");
}

function drawGame() {
  // Clear the canvas
  spcvs.clearCanvas();

  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
    case EGameStatus.Pause:
      GameProps.bait.draw();
      GameProps.snake.draw();
      break;
    case EGameStatus.GameOver:
      GameProps.snake.draw();
      GameProps.bait.draw();
  }
  
  GameProps.menu.draw();
  
  // Request the next frame
  requestAnimationFrame(drawGame);
}

function updateGame() {
  // Update game logic here
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
      if (!GameProps.snake.update()) {
        GameProps.gameStatus = EGameStatus.GameOver;
        console.log("Game over!");
      } else if (GameProps.growth) {
        // Grow snake after its position has been updated
        GameProps.snake.grow();
        GameProps.growth = false;
      }
      break;
  }
}

function increaseGameSpeed() {
  // Cap the maximum speed to avoid the game becoming unplayable
  if (gameSpeed < 10) {
    gameSpeed++;
    console.log("Increase game speed to: " + gameSpeed.toString());
    
    // Clear and reset the update interval with new speed
    clearInterval(hndUpdateGame);
    hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed);
  }
}

//-----------------------------------------------------------------------------------------
//----------- Event handlers --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function onKeyDown(event) {
  // Only process key events if the game is in Playing or Pause state
  if (GameProps.gameStatus === EGameStatus.Playing || 
      GameProps.gameStatus === EGameStatus.Pause) {
    
    switch (event.key) {
      case "ArrowUp":
        GameProps.snake.setDirection(EDirection.Up);
        break;
      case "ArrowDown":
        GameProps.snake.setDirection(EDirection.Down);
        break;
      case "ArrowLeft":
        GameProps.snake.setDirection(EDirection.Left);
        break;
      case "ArrowRight":
        GameProps.snake.setDirection(EDirection.Right);
        break;
      case " ":
        console.log("Space key pressed!");
        if (GameProps.gameStatus === EGameStatus.Playing) {
          console.log("Paused");
          GameProps.gameStatus = EGameStatus.Pause;
        } else if (GameProps.gameStatus === EGameStatus.Pause) {
          console.log("Resumed");
          GameProps.gameStatus = EGameStatus.Playing;
        }
        break;
      default:
        console.log(`Key pressed: "${event.key}"`);
    }
  }
}

//-----------------------------------------------------------------------------------------
//----------- main -----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

spcvs.loadSpriteSheet("./Media/spriteSheet.png", loadGame);
document.addEventListener("keydown", onKeyDown);

