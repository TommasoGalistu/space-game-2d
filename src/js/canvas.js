const canvas = document.getElementById('canvas')

const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

let gravity = 0.5
class Player{
  constructor(){
    this.position = {
      x: 100,
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
    this.position.x -= this.velocity.x
    if(this.position.y + this.height + this.velocity.y <= canvas.height){
      this.position.y += this.velocity.y
      this.velocity.y += gravity
    }else{
      this.velocity.y = 0
    }
  }
  
}

const player = new Player;


function animate(){
  requestAnimationFrame(animate)
  
 
  c.clearRect(0,0, canvas.width, canvas.height)
  player.update()

  
  
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
      player.velocity.x -= 15
      break;
    case 69:
      // e - vado a sinistra
      player.velocity.x += 15
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
      player.velocity.x = 0
      break;
    case 69:
    // e - vado a sinistra
    player.velocity.x = 0
    break;
  }
})