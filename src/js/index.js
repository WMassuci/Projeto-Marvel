/* 
  OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:
    
    - colocar a classe selecionado no personagem que passamos o mouse em cima, para adicionar a animação nele

    - retirar a classe 'selecionado' no personagem que esta selecionado


  OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar  a imagem e nome do personagem grande

    - alterar imagem do jogador 1
    - alterar o nome do jogador 1
*/

/*
  OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:
    
    - colocar a classe selecionado no personagem que passamos o mouse em cima, para adicionar a animação nele

    - retirar a classe 'selecionado' no personagem que esta selecionado
*/

//getElementById = busque o elemento pelo seu ID
//addEventListener = adiciona algo para ficar 'ouvindo' o elemento
//mouseenter = mouse passa em cima
// () => '{}'  = criando uma função anomima
//classList = lista de classes

//querySelectorAll = seleciona todos os elemento que contem a classe colocada entre ('')
//forEach = para cada

const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {

    
    const idSelecionado = personagem.attributes.id.value
    if(idSelecionado === 'ultron') return; // para o jogador 1 não selecionar o ultron

    /*
    OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:
      
      - colocar a classe selecionado no personagem que passamos o mouse em cima, para adicionar a animação nele
      - retirar a classe 'selecionado' no personagem que esta selecionado
    */

    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')

    personagem.classList.add('selecionado')

    /*
        OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar  a imagem e nome do personagem grande

          - alterar imagem do jogador 1
          - alterar o nome do jogador 1
      */

    //trocando imagem
    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/img/${idSelecionado}.png`;

    //trocando o nome
    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name')
    
    nomeJogador1.innerHTML = nomeSelecionado
  })
})

