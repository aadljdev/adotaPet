const penseNissoConteudo = [
    {
        titulo: "Por que adotar?",
        texto: "Adotar um animal é um ato de amor que salva vidas. Milhares de animais aguardam por uma nova chance de ser felizes ao lado de uma família que os ame."
    },
    {
        titulo: "Benefícios de ter um animal em casa",
        texto: "Animais de estimação trazem alegria, companheirismo e até benefícios à saúde, como a redução do estresse e a promoção de uma vida mais ativa."
    },
    {
        titulo: "Adoção responsável",
        texto: "A adoção deve ser uma decisão consciente. Certifique-se de estar preparado para assumir a responsabilidade de cuidar e dar amor a um animal durante toda a sua vida."
    }
];

const penseNissoSection = document.querySelector('.penseNisso-cards');

penseNissoConteudo.forEach(conteudo => {
    const card = document.createElement('div');
    card.className = 'penseNisso-card';
    card.innerHTML = `
        <h3>${conteudo.titulo}</h3>
        <p>${conteudo.texto}</p>
    `;
    penseNissoSection.appendChild(card);
});
