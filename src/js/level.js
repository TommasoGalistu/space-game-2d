import platform from '../img/platform.png'
import background from '../img/background.png'
import hills from '../img/hills.png'
import obstacleImg from '../img/obstacle.png'
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
    let obstacles = [
        new Obstacle({x: 500, y: 270, image: obstacleImage}),
        // new Obstacle({x: 700, y: 300, image: createImage(obstacleImg)}),
    ]
    let platforms = [
    ]
    for (let i = 0; i < 100; i++) {
    //   platforms.push(new Platform({x: (platformImage.width + 190) * i  , y: 480, image: platformImage}),)
      platforms.push(new Platform({x: (platformImage.width + 190) * i  , y: 480, image: platformImage}),)
      
    }
    let genericObjects = [
        new GenericObject({x: -1, y: -1, image: backgroundImg}),
        new GenericObject({x: 5, y: 5, image: hillsImg})
    ]
    let player = new Player
    
    return [obstacles, platforms, genericObjects, player]

}


