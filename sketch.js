function setup() {
    createCanvas(400, 600);
  }
  
  function draw() {
    background(220);
  }
  function setup() {
    createCanvas(600, 600);
    background("black")
  }
  
  function draw() {
    stroke("rgb(56,56,56)");
    fill("#2F00FF");
  
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }  