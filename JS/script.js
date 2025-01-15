//Textos da sessão de movimentos
const textoMovimentos = [' A música rap pode ter começado no Bronx , mas há um caso forte a ser feito de que o Brooklyn forneceu uma contribuição igual ou ainda maior. Sempre que a cultura fazia história, o Brooklyn estava em casa, e muitas vezes era a casa. Há muito tempo, o bairro é o epicentro da cultura e descolado na cena do hip-hop, graças às suas icônicas festas em blocos, concertos históricos nos parques, inúmeros DJ’s e estilo urbano moderno. A linhagem nativa fala por si mesma, o Brooklyn deu à luz o melhor para fazer isso, alguns dos melhores MC’s como Notorious B.I.G. e Jay-Z', 
' O termo “Gueto” começou como uma simples denominação para comunidades de grupos religiosos específicos séculos atrás, seu uso só popularizou-se novamente na Segunda Guerra com uma conotação condizente ao seu significado originário. Mas quando escutamos a palavra “Gueto” não pensamos em religião, certo? O sentido marginal e pejorativo veio com a segregação e discriminação étnica-racial em bairros negligenciados dos Estados Unidos que começou a ganhar atenção dos anos 70 para cá. As comunidades oprimidas haviam concentrado-se nos mesmos locais (queriam eles ou não), bem como as feridas destas, tornando Gueto sinônimo de pobreza, violência e desgraça. Mas também de Hip-Hop, Arte e Breakdance. Foi esse berço similar que fez o Break e o Gueto tornarem-se quase irmãos gêmeos; do Gueto veio o Break, e do Break fez-se o Gueto.', 
' O hip-hop é um movimento cultural que surgiu nos Estados Unidos nos anos 70, no Bronx. Um condado culturalmente diverso, mas também marcado pela desigualdade e violência urbana. Como uma forma de reação aos problemas sociais da época, difundiu-se o hip-hop, um canal para críticas fervorosas e diálogos interculturais.', 
' Do inglês “Graffiti”, refere-se à: “Ato de fazer uma inscrição caligrafada de elaboração mais complexa que a pichação ou um desenho pintado sobre um suporte em espaços públicos que não são previstos para esta finalidade”. Você provavelmente já viu, seja num muro qualquer ou na parede de um grande prédio, apesar dos termos maçantes, a arte do Grafite pode apresentar muito mais cores! É uma arte milenar, datada desde o tempo dos Romanos, mas mesmo com essa idade, sua instalação moderna só começou no uso por gangues estadunidenses como uma forma de marcar o terrítorio das mesmas, porém o graffiti evoluiu para uma forma de arte visual e crítica social, bem como o break e tudo o que veio a ser a cultura Hip Hop.',
' No Brasil, de fato, o break dance continua a crescer como um movimento cultural e esportivo. Com o reconhecimento oficial dos Jogos Olímpicos de Paris 2024, a modalidade cresceu ainda mais. De fato, novos patrocínios, academias especializadas e programas de formação para muitos jovens dançarinos foram lançados em todo o país. Além disso, as redes sociais são agora fundamental para a maioria dos b-boys e b-girls brasileiros. Eles gravam vídeos dos seus movimentos, participam em concursos on-line e mostram o breakdance para o mundo. Conclui -se que ainda é uma combinação perfeita entre inovação e tradição: ao mesmo tempo, o break dance é profundamente enraizado na resistência e na expressão.'];

const Movimentos = ['Brooklyn', 'Guetos', 'HipHop', 'Grafite', 'DiasAtuais'];
// Elementos
const imagemHeroMovimentos = document.getElementById('hero-movimento');
const imagemMovimentos = document.querySelectorAll('#movimentos .imagens img');
const textosMovimentos = document.querySelector('#movimentos .textos p');

const MovimentosItens = document.querySelectorAll('#movimentos > *');



function changeSelected(elem, val) {
    elem.classList.remove('AnBalatroShakeError');
    if (elem.classList.contains('selected')) {
        elem.classList.add('AnBalatroShakeError')
        return;
    }
    // Animação para deixar o botão mais vivo
    var section = document.getElementsByClassName(elem.classList[0]);
    for (i=0; i<section.length; i++) {
        section[i].classList.remove('selected');
        section[i].classList.remove('AnBalatroShake');
        section[i].classList.remove('AnBalatroShakeError');
    }
    elem.classList.add('AnBalatroShake');
    elem.classList.add('selected');
    
    textosMovimentos.innerHTML = textoMovimentos[val];

    // Mudar as imagens, facilitar tudo só as imagens dentro das pastas precisam do mesmo nome.
    imagemMovimentos[0].src= `Imagens/Movimentos/${Movimentos[val]}/bigimg.png`;
    imagemMovimentos[1].src= `Imagens/Movimentos/${Movimentos[val]}/img1.png`;
    imagemMovimentos[2].src= `Imagens/Movimentos/${Movimentos[val]}/img2.png`;
    imagemMovimentos[3].src= `Imagens/Movimentos/${Movimentos[val]}/img3.png`;
    
}
// Começar o site no 1° tópico dos Movimentos, se não fica estranho e bugado
changeSelected(document.querySelector('#timeline > h3:nth-child(1)'), 0);



// TESTES NO GERAL

// const nav = document.querySelector('nav');
//  animation: balatroShake 0.7s 1;

// function changeNavOpacity(opacity) {

//     opacity = opacity*70/1000;

//     nav.style.backgroundColor = 'rgba(13, 6, 1,' + opacity/100 + ')';
// }

// window.addEventListener("scroll", (event) => {
//     let scroll = this.scrollY;
//     changeNavOpacity(scroll);

// })