console.log("Hi");

document.getElementById("btnSearch").addEventListener("click" ,()=>{
    let input = document.getElementById("gettxt").value;
    //alert(input);

    let reop ={
        method:'GET'
    };

    fetch(`http://api.weatherapi.com/v1/current.json?key=63e77c647e384bcba3280619241201&q=${input}`,reop)
    .then(responce => responce.json())
    .then(data =>{
        console.log(data);

        document.getElementById("lbltemp").innerHTML=data["current"]["temp_c"]+"C";
        document.getElementById("lblcountry").innerHTML=data["current"]["condition"]["text"];
        document.getElementById("img").src=data["current"]["condition"]["icon"];
    })
    .then(error => console.log("error",error))
})