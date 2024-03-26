const info = document.getElementById('info');
//Dados do usuário
const nome = 'Nome: Paul Puddles';
const idade1 = 'Idade: 18 anos';
const curso = 'Curso: Engenharia de Software';
const ano = 'Ano: 2024';
//mostrando os dados 
const infos = [nome, idade1, curso, ano];

infos.forEach(infoItem => {
    const p = document.createElement('p');
    p.textContent = infoItem;
    info.appendChild(p);
});