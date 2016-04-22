var r = new Rune({
  container: "#canvas",
  width: 1530,
  height: 2430,
 // debug: true
});

var grid = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  rows: 24,
  columns: 15
});

var ModW = grid.vars.moduleWidth;
var ModH = grid.vars.moduleHeight;

// make the colors into an array so that the program can randomly choose.
// var desert1 = new Rune.Color(242,205,179);
// var desert2 = new Rune.Color(241,193,156);
// var desert3 = new Rune.Color(218,167,140);
// var desert4 = new Rune.Color(192,147,126);

var desert1 = new Rune.Color(237,232,221);
var desert2 = new Rune.Color(234,213,196);
var desert3 = new Rune.Color(220,188,164);
var desert4 = new Rune.Color(192,147,126);

var green1 = new Rune.Color(44,78,71);
var green2 = new Rune.Color(116,127,97); 
var green3 = new Rune.Color(97,118,99); 
var green4 = new Rune.Color(174,178,113); 
var green5 = new Rune.Color(72,93,66); 
var green6 = new Rune.Color(65,102,57); 
var green7 = new Rune.Color(59,76,58); 
var green8 = new Rune.Color(98,122,82); 
var green9 = new Rune.Color(216,219,160); 


//make many many shapes that are randomly selecting a variety of green.
// start refreshing ASAP make sure it's coming together.
// maybe have a rotated grid of shapes on top of the final if appropriate.
// play with the typography on the grid- generative title as well?


// background of the grid.
for(var i = 0; i < grid.modules.length; i++) {
  r.rect(0, 0, ModW, ModH, grid.modules[i])
  .stroke(desert1)
  .strokeWidth(2)
  .fill(desert1);
}

// attempting to overlay roads on the original grid
for(var row = 2; row < 15; row++) {
  for(var col = 2; col < 15; col++) {

  var ran = Rune.random(1);
  if (ran < 0.1) {
    var ranGridColor = r.rect(0, 0, ModW, ModH)
    .stroke(false)
    .fill(green9)
    grid.add(ranGridColor, row, col);
  }
}
}

for(var row = 0; row < 15; row++) {
  for(var col = 0; col < 24; col++) {

  var ran = Rune.random(1);

  if (ran < 0.05) {
    var ranGridColor = r.triangle(0, 0, 0, ModH, ModW, ModH)
    .stroke(desert3)
    .fill(desert3)
    grid.add(ranGridColor, row, col);
  }

  if (ran < 0.1) {
    var ranGridColor = r.triangle(0, 0, ModW, 0, ModW, ModH)
    .stroke(desert2)
    .fill(desert2)
    grid.add(ranGridColor, row, col);
  }


  }
}


// draw life in the universe
//Might need to have multiple of these functions calling out life on multiple grids.
for(var row = 3; row < 14; row++) {
  for(var col = 3; col < 14; col++) {

    var ran = Rune.random(1);

    // 20 % is nothing
    //tiny corner circles
    if(ran < 0.2) {
      var circleSmall = r.circle(0, 0, 10)
      .stroke(false)
      .fill(green1)
      grid.add(circleSmall, row, col);

    // 20% is circles in grid
    // 4 large circles
    } else if(ran < 0.3) {
      var c1 = r.ellipse(ModW/4, ModH/4, ModW/2.3, ModH/2.3)
      .stroke(false)
      .fill(green3)
      grid.add(c1, row, col);
      var c2 = r.ellipse(ModW/4, ModH/4 * 3, ModW/2.3, ModH/2.3)
      .stroke(false)
      .fill(green8)
      grid.add(c2, row, col);
      var c3 = r.ellipse(ModW/1.33, ModH/4, ModW/2.3, ModH/2.3)
      .stroke(false)
      .fill(green3)
      grid.add(c3, row, col);
      var c4 = r.ellipse(ModW/1.33, ModH/4 * 3, ModW/2.3, ModH/2.3)
      .stroke(false)
      .fill(green3)
      grid.add(c4, row, col);
    }
    //2 half circles on the y-axis
      else if(ran < 0.4) {
      var c3 = r.ellipse(ModW, ModH/4, ModW/2, ModH/2)
      .stroke(false)
      .fill(green7)
      grid.add(c3, row, col);
      var c4 = r.ellipse(ModW, ModH/4 * 3, ModW/2, ModH/2)
      .stroke(false)
      .fill(green8)
      grid.add(c4, row, col);

      //Grid of small circles on the right
      for(i = 0; i < ModW/2; i += (ModW/8)){
        for(j = 0; j< ModH; j+= (ModH/8)){
      var c4 = r.ellipse(i, j, ModW/10, ModH/10)
      .stroke(false)
      .fill(green6)
      grid.add(c4, row, col);
        }
      }


    }
    //2 half circles on the x-axis
      else if(ran < 0.5) {
      var c5 = r.ellipse(ModW/4, ModH, ModW/2, ModH/2)
      .stroke(false)
      .fill(green8)
      grid.add(c5, row, col);
      var c6 = r.ellipse(ModW/4*3, ModH, ModW/2, ModH/2)
      .stroke(false)
      .fill(green7)
      grid.add(c6, row, col);
    }
    //1 square in the middle of the module
    else if(ran < 0.6) {
      // var b1 = r.rect(0,0,ModW,ModH)
      // .stroke(false)
      // .fill(green4)
      // grid.add(b1, row, col);
      var s1 = r.rect(ModW/4, ModH/4, ModW/2, ModH/2)
      .stroke(false)
      .fill(green1)
      grid.add(s1, row, col);
    }
    
    //4 horizontal stripes
    else if(ran < 0.7) {
      var s2 = r.rect(0, 0, ModW, ModH/8)
      .stroke(false)
      .fill(green2)
      grid.add(s2, row, col)
      var s3 = r.rect(0, ModH/4, ModW, ModH/8)
      .stroke(false)
      .fill(green7)
      grid.add(s3, row, col)
      var s4 = r.rect(0, ModH/4*3, ModW, ModH/8)
      .stroke(false)
      .fill(green8)
      grid.add(s4, row, col);
      var s5 = r.rect(0, ModH/4*2, ModW, ModH/4)
      .stroke(false)
      .fill(green3)
      grid.add(s5, row, col);
    }
    //4 vertical stripes
    else if(ran < 0.8) {
      var s6 = r.rect(0, 0, ModW/8, ModH)
      .stroke(false)
      .fill(green6)
      var s7 = r.rect(ModW/4, 0, ModW/8, ModH)
      .stroke(false)
      .fill(green5)
      var s8 = r.rect(ModW/4*2, 0, ModW/8, ModH)
      .stroke(false)
      .fill(green8)
      var s9 = r.rect(ModW/4*3, 0, ModW/8, ModH)
      .stroke(false)
      .fill(green6)
      grid.add(s6, row, col)
      grid.add(s7, row, col)
      grid.add(s8, row, col)
      grid.add(s9, row, col);
    }

    //3 sets of colored square sequences
    else if(ran < 0.9) {
      var s6 = r.rect(0, 0, ModW/8, ModH/8)
      .stroke(false)
      .fill(green6)
      var s7 = r.rect(ModW/8, 0, ModW/8, ModH/8)
      .stroke(false)
      .fill(green5)
      var s8 = r.rect(ModW/8*2, 0, ModW/8, ModH/8)
      .stroke(false)
      .fill(green8)
      var s9 = r.rect(ModW/8*3, 0, ModW/8, ModH/8)
      .stroke(false)
      .fill(green6)
      
      var s10 = r.rect(ModW/8*4, ModH/8, ModW/8, ModH/8*2)
      .stroke(false)
      .fill(green6)
      var s11 = r.rect(ModW/8*5, ModH/8, ModW/8, ModH/8*2)
      .stroke(false)
      .fill(green5)
      var s12 = r.rect(ModW/8*6, ModH/8, ModW/8, ModH/8*2)
      .stroke(false)
      .fill(green8)
      var s13 = r.rect(ModW/8*7, ModH/8, ModW/8, ModH/8*2)
      .stroke(false)
      .fill(green6)
      
      var s14 = r.rect(0, ModH/2, ModW/8, ModH/8*3)
      .stroke(false)
      .fill(green6)
      var s15 = r.rect(ModW/8, ModH/2, ModW/8, ModH/8*3)
      .stroke(false)
      .fill(green5)
      var s16 = r.rect(ModW/8*2, ModH/2, ModW/8, ModH/8*3)
      .stroke(false)
      .fill(green8)
      var s17 = r.rect(ModW/8*3, ModH/2, ModW/8, ModH/8*3)
      .stroke(false)
      .fill(green6)
      grid.add(s6, row, col)
      grid.add(s7, row, col)
      grid.add(s8, row, col)
      grid.add(s9, row, col);
      grid.add(s10, row, col)
      grid.add(s11, row, col)
      grid.add(s12, row, col)
      grid.add(s13, row, col);
      grid.add(s14, row, col)
      grid.add(s15, row, col)
      grid.add(s16, row, col)
      grid.add(s17, row, col);
    }

    // grid of squares
    else if(ran < 1) {
      for(i = 0; i < ModW; i += (ModW/8)){
        for(j = 0; j< ModH; j+= (ModH/8)){
      var s18 = r.rect(i, j, ModW/10, ModH/10)
      .stroke(false)
      .fill(green4)
      grid.add(s18, row, col);
        }
      }
    }


  }
}

// attempting to overlay roads on the original grid
for(var row = 2; row < 15; row++) {
  for(var col = 2; col < 15; col++) {

    var ran = Rune.random(1);
    //cross-roads X shape
    if(ran < 0.2) {
      var l1 = r.line(0, 0, ModW, ModH)
      .strokeWidth(2)
      .stroke(desert3)
      grid.add(l1, row, col);
      var l2 = r.line(ModW, 0, 0, ModH)
      .strokeWidth(2)
      .stroke(desert3)
      grid.add(l2, row, col);
    }
    
    //cross-roads + shape
    else if(ran < 0.4) {
      var l3 = r.line(ModW/2, 0, ModW/2, ModH)
      .strokeWidth(2)
      .stroke(desert4)
      grid.add(l3, row, col);
      var l4 = r.line(0, ModH/2, ModW, ModH/2)
      .strokeWidth(2)
      .stroke(desert4)
      grid.add(l4, row, col);
    }

  }
}
//grid.rotate(45, r.width/2, r.height/2)

r.draw();