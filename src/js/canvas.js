const canvas = document.getElementById('canvas')

const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

let gravity = 0.5
class Player{
  constructor(){
    this.position = {
      x: 150,
      y: 200
    }
    this.velocity = {
      x: 0,
      y: 1
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
    
    
   
  }
  
}

class Platform{
  constructor(){
    this.position = {
      x: 100,
      y: 400
    }
    this.width = 200;
    this.height = 100
  }

  draw(){
    c.fillStyle = 'black'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(){
    
  }
}

const player = new Player;
const platform = new Platform;

const key = {
  right:{
    pressed: false
  },
  left:{
    pressed: false
  },
  
}
function animate(){
  requestAnimationFrame(animate)
  
 
  c.clearRect(0,0, canvas.width, canvas.height)
  platform.draw()
  player.update()

  if(key.right.pressed){
    player.position.x += 10
  }else if(key.left.pressed){
    player.position.x -= 10
  }

  if(player.position.y + player.height + player.velocity.y <= canvas.height 
    && player.position.y + player.height <= platform.position.y
  ){
    player.position.y += player.velocity.y
    player.velocity.y += gravity
  }else{
    player.velocity.y = 0
  }
  
  
  
}

animate()


window.addEventListener('keydown', ({keyCode}) =>{
  console.log(keyCode)    
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
  console.log(keyCode)    
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