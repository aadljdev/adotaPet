const animaisAdotados = [
    {
        nome: "Luna",
        imagem: "./img/dog4.png",
        dataAdocao: "20/07/2023"
    },
    {
        nome: "Max",
        imagem: "./img/dog5.png",
        dataAdocao: "15/08/2023"
    },
    {
        nome: "Bella",
        imagem: "./img/dog6.png",
        dataAdocao: "01/09/2023"
    },
    {
        nome: "Charlie",
        imagem: "./img/dog7.png",
        dataAdocao: "22/08/2023"
    }
];

const cardsAdotados = document.getElementById('cardsAdotados');

animaisAdotados.forEach(animal => {
    const card = document.createElement('div');
    card.classList.add('cardAdotado');

    card.innerHTML = `
        <img src="${animal.imagem}" alt="Foto do animal ${animal.nome}">
        <div class="cardInfo">
            <p>Nome: <span>${animal.nome}</span></p>
            <p>Data de Adoção: <span>${animal.dataAdocao}</span></p>
        </div>
    `;

    cardsAdotados.appendChild(card);
});
