function preload()
{

}
function setup()
{
canvas=createCanvas(800,600);
canvas.position(300,300);
video=createCapture(VIDEO);
video.hide();

}
function draw()
{
image(video,200,100,400,400);
fill("red");
circle(60,60,100);
circle(740,60,100);
circle(60,540,100);
circle(740,540,100);
fill("green")
rect(110,40,580,40)
}

function take_snapshot()
{
save("IMG.Png");
}