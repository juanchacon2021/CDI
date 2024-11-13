// Selecciona el elemento del mensaje por su id

const linkExamenes = document.getElementById('linkExamenes');
linkExamenes.addEventListener('click', function(event) {
    event.preventDefault();
    mensaje.textContent = 'Examenes';
});

const linkEmergencias = document.getElementById('linkEmergencias');
linkEmergencias.addEventListener('click', function(event) {
    event.preventDefault();
    mensaje.textContent = 'Emergencias';
});

const linkConsultas = document.getElementById('linkConsultas');
linkConsultas.addEventListener('click', function(event) {
    event.preventDefault();
    mensaje.textContent = 'Consultas';
});

const linkLogo = document.getElementById('linkLogo')
// Añade un evento de clic al enlace de "Pacientes"
linkPacientes.addEventListener('click', function(event) {
    event.preventDefault();
    linkLogo.remove();
});

document.getElementById('linkPacientes').addEventListener('click', function() {
    document.getElementById('botonesPacientes').style.display = 'flex';
});

$(document).ready(function(){
    // Mostrar el modal
    $("#btnRegistrar").click(function(){
        $("#myModal").show();
    });

    // Cerrar el modal
    $(".close").click(function(){
        $("#myModal").hide();
    });

    // Validar el formulario
    $("#formulario").submit(function(event){
        event.preventDefault();
        var isValid = true;

        // Validar nombre
        if($("#nombre").val().trim() === ""){
            alert("El nombre es obligatorio");
            isValid = false;
        }

        // Validar apellido
        if($("#apellido").val().trim() === ""){
            alert("El apellido es obligatorio");
            isValid = false;
        }

        // Validar edad
        if($("#edad").val().trim() === "" || isNaN($("#edad").val().trim())){
            alert("La edad es obligatoria y debe ser un número");
            isValid = false;
        }

        if ($("#estadocivil").val().trim() === "") {
            alert("El estado civil es obligatorio");
            isValid = false;
        }

        if ($("#telefono").val().trim() === "") {
            alert("El teléfono es obligatorio");
            isValid = false;
        }

        if ($("#direccion").val().trim() === "") {
            alert("La dirección es obligatoria");
            isValid = false;
        }

        if ($("#ocupacion").val().trim() === "") {
            alert("La ocupación es obligatoria");
            isValid = false;
        }

        if(isValid){
            alert("Personal Registrado Correctamente");
            $("#myModal").hide();
        }
    });

});