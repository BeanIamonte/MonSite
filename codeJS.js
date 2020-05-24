// CODE JAVASCRIPT

var slide = new Array('Images/slider-image1.jpg', 'Images/slider-image2.jpg', 'Images/slider-image3.jpg');

var numero = 1;

function ChangeSlide(sens) {

    // hide pictures
    numero = numero + sens;

        if (numero <= 0) {

        numero = slide.length - 1;
    }

        if (numero > slide.length - 1) {

        numero = 0;
    }

   /*  document.getElementById('slide').style.opacity = 0;


    //show pictures

    for (var i = 0 ; i < 1 ; i += 0.25) {

        alert(i);

        setTimeout(function opaciteSlider() {

            document.getElementById('slide').style.transition = "opacity 0.5s ease-in-out";
            document.getElementById('slide').style.opacity = i;

            console.log('test2');

         }), 100;

        opaciteSlider();

    } */

    document.getElementById("slide").style.backgroundImage = "url('" + slide[numero] + " ')"; // Tu as mit 0 mais c pas numero qui faut mettre ici : slide[numero] ??
    document.getElementById("slide").style.transition = "2s";

}


//Auto-Slide

function ChangeSlideTimer() {

        // Je en sais pas quoi mettre pour dire à cette fonction:

        // Si ChangeSlide a été lancé alors tu re attends 10 secondes

   setInterval(() => {
       
    


    switch(numero) {

        case 0:
        
        case 1:
            numero++;
            document.getElementById('slide').style.background = "url('" + slide[numero] + "')";
        break;

        case 2: 
            numero = 0;
            document.getElementById('slide').style.background = "url('" + slide[numero] + "')";
        break;

        default:
            alert('Erreur dû au slider.');
    }



   }, 3000);




}

ChangeSlideTimer();





