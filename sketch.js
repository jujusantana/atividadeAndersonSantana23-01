//criar variáveis

var tPato;
var tPatoImg;

//função que carrega imagens
function preload()
{
    //carregar imagens
    tPatoImg = addImage("img/pato.png");
}


//função que inicializa o arquivo
function setup()
{
    //cria tamanho do fundo da tela
    //criar sprites
    //carregar imagem
    //colocar tamanho
    createCanvas(600,200);

    tPato = createSprite(100,100,20,20);
    tPato.addImage("tPato",tPatoImg);
    tPato.scale = 0.5;

}


//função que executa o programa até que seja parado
function draw()
{
    
    background("#BFBFBF");

  
    if(keyDown("space")){

        tRex.velocityY = -10;
    }
    
    tPato.velocityY = tPato.velocityY + 0.8;

    drawSprites();

}
    //cria os elementos na tela (sprites)

 
