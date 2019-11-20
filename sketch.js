var value = 0;

function preload() {
  ball = loadImage('images/ball.png')
  hand = loadImage('images/hand.png')
  blur = loadImage('images/blur.png')
  play = loadImage('images/play.png')

}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // button = createButton('start')
  // button.style('background-color', 'white')
  // button.style('border', '0px')
  // button.style('border-radius', '20px')
  // button.style('font-size', '20px')
  // button.style('font-family', 'Anton')
  // button.style('padding', '10px 20px 10px 20px')
  // button.position(windowWidth/2-35, windowHeight/6*5)
  // button.touchStarted(game)

}

function draw() {
    background(blur);
  //   textAlign(CENTER);
  //   textFont('Anton')
  //   fill('white')
  //   textSize(30);
  //   text('palleggia con il telefono, muovilo semplicemente su e giù',windowWidth / 8, windowHeight / 4, 300, 300)
  //
  // }
  //
  // function game() {

  textFont('Anton')
  if (rotationX >= -40 && rotationX <= 50) {

    // campo da basket
    background('#e68a00')
    ellipseMode(CENTER)
    noFill()
    strokeWeight(15)
    stroke('white')
    ellipse(windowWidth / 2, windowHeight + rotationX, 1000)
    ellipse(windowWidth / 2, windowHeight / 10 * 6 + rotationX, 400)
    rectMode(CENTER)
    fill('blue')
    stroke('white')
    rect(windowWidth / 2, windowHeight / 10 * 9 + rotationX, 400, 420)

    //

    if (accelerationY >= 0) {
      accelerationY = -accelerationY; // effetto rimbalzo e non permetto alla palla di ingrandirsi
    }

    // palla da basket
    imageMode(CENTER)
    image(ball, windowWidth / 2, windowHeight / 2 + rotationX, 500 + accelerationY * 50, 500 + accelerationY * 50)

    // mano
    imageMode(CORNER)
    image(hand, 0, windowHeight / 3 - 50 + rotationX, 450 + accelerationY * 10, (450 + accelerationY * 10) * 7.5)
  } else if (rotationX >= -40) {

    background(blur)
    fill('white')
    noStroke()
    textAlign(CENTER);
    textSize(20);
    text('ma palleggi come se battessi il cinque?', windowWidth / 2, windowHeight / 2, 200, 300)
    text("inclina 'sto telefono e schiaccia play", windowWidth / 2, windowHeight / 3 * 2, 200, 300)
    imageMode(CENTER)
    image(play, windowWidth / 2, windowHeight / 2 + 100, 100, 120)
    noLoop()

  } else if (rotationX <= 50) {
    fill('white')
    noStroke()
    textAlign(CENTER);
    textSize(20);
    text("guarda, ti giuro che hai l'attacco pulito", windowWidth / 2, windowHeight / 2, 200, 300)
    text("inclinalo verso l'alto e schiaccia play", windowWidth / 2, windowHeight / 3 * 2, 200, 300)
    imageMode(CENTER)
    image(play, windowWidth / 2, windowHeight / 2 + 100, 100, 120)
    noLoop()
  }

  if (frameCount <= 400) {
    fill('#e68a00')
    noStroke()
    rectMode(CORNER)
    rect(0,0,windowWidth,windowHeight)
    fill('white')
    textAlign(CENTER)
    textSize(36)
    text('THE BASKETBALL GAME',windowWidth / 11, 100, 320, 300)
    textSize(24)
    text('palleggia con il telefono: tienilo orizzontale e muovilo semplicemente su e giù, proprio come se avessi una palla sotto la mano',windowWidth / 11, 200, 320, 300)
  }

}


function touchStarted() {
  fill('white')
  noStroke()
  textAlign(CENTER);
  textSize(20);
  var diff = round(rotationX) - 50
  text('inclina ancora di ' + diff + '°', windowWidth / 2, windowHeight / 6 * 5, 200, 300)
  noLoop()
  if (rotationX <= 50 || rotationX >= -40) {
    loop()
  }
}



// function deviceShaken() {
//   value ++;
//   if (value > 400){
//     value = 400;
//   }
// }

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()

}

// prevent dragging the screen around
function touchMoved() {
  return false;
}
