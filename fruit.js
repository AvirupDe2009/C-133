img = ""
status = "";
objects = [];
percent = 0;

function preload() {
    img = loadImage('fruit.jpg');
}

function setup() {
    canvas = createCanvas(700,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function gotResult (error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function draw() {
    
    if(status != "")
    {
    image(img,0,0,700,500);
      for(i=0; i < objects.length; i++)
      {
          document.getElementById("status").innerHTML = "Status : Object Detected";

          fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + "" + percent + "%", objects[i].x+100, objects[i].y);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x+100, objects[i].y, objects[i].width,objects[i].height);

      }  
    }
}
