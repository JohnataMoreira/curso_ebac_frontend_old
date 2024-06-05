$(document).ready(function() {
    /* Mostra o formulário ao clicar no botão adicionar tarefas e já adiciona foco no input*/
    $('header button').click(function() {
        $('form').slideDown();
        $('#input-tarefa').focus();
    });
});

// Ocultar o formulário ao clicar no botão limpar
$('#botao-limpar').click(function() {
    $('form').slideUp();
})

$('form').on('submit', function(e) {
    e.preventDefault();

    // Recebe o valor da nova tarefa
    var novaTarefa = $('#input-tarefa').val();
    if (novaTarefa) {
// Alterna a classe para 'finalizada' ao clicar em uma tarefa
$('.listaAdd').on('click', 'li', function() {
    $(this).toggleClass('finalizada');
});
        // Adiciona a nova tarefa na lista
        $('.listaAdd').append('<li>' + novaTarefa + '</li>');
        
        // Limpa o campo de entrada
        $('#input-tarefa').val('');
    }
    // Mantém o foco no input
    $('#input-tarefa').focus();
});