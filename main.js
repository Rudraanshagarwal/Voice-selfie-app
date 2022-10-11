var speechrecognition = window.webkitSpeechRecognition;


var recognition = new speechrecognition();

function start(){
    document.getElementById("Output").value  = "";
    recognition.start()
}

recognition.onresult=function(event){

    console.log(event)

    content=event.results[0][0].transcript;
    document.getElementById("Output").value=content;
    if(content == "take my selfie"){
        speak();
    }
}



function speak(){

    var synth =  window.speechSynthesis;

    data = "Taking a selfie in 55 seconds";

    utterThis=new SpeechSynthesisUtterance(data);

    synth.speak(utterThis);

    camera = document.getElementById("camera");

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);

    Webcam.set({
        width:360,
        height:250,
        image_format:"png",
        png_quality:100,
    });

    Webcam.attach("#camera");
}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Selfie").innerHTML='<img id="SELFIE" src=" '+data_uri+' ">';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("SELFIE").src;
    link.href=image;
    link.click();
}


