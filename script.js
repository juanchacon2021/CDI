
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

    // Crear elementos <span> para mensajes de error
    $("input").each(function() {
        $(this).after('<span class="error-message" style="color: red; display: none;"></span>');
    });

    // Validar cédula
    $("#cedula").on("keypress keyup", function(e) {
        let errorMessage = $(this).next(".error-message");
        if (!/^\d*$/.test($(this).val())) {
            errorMessage.text("La cédula debe contener solo números").show();
            $(this).val($(this).val().replace(/\D/g, ''));
        } else {
            errorMessage.hide();
        }
    });

    // Validar nombre
    $("#nombre").on("keypress keyup", function(e) {
        let errorMessage = $(this).next(".error-message");
        if (!/^[a-zA-Z\s]*$/.test($(this).val())) {
            errorMessage.text("El nombre debe contener solo letras").show();
            $(this).val($(this).val().replace(/[^a-zA-Z\s]/g, ''));
        } else if ($(this).val().trim() === "") {
            errorMessage.text("El nombre es obligatorio").show();
        } else {
            errorMessage.hide();
        }
    });

    // Validar apellido
    $("#apellido").on("keypress keyup", function(e) {
        let errorMessage = $(this).next(".error-message");
        if (!/^[a-zA-Z\s]*$/.test($(this).val())) {
            errorMessage.text("El apellido debe contener solo letras").show();
            $(this).val($(this).val().replace(/[^a-zA-Z\s]/g, ''));
        } else if ($(this).val().trim() === "") {
            errorMessage.text("El apellido es obligatorio").show();
        } else {
            errorMessage.hide();
        }
    });

    // Validar edad
    $("#edad").on("keypress keyup", function(e) {
        let errorMessage = $(this).next(".error-message");
        if (!/^\d*$/.test($(this).val())) {
            errorMessage.text("La edad debe contener solo números").show();
            $(this).val($(this).val().replace(/\D/g, ''));
        } else if ($(this).val().trim() === "") {
            errorMessage.text("La edad es obligatoria").show();
        } else {
            errorMessage.hide();
        }
    });

    // Validar estado civil
    $("#estadocivil").on("keyup", function() {
        let errorMessage = $(this).next(".error-message");
        if ($(this).val().trim() === "") {
            errorMessage.text("El estado civil es obligatorio").show();
        } else {
            errorMessage.hide();
        }
    });

    // Validar teléfono
    $("#telefono").on("keypress keyup", function(e) {
        let errorMessage = $(this).next(".error-message");
        if (!/^\d*$/.test($(this).val())) {
            errorMessage.text("El teléfono debe contener solo números").show();
            $(this).val($(this).val().replace(/\D/g, ''));
        } else if ($(this).val().trim() === "") {
            errorMessage.text("El teléfono es obligatorio").show();
        } else {
            errorMessage.hide();
        }
    });

    // Validar dirección
    $("#direccion").on("keyup", function() {
        let errorMessage = $(this).next(".error-message");
        if ($(this).val().trim() === "") {
            errorMessage.text("La dirección es obligatoria").show();
        } else {
            errorMessage.hide();
        }
    });

    // Validar formulario al enviar
    $("#formulario").submit(function(event) {
        let isValid = true;

        if ($("#cedula").val().trim() === "" || !/^\d+$/.test($("#cedula").val().trim())) {
            $("#cedula").next(".error-message").text("La cédula es obligatoria y debe contener solo números").show();
            isValid = false;
        }

        if ($("#nombre").val().trim() === "" || !/^[a-zA-Z\s]+$/.test($("#nombre").val().trim())) {
            $("#nombre").next(".error-message").text("El nombre es obligatorio y debe contener solo letras").show();
            isValid = false;
        }

        if ($("#apellido").val().trim() === "" || !/^[a-zA-Z\s]+$/.test($("#apellido").val().trim())) {
            $("#apellido").next(".error-message").text("El apellido es obligatorio y debe contener solo letras").show();
            isValid = false;
        }

        if ($("#edad").val().trim() === "" || !/^\d+$/.test($("#edad").val().trim())) {
            $("#edad").next(".error-message").text("La edad es obligatoria y debe contener solo números").show();
            isValid = false;
        }

        if ($("#estadocivil").val().trim() === "") {
            $("#estadocivil").next(".error-message").text("El estado civil es obligatorio").show();
            isValid = false;
        }

        if ($("#telefono").val().trim() === "" || !/^\d+$/.test($("#telefono").val().trim())) {
            $("#telefono").next(".error-message").text("El teléfono es obligatorio y debe contener solo números").show();
            isValid = false;
        }

        if ($("#direccion").val().trim() === "") {
            $("#direccion").next(".error-message").text("La dirección es obligatoria").show();
            isValid = false;
        }

        if (isValid) {
            // Mostrar mensaje de registro exitoso
            $("#formulario").after('<div class="success-message" style="color: green;">Registro exitoso</div>');
        }
    });
});