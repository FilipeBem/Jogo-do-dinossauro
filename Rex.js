let personagem = document.querySelector('#personagem')
let Cacto = document.querySelector('#Cacto')
let Ave = document.querySelector('#Ave')
let reset = document.querySelector('#reset')
function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 460)
}

var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(Cacto).getPropertyValue('left')
       )
    
       if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 140){
        Cacto.style.animation = 'none'
        Cacto.style.display = 'none'
        swal({
            title: "Game Over",
            text: "Click no botão",
            icon: "warning",
            button: "Reiniciar",
        });
        reset.style.display = 'block'
}
    var DireitaQuadrado = parseInt(
        window.getComputedStyle(Ave).getPropertyValue('left')
       )

       if(DireitaQuadrado < 20 && DireitaQuadrado > 0 && topoPersonagem <= 140){
        Ave.style.animation = 'none'
        Ave.style.display = 'none'
        swal({
            title: "Game Over",
            text: "Click no botão",
            icon: "warning",
            button: "Reiniciar",
        });
        reset.style.display = 'block'
    }
    

}, 10)

function esperar(tempo = 1000){
    return new Promise(resolve => setTimeout(() => resolve(),tempo))
}
async function conometro (){
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.querySelector('#segundos');
    for(let I3=1; I3>-61; I3++){
        for (let I2=1; I2<61; I2++){
            for (let I1 = 01; I1<61; I1++){
                if(I1<10 || I2<10 || I3<10){
                I1 = I1 < 10 ? '0' + I1 : I1;
                I2 = I2 < 10 ? '0' + I2 : I2;
                I3 = I3 < 10 ? '0' + I3 : I3;
                }
            
                await esperar(1000)
                segundos.innerHTML = I1
            }
            segundos.innerHTML = 00
            minutos.innerHTML = I2
        }
        minutos.innerHTML = 00
        horas.innerHTML = I3
    }
}
conometro();