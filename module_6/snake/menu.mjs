"use strict";

import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSound from "../../common/libs/libSound.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { EGameStatus, GameProps, SheetData } from "./game.mjs";


export class SMenu {
  #spPlay
  #spResume
  #spGameOver
  #spHome
  #spNumber
  #spRetry
  #spcvs
  #posScore

  constructor(aSpriteCanvas){
    this.#spcvs = aSpriteCanvas;

    GameProps.gameStatus = EGameStatus.Idle;

    const pos = new lib2d.TPosition(350,250)
    this.#spPlay = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Play,pos)
    this.#spPlay.animateSpeed = 10;

     this.#spPlay.onClick = () => {
    if (GameProps.gameStatus === EGameStatus.Idle) {
      console.log("Play clicked");
      GameProps.gameStatus = EGameStatus.Playing;
    }
  }

    this.#spResume = new libSprite.TSpriteButton(aSpriteCanvas, SheetData.Resume,pos)
    this.#posScore = new lib2d.TPosition(75, 50);
    
  }

  draw(){
    switch(GameProps.gameStatus){
      case EGameStatus.Idle:
        this.#spPlay.draw();
        break;
      case EGameStatus.Pause:
         this.#spResume.draw();
         break;
    }
  }




}



  


/* Use this file to create the menu for the snake game. */

