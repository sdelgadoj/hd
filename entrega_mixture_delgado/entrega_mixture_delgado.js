//variable de movimiento y eje Z
var exp;
var giro;

function setup() {
  createCanvas(710, 400, WEBGL);
  noStroke();
  exp=10;
  giro=30;
}

function draw() {
  background(0);
  exp+3;
  giro++;

  // Luz puntual rosada
  pointLight(255, 205, 251);
  
  // Luz direccional roja
  directionalLight(255, 0, 0);

  // Luz puntal azul magenta
  pointLight(230, 0, 255);
  
  //rotación de ejes automática, movimiento y objeto 3D
  rotateZ(giro/24+mouseX/100);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.02);
  box(120+exp);
}