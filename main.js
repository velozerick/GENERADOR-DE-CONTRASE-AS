

let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let constrasena = document.getElementById('contrasena');
let botonlimpiar = document.getElementById('limpiar');
let mensaje = document.getElementById('mensaje');
const cadenacaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'; 

function generar(){
    let numeroDigitado = parseInt(cantidad.value);
    if (isNaN(numeroDigitado) || numeroDigitado < 6 || numeroDigitado > 20) {
        alert('Por favor, ingresa una cantidad entre 6 y 20 caracteres.');
        return;
    }

    let password = '';
    for(let i = 0; i < numeroDigitado; i++){
        let caracteraleatorio = cadenacaracteres[Math.floor(Math.random() * cadenacaracteres.length)];
        password += caracteraleatorio; 
    }
    constrasena.value = password;
}

function limpiar(){
    constrasena.value = '';
    mensaje.textContent = '';
    document.getElementById('titulo').value = '';
    document.getElementById('email').value = '';
}

// Guardar contraseñas
function savePassword() {
    let titulo = document.getElementById('titulo').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = constrasena.value;

    if (!titulo || !email || !password) {
        alert("Por favor, completa todos los campos antes de guardar.");
        return;
    }

    let savedPasswordsContainer = document.getElementById('savedPasswords');
    let detailsDiv = document.createElement('div');
    detailsDiv.className = 'password-details';
    detailsDiv.innerHTML = `
        <div class="password-title" onclick="toggleDetails(this)">
            <strong>${titulo}</strong>
        </div>
        <div class="password-info" style="display:none;">
            <p>Email: ${email}</p>
            <p>Password: ${password}</p>
            <button onclick="deletePassword(this)">Eliminar</button> <!-- Botón para eliminar -->
        </div>
    `;
    savedPasswordsContainer.appendChild(detailsDiv);

}

function toggleDetails(element) {
    let infoDiv = element.nextElementSibling;
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
}


function deletePassword(element) {
    let passwordDetail = element.closest('.password-details');
    passwordDetail.remove(); // Elimina el bloque de detalles de contraseña
}











