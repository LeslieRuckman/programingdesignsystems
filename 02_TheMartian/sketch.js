var r = new Rune({
  container: "#canvas",
  width: 626,
  height: 1066,
  debug: true
});
//This code gives the canvas a container and it allows there to be as many
//containers as you want on a web page.
// the r in front of var can be any word, but then you will need to use it as a 
// qualifier for the code below/


//space
r.rect(0, 0, 626, 1066)
  .fill(0)
  .stroke(0)
  .strokeWidth(2);

  //mars rotation

r.ellipse(313, 385, 1223, 1223)
  .fill(0)
  .stroke(255)
  .strokeWidth(1);

  //earth rotation

r.ellipse(313, 385, 600, 600)
  .fill(0)
  .stroke(255)
  .strokeWidth(1)

  // r.line(45, 935, 450, 120)
  //   .fill(0)
  // .stroke(255)
  // .strokeWidth(1);

  //earth
  var degree = 320;
  var x = 313 + (Math.cos(Rune.radians(degree)) * 300);
  var y = 383 + (Math.sin(Rune.radians(degree)) * 300);

  r.ellipse(x, y, 12, 12)
  .fill(0)
  .stroke(255)
  .strokeWidth(2);

  //mars

r.ellipse(45, 935, 10, 10)
  .fill(255)
  .stroke(255)
  .strokeWidth(2);



r.draw();