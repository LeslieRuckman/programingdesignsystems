//var Rune = require('rune.js');
//var Noise = require('rune.noise.js');

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var grid = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  rows: 24,
  columns: 15
});

// draw background
r.rect(0, 0, r.width, r.height).fill(255).stroke(false);




//var color = new Rune.Color(Rune.random(255),Rune.random(255),Rune.random(255));
//var color = new Rune.Color(0);
var color = false;
var color1 = new Rune.Color(Rune.random(255));
var color2 = new Rune.Color(Rune.random(255));
var color3 = new Rune.Color(Rune.random(255));
var color4 = new Rune.Color(Rune.random(255));
var color5 = new Rune.Color(Rune.random(255));
var color6 = new Rune.Color(Rune.random(255));
var color7 = new Rune.Color(Rune.random(255));
var color8 = new Rune.Color(Rune.random(255));
var color9 = new Rune.Color(Rune.random(255));
var color10 = new Rune.Color(Rune.random(255));
var color11 = new Rune.Color(Rune.random(255));
var color12 = new Rune.Color(Rune.random(255));
var color13 = new Rune.Color(Rune.random(255));
var color14 = new Rune.Color(Rune.random(255));
var color15 = new Rune.Color(Rune.random(255));
var color16 = new Rune.Color(Rune.random(255));
var color17 = new Rune.Color(Rune.random(255));
var color18 = new Rune.Color(Rune.random(255));
var color19 = new Rune.Color(Rune.random(255));
var color20 = new Rune.Color(Rune.random(255));
var color21 = new Rune.Color(Rune.random(255));
var color22 = new Rune.Color(Rune.random(255));
var size = 250;

//r.ellipse(r.width/2, r.height/2,size,size).fill(255).stroke(false);


var ring = 0.75;

//22
var noise = new Rune.Noise().noiseDetail(0.3);
var numPoints = 60;
var pointDegree = 360 / numPoints;
var radius = 105;
var noiseStep = 0;

var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke(color22)
  .fill(color)
  .strokeWidth(ring);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 10) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.3;
}


// //21
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 100;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color21)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.5;
// }

// //20
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 95;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color20)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

// //19
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 90;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color19)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

//18
var noise = new Rune.Noise().noiseDetail(0.3);
var numPoints = 60;
var pointDegree = 360 / numPoints;
var radius = 85;
var noiseStep = 0;

var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke(color18)
  .fill(color)
  .strokeWidth(ring);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 10) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.3;
}

// //17
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 80;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color17)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

// //16
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 75;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color16)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

// //15
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 70;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color15)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

//14
var noise = new Rune.Noise().noiseDetail(0.3);
var numPoints = 60;
var pointDegree = 360 / numPoints;
var radius = 65;
var noiseStep = 0;

var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke(color14)
  .fill(color)
  .strokeWidth(ring);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 10) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.3;
}

// //13
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 60;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color13)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

// //12
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 55;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color12)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

// //11
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 50;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color11)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

//10
var noise = new Rune.Noise().noiseDetail(0.3);
var numPoints = 60;
var pointDegree = 360 / numPoints;
var radius = 45;
var noiseStep = 0;

var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke(color10)
  .fill(color)
  .strokeWidth(ring);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 10) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.3;
}

// //9
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 40;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color9)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

// //8
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 35;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color8)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

// //7
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 30;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color7)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

//6
var noise = new Rune.Noise().noiseDetail(0.3);
var numPoints = 60;
var pointDegree = 360 / numPoints;
var radius = 25;
var noiseStep = 0;

var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke(color6)
  .fill(color)
  .strokeWidth(ring);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 10) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.3;
}

// //5
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 20;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color5)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

// 4
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 15;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color4)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }
// //3
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 10;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color3)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }

//2
var noise = new Rune.Noise().noiseDetail(0.3);
var numPoints = 60;
var pointDegree = 360 / numPoints;
var radius = 6;
var noiseStep = 0;

var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke(color2)
  .fill(color)
  .strokeWidth(ring);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 10) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.3;
}

// //1
// var noise = new Rune.Noise().noiseDetail(0.3);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = 3;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(color1)
//   .fill(color)
//   .strokeWidth(ring);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 10) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }




// for (var i = 1; i< noiseCircle.vars.vectors.length; i++) {

//   var thisVector = noiseCircle.vars.vectors[i];
//   var prevVector = noiseCircle.vars.vectors[i-1];
//   var direction = thisVector.sub(prevVector);

// //for (var j = 0; j < 10; j ++) {

// var newDirNoiseCircle = direction.multiply(Rune.random(1));

//   var nX = prevVector.x + newDirNoiseCircle + noiseCircle.vars.vectors.x;
//   var nY = prevVector.y + newDirNoiseCircle + noiseCircle.vars.vectors.y;;

//    // r.line(nX,nY,nX -10, nY -10)
//    // .stroke(Rune.random(255),Rune.random(255),Rune.random(255))
//    // .fill(false)
//    // .strokeWidth(ring + 10);

//   console.log(nX);
// //  }
//}


r.draw();