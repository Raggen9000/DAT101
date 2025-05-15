"use strict";

import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { EGameStatus, GameProps, SheetData, newGame } from "./game.mjs";


export class SMenu {
  #spPlay
  #spResume
  #spGameOver
  #spHome
  #posBaitEaten
  #spRetry
  #spcvs
  #posScore
  #posBestScore

  constructor(aSpriteCanvas){
    this.#spcvs = aSpriteCanvas;

    GameProps.gameStatus = EGameStatus.Idle;

    const pos = new lib2d.TPosition(350,250)
    this.#spPlay = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Play,pos)
    this.#spPlay.animateSpeed = 10;

    this.#spResume = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Resume, pos)
    this.#spResume.animateSpeed = 10;
    this.#posScore = new lib2d.TPosition(75, 50);

    pos.x = 30;
    pos.y = 40;
    this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SheetData.GameOver, pos)

    //ikkje forandre disse kordinatene! Button metoden her burde løses på en betre måte vis tid
    pos.x = 95;
    pos.y = 388;
    this.#spHome = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Home, pos)

    //ikkje forandre disse kordinatene! Button metoden her burde løses på en betre måte vis tid
    pos.x = 643;
    pos.y= 388;
    this.#spRetry = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Retry, pos)


    this.#posBaitEaten = new libSprite.TSpriteNumber(aSpriteCanvas, SheetData.Number, {x: 50, y: 50});
    this.#posBaitEaten.digits = null;
    this.#posBaitEaten.alpha = 0.7;

    this.#posScore = new libSprite.TSpriteNumber(aSpriteCanvas, SheetData.Number, {x:50, y: 150});
    this.#posScore.digits = null;
    this.#posScore.alpha = 0.7;

    this.#posBestScore = new libSprite.TSpriteNumber(aSpriteCanvas, SheetData.Number, {x:620, y:255})
    //bruk Epsritejustifytype til å sentrere tallene riktig.
    this.#posBestScore.digits = null;
    this.#posBestScore.alpha = 1;





     
  
//------------------------------------------------------------------------------------------
//----------- Click events -------------------------------------------------------------------
//------------------------------------------------------------------------------------------


  this.#spPlay.onClick = () => {
    if (GameProps.gameStatus === EGameStatus.Idle) {
      console.log("Play clicked");
      newGame();
      GameProps.gameStatus = EGameStatus.Playing;
      
    } 
  };

  this.#spHome.onClick = () => {
    if (GameProps.gameStatus === EGameStatus.GameOver) {
      console.log("Play clicked");
      GameProps.gameStatus = EGameStatus.Idle;
    } 
  }

  this.#spRetry.onClick = () => {
    if (GameProps.gameStatus === EGameStatus.GameOver) {
      console.log("Play clicked");
      newGame()
      GameProps.gameStatus = EGameStatus.Playing;
    } 
  }

   this.#spResume.onClick = () => {
    if (GameProps.gameStatus === EGameStatus.Pause) {
      console.log("Play clicked");
      GameProps.gameStatus = EGameStatus.Playing;
    } 
  }
}

//Her tegnes Spritene i de ulike spill statusene
  draw(){
    switch(GameProps.gameStatus){
      case EGameStatus.Idle:
        this.#spPlay.draw();

        break;
      case EGameStatus.Pause:
        this.#spResume.draw();
        this.#posBaitEaten.draw();
        this.#posScore.draw();
         break;
      case EGameStatus.GameOver:
        this.#posBestScore.value = GameProps.score;
        this.#spGameOver.draw();
        this.#spHome.draw();
        this.#spRetry.draw();
        this.#posBestScore.draw();
      
        

        break;
      case EGameStatus.Playing:
        this.#posBaitEaten.value = GameProps.baitEaten;
        this.#posScore.value = GameProps.score;
        this.#posScore.draw();
        this.#posBaitEaten.draw();
        break;
    }
  }
}



  


/* Use this file to create the menu for the snake game. */

