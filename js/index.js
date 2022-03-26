let c1 = document.querySelector('#c1');
let c2 = document.querySelector('#c2');
let c3 = document.querySelector('#c3');
let c4 = document.querySelector('#c4');
let c5 = document.querySelector('#c5');
let c6 = document.querySelector('#c6');
let c7 = document.querySelector('#c7');
let c8 = document.querySelector('#c8');
let c9 = document.querySelector('#c9');
let jogador = document.querySelector('#jogador');
let vencedor = document.querySelector('#vencedor');
let botao = document.querySelector('#botao');
let perda = document.querySelector('.derrota');
let jogo = '';
let contador = 0;

let v = [];

for( let i = 1; i < 10; i++){
    v[i] = 0;
}

let turn = 'X';
jogador.innerHTML = turn;
botao.style.display = 'none';

c1.addEventListener('click', ()=>{
    if( v[1] == 0)
        v[1] = jogando( c1);
    derrotaTotal();
});

c2.addEventListener('click', ()=>{
    if( v[2] == 0)
        v[2] = jogando( c2);
    derrotaTotal();
});

c3.addEventListener('click', ()=>{
    if(v[3] == 0)
        v[3] = jogando( c3);
    derrotaTotal();
});

c4.addEventListener('click', ()=>{
    if( v[4] == 0)
        v[4] = jogando( c4);
    derrotaTotal();
});

c5.addEventListener('click', ()=>{ 
    if( v[5] == 0)
        v[5] = jogando( c5);
    derrotaTotal();
});

c6.addEventListener('click', ()=>{
    if( v[6] == 0)
        v[6] = jogando( c6);
    derrotaTotal();
});

c7.addEventListener('click', ()=>{
    if( v[7] == 0)
        v[7] = jogando( c7);
    derrotaTotal();
});

c8.addEventListener('click', ()=>{
    if( v[8] == 0)
        v[8] = jogando( c8);
    derrotaTotal();
});

c9.addEventListener('click', ()=>{
    if( v[9] == 0)
        v[9] = jogando( c9);
    derrotaTotal();
});

function jogando( casa){
    if( jogo != 'comecou'){
        jogo = 'comecou';
    }
    casa.innerHTML = turn;
    if( turn == 'X'){
        turn = 'O';
    }else{
        turn = 'X';
    }
    contador++;
    jogador.innerHTML = turn;
    vitoria();
    return 1;
}

function vitoria(){
    if( contador >= 3){
        if( c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML && c1.innerHTML != ''){
            acabou(c1.innerHTML);
            colorir( c1, c2, c3);
        }    
        if( c1.innerHTML == c4.innerHTML && c4.innerHTML == c7.innerHTML && c1.innerHTML != ''){
            acabou(c1.innerHTML);
            colorir( c1, c4, c7);
        }    
        if( c1.innerHTML == c5.innerHTML && c5.innerHTML == c9.innerHTML && c1.innerHTML != ''){
            acabou(c1.innerHTML);
            colorir( c1, c5, c9);
        }    
        if( c2.innerHTML == c5.innerHTML && c5.innerHTML == c8.innerHTML && c2.innerHTML != ''){
            acabou(c2.innerHTML);
            colorir( c2, c5, c8);
        }    
        if( c3.innerHTML == c6.innerHTML && c6.innerHTML == c9.innerHTML && c3.innerHTML != ''){
            acabou(c3.innerHTML);
            colorir( c3, c6, c9);
        }    
        if( c3.innerHTML == c5.innerHTML && c5.innerHTML == c7.innerHTML && c3.innerHTML != ''){
            acabou(c3.innerHTML);
            colorir( c3, c5, c7);
        } 
        if( c4.innerHTML == c5.innerHTML && c5.innerHTML == c6.innerHTML && c4.innerHTML != ''){
            acabou(c4.innerHTML);
            colorir( c4, c5, c6);
        } 
        if( c7.innerHTML == c8.innerHTML && c8.innerHTML == c9.innerHTML && c7.innerHTML != ''){
            acabou(c7.innerHTML);
            colorir( c7, c8, c9);
        }  
    }
}

function colorir( a, b, c){
    a.style.background = 'green';
    b.style.background = 'green';
    c.style.background = 'green';
}

function acabou(valor){
    for(let  i = 1; i < 10; i++){
        v[i] = 1;
    }
    console.log( v[7]);
    jogador.innerHTML = '';
    vencedor.innerHTML = valor;
    botao.style.display = 'block';
}

botao.addEventListener('click', ()=>{
    location.reload();
})


function derrotaTotal(){    
    if( vencedor.innerHTML == '?' && contador == 9){
        perda.style.display = 'block';
        botao.style.display = 'block';
    }
}