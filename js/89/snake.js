const theCanvas = document.querySelector('#theCanvas');
const crashSound = document.querySelector('#crash');
const crunchSound = document.querySelector('#crunch');
const context = theCanvas.getContext('2d');
const GRID_SIZE = 64
let dx = 64
let dy = 0
let highScore = localStorage.getItem("highScore") || 0

function resizeCanvas() {
    theCanvas.width = window.innerWidth - (window.innerWidth % GRID_SIZE);
    theCanvas.height =   window.innerHeight - (window.innerHeight % GRID_SIZE);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

document.addEventListener("keydown", (e) => {
    switch(e.key){
        case("ArrowUp"):
            dx = 0
            dy = -64 + ( dy + Math.abs(dy)) // this is added so you should not be able to go back in the diresction you are going
            break
        case("ArrowDown"):
            dx = 0
            dy = 64 - ( Math.abs(dy) - dy)
            break
        case("ArrowLeft"):
            dx = -64 + (dx + Math.abs(dx))
            dy = 0
            break
        case("ArrowRight"):
            dx = 64 - (Math.abs(dx) - dx)
            dy = 0
            break
    }
  });

const snake = document.createElement('img')
snake.src = "images/snakehead.png"
snake.onload = function() {
    context.drawImage(snake, 0, 0);
  };
const apple = document.createElement('img')
apple.src = "images/apple.png"
// apple.onload = function() {
//     context.drawImage(apple, 64, 0);
//   };
context.font = "30px Arial";
context.fillStyle = "red";
context.strokeRect(0, 0, theCanvas.width, theCanvas.height);

class Snake{
    constructor(){
        this.x = 0
        this.y = 0
        this.speed = 300
        this.pieces = []
        this.head = [this.x,this.y]
        this.score = 0
    }
    move(){
        setTimeout(()=>{
            this.pieces.unshift([this.x,this.y])
            this.pieces.pop()
            this.x += dx
            this.y += dy
            if(this.x >= theCanvas.width ||
                 this.x < 0 || 
                 this.y >= theCanvas.height || 
                 this.y < 0 ||
                 this.checkForCrash()){
                context.fillText(`Game Over`, theCanvas.width / 2,  theCanvas.height / 2);
                crashSound.play()
                if(this.score > highScore){
                    localStorage.setItem("highScore",this.score)
                }
                return
            }
            if(this.x == a.x && this.y == a.y){
                a.x = Apple.getRandomSpot("x") 
                a.y = Apple.getRandomSpot("y") 
                this.score++
                this.pieces.push([this.x,this.y])
                this.speed *= .9
                crunchSound.play()
            }
            context.fillStyle = "green";
            context.clearRect(0,0,theCanvas.width,theCanvas.height)
            context.fillText(`Score: ${this.score}`, theCanvas.width - 220, 50);
            context.fillText(`High Score: ${highScore}`, theCanvas.width - 220, 100);
            context.strokeRect(0, 0, theCanvas.width, theCanvas.height);
            context.drawImage(apple, a.x, a.y);
            this.draw()
        },this.speed)
    }

    draw(){
        context.drawImage(snake, this.x, this.y);
        this.pieces.forEach(piece => {
            context.fillRect(piece[0],piece[1],GRID_SIZE,GRID_SIZE);
            context.fillStyle = "green"
        })
        this.move()
    }
    checkForCrash(){
       for (let i = 0;i < this.pieces.length ; i++){
            if(this.x == this.pieces[i][0] && this.y == this.pieces[i][1] ){
                return true
            }
        }
        return false 
    }
}


class Apple{
    constructor(){
        this.x = Apple.getRandomSpot("x") 
        this.y = Apple.getRandomSpot("y") 
    }
    
    static getRandomSpot(dir){
        return dir == "x" ? Math.floor(((theCanvas.width/64))* Math.random() )* 64 : Math.floor(((theCanvas.height/64))* Math.random()) *64
    }
}




let s = new Snake()
s.move()
let a = new Apple()






