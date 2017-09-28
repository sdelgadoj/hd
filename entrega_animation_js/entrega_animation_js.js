// variables del ejercicio y una para experimentar con el fondo
var x, y;
var fondo;

function setup() {
  createCanvas(400, 300);
  
  // experimento con la posición del objeto
  x = width/4;
  y = height/4;
  fondo = 20;
}

//experimento con el fondo
function draw() {
  background(fondo, 110, 50);
  fondo=fondo+2;
  
  // experimento con rectángulo y borde (en este caso no hay borde)
  noStroke();
  fill(fondo*2, 200, fondo/2);
  rect(x/2, y, 55,40,25);
  
  // experimento con velocidad en eje x
  x = x + 10;
  // velocidad en eje y como lo indica el ejemplo
  y = y - random(8,-3);
  
  // aquí decidí hacer una variación pequeña respecto al ejemplo
  if (y < 30) {
    y = height/2;
    }
  
  //experimento con condicional
  if (fondo < 20); {
    fondo = y++;
    }
  
  //experimento para tratar de que el objeto se devuelva en ciertos límites
  if(rect > 300){
    y=300;
  }else{
    x=400;
  }
}