function limpar() {
    document.getElementById('nomeDoPet').value = ""
    document.getElementById('animal').value = ""
    document.getElementById('racaDoPet').value = ""
    document.getElementById('idadeDoPet').value = ""
    document.getElementById('detalhesSobreOPet').value = ""
    document.getElementById('nomeDoCliente').value = ""
    document.getElementById('telefoneDoCliente').value = ""
    document.getElementById('email').value = ""
}

var nomeCadastrados = []
var nomesEncontrados = []

function home() {

    document.getElementById('tela1').style.display = 'block'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'
}

function proximaEtapa() {

    nomeDoPet = document.getElementById('nomeDoPet').value
    animal = document.getElementById('animal').value
    racaDoPet = document.getElementById('racaDoPet').value
    idadeDoPet = document.getElementById('idadeDoPet').value
    detalhesSobreOPet = document.getElementById('detalhesSobreOPet').value

    if (nomeDoPet.trim() != "" ) {

        let esperandoEtapa2 = document.getElementById('esperandoEtapa2')
        esperandoEtapa2.classList.remove('esperandoEtapa2')
        esperandoEtapa2.classList.add('cadastroEtapa2')

        console.log(animal)
        
        document.getElementById('cadastroDoPet').style.display='none'
        document.getElementById('cadastroDoCliente').style.display='block'
        
    }

}

let nomeDoPet = ""
let animal = ""
let racaDoPet = ""
let idadeDoPet = ""
let detalhesSobreOPet = ""
let arrayNomesDosPets = [ ]
let arrayAnimais = [ ]
let arrayRacasDosPets = [ ]
let arrayIdadesDosPets = [ ]
let arrayDetalhesSobreOsPets = []
let arrayNomesDosClientes = [ ]
let arrayTelefonesDosClientes = [ ]
let arrayEmail = [ ]

function finalizarCadastro() {

    let nomeDoCliente = document.getElementById('nomeDoCliente').value
    let telefoneDoCliente = document.getElementById('telefoneDoCliente').value
    let email = document.getElementById('email').value

    if (nomeDoPet.trim() != "" ) {

        arrayNomesDosPets.push(nomeDoPet)
        arrayAnimais.push(animal)
        arrayRacasDosPets.push(racaDoPet)
        arrayIdadesDosPets.push(idadeDoPet)
        arrayDetalhesSobreOsPets.push(nomeDoCliente)
        arrayNomesDosClientes.push(telefoneDoCliente)
        arrayTelefonesDosClientes.push(email)

        document.getElementById('cadastroDoPet').style.display='block'
        document.getElementById('cadastroDoCliente').style.display='none'
        document.getElementById('tela2').style.display = 'block'
        document.getElementById('tela3').style.display = 'none'

        limpar()
        containerDasContas.remove()
        parar = 0
        
    }


}

function cadastro() {

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'block'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'

}

function cadastrarClientes() {

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'block'
    document.getElementById('tela4').style.display = 'none'

}

function verCadastros() {

    let c = 0

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'block'

    if (parar == 0) {
        let tela4Div = document.getElementById('tela4')
        containerDasContas = document.createElement('div')
        containerDasContas.classList.add('contas')
        tela4Div.appendChild(containerDasContas)

        do {

            if (arrayNomesDosPets[c] == null) {
                
                parar = 1
    
            } else {
    
                let caixinhaDaContaDiv = document.createElement('div')
                let informacaoDoNomeDiv = document.createElement('div')
                let nomeDoPetDiv = document.createElement('div')
                let nomeDoPetP = document.createElement('p')
                nomeDoPetP.innerHTML = arrayNomesDosPets[c]
                let fotoDaEspecieImg = document.createElement('img')

                if (arrayAnimais[c] == "cachorro") {
                    
                    fotoDaEspecieImg.src = "cao-bonito-enfiando-a-lingua-para-fora-ilustracao-do-icone-dos-desenhos-animados_138676-2709.png"

                } else if (arrayAnimais[c] == "gato") {
                    
                    fotoDaEspecieImg.src = "gato-bonito-sentado-ilustracao-do-icone-dos-desenhos-animados_138676-2813.png"

                } else {

                }
                
                let informacaoDoDonoDiv = document.createElement('div')
                let donoP  = document.createElement('p')
                donoP.innerHTML = 'Dono:'
                let nomeDoDonoP = document.createElement('p')
                nomeDoDonoP.innerHTML = 'Jorjin'
                let informacoesSobreOPetDiv = document.createElement('div')
                let informacaoDoPetP = document.createElement('p')
                informacaoDoPetP.innerHTML = 'Informações Do Pet'
                let informacaoDaRacaDiv = document.createElement('div')
                let racaP = document.createElement('p')
                racaP.innerHTML = 'Raça:'
                let nomeDaRacaP = document.createElement('p')
                nomeDaRacaP.innerHTML = 'Husky'
                let informacaoDaCorDiv = document.createElement('div')
                let corP = document.createElement('p')
                corP.innerHTML = 'Cor:'
                let nomeDaCorP = document.createElement('p')
                nomeDaCorP.innerHTML = 'Branco e Preto'
                let informacaoDaIdadeDiv = document.createElement('div')
                let idadeP = document.createElement('p')
                idadeP.innerHTML = 'Idade:'
                let qualAIdadeP = document.createElement('p')
                qualAIdadeP.innerHTML = '9 meses'
                let verMaisDiv = document.createElement('div')
                let verMaisButton = document.createElement('button')
                verMaisButton.innerHTML = 'Ver Mais...'
    
                caixinhaDaContaDiv.classList.add('conta')
    
                /** Nome do pet */
                
                caixinhaDaContaDiv.appendChild(informacaoDoNomeDiv)
                informacaoDoNomeDiv.classList.add('informacaoDoNome')
                informacaoDoNomeDiv.appendChild(nomeDoPetDiv)
                nomeDoPetDiv.classList.add('nomeDoPet')
                nomeDoPetDiv.appendChild(nomeDoPetP)
    
                /** Foto da especie */
    
                caixinhaDaContaDiv.appendChild(fotoDaEspecieImg)
                
                /** Informacao do dono */
    
                caixinhaDaContaDiv.appendChild(informacaoDoDonoDiv)
                informacaoDoDonoDiv.classList.add('informacaoDoDono')
                informacaoDoDonoDiv.appendChild(donoP)
                donoP.classList.add('dono')
                informacaoDoDonoDiv.appendChild(nomeDoDonoP)
                nomeDoDonoP.classList.add('nomeDoDono')
                
                /** Informacoes sobre o pet */
                
                caixinhaDaContaDiv.appendChild(informacoesSobreOPetDiv)
                informacoesSobreOPetDiv.classList.add('informacoesSobreOPet')
                informacoesSobreOPetDiv.classList.add('informacoesDoPet')
                informacoesSobreOPetDiv.appendChild(informacaoDoPetP)
                informacaoDoPetP.classList.add('informacaoDoPet')
    
                /** Informacao da raca */
    
                informacoesSobreOPetDiv.appendChild(informacaoDaRacaDiv)
                informacaoDaRacaDiv.classList.add('informacaoDaRaca')
                informacaoDaRacaDiv.appendChild(racaP)
                racaP.classList.add('raca')
                informacaoDaRacaDiv.appendChild(nomeDaRacaP)
                nomeDaRacaP.classList.add('nomeDaRaca')
                
                /** Informacao da cor */
    
                informacoesSobreOPetDiv.appendChild(informacaoDaCorDiv)
                informacaoDaCorDiv.classList.add('informacaoDaCor')
                informacaoDaCorDiv.appendChild(corP)
                corP.classList.add('cor')
                informacaoDaCorDiv.appendChild(nomeDaCorP)
                nomeDaCorP.classList.add('nomeDaCor')
    
                /** Informacao da idade */
    
                informacoesSobreOPetDiv.appendChild(informacaoDaIdadeDiv)
                informacaoDaIdadeDiv.classList.add('informacaoDaIdade')
                informacaoDaIdadeDiv.appendChild(idadeP)
                idadeP.classList.add('idade')
                informacaoDaIdadeDiv.appendChild(qualAIdadeP)
                qualAIdadeP.classList.add('qualAIdade')
    
                caixinhaDaContaDiv.appendChild(verMaisDiv)
                containerDasContas.appendChild(caixinhaDaContaDiv)
    
                /** Ver mais */
    
                caixinhaDaContaDiv.appendChild(verMaisDiv)
                verMaisDiv.classList.add('verMais')
                verMaisDiv.appendChild(verMaisButton)

            }
    
            c++
            parar = 1

        } while (c < arrayNomesDosPets.length || parar != 1);

    }

}

function enviar() {

    let nome = document.getElementById("nome").value
    nomeCadastrados.push(nome)

    limpar()

    parar = 0

    containerDasContas.remove()
    mostrar()

}


let parar = 0
let containerDasContas = ""


function mostrar() {
    
    let c = 0

    if (parar == 0) {
        let tela4Div = document.getElementById('tela4')
                containerDasContas = document.createElement('div')
                containerDasContas.classList.add('contas')
        do {

            if (arrayNomesDosPets[c] == null) {
                
                parar = 1
    
            } else {
    
                tela4Div.appendChild(containerDasContas)
                let caixinhaDaContaDiv = document.createElement('div')
                let informacaoDoNomeDiv = document.createElement('div')
                let nomeDoPetDiv = document.createElement('div')
                let nomeDoPetP = document.createElement('p')
                nomeDoPetP.innerHTML = arrayNomesDosPets[c]
                let fotoDaEspecieImg = document.createElement('img')

                if (arrayAnimais[c] == "cachorro") {
                    
                    fotoDaEspecieImg.src = "cao-bonito-enfiando-a-lingua-para-fora-ilustracao-do-icone-dos-desenhos-animados_138676-2709.png"

                } else if (arrayAnimais[c] == "gato") {
                    
                    fotoDaEspecieImg.src = "gato-bonito-sentado-ilustracao-do-icone-dos-desenhos-animados_138676-2813.png"

                } else {

                }
                
                let informacaoDoDonoDiv = document.createElement('div')
                let donoP  = document.createElement('p')
                donoP.innerHTML = 'Dono:'
                let nomeDoDonoP = document.createElement('p')
                nomeDoDonoP.innerHTML = 'Jorjin'
                let informacoesSobreOPetDiv = document.createElement('div')
                let informacaoDoPetP = document.createElement('p')
                informacaoDoPetP.innerHTML = 'Informações Do Pet'
                let informacaoDaRacaDiv = document.createElement('div')
                let racaP = document.createElement('p')
                racaP.innerHTML = 'Raça:'
                let nomeDaRacaP = document.createElement('p')
                nomeDaRacaP.innerHTML = 'Husky'
                let informacaoDaCorDiv = document.createElement('div')
                let corP = document.createElement('p')
                corP.innerHTML = 'Cor:'
                let nomeDaCorP = document.createElement('p')
                nomeDaCorP.innerHTML = 'Branco e Preto'
                let informacaoDaIdadeDiv = document.createElement('div')
                let idadeP = document.createElement('p')
                idadeP.innerHTML = 'Idade:'
                let qualAIdadeP = document.createElement('p')
                qualAIdadeP.innerHTML = '9 meses'
                let verMaisDiv = document.createElement('div')
                let verMaisButton = document.createElement('button')
                verMaisButton.innerHTML = 'Ver Mais...'
    
                caixinhaDaContaDiv.classList.add('conta')
    
                /** Nome do pet */
                
                caixinhaDaContaDiv.appendChild(informacaoDoNomeDiv)
                informacaoDoNomeDiv.classList.add('informacaoDoNome')
                informacaoDoNomeDiv.appendChild(nomeDoPetDiv)
                nomeDoPetDiv.classList.add('nomeDoPet')
                nomeDoPetDiv.appendChild(nomeDoPetP)
    
                /** Foto da especie */
    
                caixinhaDaContaDiv.appendChild(fotoDaEspecieImg)
                
                /** Informacao do dono */
    
                caixinhaDaContaDiv.appendChild(informacaoDoDonoDiv)
                informacaoDoDonoDiv.classList.add('informacaoDoDono')
                informacaoDoDonoDiv.appendChild(donoP)
                donoP.classList.add('dono')
                informacaoDoDonoDiv.appendChild(nomeDoDonoP)
                nomeDoDonoP.classList.add('nomeDoDono')
                
                /** Informacoes sobre o pet */
                
                caixinhaDaContaDiv.appendChild(informacoesSobreOPetDiv)
                informacoesSobreOPetDiv.classList.add('informacoesSobreOPet')
                informacoesSobreOPetDiv.classList.add('informacoesDoPet')
                informacoesSobreOPetDiv.appendChild(informacaoDoPetP)
                informacaoDoPetP.classList.add('informacaoDoPet')
    
                /** Informacao da raca */
    
                informacoesSobreOPetDiv.appendChild(informacaoDaRacaDiv)
                informacaoDaRacaDiv.classList.add('informacaoDaRaca')
                informacaoDaRacaDiv.appendChild(racaP)
                racaP.classList.add('raca')
                informacaoDaRacaDiv.appendChild(nomeDaRacaP)
                nomeDaRacaP.classList.add('nomeDaRaca')
                
                /** Informacao da cor */
    
                informacoesSobreOPetDiv.appendChild(informacaoDaCorDiv)
                informacaoDaCorDiv.classList.add('informacaoDaCor')
                informacaoDaCorDiv.appendChild(corP)
                corP.classList.add('cor')
                informacaoDaCorDiv.appendChild(nomeDaCorP)
                nomeDaCorP.classList.add('nomeDaCor')
    
                /** Informacao da idade */
    
                informacoesSobreOPetDiv.appendChild(informacaoDaIdadeDiv)
                informacaoDaIdadeDiv.classList.add('informacaoDaIdade')
                informacaoDaIdadeDiv.appendChild(idadeP)
                idadeP.classList.add('idade')
                informacaoDaIdadeDiv.appendChild(qualAIdadeP)
                qualAIdadeP.classList.add('qualAIdade')
    
                caixinhaDaContaDiv.appendChild(verMaisDiv)
                containerDasContas.appendChild(caixinhaDaContaDiv)
    
                /** Ver mais */
    
                caixinhaDaContaDiv.appendChild(verMaisDiv)
                verMaisDiv.classList.add('verMais')
                verMaisDiv.appendChild(verMaisButton)

            }
    
            c++
            parar = 1

        } while (c < arrayNomesDosPets.length || parar != 1);

    }
}