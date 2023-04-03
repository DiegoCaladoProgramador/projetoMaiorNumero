const form = document.getElementById('numForms');
const numUm = document.getElementById('numUm');
const numdois = document.getElementById('numDois');
let formEValido = false;

function validaNumeros(nA, nB){
    let numeroValido = false;
    if(nB > nA){
        numeroValido = true;
    }
    return numeroValido;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    formEValido = validaNumeros(numUm.value, numdois.value)
    const mensagemSucesso = 'O número dois é maior que o número um'
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.mensagemSucesso');
        if(containerMensagemSucesso){
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block'
        }
        numUm.value = ''
        numdois.value = ''
    } else {
        numdois.style.border = '1px solid red'
        document.querySelector('#mensagemErro').style.display = 'block';
    }
})

numdois.addEventListener('keyup', function(e){
    formEValido = validaNumeros(numUm.value, e.target.value);
    if (!formEValido){
        numdois.classList.add('error');
        document.querySelector('#mensagemErro').style.display = 'block';
    }else{
        numdois.classList.remove('error');
        document.querySelector('#mensagemErro').style.display = 'none';
    }
})