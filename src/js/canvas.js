import imagePlatform from '../img/platform.png';
import background from '../img/background.png';



const canvas = document.getElementById('canvas')

const c = canvas.getContext('2d')

canvas.width = 1000;
canvas.height = 650;

let gravity = 0.5
function createImage(path){
  let image = new Image();
  image.src = path
  return image
}
class Player{
  constructor(){
    this.position = {
      x: 150,
      y: 200
    }
    this.velocity = {
      x: 0,
      y: 0
    }
    this.width = 30;
    this.height = 30;
  }

  draw(){
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(){
    this.draw()
    
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y
    
   
  }
  
}

class Platform{
  constructor({x, y, image}){
    this.position = {
      x,
      y
    }
    this.width = 400;
    this.height = 50;
    this.image = image
  }

  draw(){
    // c.fillStyle = 'black'
    c.drawImage(this.image, this.position.x, this.position.y)
  }

  
}

class GeneriObject{
  constructor({x, y, image}){
    this.position = {
      x,
      y
    }
    this.width = image.width;
    this.height = image.height
    this.image = image
  }
  draw(){
    // c.fillStyle = 'black'
    c.drawImage(this.image, this.position.x, this.position.y)
  }

  

}
// const typeOfPlatform = {
//   street: x: 0, y: innerHeight - 100, image: createImage(imagePlatform)
// }
const player = new Player;
const platforms = [
  new Platform({x: 0, y: canvas.height - 80, image: createImage(imagePlatform)})
];
const genericObjects = [
  new GeneriObject({x: 0, y: 0, image: createImage(background)})
]

const key = {
  right:{
    pressed: false
  },
  left:{
    pressed: false
  },
  
}
let position = 0
function animate(){
  requestAnimationFrame(animate)
  
 c.fillStyle = 'white'
  c.fillRect(0,0, canvas.width, canvas.height)

  
  platforms.forEach(platform =>{
    platform.draw()
  })

  
  player.update()
  
  platforms.forEach(platform =>{
    player.velocity.x = 0
    // define a limin of player
    if(key.right.pressed && player.position.x <= canvas.width / 2 + 50){
      player.velocity.x += 10
      
    }else if(key.left.pressed && player.position.x >= 100){
      player.velocity.x -= 10
    }else{
        // the player stay in the center zone and the platform move
      if(key.right.pressed){
        platform.position.x -= 10
      }else if(key.left.pressed){
        // if the platform arrive at start this condition stack the platform
        if(platform.position.x < 0){
          
          platform.position.x += 10

        }
      }
    }
    
    

  })

  // player with canva limit
  if(player.position.y + player.height + player.velocity.y <= canvas.height){
    player.velocity.y += 1 
    player.velocity.y += gravity
  }else{
    console.log('lose')
    
  }
  // player with platform comporment
  platforms.forEach(platform =>{
    console.log(player.position.y + player.height + player.velocity.y, platform.position.y)
    if(player.position.y + player.height <= platform.position.y
      && player.position.y + player.height + player.velocity.y >= platform.position.y
      && player.position.x < platform.position.x + platform.width
      && player.position.x + player.width > platform.position.x
     ){
      player.velocity.y = 0
      
    }
  

  })
  
  
}

animate()


window.addEventListener('keydown', ({keyCode}) =>{
    
  switch(keyCode){
    case 32:
      // barra - per il salto
      player.velocity.y -= 20
      break;
    case 70:
      // f - vado a destra
      key.right.pressed = true
      break;
    case 82:
      // r - vado a sinistra
      key.left.pressed = true
      break;
  }
})
window.addEventListener('keyup', ({keyCode}) =>{
  switch(keyCode){
    case 32:
      // barra - per il salto
      player.velocity.y = 0
      break;
    case 70:
      // f - blocco il movimento a destra
      key.right.pressed = false
      break;
    case 82:
    // r - vado a sinistra
      key.left.pressed = false
    break;
  }
})