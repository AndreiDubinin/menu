let temperature = 0;


while(temperature < 40){

    if (temperature < 10){
        console.log("temperature", temperature, "Cold")
    }

    else if(temperature >= 10 && temperature < 30){
        console.log("temperature", temperature, "Good")
    }

    else{
        console.log("temperature", temperature, "Hot")
    }

    temperature++
}
