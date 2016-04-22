var r = new Rune({


});

var numColors = 12;
var colorDegree= 360/numColors
for (var i = 0;i<numColors; i++){
	var x = Math.cos(rune.radians(i*colorDegree)) * 100;
	var y = Math.sin(rune.radians(i*colorDegree)) * 100;

r.circle(x + 200, y + 200, 10)
.fill('hsv',);
}


function getRandomColor(){

	return new Rune.Color('hsv', Rune.random(360), Rune.random(100), Rune.random(100));
	//functions can only return one thing
	//arugments go in the () of the function
	//can return an array from a function, but most often they only return 1 thing
	//
}



r.rect(10,10,100,100)
.fill('hsv',0,100,100, 0.5) // can add a 5th number to add opacity.
.stroke(false);

r.rect(120,10,100,100)
.fill('hsv',120,100,100, 0.5) // can add a 5th number to add opacity.
.stroke(false);

r.rect(230,10,100,100)
.fill('hsv',240,100,100, 0.5) // can add a 5th number to add opacity.
.stroke(false);

r.draw()