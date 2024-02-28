//index.js

let llamarAPI = async () =>{
    let peticion = await fetch("https://opentdb.com/api.php?amount=10&category=23&difficulty=hard", {
        method: "GET",
    });

    if(peticion.status===200){
        let datos = await peticion.json();
        console.log(datos);
    }

}

llamarAPI();