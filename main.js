let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');
const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()'

function generar() {
    let numeroDigitado =  parseInt(cantidad.value);
    console.log(numeroDigitado);
    if(numeroDigitado < 8){
        alert ("La cantidad de caracteres tiene que ser mayor que 8");
    }
    let password = "";
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaDeCaracteres[Math.floor(Math.random()*cadenaDeCaracteres.length)];
        console.log(caracterAleatorio);
        password = password + caracterAleatorio;
    }
contrasena.value = password;

let verificarNumero = /\d/;
    let verificarMayuscula = /[A-Z]/;
    let verificarCaracter = /[^a-zA-Z0-9]/;
    let verificarMinuscula = /[a-z]/;
    let cadenaContrasena = contrasena.value;
    if(verificarMayuscula.test(cadenaContrasena) && verificarNumero.test(cadenaContrasena)
    && verificarMinuscula.test(cadenaContrasena) && verificarCaracter.test(cadenaContrasena)){
        alert("La contraseña es muy fuerte");
    }else if(verificarMayuscula.test(cadenaContrasena) && verificarMinuscula.test(cadenaContrasena)&& 
    (verificarNumero.test(cadenaContrasena)||verificarCaracter.test(cadenaContrasena))){
        alert("La contraseña es fuerte");
    }else{
        alert("La contraseña es debil");
    }
}

function limpiar(){
    contrasena.value = "";
    cantidad.value = "";
}
