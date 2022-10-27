window.addEventListener('load', ()=> {
    
    const form = document.getElementById('formulario');
    const apellido = document.getElementById('apellido');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const comentario = document.getElementById('comentario');
    const tituloeor = document.getElementById('titulo');

    form.addEventListener('submit', (e) => {
        
        e.preventDefault();
        validaCampos();
    });
    
    const validaCampos = () => {
        
        const apellidoValor = apellido.value.trim();
        const nombreValor = nombre.value.trim();
        const emailValor = email.value.trim();
        const comentarioValor = comentario.value.trim();
        var contador = 0;

        if (apellidoValor === '' ) {
            validaError(apellido, 'Campo vacío');
        }else if (validarLetras(apellidoValor) == false){
            /* validaError(apellido, 'No pueden tener número'); */
            validaError(apellido, 'Debe ingresar sólo letras');
        }else{
            validaOk(apellido);
            contador = contador+1;
        }
        
        if (nombreValor === '') {
            validaError(nombre, 'Campo vacío');
        }else if (validarLetras(nombreValor) == false){
            validaError(nombre, 'Debe ingresar sólo letras');
        }else{
            validaOk(nombre);
            contador = contador+1;
        }

        if (emailValor === '') {
            validaError(email, 'Campo vacío');
        }else if (validaEmail(emailValor) == false) {
            validaError(email, 'El e-mail no es valido');
        }else{
            validaOk(email);
            contador = contador+1;
        }

        if (comentarioValor === ''){
            validaError(comentario, 'Campo vacío');
        }else if (comentarioValor.length > 256){
            validaError(comentario, 'El comentario tine mas de 256 caracteres.')
        }else{
            validaOk(comentario);
            contador = contador+1;
        }
        
        if (contador >= 4 ) {
            alert('Mensaje enviado exitosamente');
            validaOk(tituloeor, 'El mensaje se a enviado correctamente');
            formulario.reset();
        }else{
            validaError(tituloeor,'Error al completar/enviar el mensaje');
            alert('Error al completar/enviar el mensaje');
        }

    }

    const validaError = (input, mensaje) =>{
       
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = mensaje;

    } 

    const validaOk = (input, mensaje) => {
        
        const formControl = input.parentElement;
        formControl.className = 'form-control oks';

    }

    const validarLetras = (input) => {
        
        return /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/.test(input);
    
    }

    const validaEmail = (email) =>{
    
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    
    }

});