"use strict";
//------------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//------------------------------------------------------------------------------------------
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import { GameProps, SheetData, bateIsEaten } from "./game.mjs"
import { TBoardCell, EBoardCellInfoType } from "./gameBoard.mjs";

//------------------------------------------------------------------------------------------
//----------- variables and object ---------------------------------------------------------
//------------------------------------------------------------------------------------------
const ESpriteIndex = {UR: 0, LD: 0, RU: 1, DR: 1, DL: 2, LU: 2, RD: 3, UL: 3, RL: 4, UD: 5};
export const EDirection = { Up: 0, Right: 1, Left: 2, Down: 3 };


//-----------------------------------------------------------------------------------------
//----------- Classes ---------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
class TSnakePart extends libSprite.TSprite {
  constructor(aSpriteCanvas, aSpriteInfo, aBoardCell) {
    const pos = new lib2D.TPoint(aBoardCell.col * aSpriteInfo.width, aBoardCell.row * aSpriteInfo.height);
    super(aSpriteCanvas, aSpriteInfo, pos);
    this.boardCell = aBoardCell;
    let boardCellInfo = GameProps.gameBoard.getCell(aBoardCell.row, aBoardCell.col);
    this.direction = boardCellInfo.direction;
    boardCellInfo.infoType = EBoardCellInfoType.Snake;
    this.index = this.direction;
  }

  update(){
    this.x = this.boardCell.col * this.spi.width;
    this.y = this.boardCell.row * this.spi.height;
  }

} // class TSnakePart


class TSnakeHead extends TSnakePart {
  constructor(aSpriteCanvas, aBoardCell) {
    super(aSpriteCanvas, SheetData.Head, aBoardCell);
    this.newDirection = this.direction;
  }

  setDirection(aDirection) {
    // Prevent 180-degree turns which would cause immediate collisions
    if ((this.direction === EDirection.Right && aDirection === EDirection.Left) ||
        (this.direction === EDirection.Left && aDirection === EDirection.Right) ||
        (this.direction === EDirection.Up && aDirection === EDirection.Down) ||
        (this.direction === EDirection.Down && aDirection === EDirection.Up)) {
      return; // Ignore invalid direction changes
    }
    
    // Only allow perpendicular direction changes
    if ((this.direction === EDirection.Right || this.direction === EDirection.Left) && 
        (aDirection === EDirection.Up || aDirection === EDirection.Down)) {
      this.newDirection = aDirection;
    } else if ((this.direction === EDirection.Up || this.direction === EDirection.Down) && 
               (aDirection === EDirection.Right || aDirection === EDirection.Left)) {
      this.newDirection = aDirection;
    }
  }

  update(){
    // Mark the current cell with the new direction for body segments to follow
    const currentCell = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
    if (currentCell) {
      currentCell.direction = this.newDirection;
    }
    
    // Move head according to direction
    switch (this.newDirection) {
      case EDirection.Up:
        this.boardCell.row--;
        break;
      case EDirection.Right:
        this.boardCell.col++;
        break;
      case EDirection.Left:
        this.boardCell.col--;
        break;
      case EDirection.Down:
        this.boardCell.row++;
        break;
    }
    
    // Update head direction and sprite index
    this.direction = this.newDirection;
    this.index = this.direction;
    
    // Check for collisions
    if (this.checkCollision()) {
      return false; // Collision detected, do not continue
    }
    
    // Update the position on the canvas
    super.update();
    
    // Check if the head is on a bait cell
    const newCell = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
    if (!newCell) {
      return false; // Invalid cell, treat as collision
    }
    
    if (newCell.infoType === EBoardCellInfoType.Bait) {
      bateIsEaten();
    } else {
      // Decrease score when not eating bait
      GameProps.score = Math.max(0, GameProps.score - 1);
    }
    
    // Mark the new cell as Snake
    newCell.infoType = EBoardCellInfoType.Snake;
    
    return true; // No collision, continue
  }

  checkCollision() {
    // Check bounds
    if (this.boardCell.row < 0 || 
        this.boardCell.row >= GameProps.gameBoard.rows || 
        this.boardCell.col < 0 || 
        this.boardCell.col >= GameProps.gameBoard.cols) {
      console.log("Collision with boundary");
      return true; // Out of bounds
    }
    
    // Check if hitting snake body
    const boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
    if (!boardCellInfo) {
      console.log("Invalid cell detected");
      return true; // Treat as collision
    }
    
    if (boardCellInfo.infoType === EBoardCellInfoType.Snake) {
      console.log("Collision with snake body");
      return true; // Hit snake body
    }
    
    return false; // No collision detected
  }
}

class TSnakeBody extends TSnakePart {
  constructor(aSpriteCanvas, aBoardCell) {
    super(aSpriteCanvas, SheetData.Body, aBoardCell);
    this.index = ESpriteIndex.RL;    
  }

  update(){
    // Store old position before moving
    const oldRow = this.boardCell.row;
    const oldCol = this.boardCell.col;
    
    // Move according to current direction
    switch (this.direction) {
      case EDirection.Up:
        this.boardCell.row--;
        break;
      case EDirection.Right:
        this.boardCell.col++;
        break;
      case EDirection.Left:
        this.boardCell.col--;
        break;
      case EDirection.Down:
        this.boardCell.row++;
        break;
    }
    
    // Get board cell info for new position
    const boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
    if (!boardCellInfo) {
      // Invalid position, use old position
      this.boardCell.row = oldRow;
      this.boardCell.col = oldCol;
      return;
    }
    
    // Determine sprite index based on direction change
    let spriteIndex = ESpriteIndex.RL;
    
    if (boardCellInfo.direction !== this.direction) {
      // Direction change at this cell
      switch (this.direction) {
        case EDirection.Up:
          if (boardCellInfo.direction === EDirection.Left) {
            spriteIndex = ESpriteIndex.UL;
          } else if (boardCellInfo.direction === EDirection.Right) {
            spriteIndex = ESpriteIndex.UR;
          }
          break;
        case EDirection.Right:
          if (boardCellInfo.direction === EDirection.Up) {
            spriteIndex = ESpriteIndex.RU;
          } else if (boardCellInfo.direction === EDirection.Down) {
            spriteIndex = ESpriteIndex.RD;
          }
          break;
        case EDirection.Left:
          if (boardCellInfo.direction === EDirection.Up) {
            spriteIndex = ESpriteIndex.LU;
          } else if (boardCellInfo.direction === EDirection.Down) {
            spriteIndex = ESpriteIndex.LD;
          }
          break;
        case EDirection.Down:
          if (boardCellInfo.direction === EDirection.Left) {
            spriteIndex = ESpriteIndex.DR; 
          } else if (boardCellInfo.direction === EDirection.Right) {
            spriteIndex = ESpriteIndex.DL; 
          }
          break;
      }
    } else {
      if (this.direction === EDirection.Up || this.direction === EDirection.Down) {
        spriteIndex = ESpriteIndex.UD;
      } else {
        spriteIndex = ESpriteIndex.RL;
      }
    }
    
    // Update direction and sprite index
    this.direction = boardCellInfo.direction;
    this.index = spriteIndex;
    
    // Mark the cell as Snake type
    boardCellInfo.infoType = EBoardCellInfoType.Snake;
    
    // Update canvas position
    super.update();
  }

  clone(){
    // Create a body segment with the same properties
    const newBody = new TSnakeBody(this.spcvs, new TBoardCell(this.boardCell.col, this.boardCell.row));
    newBody.index = this.index;
    newBody.direction = this.direction;
    return newBody;
  }
} // class TSnakeBody


class TSnakeTail extends TSnakePart {
  constructor(aSpriteCanvas, aBoardCell) {
    super(aSpriteCanvas, SheetData.Tail, aBoardCell);
  }

  update(){
    // Store old position before moving
    const oldRow = this.boardCell.row;
    const oldCol = this.boardCell.col;
    
    // Clear old cell before moving
    const oldCell = GameProps.gameBoard.getCell(oldRow, oldCol);
    if (oldCell) {
      oldCell.infoType = EBoardCellInfoType.Empty;
    }
    
    // Move according to current direction
    switch (this.direction) {
      case EDirection.Up:
        this.boardCell.row--;
        break;
      case EDirection.Right:
        this.boardCell.col++;
        break;
      case EDirection.Left:
        this.boardCell.col--;
        break;
      case EDirection.Down:
        this.boardCell.row++;
        break;
    }
    
    // Get board cell info for new position
    const boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
    if (!boardCellInfo) {
      // Invalid position, use old position
      this.boardCell.row = oldRow;
      this.boardCell.col = oldCol;
      return;
    }
    
    // Update direction and sprite index
    this.direction = boardCellInfo.direction;
    this.index = this.direction;
    
    // Update canvas position
    super.update();
  }

  clone() {
    // Create a tail sprite with the same properties
    const newTail = new TSnakeTail(this.spcvs, new TBoardCell(this.boardCell.col, this.boardCell.row));
    newTail.index = this.index;
    newTail.direction = this.direction;
    return newTail;
  }
} // class TSnakeTail


export class TSnake {
  #isDead = false;
  #head = null;
  #body = null;
  #tail = null;
  
  constructor(aSpriteCanvas, aBoardCell) {
    // Create head at specified position
    this.#head = new TSnakeHead(aSpriteCanvas, aBoardCell);
    
    // Create body behind head
    let col = aBoardCell.col - 1;
    this.#body = [new TSnakeBody(aSpriteCanvas, new TBoardCell(col, aBoardCell.row))];
    
    // Create tail behind body
    col--;
    this.#tail = new TSnakeTail(aSpriteCanvas, new TBoardCell(col, aBoardCell.row));
    
    // Set initial directions
    this.#head.direction = EDirection.Right;
    this.#head.newDirection = EDirection.Right;
    this.#body[0].direction = EDirection.Right;
    this.#tail.direction = EDirection.Right;
    
    // Initialize sprite indices
    this.#head.index = EDirection.Right;
    this.#body[0].index = ESpriteIndex.RL;
    this.#tail.index = EDirection.Right;
  } // constructor

  draw() {
    // Draw tail first (bottom layer)
    this.#tail.draw();
    
    // Draw body segments
    for (let i = 0; i < this.#body.length; i++) {
      this.#body[i].draw();
    }
    
    // Draw head last (top layer)
    this.#head.draw();
  } // draw

  //Returns true if the snake is alive
  update(){
    if (this.#isDead) {
      return false; // Snake is dead, do not continue
    }
    
    // Update head first
    if(this.#head.update()) {
      // Then update body 
      for (let i = 0; i < this.#body.length; i++) {
        this.#body[i].update();
      }
      
      // Finally update tail
      this.#tail.update();
      
      return true; 
    } else {
      this.#isDead = true;
      return false;
    }
  }

  setDirection(aDirection) {
    this.#head.setDirection(aDirection);
  } 
  
  grow() {
  const tail = this.#tail;
  const tailPos = new TBoardCell(tail.boardCell.col, tail.boardCell.row);

  // Create a sprite at the current tail position
  const newBody = new TSnakeBody(tail.spcvs, tailPos);
  newBody.direction = tail.direction;
  newBody.index = (tail.direction === EDirection.Up || tail.direction === EDirection.Down)
    ? ESpriteIndex.UD
    : ESpriteIndex.RL;

  // Add the new sprite to the body
  this.#body.push(newBody);

  // Making new directions
  const offsetMap = {
    [EDirection.Up]:    { col: 0, row: 1 },
    [EDirection.Down]:  { col: 0, row: -1 },
    [EDirection.Left]:  { col: 1, row: 0 },
    [EDirection.Right]: { col: -1, row: 0 },
  };

  const offset = offsetMap[tail.direction];
  const newTailPos = new TBoardCell(tail.boardCell.col + offset.col, tail.boardCell.row + offset.row);

  // Create a new tail 
  this.#tail = new TSnakeTail(tail.spcvs, newTailPos);
  this.#tail.direction = tail.direction;
  this.#tail.index = tail.direction;

  console.log("Snake grew! Body length is now:", this.#body.length);
}}
