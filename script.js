function mostrarPagina(id){
    document.querySelectorAll('.pagina').forEach(p => 
        p.classList.remove('ativa')
    );

    document.getElementById(id).classList.add('ativa');

    const main = document.querySelector('main');
    main.classList.remove('contato');

    if (id === 'contato') {
        main.classList.add('contato');
    }
}

function login(){
    window.location.href ="pages/login.html";
}
function toggleMobile() {
    document.getElementById('mobileMenu').classList.toggle('open');
}


$(document).ready(function() {

    // Função responsável por buscar e exibir os dados da tabela
    function loadUsersData() {
        $.ajax({
            url: 'conexao.php',
            type: 'GET',           // Método HTTP GET para buscar dados
            dataType: 'json',      // Esperamos uma resposta JSON
            beforeSend: function() {
                // Mostra uma mensagem de carregamento antes de enviar a requisição
                $('#clients-table-container').html('<p class="loading-message">Buscando dados...</p>');
            },
            success: function(data) {
                // Verifica se houve um erro retornado pelo PHP
                if (data.error) {
                    $('#clients-table-container').html('<p class="error-message">Erro ao carregar dados: ' + data.error + '</p>');
                    return;
                }

                // Se os dados foram recebidos com sucesso e não há erro
                if (data.length > 0) {
                    var tableHtml = '<table><thead><tr>';

                    // Cria os cabeçalhos da tabela dinamicamente com base nas chaves do primeiro objeto
                    $.each(data[0], function(key, value) {
                        tableHtml += '<th>' + key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }) + '</th>';
                    });
                    tableHtml += '</tr></thead><tbody>';

                    // Itera sobre cada item recebido
                    $.each(data, function(index, user) {
                        tableHtml += '<tr>';
                        // Itera sobre as propriedades de cada item para criar as células da linha
                        $.each(user, function(key, value) {
                            tableHtml += '<td>' + value + '</td>';
                        });
                        tableHtml += '</tr>';
                    });

                    tableHtml += '</tbody></table>';
                    $('#clients-table-container').html(tableHtml); // Insere a tabela no container
                } else {
                    $('#clients-table-container').html('<p>Nenhum dado encontrado.</p>');
                }
            },
            error: function(xhr, status, error) {
                // Trata erros da requisição AJAX (ex: problema de rede, erro 404, erro 500)
                $('#clients-table-container').html('<p class="error-message">Erro na requisição AJAX: ' + status + ' - ' + error + '</p>');
                console.error("Erro na requisição AJAX:", status, error, xhr);
            },
            complete: function() {
                // Remove a mensagem de carregamento (se ainda visível)
                $('.loading-message').remove();
            }
        });
    }

    // Listener do botão de envio manda os dados do formulário via POST
    $('#btnEnviar').on('click', function() {
        $.ajax({
            url: 'conexao.php',
            type: 'POST',          // Método HTTP POST para inserir dados
            dataType: 'json',      // Esperamos uma resposta JSON
            data: {
                // Coleta os valores dos inputs pelo id
                nome: $('#nome').val(),
                email: $('#email').val(),
                tel: $('#tel').val(),
                msg: $('#msg').val()
            },
            success: function(response) {
                if (response.sucesso) {
                    $('#nome, #email, #tel, #msg').val(''); // Limpa os campos
                    loadUsersData(); // Atualiza a tabela com o novo registro
                }
            },
            error: function() {
                alert('Erro ao enviar mensagem.');
            }
        });
    });

    // Chama a função para carregar os dados assim que a página estiver pronta
    loadUsersData();

});