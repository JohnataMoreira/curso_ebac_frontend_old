    const form = document.getElementById('formulario');

    const campoA = document.getElementById('num1');
    const campoB = document.getElementById('num2');

    const msgErro = document.querySelector('.error-message');
    const msgSucesso = document.querySelector('.sucess-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        msgErro.style.display = 'none';
        msgSucesso.style.display = 'none';

        if (campoA.value === '' || campoB.value === '') {
            errorMessage.innerText = 'Campo vazio.';
            errorMessage.style.display = 'block';
            return;
        }

        const campo1 = parseInt(campoA.value);
        const campo2 = parseInt(campoB.value);

        if(campo1 == campo2){
            alert('Os números são identicos. Digite novamente!');
            num1.value = '';
            num2.value = '';

            const campoA = document.getElementById('campoA');
            const campoB = document.getElementById('campoB');
        } else if(campo1 > campo2){
            msgErro.classList.add('error');
            msgErro.innerHTML = `O número 1 é MAIOR. REFAÇA!`;
            document.querySelector('.error-message').style.display = 'block';

            const campoA = document.getElementById('campoA');
            const campoB = document.getElementById('campoB');
            
            num1.value = '';
            num2.value = '';
        } else{
            msgErro.classList.remove('error');
            msgSucesso.innerText = `O número 2 é MAIOR. PROSSIGA!`;
            msgSucesso.style.display = 'block';
        }
    });

    campoA.addEventListener('input', function () {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    });

    campoB.addEventListener('input', function () {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    })