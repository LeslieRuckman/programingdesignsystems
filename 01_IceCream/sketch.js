var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});
//This code gives the canvas a container and it allows there to be as many
//containers as you want on a web page.
// the r in front of var can be any word, but then you will need to use it as a 
// qualifier for the code below/


for (var x = 0; x < 6; x ++) 
{
  for(var y = 0; y <6; y++){

var myGroup = r.group (x * 110,0);

r.rect(20, 20, 100, 100, myGroup)
  .fill(255)
  .stroke(0)
  .strokeWidth(2);



var myIceCream = r.ellipse(70, 60, 33, 33, myGroup)
  .fill(255)
  .strokeWidth(2)
  .stroke(0);

  console.log("myScaledIceCream");

var myScaledIceCream = myIceCream.copy().scale(0.25).move(x*1.5,-16,true)
  .fill(0)

;

 var myCone = r.triangle(53, 65, 87, 65, 70, 110, myGroup)
  .fill(255)
  .strokeWidth(2)
  .stroke(0);

  var mScaledCone = myCone.copy().scale(0.75).move(0,0,true)
  .fill(255)
  .strokeWidth(2)
  .stroke(0);

 var mScaledCone = myCone.copy().scale(0.5).move(0,0,true)  
  .fill(255)
  .strokeWidth(2)
  .stroke(0);

  var mScaledCone = myCone.copy().scale(0.25).move(0,0,true)
  .fill(255)
  .strokeWidth(2)
  .stroke(0);


  var mScaledCone = myCone.copy().scale(0.75).move(8,0,true)
  .fill(255)
  .strokeWidth(2)
  .stroke(0);

 var mScaledCone = myCone.copy().scale(0.5).move(17,0,true)
  .fill(255)
  .strokeWidth(2)
  .stroke(0);

  var mScaledCone = myCone.copy().scale(0.25).move(25,0,true)
  .fill(255)
  .strokeWidth(2)
  .stroke(0);

  }
}


r.draw();