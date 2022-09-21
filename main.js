function startClassification() {
    navigator.madiaDevices({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4nkon9H1a/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innerHTML=
    "Detected dog - Detected cat - " + (results[0].label * 100).toFixed(2);
    document.getElementById("result_confidence").innerHTML=
    "Detected voice is of - " + results[0].confidence;
    document.getElementById("result_label").style.color = "rgb(" +random_number_r +"," +random_number_g +"," +random_number_b +")";
    document.getElementById("result_confidence").style.color = "rgb(" +random_number_r +"," +random_number_g +"," +random_number_b +")";
    img = getElementById("download (2).jfif");
    img1 = getElementById("teddybear-dog-breeds.jpeg");

    if (result[0].confidence == "Meowing") {
        
    }
    }
}