var plinko1
var array = 1;
var Dummy;


function setup() {
  createCanvas(800,400);
 var color = tint(20,color);
}

function draw() {
  background(255,255,255); 
if(generate()) {
  array = array + 1;
}

  drawSprites();
}

function generate() {
  dummy = new Dummi(plinko[array].position.x,plinko[array].position.y,plinko[array].width,plinko.height[array]);
  plinko[array] = new MovingBalls(10,randomNumber(100,400),404,04);
  if(generate()) {
    plinko[array] = assign var dummy;
    plinko[array];
    if(plinko.x = 20) {
      plinko.destroyEach([array]);
      var color.assign = Each-array;
    }
  }



}