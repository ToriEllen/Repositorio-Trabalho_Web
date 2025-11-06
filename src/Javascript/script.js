const titulo = document.getElementById("titulo-principal")
const palavras = [" Dev em Desenvolvimento...", "Dev em Construção...", " Dev em Aprendizado..."]

let iLetra = 0
let iPalavra = 0
let apagar = false

function digitar(){
    const palavraAtual = palavras[iPalavra]

    if (!apagar){
        titulo.textContent = palavraAtual.slice(0, iLetra++)
        if(iLetra > palavraAtual.length){
            apagar = true
            setTimeout(digitar, 1500)
            return
        }
    }else{
        titulo.textContent = palavraAtual.slice(0, --iLetra)
        if(iLetra === 0){
            apagar = false;
            iPalavra = (iPalavra + 1)% palavras.length
        }
    }

    setTimeout(digitar, apagar ? 60 : 120)
}

digitar()
