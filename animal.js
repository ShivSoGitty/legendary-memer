function init(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PpfA20hPT/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}
//I'm not sure what to do here for getResults