const valores = [] ;

function recogerDatos(){
    const datos = document.querySelector("form");
    
    datos.addEventListener("submit", (e) => {
        e.preventDefault();

        for (const input of datos.elements) {
            if (input.type !== "submit") {
                valores.push(input.value);
            }
            
    }
    console.log(calculos());
    datos.reset();
    })

}

function calculos(){
    
    let ultimosValores = valores.slice(-4);
    let consuGasol = (Number(ultimosValores[0])*30000)/252.4;
    let resultado = (Number(ultimosValores[2]) - Number(ultimosValores[3]) - consuGasol) / Number(ultimosValores[1]);
    resultado = resultado.toFixed(2).replace('.', ',');
    mostrarResultado(resultado);
}


function mostrarResultado(resultado){
    const formulario = document.querySelector("form");
    formulario.insertAdjacentHTML('beforeend', `<dialog open class="modal">El resultado es: ${resultado}</dialog>`);
    cerrarDialog();
}

function cerrarDialog(){
    const dialog = document.querySelector("body");
    dialog.addEventListener('click', (e) => {
        if(!e.target.matches('.modal')){
            dialog.querySelector('.modal').close();
        }
    })
}

recogerDatos();

