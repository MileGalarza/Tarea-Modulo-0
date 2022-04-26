
div = document.getElementById('crearCuenta');
div.style.display = 'none';



var aUsuario = [],
    aPassword = [],
    aEmail = [],
    aTelefono = [];

var elementoBotonRegistrar = document.querySelector('#btnRegistrar');

elementoBotonRegistrar.addEventListener('click',registrarUsuario);

function registrarUsuario(){
    var usuario = document.querySelector('#txtUsuario').value,
        password = document.querySelector('#txtPassword').value,
        email = document.querySelector('#txtEmail').value,
        telefono = document.querySelector('#txtTelefono').value;

    aUsuario.push(usuario);
    aPassword.push(password);
    aEmail.push(email);
    aTelefono.push(telefono);

    localStorage.setItem('usuario_usuarios', JSON.stringify(aUsuario));
    localStorage.setItem('password_usuarios', JSON.stringify(aPassword));
    localStorage.setItem('email_usuarios', JSON.stringify(aEmail));
    localStorage.setItem('telefono_usuarios', JSON.stringify(aTelefono));
}