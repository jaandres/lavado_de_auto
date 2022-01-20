$(document).ready(function () {

    $("#formulario").validate({
        rules: {
            rut:{
                required: true,
                number: true,
                minlength: 3,
                maxlength: 8,
            },
            digito: {
                required:   function () {
                    if (
                      $("#digito").val() == "k" ||
                      $("#digito").val() <= 8 &&
                      $("#digito").val() >= 0
                    ) {
                        let mensaje = document.getElementById("error");
                        if ( $("#digito").val() > 0 ||  $("#digito").val() == ""){
                            
                            mensaje.innerHTML = "";
                        }
                    }else {
                        let mensaje = document.getElementById("error");
                      mensaje.innerHTML = "ingrese un digito del 0 a el 8 o una letra k";
                    }
                },
                  minlength: 1,
                  maxlength: 1,
            }
        }
    })

});