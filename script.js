let form = document.getElementById("calculadora");

const CALCULAR = document.getElementById("calcular");

const ERROR = document.getElementById("error");

const FLU = document.getElementById("flu");

const MAN = document.getElementById("man");

CALCULAR.addEventListener("click", () => {

    const DATO = document.getElementById("peso").valueAsNumber

    console.log("Dato ingresado", DATO);

    if(DATO > 0){

        ERROR.style.display = "none";
        FLU.style.display = "Block";
        MAN.style.display = "Block";
    

    let flujo;
    let mantenimiento;
    let mmMedio;

    if(DATO < 30) {
        flujo = HollidaySegar(DATO);
        mantenimiento = flujo / 24;
        mmMedio = mantenimiento * 1.5;
        FLU.innerHTML = `${flujo} cc/hr`
        MAN.innerHTML = `m+m/2 ${mmMedio} cc/hr`;
    }
    else{
        flujo = SuperficieCorporal(DATO);
        const primerResultado = flujo * 1500;
        const segundoResultado = flujo * 2000;
        FLU.innerHTML = `${flujo} cc/hr`;
        MAN.innerHTML = `m+m/2 ${primerResultado} o ${segundoResultado} cc/hr`;
    }
    }
    else{
        ERROR.style.display = "Block";
        FLU.style.display = "none";
        MAN.style.display = "none";
    }

})

function HollidaySegar(peso) {
    let flujo = 0;

    if(peso <= 10){
        flujo = peso * 100;
    }
    else if(peso > 10 && peso <= 20){
        flujo = 1000 + (peso - 10) * 50;
    }
    else if(peso > 20 && peso < 30){
        flujo = 1500 + (peso - 20) * 20;
    }

    return flujo;

}

function SuperficieCorporal(peso) {

    return ((peso * 4) + 7) / (peso + 90);
    
}