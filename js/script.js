// Mostrar el formulario al hacer clic en "Ingresar"
document.getElementById('btnLogin').addEventListener('click', () => {
    fetch('/html/formulario-login.html')
        .then((response) => response.text())
        .then((html) => {
            document.getElementById('login-container').innerHTML = html;

            // Cargar dinámicamente el archivo CSS
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/css/login.css';
            document.head.appendChild(link);

            // Mostrar el formulario como un modal
            document.getElementById('loginForm').style.display = 'flex';

            // Asignar funcionalidad al botón "Cerrar"
            document.getElementById('closeFormbtn').addEventListener('click', () => {
                const pestaña = document.getElementById('loginForm');
                if (pestaña) {
                    pestaña.style.display = 'none';
                } else {
                    console.error('Formulario no encontrado');
                }
            });

            // Asignar funcionalidad al botón "Crear Usuario"
            document.getElementById('createUserBtn').addEventListener('click', () => {
                alert('Funcionalidad para crear nuevo usuario aún no implementada.');
            });
        })
        .catch((error) => console.error('Error al cargar el formulario:', error));
});

// Generar PDF con los datos del formulario
function GenerarPDF() {
    var vUser = document.getElementById('username');
    var vPassword = document.getElementById('password');

    if (vUser.value === '') {
        alert('Ingrese su usuario');
        return;
    }
    if (vPassword.value === '') {
        alert('Ingrese la contraseña');
        return;
    }

    var doc = new jsPDF();
    var y = 10;
    var x = 10;

    doc.setFont('times');
    doc.setFontSize(18);
    doc.text(70, y, "Ficha Personal");
    y += 10;
    doc.setFontSize(12);
    doc.text(x, y, 'Usuario');
    doc.text(x + 40, y, vUser.value);
    doc.text(x, y + 10, 'Contraseña');
    doc.text(x + 40, y + 10, vPassword.value);
    doc.save("Registro.pdf");
}

