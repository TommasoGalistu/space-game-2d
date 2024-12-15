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




// import platform from '../img/platform.png'
// import background from '../img/background.png'
// import hills from '../img/hills.png'
// import obstacleImg from '../img/obstacle.png'
// import spriteRunLeft from '../img/spriteRunLeft.png'
// import spriteRunRight from '../img/spriteRunRight.png'
// import spriteStandLeft from '../img/spriteStandLeft.png'
// import spriteStandRight from '../img/spriteStandRight.png'

let [array1, array2, array3] = fistLevel()
console.log(array1, array2, array3)
export const canvas = document.querySelector('canvas');

export const c = canvas.getContext('2d')
canvas.width = innerWidth - 50;
canvas.height = 600;

export const gravity = 0.5


// function createImage(imageUrl){
//     const image = new Image()
//     image.src = imageUrl
//     return image
// }

// class Player {
//     constructor(){
//       this.speed = 10
//         this.position = {
//             x: 100,
//             y: 300
//         }
//         this.velocity = {
//             x: 0,
//             y: 1
//         }
//         this.width = 66
//         this.height = 150
//         this.image = createImage(spriteStandRight)d
//         this.frames = 0;
//         this.sprites = {
//             stand:{
//                 right: createImage(spriteStandRight),
//                 left: createImage(spriteStandLeft),
//                 cropWidth: 177,
//                 width: 66
//             },
//             run: {
//                 right: createImage(spriteRunRight),
//                 left: createImage(spriteRunLeft),
//                 cropWidth: 340,
//                 width: 127.870
//             }
//         }
//         this.currentSprite = this.sprites.stand.right
//         this.currentCropWidth = 177
//     }
//     draw(){
//         c.drawImage(
//             this.currentSprite, 
//             this.currentCropWidth * this.frames,
//             0,
//             this.currentCropWidth,
//             400,
//             this.position.x, 
//             this.position.y,
//             this.width, 
//             this.height
//         )
//     }

//     update(){
//         this.frames++
//         if(this.frames > 28){
//             this.frames = 0
//         }
//         this.draw()
//         this.position.y += this.velocity.y
//         this.position.x += this.velocity.x
//         if(this.position.y + this.height + this.velocity. y <= canvas.height) this.velocity.y += gravity
        

        
//     }
// }

// class Platform {
//     constructor({x, y, image}){
//         this.position = {
//             x,
//             y
//         }
//         this.image = image
//         this.width = image.width
//         this.height = image.height

//     }

//     draw(){
//         c.drawImage(this.image, this.position.x, this.position.y)

//     }
// }
// class GenericObject {
//   constructor({x, y, image}){
//       this.position = {
//           x,
//           y
//       }
//       this.image = image
//       this.width = image.width
//       this.height = image.height

//   }

//   draw(){
//       c.drawImage(this.image, this.position.x, this.position.y)

//   }
// }

// class Obstacle {
//   constructor({x, y, image}){
//     this.position = {
//         x,
//         y
//     }
//     this.image = image
//     this.width = image.width
//     this.height = image.height

// }

// draw(){
//     c.drawImage(this.image, this.position.x, this.position.y)

// }
// }
function init(){
  player = new Player()
  platforms = []
  for (let i = 0; i < 100; i++) {
    platforms.push(new Platform({x: (platformImage.width + 190) * i  , y: 480, image: platformImage}),)
    
  }

genericObjects = [
    new GenericObject({x: -1, y: -1, image: createImage(background)}),
    new GenericObject({x: 5, y: 5, image: createImage(hills)})
]
       


  player.update()
  scrollOffset = 0
  

  
}

const platformImage = createImage(platform)

let obstacles = [
    new Obstacle({x: 500, y: 270, image: createImage(obstacleImg)}),
    // new Obstacle({x: 700, y: 300, image: createImage(obstacleImg)}),
    
       

]
let player = new Player()
let platforms = [

  // new Platform({x: 0, y: 480, image: platformImage}),
  // new Platform({x: platformImage.width, y: 480, image: platformImage}),
  // new Platform({x: platformImage.width * 2 , y: 480 + 100, image: platformImage}),
  // new Platform({x: platformImage.width * 3, y: 480, image: platformImage}),
  // new Platform({x: platformImage.width * 4 + 160, y: 480, image: platformImage}),
  // new Platform({x: platformImage.width * 5 + 160, y: 480, image: platformImage}),
  // new Platform({x: platformImage.width * 6 + 160, y: 480, image: platformImage}),
]
for (let i = 0; i < 100; i++) {
//   platforms.push(new Platform({x: (platformImage.width + 190) * i  , y: 480, image: platformImage}),)
  platforms.push(new Platform({x: (platformImage.width) * i  , y: 480, image: platformImage}),)
  
}

let genericObjects = [
    new GenericObject({x: -1, y: -1, image: createImage(background)}),
    new GenericObject({x: 5, y: 5, image: createImage(hills)})
]

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
      init()
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
