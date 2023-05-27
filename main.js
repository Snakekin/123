difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
    fill('#F90093');
   text('Amiya',30,200) ;
   textSize(difference);
   document.getElementById("font_size").innerHTML = "The Size of the text  will be " + difference+"px";

}

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =  floor(leftWristX - rightWristX);

        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference = " + difference);
    
    }
}