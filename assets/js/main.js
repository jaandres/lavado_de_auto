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
            range: [1,8],
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
            number:'Sólo deben ser números', 
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
            digits: 'solo se permiten caracteres',
          },
          apellido: {
            required: "Ingrese su apellido",
            minlength: "Debe tener mas de 3 caracteres",
            maxlength: "No puede tener mas de 20 caracteres"
          },
          direccion: {
            required: "Ingrese su dirección",
            minlength: "Debe tener mas de 3 caracteres",
            maxlength: "No puede tener mas de 80 caracteres",
          },
          marca: {
            required: "Ingrese su dirección",
            minlength: "Debe tener mas de 3 caracteres",
            maxlength: "No puede tener mas de 15 caracteres",
          },
          modelo: {
            required: "Ingrese su dirección",
            minlength: "Debe tener mas de 3 caracteres",
            maxlength: "No puede tener mas de 15 caracteres",
          },
          año: {
            required: "Ingrese un año valido",
            año: "Ingrese un año",
            minlength: "Debe tener mas de 4 caracteres",
            maxlength: "No puede tener mas de 4 caracteres",
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
});