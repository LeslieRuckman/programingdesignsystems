var r = new Rune({
  container: "#canvas",
  width: 1600,
  height: 1600
});

//var background = r.rect(0,0,1600,1600).fill(254,147,131);
var background = r.rect(0,0,1600,1600).fill(0);


// Create a polygon of your letter. This will be closing, but don't
// worry about that.
var n = r.polygon(300, 950)
  .lineTo(0, 0)
  .lineTo(0, -300)
  .lineTo(225, 0)
  .lineTo(225, -300);

var e = r.polygon(600, 950)
  .lineTo(180, 0)
  .lineTo(0, 0)
  .lineTo(0, -300)
  .lineTo(180, -300);

var et = r.polygon(600, 950)
  .lineTo(10, -150)
  .lineTo(150, -150);

var s = r.polygon(825, 950)
  .lineTo(0, -94)
  .lineTo(9, -53)
  .lineTo(30, -24)
  .lineTo(64, -6)
  .lineTo(105, 0)
  .lineTo(154, -8)
  .lineTo(182, -23)
  .lineTo(203, -50)
  .lineTo(210, -85)
  .lineTo(203, -119)
  .lineTo(184, -141)
  .lineTo(158, -155)
  .lineTo(127, -164)
  .lineTo(96, -171)
  .lineTo(72, -180)
  .lineTo(51, -190)
  .lineTo(37, -207)
  .lineTo(31, -234)
  .lineTo(36, -261)
  .lineTo(53, -280)
  .lineTo(75, -294)
  .lineTo(113, -300)
  .lineTo(145, -294)
  .lineTo(166, -281)
  .lineTo(192, -245)
  ;

var t = r.polygon(1050, 950)
  .lineTo(112.5, 0)
  .lineTo(112.5, -300);

var tt = r.polygon(1050, 950)
  .lineTo(0, -300)
  .lineTo(225, -300);

// Loop through each of the vectors in the polygon. This is basically
// the x,y positions where the lines end
for(var i = 1; i < n.vars.vectors.length; i++) {

  // to get the actual change between this and the last point,
  // subtract the last point from the current point.
  var thisNVector = n.vars.vectors[i];
  var prevNVector = n.vars.vectors[i-1];
  var directionN = thisNVector.sub(prevNVector);

  // loop 40 times
  for(var j = 0; j < 320; j++) {

    // find a random position on this vector
    var newDirN = directionN.multiply(Rune.random(1));

    // add this random position back to the original x
    var nX = prevNVector.x + newDirN.x + n.vars.x;
    var nY = prevNVector.y + newDirN.y + n.vars.y;

    // draw something on that x,y
    r.line(nX, nY, nX + Rune.random(-10, 10), nY + Rune.random(-10, 10))
    .strokeWidth(0.25)
 //   .stroke(255,201,193);
     .stroke(255);


  }

    for(var k = 0; k < 150; k++) {

    // find a random position on this vector
    var newDirN = directionN.multiply(Rune.random(1));

    // add this random position back to the original x
    var nX = prevNVector.x + newDirN.x + n.vars.x;
    var nY = prevNVector.y + newDirN.y + n.vars.y;

    // draw something on that x,y
    r.line(nX, nY, nX + Rune.random(-25, 25), nY + Rune.random(-25, 25))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
       .stroke(255);

  }

      for(var l = 0; l < 50; l++) {

    // find a random position on this vector
    var newDirN = directionN.multiply(Rune.random(1));

    // add this random position back to the original x
    var nX = prevNVector.x + newDirN.x + n.vars.x;
    var nY = prevNVector.y + newDirN.y + n.vars.y;

    // draw something on that x,y
    r.line(nX, nY, nX + Rune.random(-50, 50), nY + Rune.random(-50, 50))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

  for(var m = 0; m < 20; m++) {

    // find a random position on this vector
    var newDirN = directionN.multiply(Rune.random(1));

    // add this random position back to the original x
    var nX = prevNVector.x + newDirN.x + n.vars.x;
    var nY = prevNVector.y + newDirN.y + n.vars.y;

    // draw something on that x,y
    r.line(nX, nY, nX + Rune.random(-150, 150), nY + Rune.random(-150, 150))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
      .stroke(255);
  
  }

}

n.removeParent();

// START E
for(var i = 1; i < e.vars.vectors.length; i++) {

  var thisEVector = e.vars.vectors[i];
  var prevEVector = e.vars.vectors[i-1];
  var directionE = thisEVector.sub(prevEVector);

  for(var j = 0; j < 320; j++) {

    var newDirE = directionE.multiply(Rune.random(1));

    var eX = prevEVector.x + newDirE.x + e.vars.x;
    var eY = prevEVector.y + newDirE.y + e.vars.y;

    r.line(eX, eY, eX + Rune.random(-10, 10), eY + Rune.random(-10, 10))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

    for(var k = 0; k < 80; k++) {

    var newDirE = directionE.multiply(Rune.random(1));

    var eX = prevEVector.x + newDirE.x + e.vars.x;
    var eY = prevEVector.y + newDirE.y + e.vars.y;

    r.line(eX, eY, eX + Rune.random(-25, 25), eY + Rune.random(-25, 25))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

    for(var l = 0; l < 30; l++) {

    var newDirE = directionE.multiply(Rune.random(1));

    var eX = prevEVector.x + newDirE.x + e.vars.x;
    var eY = prevEVector.y + newDirE.y + e.vars.y;

    r.line(eX, eY, eX + Rune.random(-50, 50), eY + Rune.random(-50, 50))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }
  for(var m = 0; m < 15; m++) {

    var newDirE = directionE.multiply(Rune.random(1));

    var eX = prevEVector.x + newDirE.x + e.vars.x;
    var eY = prevEVector.y + newDirE.y + e.vars.y;

    r.line(eX, eY, eX + Rune.random(-150, 150), eY + Rune.random(-150, 150))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }
}

e.removeParent();

// MIDDLE BAR OF THE E

for(var i = 1; i < et.vars.vectors.length; i++) {

  var thisEtVector = et.vars.vectors[i];
  var prevEtVector = et.vars.vectors[i-1];
  var directionEt = thisEtVector.sub(prevEtVector);

  for(var j = 0; j < 180; j++) {

    var newDirEt= directionEt.multiply(Rune.random(1));

    var etX = prevEtVector.x + newDirEt.x + et.vars.x;
    var etY = prevEtVector.y + newDirEt.y + et.vars.y;

    r.line(etX, etY, etX + Rune.random(-10, 10), etY + Rune.random(-10, 10))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }
    for(var k = 0; k < 40; k++) {

    var newDirEt= directionEt.multiply(Rune.random(1));

    var etX = prevEtVector.x + newDirEt.x + et.vars.x;
    var etY = prevEtVector.y + newDirEt.y + et.vars.y;

    r.line(etX, etY, etX + Rune.random(-25, 25), etY + Rune.random(-25, 25))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }
    for(var l = 0; l < 20; l++) {

    var newDirEt= directionEt.multiply(Rune.random(1));

    var etX = prevEtVector.x + newDirEt.x + et.vars.x;
    var etY = prevEtVector.y + newDirEt.y + et.vars.y;

    r.line(etX, etY, etX + Rune.random(-50, 50), etY + Rune.random(-50, 50))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

  for(var m = 0; m < 5; m++) {

    var newDirEt= directionEt.multiply(Rune.random(1));

    var etX = prevEtVector.x + newDirEt.x + et.vars.x;
    var etY = prevEtVector.y + newDirEt.y + et.vars.y;

    r.line(etX, etY, etX + Rune.random(-150, 10), etY + Rune.random(-150, 150))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }
}

et.removeParent();

// START OF S

for(var i = 1; i < s.vars.vectors.length; i++) {

  var thisSVector = s.vars.vectors[i];
  var prevSVector = s.vars.vectors[i-1];
  var directionS = thisSVector.sub(prevSVector);

  for(var j = 0; j < 30; j++) {

    var newDirS = directionS.multiply(Rune.random(1));

    var sX = prevSVector.x + newDirS.x + s.vars.x;
    var sY = prevSVector.y + newDirS.y + s.vars.y;

    r.line(sX, sY, sX + Rune.random(-10, 10), sY + Rune.random(-10, 10))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

    for(var k = 0; k < 15; k++) {

    var newDirS = directionS.multiply(Rune.random(1));

    var sX = prevSVector.x + newDirS.x + s.vars.x;
    var sY = prevSVector.y + newDirS.y + s.vars.y;

    r.line(sX, sY, sX + Rune.random(-25, 25), sY + Rune.random(-25, 25))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

    for(var l = 0; l < 5; l++) {

    var newDirS = directionS.multiply(Rune.random(1));

    var sX = prevSVector.x + newDirS.x + s.vars.x;
    var sY = prevSVector.y + newDirS.y + s.vars.y;

    r.line(sX, sY, sX + Rune.random(-50, 50), sY + Rune.random(-50, 50))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

  for(var m = 0; m < 5; m++) {

    var newDirS = directionS.multiply(Rune.random(1));

    var sX = prevSVector.x + newDirS.x + s.vars.x;
    var sY = prevSVector.y + newDirS.y + s.vars.y;

    r.line(sX, sY, sX + Rune.random(-150, 150), sY + Rune.random(-150, 150))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }
}

s.removeParent();

// START OF T


for(var i = 1; i < t.vars.vectors.length; i++) {

  var thisTVector = t.vars.vectors[i];
  var prevTVector = t.vars.vectors[i-1];
  var directionT = thisTVector.sub(prevTVector);


  for(var j = 0; j < 320; j++) {

    var newDirT = directionT.multiply(Rune.random(1));


    var tX = prevTVector.x + newDirT.x + t.vars.x;
    var tY = prevTVector.y + newDirT.y + t.vars.y;

    r.line(tX, tY, tX + Rune.random(-10, 10), tY + Rune.random(-10, 10))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

    for(var k = 0; k < 100; k++) {

    var newDirT = directionT.multiply(Rune.random(1));


    var tX = prevTVector.x + newDirT.x + t.vars.x;
    var tY = prevTVector.y + newDirT.y + t.vars.y;

    r.line(tX, tY, tX + Rune.random(-25, 25), tY + Rune.random(-25, 25))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

    for(var l = 0; l < 50; l++) {

    var newDirT = directionT.multiply(Rune.random(1));


    var tX = prevTVector.x + newDirT.x + t.vars.x;
    var tY = prevTVector.y + newDirT.y + t.vars.y;

    r.line(tX, tY, tX + Rune.random(-50, 50), tY + Rune.random(-50, 50))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

   for(var m = 0; m < 20; m++) {

    var newDirT = directionT.multiply(Rune.random(1));


    var tX = prevTVector.x + newDirT.x + t.vars.x;
    var tY = prevTVector.y + newDirT.y + t.vars.y;

    r.line(tX, tY, tX + Rune.random(-150, 150), tY + Rune.random(-150, 150))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }
}

t.removeParent();

//TOP OF T

for(var i = 1; i < tt.vars.vectors.length; i++) {


  var thisTtVector = tt.vars.vectors[i];
  var prevTtVector = tt.vars.vectors[i-1];
  var directionTt = thisTtVector.sub(prevTtVector);


  for(var j = 0; j < 200; j++) {


    var newDirTt = directionTt.multiply(Rune.random(1));


    var ttX = prevTtVector.x + newDirTt.x + tt.vars.x;
    var ttY = prevTtVector.y + newDirTt.y + tt.vars.y;


    r.line(ttX, ttY, ttX + Rune.random(-10, 10), ttY + Rune.random(-10, 10))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }
    for(var k = 0; k < 85; k++) {


    var newDirTt = directionTt.multiply(Rune.random(1));


    var ttX = prevTtVector.x + newDirTt.x + tt.vars.x;
    var ttY = prevTtVector.y + newDirTt.y + tt.vars.y;


    r.line(ttX, ttY, ttX + Rune.random(-25, 25), ttY + Rune.random(-25, 25))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }
    for(var l = 0; l < 20; l++) {


    var newDirTt = directionTt.multiply(Rune.random(1));


    var ttX = prevTtVector.x + newDirTt.x + tt.vars.x;
    var ttY = prevTtVector.y + newDirTt.y + tt.vars.y;


    r.line(ttX, ttY, ttX + Rune.random(-50, 50), ttY + Rune.random(-50, 50))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }

  for(var m = 0; m < 10; m++) {


    var newDirTt = directionTt.multiply(Rune.random(1));


    var ttX = prevTtVector.x + newDirTt.x + tt.vars.x;
    var ttY = prevTtVector.y + newDirTt.y + tt.vars.y;


    r.line(ttX, ttY, ttX + Rune.random(-150, 150), ttY + Rune.random(-150, 150))
    .strokeWidth(0.25)
//    .stroke(255,201,193);
     .stroke(255);

  }
}

tt.removeParent();

// for(i = 0; i <5; i++){
//     r.line((100 + Rune.random(-5, 5)), (400 + Rune.random(-25, 5)), (100 +Rune.random(-5, 5)), (100 +Rune.random(-25, 5)))
//     .strokeWidth(0.05);}

r.draw();
