import platform from '../img/platform.png'
import background from '../img/background.png'
import hills from '../img/hills.png'
import obstacleImg from '../img/obstacle.png'
import flag from '../img/flag.png'
import playerComand from '../img/playercommand.png'
import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'

import {createImage} from './function.js'

import {Player} from './Player.js'
import {Platform} from './Platform.js'
import {Obstacle} from './Obstacle.js'
import {GenericObject} from './GenericObject.js'

export function fistLevel(){
    const platformImage = createImage(platform)
    const obstacleImage = createImage(obstacleImg)
    const backgroundImg = createImage(background)
    const hillsImg =  createImage(hills)
    const endImg = createImage(flag)
    const playerComandImg = createImage(playerComand)
    let obstacles = [];
    let platforms = [];
    let genericObjects = []
    let player = new Player
    let scrollOffset = 0
    let endOfTheGame = 7640;
    
    obstacles = [
        // new Obstacle({x: 1000, y: 400, image: obstacleImage}),
        // new Obstacle({x: 700, y: 300, image: createImage(obstacleImg)}),
    ]
    platforms = [
    ]
    for (let i = 0; i < 14; i++) {
        
        if(i <= 3){
            platforms.push(new Platform({x: (platformImage.width + 190) * i  , y: 480 - (100 * i), image: platformImage}),)
            
        }else{
            platforms.push(new Platform({x: (platformImage.width + 190) * i  , y: 480, image: platformImage}),)
            
        }
    //   platforms.push(new Platform({x: (platformImage.width + 190) * i  , y: 480, image: platformImage}),)
      
    }
    let positionXFlag = platforms[platforms.length -1].position.x - 10
    genericObjects = [
        new GenericObject({x: -1, y: -1, image: backgroundImg}),
        new GenericObject({x: 5, y: 5, image: hillsImg}),
        new GenericObject({x: 7000, y: 400, image: endImg}),
        new GenericObject({x: 5, y: 10, image: playerComandImg})
    ]
    
    
    return [obstacles, platforms, genericObjects, player, scrollOffset, endOfTheGame]

}


