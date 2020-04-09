var stroke1,stroke2,stroke3,stroke4;
var pointer;
var drawing = [];
var currentPath = [];
function setup(){
    canvas = createCanvas(900,600);
    canvas.mousePressed(startPath);
    database = firebase.database();
}

function startPath() {
  currentPath = [];
  drawing.push(currentPath);
}

function draw(){
  background(0);
  
  if (mouseIsPressed) {
    var point = {
      x: mouseX,
      y: mouseY,
   }
    currentPath.push(point);
  }
  stroke(255);
  
  noFill();

  strokeWeight(5)
  //console.log("drawing.length"+drawing.length);

  for (var i = 0; i < drawing.length; i++) {
    var path = drawing[i];
   // console.log("path.length"+path.length);

    beginShape();
    for (var j = 0; j < path.length; j++) {
      vertex(path[j].x,path[j].y) ;   
    }
    endShape(); 
  }
  drawSprites();
}

