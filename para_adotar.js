
const animais = [
    
    {
        nome: "Rex",
        idade: "5 anos",
        cidade: "São Paulo/SP",
        castrado: "SIM",
        vacinado: "SIM",
        dataCadastro: "25/01/2024",
        contatoNome: "Ana",
        contatoTelefone: "11-996544321",
        imgSrc: "./img/dog1.png",
        porte: "Grande"
    },
    {
        nome: "Luna",
        idade: "2 anos",
        cidade: "Sorocaba/SP",
        castrado: "NÃO",
        vacinado: "SIM",
        dataCadastro: "30/01/2024",
        contatoNome: "João",
        contatoTelefone: "15-997844556",
        imgSrc: "./img/dog2.png",
        porte: "Pequeno"
    },
    {
        nome: "Max",
        idade: "4 anos",
        cidade: "Jundiaí/SP",
        castrado: "SIM",
        vacinado: "SIM",
        dataCadastro: "05/02/2024",
        contatoNome: "Mariana",
        contatoTelefone: "11-988776655",
        imgSrc: "./img/dog3.png",
        porte: "Médio"
    },
    {
        nome: "Mia",
        idade: "1 ano",
        cidade: "São Bernardo do Campo/SP",
        castrado: "SIM",
        vacinado: "NÃO",
        dataCadastro: "10/02/2024",
        contatoNome: "Felipe",
        contatoTelefone: "11-999223344",
        imgSrc: "./img/cat1.png",
        porte: "Pequeno"
    },
    {
        nome: "Nina",
        idade: "6 meses",
        cidade: "Diadema/SP",
        castrado: "NÃO",
        vacinado: "SIM",
        dataCadastro: "15/02/2024",
        contatoNome: "Renata",
        contatoTelefone: "11-977112233",
        imgSrc: "./img/cat2.png",
        porte: "Pequeno"
    }
];






function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';

    animais.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${animal.imgSrc}" alt="Foto de ${animal.nome}">
            <p>Nome: <span>${animal.nome}</span></p>
            <p>Idade: <span>${animal.idade}</span></p>
            <p>Cidade: <span>${animal.cidade}</span></p>
            <p>Castrado: <span>${animal.castrado}</span></p>
            <p>Vacinado: <span>${animal.vacinado}</span></p>
            <p>Data Cadastro: <span>${animal.dataCadastro}</span></p>
            <p>Porte: <span>${animal.porte}</span></p>
            
            <p>Contato: <br>Nome: <span>${animal.contatoNome}</span><br>Telefone: <span>${animal.contatoTelefone}</span></p>
            
            <button>ADOTAR</button>
        `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderCards);
