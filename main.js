song1 = "";
song2 = "";
function setup(){
    canvas = createCanvas(600, 600);
    canvas.position(650, 100);
    video = createCapture(VIDEO);
    video.hide();
}
function preload(){
    song1 = "song1.mp3";
    song2 = "song2.mp3";
}
function draw(){
    image(video, 0, 0, 0, 600);
}