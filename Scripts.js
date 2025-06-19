document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const cpf = document.getElementById('cpf').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const dataAgendamento = document.getElementById('dataAgendamento').value;
    // Exibe os dados no console (ou pode ser enviado para um servidor)
    console.log(`Nome: ${nome}, Endereço: ${endereco}, CPF: ${cpf}, Sexo: ${sexo}, Telefone: ${telefone}, E-mail: ${email}, Data de Agendamento: ${dataAgendamento}`);
    // Limpa o formulário após o envio
    this.reset();
});

function adicionarAoCarrinho(produto, valor) {
    // Exibe uma mensagem de confirmação
    alert(`${produto} foi adicionado ao carrinho por R$${valor.toFixed(2)}!`);
}
