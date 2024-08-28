const temas = document.getElementsByClassName("tema")

for(let i = 0; i<temas.length; i++){
    temas[i].addEventListener('click', (event)=>{
        if(event.target == temas[i]){
            temas[i].children[0].classList.toggle('invisivel')
        }
    })
}
const quadradoEnter = document.getElementsByClassName('quadrado')[0]
quadradoEnter.addEventListener('mouseenter',()=>{
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    quadradoEnter.style.backgroundColor = `rgb(${r},${g},${b})`
})
const campomayla = document.getElementById("mayla");
campomayla.addEventListener("keyup", () => {
    const valorCampo = campomayla.value.toLowerCase();
    const tamanhotexto = valorCampo.length;
    const produtos = document.getElementsByClassName("produto");
    for (let i = 0; i < produtos.length; i++) {
        const conteudoProduto = produtos[i].textContent.toLowerCase().substring(0, tamanhotexto);
        if (valorCampo !== conteudoProduto) {
            produtos[i].classList.add('invisivel');
            produtos[i].classList.remove('inline-block');
        } else {
            produtos[i].classList.add('inline-block');
            produtos[i].classList.remove('invisivel');
        }
    }
});

const campoDown = document.getElementById("down")
campoDown.addEventListener("keydown", (event)=>{
    const wordsArray = campoDown.split(' ');
    const reversedWordsArray = wordsArray.map(word => reverseWord(word));
    const reversedText = reversedWordsArray.join(' ');

})
