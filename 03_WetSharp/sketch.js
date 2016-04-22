var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var radius = 10;
var numPoly = 600;
var angle = 360 / numPoly;
var group = r.group(r.width / 2, r.height / 2);

for(var i = 0; i < numPoly; i++)
{
  var x = Math.cos(Rune.radians(i * angle)) * radius;
  var y = Math.sin(Rune.radians(i * angle)) * radius;
  r.ellipse(x*20,y,(i*angle)/3,(i*angle)/3,group)
  .rotate(i * angle, 0, 0, true)
  .stroke(0)
  .fill(false);
}


r.draw();
