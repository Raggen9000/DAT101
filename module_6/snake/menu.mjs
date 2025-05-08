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

    this.#posScore = new lib2d.TPosition(75, 50);
  }

  draw(){
    switch(GameProps.gameStatus){
      case EGameStatus.Idle:
        this.#spPlay.draw();
        break;
      case EGameStatus.Playing:
        this.#spcvs.drawText(GameProps.score.toString(), this.#posScore);
    }
  }


}

/* Use this file to create the menu for the snake game. */

