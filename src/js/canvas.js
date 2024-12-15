import platform from '../img/platform.png'
import background from '../img/background.png'
import hills from '../img/hills.png'
import obstacleImg from '../img/obstacle.png'
import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'

import {createImage} from './function.js'

import {assets} from './assets.js'
import {fistLevel} from './level.js'
import {Player} from './Player.js'
import {Platform} from './Platform.js'
import {Obstacle} from './Obstacle.js'
import {GenericObject} from './GenericObject.js'





export const canvas = document.querySelector('canvas');

export const c = canvas.getContext('2d')
canvas.width = innerWidth - 50;
canvas.height = 600;

export const gravity = 0.5

function init(level){

    switch(level){
        case 'fistLevel':
            [obstacles, platforms, genericObjects, player] = fistLevel()
            break;
    }
}



let [obstacles, platforms, genericObjects, player] = fistLevel()

player.update()
let scrollOffset = 0


function animate(){
    requestAnimationFrame(animate)
    
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    genericObjects.forEach(genericObject =>{
        genericObject.draw()
    })
    // creazione platform
    platforms.forEach(platform =>{
        platform.draw()
    })
    obstacles.forEach(obstacle => {
        obstacle.draw()
        
    });
    player.update()

    
    // spostamenti, parte dove si può muovere il player
    if(keys.right.pressed && player.position.x < 400){
        player.velocity.x = player.speed
    }else if(keys.left.pressed && player.position.x > 100){
        player.velocity.x = -player.speed
    }else{
        player.velocity.x = 0
        
       
        // se sono dentro l'area di movimento si spostano gli oggetti simulando il movimento a destra
        if(scrollOffset < 7640){
          if(keys.right.pressed){
              scrollOffset += player.speed
              platforms.forEach(platform =>{
                  platform.position.x -= player.speed
              })
              obstacles.forEach(obstacle =>{
                  obstacle.position.x -= player.speed

              })
              genericObjects.forEach(genericObject =>{
                  genericObject.position.x -= player.speed * .66
              })
              
          }

        }

        // se sono dentro l'area di movimento si spostano gli oggetti simulando il movimento a sinistra
        if(scrollOffset >=10){

            if(keys.left.pressed){
                scrollOffset -= player.speed
                platforms.forEach(platform =>{
                    platform.position.x += player.speed
                    
                    
                })
                obstacles.forEach(obstacle =>{
                    obstacle.position.x += player.speed
  
                })
                
                genericObjects.forEach(genericObject =>{
                    genericObject.position.x += player.speed * .66
                })
            }
        }
    }

    // platform comportment
    platforms.forEach(platform =>{
        // se sono sulla piattaforma si ferma la gravità
        if(player.position.y + player.height <= platform.position.y 
            && player.position.y + player.height + player.velocity.y >= platform.position.y
            && player.position.x + player.width >= platform.position.x
            && player.position.x <= platform.position.x + platform.width){

            player.velocity.y = 0
            
            obstacles.forEach(obstacle =>{
                

            // lo blocco lateralmente se incontro un ostacolo
                
            if(player.position.x + player.width + player.velocity.x >= obstacle.position.x
                && player.position.x < obstacle.position.x + obstacle.width
                && player.position.y <= obstacle.position.y + obstacle.height
            ){
                player.velocity.x = 0
            }

            // ostacolo in offset il giocatore si ferma
            if(player.position.x  <= obstacle.position.x + obstacle.width &&
                player.position.x + player.width >= obstacle.position.x
                && player.position.y <= obstacle.position.y + obstacle.height
            ){
                player.velocity.x = 0; 
            }
                
                

                
                
                
            })
            
        }else{
            
            // se non sono sulla piattaforma
            obstacles.forEach(obstacle =>{
            //     // se sono sopra l'ostacolo e se esco a destra o a sinistra
                if(player.position.y + player.height <= obstacle.position.y 
                    && player.position.y + player.height + player.velocity.y >= obstacle.position.y
                    && player.position.x + player.width >= obstacle.position.x
                    && player.position.x <= obstacle.position.x + obstacle.width){
        
                    player.velocity.y = 0
                }
                // lo blocco se salta sotto l'ostacolo
                if(keys.jump.pressed &&
                    player.position.y <= obstacle.position.y + obstacle.height &&
                    player.position.x <= obstacle.position.x + obstacle.width &&
                    player.position.x + player.width >= obstacle.position.x &&
                    player.position.y + player.height >= obstacle.position.y
                ){
                  player.velocity.y = 0
                }
            })

        }
    })  
    

    // win 
    if(scrollOffset > 7640){
        console.log('you win')
    }

    // lose
    if(player.position.y > canvas.height){
      init('fistLevel')
    }
}
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    jump: {
        pressed: false
    }
}
animate()

addEventListener('keydown', ({keyCode}) =>{
    switch(keyCode){
        case 82:
            // left a
            keys.left.pressed = true
            player.currentSprite = player.sprites.run.left
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break
        case 83:
            // down s
            break
        case 70:
            // right a
            keys.right.pressed = true
            player.currentSprite = player.sprites.run.right
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
            break
        case 32:
            // up a
            
            keys.jump.pressed = true
              player.velocity.y -= 20
              console.log(player.velocity.y )
            break
        
            
    }
})

addEventListener('keyup', ({keyCode}) =>{
    switch(keyCode){
        case 82:
            // left a
            keys.left.pressed = false
            player.currentSprite = player.sprites.stand.left
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            break
        case 83:
            // down s
            break
        case 70:
            // right a
            keys.right.pressed = false
            player.currentSprite = player.sprites.stand.right
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
            // dd
            break
        case 32:
            // up a
            keys.jump.pressed = false
            player.velocity.y = 0
            break
            
    }
})
