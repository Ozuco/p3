//index.js

let llamarAPI = async () =>{
    let peticion = await fetch("https://opentdb.com/api.php?amount=10&category=23&difficulty=hard", {
        method: "GET",
    });

    if(peticion.status===200){
        let datos = await peticion.json();
        console.log(datos);
        //console.log(results.question);
        console.log(datos.results[1].question);
        console.log(datos.results[1].correct_answer);
        console.log(datos.results[1].incorrect_answers[0]);
        console.log(datos.results[1].incorrect_answers[1]);
        console.log(datos.results[1].incorrect_answers[2]);
        
        //reescribimos enunciado
        var enunciado = document.getElementById("enunciado");
        enunciado.innerText = datos.results[1].question;

        //reescribimos opciones:
        var opcion_correcta = document.getElementById("opc1");
        opc1.innerText = datos.results[1].correct_answer;

        var opcion_incorrecta = document.getElementById("opc2");
        opc2.innerText = datos.results[1].incorrect_answers[0];

        var opcion_incorrecta = document.getElementById("opc3");
        opc3.innerText = datos.results[1].incorrect_answers[1];

        var opcion_incorrecta = document.getElementById("opc3");
        opc4.innerText = datos.results[1].incorrect_answers[2];
    }

    
}

llamarAPI();