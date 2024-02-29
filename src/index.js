//index.js
let indexPregunta = 0; //indice de las 10 preguntas traidas desde la API
let TAMAÑO_CUESTIONARIO=10;

//esta función oculta los elementos del cuestionario según corresponda
let ocultar = (id) =>{
    var elemento = document.getElementById(id);
    id.style.display="none";
}

//esta función hace que reaparezcan los elementos del cuestionario según corresponda
let aparecer = (id) =>{
    var elementos = document.getElementById(id);
    id.style.display="block";
}

//llamada a la api
const getDatosApi = async () => {
    //llamada a API
    let peticion = await fetch("https://opentdb.com/api.php?amount=10&category=23&difficulty=hard", {
        method: "GET",
    });

    if(peticion.status===200){ 
        let datos = await peticion.json();
        return datos;
    }
}


let inicializarCuestionario = async () =>{
    ocultar(preguntasCuestionario);
    ocultar(respuestaCuestionario);
    //OJITO
    sigPregunta();
}


let empezarJugar = async () =>{
    ocultar(inicioCuestionario);
    aparecer(preguntasCuestionario);
    //borrar esto:
    aparecer(respuestaCuestionario);
}

let corregir = async(idButton) =>{
    let datos = await getDatosApi(); 
    if (idButton.innerText === datos.results[indexPregunta].correct_answer){ // ATENCION. DATOS NO ES ESTÁTICO. ESTÁ DEFINIDO DENTRO DE OTRA FUNCO
        //colorearse de verde
        console.log("Enhorabuena. ¡Respuesta correcta!");
        
    } else {
        console.log("Mal. Preguntale a Lebron James si es un juego");
    }
}

let sigPregunta = async() =>{
    
        
    if (indexPregunta<TAMAÑO_CUESTIONARIO-1){
        indexPregunta++;
        console.log(indexPregunta);
    }else{
        console.log("Se ha llegado al final del cuestionario");
    }

    let datos = await getDatosApi(); 

    //num pregunta título
    var numPregunta = document.getElementById("numPregunta");
    numPregunta.innerText = "Pregunta número "+indexPregunta;

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

//inicioCuestionario
//preguntasCuestionario
//respuestaCuestionario

inicializarCuestionario();