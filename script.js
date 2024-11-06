// // Crea el checkbox para el sidebar toggle
// const sidebarToggle = document.createElement('input');
// sidebarToggle.type = 'checkbox';
// sidebarToggle.id = 'sidebar-toggle';
// sidebarToggle.className = 'sidebar-toggle';

// // Crea el label para el sidebar toggle
// const sidebarIcon = document.createElement('label');
// sidebarIcon.htmlFor = 'sidebar-toggle';
// sidebarIcon.className = 'sidebar-icon';
// sidebarIcon.style.backgroundColor = 'rgb(153, 27, 27)';
// sidebarIcon.style.borderRadius = '5px';
// sidebarIcon.innerHTML = '&#9776;';

// // Crea el contenedor del sidebar
// const sidebar = document.createElement('div');
// sidebar.id = 'sidebar';
// sidebar.className = 'sidebar';

// // Crea el botón de cierre del sidebar
// const closeBtn = document.createElement('label');
// closeBtn.htmlFor = 'sidebar-toggle';
// closeBtn.className = 'close-btn';
// closeBtn.innerHTML = '&times;';

// // Añade el botón de cierre al sidebar
// sidebar.appendChild(closeBtn);

// // Crea el contenedor del título principal
// const titleContainer = document.createElement('div');
// titleContainer.style.display = 'flex';
// titleContainer.style.alignItems = 'center';
// titleContainer.style.margin = '20px 10px 10px 10px';
// titleContainer.style.fontFamily = 'Sora';

// // Crea la imagen del título principal
// const titleImg = document.createElement('img');
// titleImg.src = 'img/home.svg';
// titleImg.alt = '';
// titleImg.style.backgroundColor = 'rgb(153, 27, 27)';
// titleImg.style.padding = '10px';
// titleImg.style.borderRadius = '5px';

// // Crea el enlace del título principal
// const titleLink = document.createElement('a');
// titleLink.href = 'index.html';
// titleLink.style.fontSize = '20px';
// titleLink.style.marginRight = '60px';
// titleLink.textContent = 'CDI - Carmen Estella Mendoza de Flores';

// // Añade la imagen y el enlace al contenedor del título principal
// titleContainer.appendChild(titleImg);
// titleContainer.appendChild(titleLink);

// // Añade el contenedor del título principal al sidebar
// sidebar.appendChild(titleContainer);

// // Añade una línea horizontal
// sidebar.appendChild(document.createElement('hr'));

// // Aqui está la función para crear un elemento de la lista del sidebar
// function createSidebarItem(imgSrc, linkHref, linkText) {
//     const itemContainer = document.createElement('div');
//     itemContainer.className = 'sidebartitulos';

//     const itemImg = document.createElement('img');
//     itemImg.src = imgSrc;
//     itemImg.alt = '';

//     const itemLink = document.createElement('a');
//     itemLink.href = linkHref;
//     itemLink.textContent = linkText;

//     itemContainer.appendChild(itemImg);
//     itemContainer.appendChild(itemLink);

//     return itemContainer;
// }

// // Crea los elementos del sidebar
// const pacientesItem = createSidebarItem('img/usuario.svg', '', 'Pacientes');
// sidebar.appendChild(pacientesItem);
// sidebar.appendChild(document.createElement('hr'));

// // Crea el dropdown
// const dropdown = document.createElement('div');
// dropdown.className = 'dropdown';

// const dropdownToggle = document.createElement('input');
// dropdownToggle.type = 'checkbox';
// dropdownToggle.id = 'dropdown-toggle';
// dropdownToggle.className = 'dropdown-toggle';

// const dropdownLabelContainer = document.createElement('div');
// dropdownLabelContainer.className = 'dropdown-label sidebartitulos';

// const dropdownImg = document.createElement('img');
// dropdownImg.src = 'img/hospital.svg';
// dropdownImg.alt = '';

// const dropdownLabel = document.createElement('label');
// dropdownLabel.htmlFor = 'dropdown-toggle';
// dropdownLabel.className = 'dropdown-label';
// dropdownLabel.style.fontSize = '17px';
// dropdownLabel.innerHTML = 'Centro Médico &#9662;';

// dropdownLabelContainer.appendChild(dropdownImg);
// dropdownLabelContainer.appendChild(dropdownLabel);

// const dropdownContent = document.createElement('div');
// dropdownContent.className = 'dropdown-content';

// const personalLink = document.createElement('a');
// personalLink.href = '#link2';
// personalLink.className = 'dropdown-texto';
// personalLink.style.fontSize = '17px';
// personalLink.textContent = 'Personal';

// const examenesLink = document.createElement('a');
// examenesLink.href = '#link2';
// examenesLink.className = 'dropdown-texto';
// examenesLink.style.fontSize = '17px';
// examenesLink.textContent = 'Examenes';

// dropdownContent.appendChild(personalLink);
// dropdownContent.appendChild(examenesLink);

// dropdown.appendChild(dropdownToggle);
// dropdown.appendChild(dropdownLabelContainer);
// dropdown.appendChild(dropdownContent);

// sidebar.appendChild(dropdown);

// // Crea los demás elementos del sidebar
// const emergenciasItem = createSidebarItem('img/exclamacion.svg', '#link4', 'Emergencias');
// const consultasItem = createSidebarItem('img/chart.svg', '#link5', 'Consultas');
// const cerrarSesionItem = createSidebarItem('img/bracket.svg', '#link6', 'Cerrar Sesion');

// sidebar.appendChild(emergenciasItem);
// sidebar.appendChild(consultasItem);
// sidebar.appendChild(cerrarSesionItem);

// // Añade el sidebar y el toggle al body
// document.body.appendChild(sidebarToggle);
// document.body.appendChild(sidebarIcon);
// document.body.appendChild(sidebar);

// Selecciona el elemento del mensaje por su id
const mensaje = document.getElementById('mensaje');
const linkPacientes = document.getElementById('linkPacientes');
linkPacientes.addEventListener('click', function(event) {
    event.preventDefault();
    mensaje.textContent = 'Pacientes';
});

const linkPersonal = document.getElementById('linkPersonal');
linkPersonal.addEventListener('click', function(event) {
    event.preventDefault();
    mensaje.textContent = 'Personal';
});

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
