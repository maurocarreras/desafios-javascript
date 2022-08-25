
let acierto = false ;
let conteo = 0;
let respuestacorrecta = "messi"

while(conteo < 3 && acierto === false){
    let respuestausuario = prompt("Quien es el 10 de argentina");
    if (respuestausuario === respuestacorrecta){
        acierto = true;
        alert("Acertaste !!Vamos Argentina¡¡")
    }
    conteo ++;
}
 if (! acierto){
    alert("perdiste , volve a intentarlo")
}