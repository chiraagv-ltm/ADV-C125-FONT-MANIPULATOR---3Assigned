function setup(){
    canvas=createCanvas(500,500);
canvas.position(700,150);

video=createCapture(VIDEO);
video.size(600,600);
    
posenet=ml5.poseNet(video,model_loaded);

posenet.on("pose",gotPoses);


}



rightWrist=0;
leftWrist=0;
difference=0;

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWrist=results[0].pose.rightWrist.x;
        leftWrist=results[0].pose.leftWrist.x;
        difference=floor(leftWrist-rightWrist);
        difference=difference-100
    }

}

function draw(){
    
    background("#e3e3e3");
    textSize(difference);
    fill("#ff0000");
    text("chiraag",0,250);
}


function model_loaded(){
    console.log("model is loaded");
}


