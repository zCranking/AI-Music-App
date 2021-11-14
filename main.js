song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rigthWristX = 0;
rightWristY = 0;
Status1=null;
Status2=null;
scoreLeftWrist = null;
scoreRightWrist = null;
function setup(){
    canvas = createCanvas(600, 600);
    canvas.position(650, 100);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results, error){
    if(error){
        console.error("shit is going down!");
    }
    if(results.length>0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist =" + scoreLeftWrist);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist);
        //left wrist
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftwristX = " + leftWristX + " leftwristY = " + leftWristY);

        //right wrist
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightwristX = " + rightWristX + " rightwristY = " + rightWristY);

    }
}
function modelLoaded(){
    console.log("model loaded");
}
function preload(){
    song1 = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3");
}
function draw(){
    image(video, 0, 0, 0, 600);
    fill("#FAC748");
    stroke("#FAC748");
    Status1=song1.isPlaying();
    Status2= song2.isPlaying();
    if(scoreLeftWrist > 0.2){
    circle(leftWristX, leftWristY,20);
    setTimeout(song2.stop(), 120);
    }
    if(Status1==false){
        song1.setVolume(0.5);
        setTimeout(song1.play(), 120);
    }
    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY,20);
        setTimeout(song1.stop(), 120);
    }
    if(Status2==false){
        song2.setVolume(0.5);
        setTimeout(song2.play(), 120);
    }
}