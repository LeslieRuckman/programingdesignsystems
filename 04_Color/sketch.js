var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 1200
});

var angle = 170;
var color1 = angle;
var color2 = angle + 30;
var color3 = angle - 10 ;

var bakcground = r.rect(0,0,1200,1200)
.fill('hsv',color1, 100, 100);


var group = r.group(85, 85);

for(var x = 0; x < 9; x++)
  {
    for(var y = 0; y < 9; y++)
    {
      var circ = r.circle(x * 128, y * 128, 55, group)
        .stroke(false);

      if((x == 2 && y == 2)||(x == 7 && y == 5)||(x==3 && y ==7))
      {
        circ.fill('hsv',color1, 100, 100);
      }
      else
      {
        circ.fill('hsv',color2, 100, 100);
      }
    }
  }

var circS1 = r.circle(235, 236, 55, group) 
.stroke(false)
.fill('hsv',color3, 100, 100);

var circS2 = r.circle(915, 640, 55, group) 
.stroke(false)
.fill('hsv',color3, 100, 100);

var circS3 = r.circle(385, 915, 55, group)
.stroke(false)
.fill('hsv',color3, 100, 100);



r.draw();