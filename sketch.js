// Definindo variáveis globais
let jardineiro;
let plantas = [];
let temperatura = 10;
let totalArvores = 0;

function setup() {
  createCanvas(600, 400);
  jardineiro = new Jardineiro(width / 2, height - 50);
}

function draw() {
  // Usando map() para ajustar a cor de fundo de forma mais controlada
  let corFundo = lerpColor(color(217, 112, 26), color(219, 239, 208),
    map(totalArvores, 0, 100, 0, 1));

  background(corFundo);

  mostrarInformacoes();

  temperatura += 0.1;

  jardineiro.atualizar();
  jardineiro.mostrar();

  // Verifica se o jogo acabou
  verificarFimDeJogo();

  // Usando map() para aplicar o comportamento de árvores plantadas
  plantas.map((arvore) => arvore.mostrar());
}

// Função para mostrar as informações na tela
function mostrarInformacoes() {
  textSize(16);
  fill(0);
  text("tempertura: " + temperatura.toFixed(2),10,30);
  text("Arvores plantadas: " + totalArvores,10, 50);
  text("Para movimentar o personagem use as setas do teclado.", 10, 80);
}
// Função para verificar se o jogou acabou 
function verificarFimdejogo() {
 if (totalArvores > temperatura) {
    mostrarMensagemDeVitoria();
 } else if (temperatura > 50) {
   mostrarMensagemDeDerrota();
 }
}
// Função para mostrar a mensagem de vitoria
 functio mostrarMensagemDeVitoria();
 textSize(20);
 fill(0, 0, 0);
 text("👩‍🌾 Voce venceu! Voce plantou muitas ávores!", 100, 200);
 noLoop();
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 }
