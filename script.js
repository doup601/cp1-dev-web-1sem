//Criando autentificação do usuário
function autenticarUsuario() {
    const usuarioCadastro = { nome: 'admin', senha: '1234'};
    const nomeUsuario = prompt('Digite o nome de usuário: ');
    const senha = prompt('Digite a senha');
//Mensagem para o usuário após logar e caso houver um erro de autentificação
    if (nomeUsuario === usuarioCadastro.nome && senha === usuarioCadastro.senha) {
        alert('login realizado com sucesso!');
    } else {
        alert('Falha de autenticação. Tente novamente.');
    }
}