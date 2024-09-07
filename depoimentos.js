const depoimentos = [
    {
        imgSrc: './img/depoimento1.png',
        historia: 'Adotei o Bob há 6 meses e foi a melhor decisão que tomei. Ele trouxe muita alegria para nossa casa e se adaptou muito bem!',
        nome: 'Ana Silva',
        local: 'São Paulo/SP'
    },
    {
        imgSrc: './img/depoimento2.png',
        historia: 'O Rex é um verdadeiro companheiro! Ele se tornou o melhor amigo do meu filho, e todos os dias é uma nova aventura com ele.',
        nome: 'Carlos Mendes',
        local: 'Rio de Janeiro/RJ'
    }
];


window.onload = () => {
    const container = document.getElementById('cards-depoimentos');

    depoimentos.forEach(depoimento => {
        // Cria o card
        const card = document.createElement('div');
        card.className = 'cardDepoimento';
        
        // Cria e adiciona a imagem
        const img = document.createElement('img');
        img.src = depoimento.imgSrc;
        img.alt = 'Foto do depoente';
        img.className = 'foto-depoente'; 
        card.appendChild(img);
        
        // Cria o container de texto
        const textoConteudo = document.createElement('div');
        textoConteudo.className = 'texto-conteudo'; 
        
        // Cria e adiciona a história
        const historia = document.createElement('p');
        historia.textContent = depoimento.historia;
        historia.className = 'historia';
        textoConteudo.appendChild(historia);
        
        // Cria e adiciona o nome
        const nome = document.createElement('p');
        nome.textContent = depoimento.nome;
        nome.className = 'nome';
        textoConteudo.appendChild(nome);
        
        // Cria e adiciona o local
        const local = document.createElement('p');
        local.textContent = depoimento.local;
        local.className = 'local';
        textoConteudo.appendChild(local);
        
        // Adiciona o container de texto ao card
        card.appendChild(textoConteudo);
        
        // Adiciona o card ao contêiner
        container.appendChild(card);
    });
};
