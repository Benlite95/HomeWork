

const theCanvas = document.querySelector('#theCanvas');
const crashSound = document.querySelector('#crash');
const crunchSound = document.querySelector('#crunch');

const context = theCanvas.getContext('2d');
const GRID_SIZE = 64
let dx = 64
let dy = 0

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
            dy = -64
            break
        case("ArrowDown"):
            dx = 0
            dy = 64
            break
        case("ArrowLeft"):
            dx = -64
            dy = 0
            break
        case("ArrowRight"):
            dx = 64
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
context.fillText("Hello World!", theCanvas.width - 200, 50);
context.strokeRect(0, 0, theCanvas.width, theCanvas.height);

class Snake{
    constructor(){
        this.x = 0
        this.y = 0
        this.length = 1
        this.pieces = []
        this.head = [this.x,this.y]
        this.score = 0
    }
    move(){
        setTimeout(()=>{
            console.log(this.pieces[0])

            this.pieces.unshift([this.x,this.y])
            console.log(this.pieces[0])
            this.pieces.pop()
            console.log(this.x,this.y)
            this.x += dx
            this.y += dy
            console.log(this.x,this.y)
            if(this.x >= theCanvas.width ||
                 this.x < 0 || 
                 this.y >= theCanvas.height || 
                 this.y < 0 ||
                 this.pieces.indexOf([this.x,this.y]) != -1){
                context.fillText(`Game Over`, theCanvas.width / 2,  theCanvas.height / 2);
                crashSound.play()
                return
            }
            if(this.x == a.x && this.y == a.y){
                a.x = Apple.getRandomSpot("x") 
                a.y = Apple.getRandomSpot("y") 
                this.score++
                this.pieces.push([this.x,this.y])
                crunchSound.play()
            }
            context.clearRect(0,0,theCanvas.width,theCanvas.height)

    
            context.fillText(`Score: ${this.score}`, theCanvas.width - 200, 50);
            context.strokeRect(0, 0, theCanvas.width, theCanvas.height);
            context.drawImage(apple, a.x, a.y);
            this.draw()
            
        },200)
    }

    draw(){
        context.drawImage(snake, this.x, this.y);
        this.pieces.forEach(piece => {
            context.fillRect(piece[0],piece[1],GRID_SIZE,GRID_SIZE);
            context.fillStyle = "green"
        })
        this.move()
    }
    eat(){

    }

}

class Apple{
    constructor(){
        this.x = Apple.getRandomSpot("x") 
        this.y = Apple.getRandomSpot("y") 
    }

    static getRandomSpot(dir){
        if(dir == "x")
            return Math.floor(((theCanvas.width/64))* Math.random() )* 64
        return Math.floor(((theCanvas.height/64))* Math.random()) *64
    }
}


let s = new Snake()
s.move()
let a = new Apple()

