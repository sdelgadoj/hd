//ya que el ejemplo no tenía stroke, aquí le agrego
function setup() {
  createCanvas(720, 400);
  background(255);
  stroke(0);
  strokeWeight(3);
}

function draw() {
  background(255);
  //poniendo otros valores de color según lerpColor
  from = color(180, 0, 250, 0.2 * 179);
  to = color(0, 225, 0, 0.2 * 255);
  color1 = lerpColor(from, to, .3);
  color2 = lerpColor(from, to, 1);
  color3 = lerpColor(from, to, 0);
  for (var i = 0; i < 4; i++) {
    
    //figura 1 magenta
    fill(from);
    ellipse(random(100, 120), random(100,-220),
         random(100, 160), random(40, -200),
         random(140, 150), random(50, 255),
        random(150, 220), random(300,120));
    
    //figura 2 morado
    fill(color1);
    ellipse(random(40, 380), random(height),
         random(140, 380), random(height),
         random(140, 380), random(height), 
         random(140, 380), random(height));
    
    //figura 3 magenta claro
    fill(color3);
    ellipse(random(120, 580), random(width), 
         random(320, 580), random(height),
         random(320, 580), random(width+2), 
         random(320, 580), random(height));
    
    //figura 4 color verde
    fill(color2);
    ellipse(random(540, 160), random(height+2), 
         random(100, 280), random(height+2),
         random(100, 160), random(height/2), 
         random(100, 160), random(height+2));
  }
  //velocidad
  frameRate(9);
}