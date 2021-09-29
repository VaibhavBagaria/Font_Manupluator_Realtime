noseX=0
noseY=0
text_input="";
color_input="";
right_wrist="";
function preload(){

}

function setup(){
canvas=createCanvas(450,400)
canvas.position(850,270)
video=createCapture(VIDEO)
video.size(500,450)
poseNet=ml5.poseNet(video,modellLoaded)
}

function draw(){
    text_input=document.getElementById("text_input").value
    color_input=document.getElementById("color_input").value
    background('lightblue')
    poseNet.on('pose',gotresult)
    fill(color_input);
    textSize(right_wrist);
    text(text_input,noseX,noseY); 
}

function modellLoaded(){
    console.log("mod0l is loaded.")
}

function gotresult(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        right_wrist = (results[0].pose.rightWrist.y) / 7
    }

}