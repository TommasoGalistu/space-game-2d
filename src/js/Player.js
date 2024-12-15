import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'

import {canvas, c, gravity } from './canvas.js'
import {createImage} from './function.js'


export class Player {
    constructor(){
      this.speed = 10
        this.position = {
            x: 100,
            y: 300
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 66
        this.height = 150
        this.image = createImage(spriteStandRight)
        this.frames = 0;
        this.sprites = {
            stand:{
                right: createImage(spriteStandRight),
                left: createImage(spriteStandLeft),
                cropWidth: 177,
                width: 66
            },
            run: {
                right: createImage(spriteRunRight),
                left: createImage(spriteRunLeft),
                cropWidth: 340,
                width: 127.870
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 177
    }
    draw(){
        c.drawImage(
            this.currentSprite, 
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            400,
            this.position.x, 
            this.position.y,
            this.width, 
            this.height
        )
    }

    update(){
        this.frames++
        if(this.frames > 28){
            this.frames = 0
        }
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if(this.position.y + this.height + this.velocity. y <= canvas.height) this.velocity.y += gravity
        

        
    }
}