// alert("\"The art of doing mathematics is finding that special case that contains all the germs of generality\" -David Hilbert");


function alltext()
{
    let x=200,y=200
    stroke("black");
    fill("black")
    text("r=3", x, y+5, x, y) //radius reading
}

function calling_circle(x,y,z)
{
    noLoop()
    stroke("black")
    fill("green")

//A circle 
describeElement('Circle with radius 3')

circle(x,y,z)
line(x, y, x+35, y)

//Slicing up the circle in various concentric circles/rings generating from that circle 




//and then those circles are chngd in lines. 
}

function setup()
{
    createCanvas(innerWidth-100, innerHeight-100);   
}

function draw() {
    fill("green");
    background("white");
    text("Starting from the circle:- whose area is pie*r^2  Area = pie*r^2", 5, 5, 100, 100)
    text("So there is this inner ring with r = 3", 150, 150, 200, 200)    
    calling_circle(200,200,70);
    alltext()
}

window.setup = setup;
window.draw  = draw;
new p5();
