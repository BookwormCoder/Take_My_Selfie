var SpeechRecognition=window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function run(event){
    console.log(event);

    var Content=event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    if(Content== "take my selfie" ||Content=="Take my selfie"){
        console.log("Taking selfie");
        speak();
    }
}

function speak(){
    //window.speechSynthesis is a API that converts text to speech
    var synth=window.speechSynthesis;
//Getting the text value from textbox and storing it in speak_data(variable)

    speak_data="Taking your selfie in 5 seconds";
//utterThis is a variable which is holding the converted text to speech
//SpeechSynthesisUtterance is a function of the API that will convert text to speech
//Using new because for every next text, we want to convert the text to speech
    var utterThis=new SpeechSynthesisUtterance(speak_data);
//synth is the variable holding API and speak is a predefined function of the API
        synth.speak(utterThis);
        Webcam.attach(camera);

        setTimeout(function(){
        take_snapshot();
        save();
        },5000);

        

        
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
}); 
camera=document.getElementById("camera");   


function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}