Webcam.set(
    {
    height: 300,
     width:350, 
     image_format:'jpeg',
    jpeg_quality:90
    
    });
    camera= document.getElementById("camera");
    Webcam.attach(camera);
    
    function take_snapshot()
    {
        Webcam.snap(
            function(data_uri)
            {
                document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
            }
        );
    
    }
    console.log("ml5 version:",ml5.version);
    
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Pdi8G-ju5/",modelLoaded)
    
    function modelLoaded()
    {
     console.log("model is loaded") 
    }
    
    prediction_1="";        
    
    prediction_2="";
    
    function speak()
    {
        synth=window.speechSynthesis
        speak_data_1="The first prediction is"+prediction_1;
        speak_data_2="The second prediction is"+prediction_2;
        utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        synth.speak(utterThis);
    
    }
    
    