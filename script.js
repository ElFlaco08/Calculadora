function Agregar(value){
    document.getElementById("pantalla").value+=value;
}
function Calcular(){
    try {
        const resultado = eval(document.getElementById("pantalla").value)
        document.getElementById("pantalla").value = resultado;
    } catch (error) {
        document.getElementById("pantalla").value = "Error";
    }
}
function Limpiar(){
    document.getElementById("pantalla").value='';
}