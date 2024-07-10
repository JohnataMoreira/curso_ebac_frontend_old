$('document').ready(function(){
    
    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            sobrenome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            senha: {
                required: true
            },
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (evento, validador) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})
