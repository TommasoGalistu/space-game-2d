const canvas = document.getElementById('canvas')

const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

let gravity = 10
class Player{
  constructor(){
    this.position = {
      x: 0,
      y: 0
    }
    this.velocity = {
      x: 1,
      y: 0
    }
    this.width = 100;
    this.height = 100;
  }

  draw(){
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(){
    this.draw()
    this.position.y += gravity
  }
  
}

const player = new Player;


function animate(){
  requestAnimationFrame(animate)
  
  console.log('frame')
  c.clearRect(0,0, canvas.width, canvas.height)
  player.update()

  if(player.position.y + player.height >= canvas.height){
    gravity = 0
  }else{
    gravity = 10
  }
  
}

animate()


window.addEventListener('keydown', ({keyCode}) =>{
  console.log(keyCode)
})