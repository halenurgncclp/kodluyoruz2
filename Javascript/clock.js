let isim=prompt("Lütfen isminizi giriniz:")
document.getElementById("text1").innerHTML="Merhaba "+ isim.toUpperCase() + " Hoş geldin!";

let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

setInterval(function(){
    document.getElementById("myClock").innerHTML=new Date().getHours()+":"+ new Date().getMinutes()+":"+ new Date().getSeconds()
    +"    "+ gunler[new Date().getDay()];
}); 
