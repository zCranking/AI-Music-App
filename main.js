song1 = "";
song2 = "";
leftWristX = "";
leftWristY = "";
rigthWristX = "";
rightWristY = "";
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
    song1 = "song1.mp3";
    song2 = "song2.mp3";
}
function draw(){
    image(video, 0, 0, 0, 600);
}