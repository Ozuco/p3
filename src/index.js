//index.js
let indexPregunta = 0; //indice de las 10 preguntas traidas de la API

//esta función oculta los elementos del cuestionario según corresponda
let ocultar = async (id) =>{
    var elemento = document.getElementById(id);
    id.style.display="none";
}

let aparecer = async (id) =>{
    var elementos = document.getElementById(id);
    id.style.display="block";
}

let inicializarCuestionario = async () =>{
    ocultar(preguntasCuestionario);
    ocultar(respuestaCuestionario);

    //llamada a API
    let peticion = await fetch("https://opentdb.com/api.php?amount=10&category=23&difficulty=hard", {
        method: "GET",
    });

    if(peticion.status===200){ 
        let datos = await peticion.json();
        console.log(datos);
        
        //título
        //var enunciado = document.getElementById("enunciado");
        //enunciado.innerText = datos.results[indexPregunta].question;


        //reescribimos enunciado
        var enunciado = document.getElementById("enunciado");
        enunciado.innerText = datos.results[indexPregunta].question;

        //reescribimos opciones:
        var opcion_correcta = document.getElementById("opc1");
        opc1.innerText = datos.results[indexPregunta].correct_answer;

        var opcion_incorrecta = document.getElementById("opc2");
        opc2.innerText = datos.results[indexPregunta].incorrect_answers[0];

        var opcion_incorrecta = document.getElementById("opc3");
        opc3.innerText = datos.results[indexPregunta].incorrect_answers[1];

        var opcion_incorrecta = document.getElementById("opc3");
        opc4.innerText = datos.results[indexPregunta].incorrect_answers[2];
    }
}

let empezarJugar = async () =>{
    ocultar(inicioCuestionario);
    aparecer(preguntasCuestionario);
}

let siguientePregunta = async() =>{

}

//inicioCuestionario
//preguntasCuestionario
//respuestaCuestionario

inicializarCuestionario();