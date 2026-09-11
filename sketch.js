let marioPixels = [
  [7, 7, 7, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7],
  [7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
  [7, 7, 1, 1, 1, 2, 2, 2, 8, 7, 7, 7, 7],
  [7, 1, 2, 1, 2, 2, 2, 2, 8, 2, 2, 2, 7],
  [7, 1, 2, 1, 1, 2, 2, 2, 2, 8, 2, 2, 2],
  [7, 1, 1, 2, 2, 2, 2, 2, 8, 8, 8, 8, 7],
  [7, 7, 7, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7],
  [7, 7, 0, 0, 5, 0, 0, 0, 0, 7, 7, 7, 7],
  [7, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 7, 7],
  [0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 7],
  [2, 2, 0, 5, 3, 5, 5, 3, 5, 0, 2, 2, 7],
  [2, 2, 2, 5, 5, 5, 5, 5, 5, 2, 2, 2, 7],
  [2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 7],
  [7, 7, 5, 5, 5, 7, 7, 5, 5, 5, 7, 7, 7],
  [7, 1, 1, 1, 7, 7, 7, 7, 1, 1, 1, 7, 7],
  [1, 1, 1, 1, 7, 7, 7, 7, 1, 1, 1, 1, 7],
];

let pacmanPixels = [
  [7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7],
  [7, 7, 7, 7, 7, 7, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7, 7, 7],
  [7, 7, 7, 7, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7],
  [7, 7, 7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 7, 7],
  [7, 7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 1, 1, 1, 1, 1, 0, 7],
  [7, 7, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 1, 1, 1, 1, 1, 0, 7],
  [7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 7],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7, 7, 7, 7, 0, 0, 0, 7],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7, 7, 7, 7, 7, 0, 2, 2, 2, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 2, 2, 2, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 2, 2, 2, 0],
  [7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 7],
  [7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7, 7],
  [7, 7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7],
  [7, 7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 7],
  [7, 7, 7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 7, 7],
  [7, 7, 7, 7, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7],
  [7, 7, 7, 7, 7, 7, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 7, 7, 7, 7, 7],
  [7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7],
];

function setup() {
  createCanvas(1500, 750);
}

function draw() {
  background(220);

  //getallen
  noStroke();
  textSize(16);
  fill('black');
  text('1.', 25, 50);

  text('2.', 25, 80);

  text('3.', 25, 180);
  
  text('4.', 25, 340);

  text('5.', 200, 50);

  text('6.', 200, 220);
  
  text('7.', 350, 50);

  text('8.', 710, 50);

  //1. naam
  fill('black');
  text('Dylan Duikersloot', 60, 50);
  //(text, x, y)

  //2. vlag
  fill('red');
  quad(70, 80, 160, 80, 160, 100, 70, 100);
  //(x1, y1, x2, y2, x3, y3, x4, y4), vanaf links boven met de klok mee
  fill('white');
  quad(70, 100, 160, 100, 160, 120, 70, 120);
  fill('blue');
  quad(70, 120, 160, 120, 160, 140, 70, 140);

  //3. 3x3 schaakbord
  stroke('black');
  strokeWeight(2);
  fill('black');
  rect(70, 180, 30);
  //(x, y, grootte)
  rect(130, 180, 30); 
  rect(100, 210, 30);
  rect(70, 240, 30);
  rect(130, 240, 30);
  
  fill('white');
  rect(100, 180, 30);
  rect(70, 210, 30);
  rect(130, 210, 30);
  rect(100, 240, 30);

  //4. doorzichtig huisje
  stroke('black');
  //kleur outline
  strokeWeight(3);
  //dikte outline
  noFill();
  //geen inhoud/kleur
  rect(70, 370, 70);
  triangle(70, 370, 105, 330, 140, 370);
  //(x1, y1, x2, y2, x3, y3)

  //5. stoplicht
  noStroke();
  fill('grey')
  quad(240, 50, 275, 50, 275, 150, 240, 150);
  quad(250, 150, 265, 150, 265, 190, 250, 190);
  fill('red');
  circle(257.5, 70, 25);
  //(x, y, diameter)
  fill('yellow');
  circle(257.5, 100, 25);
  fill('green');
  circle(257.5, 130, 25);

  //6. dobbelsteen
  fill('white');
  stroke('black');
  strokeWeight(5);
  square(240, 220, 80, 10);
  //(x, y, grootte, graden hoek)
  fill('black');
  circle(260, 240, 15);
  fill('black');
  circle(280, 260, 15);
  fill('black');
  circle(300, 280, 15);

  //7. pixel art mario
  noStroke();
  fill(0, 0, 0);
  text('Mario', 375, 50);
  
  drawmarioPixels();
  drawPacmanPixels();
}

function drawmarioPixels()
{

  noStroke();
  let offSetX = 430;
  let offSetY = 50;
  for (let y = 0; y < marioPixels.length; y++) {
   for(let x = 0; x < marioPixels[y].length; x++) {

     if (marioPixels[y][x] == 0) {
       fill(255, 1, 0);
     }

     //haarkleur(bruinig)
     if (marioPixels[y][x] == 1) {
       fill(152, 64, 57);
     }

     //huidskleur(blank geel)
     if (marioPixels[y][x] == 2) {
       fill(255, 200, 159);
     }

     //oogkleur(zwart)
     if (marioPixels[y][x] == 3) {
       fill(254, 255, 0);
     }

     //knoopjes(geel)
     if (marioPixels[y][x] == 4) {
       fill(254, 255, 0);
     }
     
     //tuinbroek (blauw)
     if (marioPixels[y][x] == 5) {
       fill(0, 0, 254);
     }
     
     //schoenen (bruin rood)
     if (marioPixels[y][x] == 6) {
       fill(152, 64, 57);
     } 

     //oogkleur (zwart)
     if (marioPixels[y][x] == 8) {
       fill(0, 0, 0);
     } 
     
     //schoenen (achtergrond kleur)
     if (marioPixels[y][x] == 7) {
       fill(220);
     } 

     square(offSetX + (x * 15), offSetY + (y * 15), 15);
  }
 }
}
function drawPacmanPixels()
{
  fill(0, 0, 0);
  text('Pac-Man', 735, 50);
  let offSetX = 750;
  let offSetY = 50;
  for (let y = 0; y < pacmanPixels.length; y++) {
   for(let x = 0; x < pacmanPixels[y].length; x++) {

     //outline kleur (zwart)
     if (pacmanPixels[y][x] == 0) {
       fill(0, 0, 0);
     }

     //huidskleur (geel)
     if (pacmanPixels[y][x] == 1) {
       fill(252, 201, 47);
     }

     //oogkleur (wit)
     if (pacmanPixels[y][x] == 2) {
       fill(256, 256, 256);
     }

     //mond kleur (zwart)
     if (pacmanPixels[y][x] == 3) {
       fill(254, 255, 0);
     }

     //
     if (pacmanPixels[y][x] == 4) {
       fill(254, 255, 0);
     }
     
     //
     if (pacmanPixels[y][x] == 5) {
       fill(0, 0, 254);
     }
     
     //
     if (pacmanPixels[y][x] == 6) {
       fill(152, 64, 57);
     } 

     //
     if (pacmanPixels[y][x] == 8) {
       fill(0, 0, 0);
     } 
     
     //schoenen (achtergrond kleur)
     if (pacmanPixels[y][x] == 7) {
       fill(220);
     } 

     square(offSetX + (x * 15), offSetY + (y * 15), 15);
   }
 }
}
