const canvas = document.getElementById('canvas')

canvas.width = innerWidth;
canvas.heigth = innerHeight;
const c = canvas.getContext('2d')


class Player{
  constructor(){
    this.position = {
      x: 100,
      y: 100
    }
    this.width = 100;
    this.heigth = 100;
  }

  draw(){
    c.fillRect(this.position.x, this.position.y, this.width, this.heigth)
  }

  update(){
    this.draw()
  }
  
}

const player = new Player;
player.update()

