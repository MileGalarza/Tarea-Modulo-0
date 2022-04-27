
let aUsuario = [],
    aPassword = [],
    aEmail = [],
    aTelefono = [];

let elementoBotonRegistrar = document.querySelector('#btnRegistrar');

elementoBotonRegistrar.addEventListener('click', registrarUsuario);

function registrarUsuario() {

    let vUsuario = document.getElementById("txtUsuario").value;
    let vPassword = document.getElementById("txtPassword").value;
    let vEmail = document.getElementById("txtEmail").value;
    let vTelefono = document.getElementById("txtTelefono").value;

    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;


    if (vUsuario == null || vUsuario.length == 0 || /^\s+$/.test(vUsuario)) {
        alert('Digite Nombre de Usuario!!');
        document.getElementById("txtUsuario").focus();

    } else if (vPassword == null || vPassword.length == 0 || /^\s+$/.test(vPassword)) {
        alert('Digite Contraseña!!');
        document.getElementById("txtPassword").focus();

    } else if (!re.exec(vEmail)) {
        alert('Digite Correo Electrónico Válido!!');
        document.getElementById("txtEmail").focus();

    } else if (!vTelefono.match(/^\d+/)) {
        alert('Digite Numero de Telefono!!');
        document.getElementById("txtTelefono").focus();
    }else{

        let usuario = document.querySelector('#txtUsuario').value,
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

        limpiar();
        document.getElementById("txtUsuario").focus();
    }
}

function limpiar(){
    document.getElementById("txtUsuario").value = "";
    document.getElementById("txtPassword").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtTelefono").value = "";
}