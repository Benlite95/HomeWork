(function(){
    'use strict'

const theCanvas = document.querySelector('#theCanvas');
const context = theCanvas.getContext('2d');

function resizeCanvas() {
    theCanvas.width = window.innerWidth;
    theCanvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let numberOfAnts = 0
class Ant{
    constructor(number,color="black"){
        this.number = number
        this.width  = 1
        this.height = 3
        this.x = Ant.getRandomNumber(1, window.innerWidth)
        this.y = Ant.getRandomNumber(1, window.innerHeight)
        this.color = color;
        this.times = 0
        this.dx = 0
        this.dy = 0
        numberOfAnts++
    }
    draw(){
        context.fillRect(this.x,this.y,this.width,this.height)
        context.fillStyle = this.color;
        this.fight()
    }
    move(dx,dy){
        if (this.x < this.width ) {
            this.x ++;
        }
        else if( this.x > window.innerWidth - this.width){
            this.x--
        }
        else if (this.y < this.height  ) {
            this.y++
        }   
        else if (this.y > window.innerHeight - this.height){
            this.y--
         } 
         else{
            this.x += dx
            this.y += dy
         }
        this.times --;
        this.draw()
    };
     erase(){
        const index = ants.indexOf(this);
        ants.splice(index,1)
     }     
          
     collision(ant) {
        return (
          this.x + this.width >= ant.x && 
          ant.x + ant.width >= this.x && 
          this.y + this.height >= ant.y && 
          ant.y + ant.height >= this.y 
        )
      }
         
     fight(){
        ants.forEach(a=>{
            if( this.collision(a)  && this.color != a.color ){
                if(this.width > a.width ){
                    this.width+=a.width
                    this.height+=a.height
                    a.erase()
                }
                else{
                    a.width+= this.width
                    a.height+= this.height
                    this.erase()
                }
                return
            }
        })
     }
    static getRandomNumber(min,max){
        return Math.floor(( (max+1) - min) * Math.random() + min)
    }
}
const ants = []
const colorInput = document.querySelector('#color');
const amountInput = document.querySelector('#amount');
document.querySelector('#addantsForm').addEventListener('submit', e => {
  e.preventDefault();
  for(let i = 1;i < +amountInput.value + 1;i++){
    ants.push(new Ant(i+numberOfAnts,colorInput.value))
  }
});

setInterval(()=>{
    context.clearRect(0,0,theCanvas.width,theCanvas.height)
    ants.forEach(a => {
        if(a.times == 0){
        a.dx =  Ant.getRandomNumber(-1,1)
        a.dy = Ant.getRandomNumber(-1,1)
        a.times = Ant.getRandomNumber(1,30)
        }
        a.move(a.dx,a.dy)
    })},100
)


}())








