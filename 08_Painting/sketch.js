//var Rune = require('rune.js');
//var Noise = require('rune.noise.js');
// Based on Yayoi Kusama's painting "Down the Rabbit Hole" Alice's Advendtures
// In Wonderland

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 950,
  debug: true
});

var colorB = new Rune.Color(6,80,212);
var colorR = new Rune.Color(255,79,38, 0.25);
var colorO1 = new Rune.Color(255,138,60, 0.25);
var colorO2 = new Rune.Color(255,152,83, 0.25);
var colorY1 = new Rune.Color(255,232,118,0.25);
var colorY2 = new Rune.Color(246,235,161, 0.25);
var colorY3 = new Rune.Color(235,240,206, 0.25);


// draw background
r.rect(0, 0, r.width, r.height).fill(255).stroke(false)
.fill(colorY3);


// start the shape loop
for(var j = 50; j > 0; j--) {

  var noise = new Rune.Noise();
  noise.noiseDetail(1,0.2);
  noise.noiseSeed(10);
  var noiseStep = 0;

  var numPoints = 25;  
  var pointDegree = 360 / numPoints;
  var radius = 10 + (j * 15);

  var shapeGradient = r.polygon(0,0);

// make shapes
  for(var i = 0; i < numPoints; i++) {
    var n1 = Rune.random(1,1.2);
    var n2 = 1.3;
    var degree = pointDegree * i;
    var noiseRadius = (noise.get(noiseStep) * 10) + radius;
    var x = (n1*Math.cos(Rune.radians(degree))) * noiseRadius;
    var y = (n2*Math.sin(Rune.radians(degree))) * noiseRadius;


    x += r.width/2;
    y += r.height/2;

    if (j < 10) {
      var colorChoice = colorR;
    } else if (j < 15) {
      var colorChoice = colorO1;
    } else if (j < 18) {
      var colorChoice = colorO2;
    } else if (j < 23) {
      var colorChoice = colorY1;
    } else if (j < 30) {
      var colorChoice = colorY2;
    } else if (j < 40) {
      var colorChoice = colorY2;
    } else {
      var colorChoice = colorY3;
    }

    shapeGradient.lineTo(x,y)
    .fill(colorChoice)
    .stroke(false);


    // noiseCircle.lineTo(x, y);
  if (i > numPoints/2){
      noiseStep -= 0.02;
    } else {
    noiseStep += 0.02;
    }
  }
 }



 // make circles separately 

 for(var k = 0; k < 50; k++) {

  var noise = new Rune.Noise();
  noise.noiseDetail(4,0.75);
  noise.noiseSeed(10);
  var noiseStep = 0;

  var numPoints = 10 + k*6;  
  var pointDegree = 360 / numPoints;
  var radius = 10 + (k * 15);

  var noiseCircle = r.polygon(0,0);

// make shapes
  for(var i = 0; i < numPoints; i++) {
   // Math.seedrandom('hello.');
   //  console.log(Math.random());
    // var n1 = Math.seedrandom('hello');;
    // var n2 = Math.seedrandom('hello');;

    // var n1 = Rune.random(1,1.03);
    // var n2 = Rune.random(1.3,1.33);

    var degree = pointDegree * i;
    var noiseRadius = (noise.get(degree/40) * (radius/3)) + radius;
    var x = Math.cos(Rune.radians(degree)) * noiseRadius;
    var y = Math.sin(Rune.radians(degree)) * (noiseRadius * 1.3);


    x += r.width/2;
    y += r.height/2;

    if (k < 10) {
      var size = Rune.random(3,7);
    } else if (k < 15) {
      var size = Rune.random(3,8);
    } else if (k < 23) {
      var size = Rune.random(2,9);
    } else if (k < 27) {
      var size = Rune.random(2,11);
    } else {
      var size = Rune.random(2,7);
    } 

    // else {
    //   var size = Rune.random(3,15);
    // }
    

   // noiseCircle.lineTo(x, y)
   //  .fill(false)
   //  .stroke(colorB)
   //  .strokeWidth(0.5);

  r.circle(x,y,size)
  .fill(colorB)
  .stroke(false);
  
  if (i > numPoints/2){
      noiseStep -= 0.02;
    } else {
    noiseStep += 0.02;
    }
  }
 }

r.draw();