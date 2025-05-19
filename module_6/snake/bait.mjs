"use strict";
//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import { GameProps, SheetData } from "./game.mjs";
import { TBoardCell, EBoardCellInfoType } from "./gameBoard.mjs";

//------------------------------------------------------------------------------------------
//----------- Classes ---------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

export class TBait extends libSprite.TSprite {
  #boardCell = null;
  #attempts = 0;
  
  constructor(aSpriteCanvas) {
    const pos = new lib2D.TPoint(0, 0);
    super(aSpriteCanvas, SheetData.Bait, pos);
    this.#boardCell = new TBoardCell(0, 0);
    this.update();
  } // End of constructor

  update() {
    // Reset attempts counter
    this.#attempts = 0;
    
    // Move the bait to a random empty cell on the game board
    do {
      this.#boardCell.col = Math.floor(Math.random() * GameProps.gameBoard.cols);
      this.#boardCell.row = Math.floor(Math.random() * GameProps.gameBoard.rows);
      
      // Safety check to prevent infinite loops
      this.#attempts++;
      if (this.#attempts > 100) {
        console.log("Could not find empty cell for bait after 100 attempts");
        break;
      }
      
      // Get cell at the random position
      const cell = GameProps.gameBoard.getCell(this.#boardCell.row, this.#boardCell.col);
      
      // Continue loop if the cell is occupied or invalid
    } while (!GameProps.gameBoard.getCell(this.#boardCell.row, this.#boardCell.col) || 
             GameProps.gameBoard.getCell(this.#boardCell.row, this.#boardCell.col).infoType !== EBoardCellInfoType.Empty);
    
    // Update visual position on canvas
    this.x = this.#boardCell.col * this.spi.width;
    this.y = this.#boardCell.row * this.spi.height;
    
    // Mark the cell as containing bait
    const cell = GameProps.gameBoard.getCell(this.#boardCell.row, this.#boardCell.col);
    if (cell) {
      cell.infoType = EBoardCellInfoType.Bait;
    }
  } // End of update
}

