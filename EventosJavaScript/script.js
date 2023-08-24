const h1 = document.querySelector('h1')
const formulario = document.querySelector('#form') // para formularios
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')
const luffy = document.querySelector('#img')

/*Instead of using the `Number()`
 constructor to convert a string to number, you can use the `+` operator ejm, +'010'; // 10 
 
Number()` converts the type whereas parseInt parses the value of input.
    // Parsing
    parseInt('32px'); // 32
    parseInt('5e1'); // 5

    // Convert type
    Number('32px'); // NaN
    Number('5e1'); // 50
`parseInt` accepts two parameters. The second parameter is used to indicate the radix number.

    parseInt('0101'); // 101
    parseInt('0101', 10); // 101
    parseInt('0101', 2); // 5

    Number('0101'); // 101
 
 */

//btn.addEventListener('click', btnOnClick); // se replica el comportamiento de escucha desde el javaScript
formulario.addEventListener('submit', btnOnClick) // manera de oir un formulario

function btnOnClick(event){
    console.log({event}); // solo para ver el tipo de evento
    event.preventDefault();// para que no ejecute lo de por defecto que seria actualizar la pagina, lo que no permite ver los resultados en este caso
    const operacion = +input1.value +  +input2.value;
    resultado.textContent = "Resultado del calculo: "+ operacion ; // se modifca el contenido
}

// Evento mouseover
btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = 'blue';
    btn.style.color = 'white';
});

// Evento mouseout
btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
});

img.addEventListener('mouseover', () => {
    img.setAttribute("src", "./luffy2.webp");
});
img.addEventListener('mouseout', () => {
    img.setAttribute("src", "./luffy1.jpeg");
});


/*
para boton normal
function btnOnClick(){
    const operacion = +input1.value +  +input2.value;
    resultado.textContent = "Resultado del calculo: "+ operacion ; // se modifca el contenido
    //const newNode = document.createTextNode(` ${operacion}`); // se agrega contenido extra
    //resultado.appendChild(newNode);
}
*/