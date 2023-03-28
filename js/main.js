function login(){
    var user,password
    user = document.getElementById("usuario").value;
    password= document.getElementById("contrasena").value;
    if(user=="prueba" && password == "1234"){
        alert("iniciastes sesion!")
    } else{
        alert("datos incorrecto")
    }

}
function registro(){
    alert("registrese!")

}
