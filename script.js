document.getElementById('aceptar').addEventListener('click',function(){
    
    const nombre = document.querySelector('#nombre input').value.trim();  
    const email = document.querySelector('#email input').value.trim();
    const nacimiento = document.querySelector('#nacimiento input').value.trim();
    const tel = document.querySelector('#tel input').value.trim();
    const checkbox = document.getElementById('checkbox');

    console.log(typeof tel);

    if (nombre === '') {
        alert('Por favor ingresa tu nombre. El campo no puede quedar vacío.');
    } else if (email === ''){
        alert('Por favor ingresa tu correo. El campo no puede quedar vacío.');
    } else if (!email.includes('@')){
        alert('Correo no aceptado. Tienes que ingresar una dirección de correo valida.');
    } else if (nacimiento === ''){
        alert('Por favor ingresa tu fecha de nacimiento. El campo no puede quedar vacío.');
    } else if (tel === ''){
        alert('Por favor ingresa tu teléfono. El campo no puede quedar vacío.');
    } else if (!checkbox.checked){
        alert('Por favor verifica que has leído y acepta los términos y condiciones.');
    } else{
        alert('Registro completo ' + nombre + '!');
    }
})