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
            minlength: 1,
            maxlength: 1,
            required: true,
          },
          nombre: {
            required: true,
            minlength: 3,
            maxlength: 20,
          },
          apellido: {
            required: true,
            minlength: 3,
            maxlength: 20,
          },
          direccion: {
            required: true,
            minlength: 3,
            maxlength: 80,
          },
          marca: {
            required: true,
            minlength: 3,
            maxlength: 15,
          },
          modelo: {
            required: true,
            minlength: 3,
            maxlength: 15,
          },
          año: {
            required: true,
            number: true,
            minlength: 4,
            maxlength: 4,
          },
          
        },
        messages : { 
          rut : { 
            required:'Escriba el rut', 
            number:'Sólo deben ser números sin punton ni guión', 
            minlength:'Por favor ingrese al menos tres caracteres', 
            maxlength:'debe ingresar el RUT sin dígito verificador'
          },
          digito:{
            minlength: 'Agregue al menos un número',
            maxlength: 'Sólo se permite un dígito verificador',
            range: 'El número no debe ser mayor a ocho',
            required: 'debe ingresar un dígito verificador',
          },
          nombre: {
            required: "Ingrese su nombre",
            minlength: "Debe tener mas de 3 caracteres",
            maxlength: "No puede tener mas de 20 caracteres",
          },
          apellido: {
            required: "Ingrese su apellido",
            minlength: "Debe tener mas de 3 caracteres",
            maxlength: "No puede tener mas de 20 caracteres",
          },
          direccion: {
            required: "Ingrese su dirección",
            minlength: "Debe tener mas de 3 caracteres",
            maxlength: "No puede tener mas de 80 caracteres",
          },
          marca: {
            required: "Ingrese la marca del vehículo",
            minlength: "Debe tener mas de 3 caracteres",
            maxlength: "No puede tener mas de 15 caracteres",
          },
          modelo: {
            required: "Ingrese el modelo del vehículo",
            minlength: "Debe tener mas de 3 caracteres",
            maxlength: "No puede tener mas de 15 caracteres",
          },
          año: {
            required: "Ingrese un año valido",
            number: "Ingrese un año",
            minlength: "Debe tener mas de 4 caracteres",
            maxlength: "No puede tener mas de 4 caracteres",
          }
        },
  submitHandler: function (formulario) {
    
    console.log("entro a funcion")
    if (
      $("#digito").val() == "k" ||
      $("#digito").val() <= 8 &&
      $("#digito").val() >= 0
    ) {
        let mensaje = document.getElementById("error");
        if ( $("#digito").val() >= 0 ||  $("#digito").val() == ""){          
            mensaje.innerHTML = "";
            alert('Ingreso de orden correcto')
            // $('#formulario')[0].reset();
        }
    } else {
      let mensaje = document.getElementById("error");
      alert('Error intente de nuevo')
      mensaje.innerHTML = "ingrese un digito del 0 a el 8 o una letra k";
    }
  }
  })
  var userIdExistentes = [
      "17273455",
      "17272455",
      "17273455",
      "17073455",
      "17273455",
      "17673455",
      "17273455",
      "20473455",
      "20873455",
      "20273455",
      "20073455",
      "20300455",
      "20273455",
      "26349213",
      "8848609",
      "8400609",
      "8666609",
      "8234609",
    ];
  $("#rut").autocomplete({
    source: userIdExistentes
  });

  addEventListener("click",function(){
    const iva = 0.19;
    let total = document.getElementById("total");
    let costo = document.getElementById("costo");
    let lavado_ext_int = document.getElementById("lavado_ext_int");
    let lavado_motor = document.getElementById("lavado_motor");
    let valor_lavado_ext_int = 7000
    let valor_motor = 15000

    if (lavado_motor.checked && lavado_ext_int.checked){
      total.value = [(valor_lavado_ext_int+(valor_lavado_ext_int*iva))+(valor_motor+(valor_motor*iva))]
      costo.value = valor_lavado_ext_int + valor_motor 
    } else if (lavado_ext_int.checked ){
      total.value = valor_lavado_ext_int+(valor_lavado_ext_int*iva);
      costo.value = valor_lavado_ext_int
    } else if ( lavado_motor.checked ){
      total.value = valor_motor+(valor_motor*iva);
      costo.value = valor_motor
    } else {
      costo.value = "Valor neto del servicio";
      total.value = "Total mas IVA";
    }

  });
});