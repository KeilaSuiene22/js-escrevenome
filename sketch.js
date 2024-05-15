function setup() {
  createCanvas(400, 400);
  background("rgb(102,248,20)")
}

function draw() {
  stroke("blue");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}