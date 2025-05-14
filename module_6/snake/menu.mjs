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
     

  
//------------------------------------------------------------------------------------------
//----------- Click events -------------------------------------------------------------------
//------------------------------------------------------------------------------------------


  this.#spPlay.onClick = () => {
    if (GameProps.gameStatus === EGameStatus.Idle) {
      console.log("Play clicked");
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
}

//Her tegnes Spritene i de ulike spill statusene
  draw(){
    switch(GameProps.gameStatus){
      case EGameStatus.Idle:
        this.#spPlay.draw();
         newGame();
        break;
      case EGameStatus.Pause:
         this.#spResume.draw();
         this.#posBaitEaten.draw();
         break;
      case EGameStatus.GameOver:
        this.#spGameOver.draw();
        this.#spHome.draw();
        this.#spRetry.draw();
        break;
      case EGameStatus.Playing:
        this.#posBaitEaten.value = GameProps.baitEaten;
        this.#posBaitEaten.draw();
        break;
    }
  }
}



  


/* Use this file to create the menu for the snake game. */

