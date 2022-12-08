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

    nomeDoCliente = document.getElementById('nomeDoCliente').value
    telefoneDoCliente = document.getElementById('telefoneDoCliente').value
    email = document.getElementById('email').value

        let esperandoEtapa2 = document.getElementById('esperandoEtapa2')
        esperandoEtapa2.classList.remove('esperandoEtapa2')
        esperandoEtapa2.classList.add('cadastroEtapa2')
        
        document.getElementById('cadastroDoPet').style.display='block'
        document.getElementById('cadastroDoCliente').style.display='none'
        

}

let nomeDoPet = ""
let animal = ""
let racaDoPet = ""
let idadeDoPet = ""
let detalhesSobreOPet = ""
let nomeDoCliente = ""
let telefoneDoCliente = ""
let email = ""
let arrayNomesDosPets = [ ]
let arrayAnimais = [ ]
let arrayRacasDosPets = [ ]
let arrayIdadesDosPets = [ ]
let arrayDetalhesSobreOsPets = []
let arrayNomesDosClientes = [ ]
let arrayTelefonesDosClientes = [ ]
let arrayEmails = [ ]

function finalizarCadastro() {

    nomeDoPet = document.getElementById('nomeDoPet').value
    animal = document.getElementById('animal').value
    racaDoPet = document.getElementById('racaDoPet').value
    idadeDoPet = document.getElementById('idadeDoPet').value
    detalhesSobreOPet = document.getElementById('detalhesSobreOPet').value

    if (nomeDoPet.trim() != "" ) {

        arrayNomesDosClientes.push(nomeDoCliente)
        arrayTelefonesDosClientes.push(telefoneDoCliente)
        arrayEmails.push(email)
        arrayNomesDosPets.push(nomeDoPet)
        arrayAnimais.push(animal)
        arrayRacasDosPets.push(racaDoPet)
        arrayIdadesDosPets.push(idadeDoPet)
        arrayDetalhesSobreOsPets.push(detalhesSobreOPet)

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
        containerDasContas.classList.add('cadastros')
        tela4Div.appendChild(containerDasContas)

        do {

            if (arrayNomesDosPets[c] == null) {
                
                parar = 1
    
            } else {
    
                let caixinhaDaContaDiv = document.createElement('div')
                let maisInformacoesDiv = document.createElement('div')
                let maisInformacaoDoClienteDiv = document.createElement('div')
                maisInformacaoDoClienteDiv.innerHTML = 'Informações do Cliente'

                let informacaoDoNomeDoClienteDiv = document.createElement('div')
                let infoNomeDoClienteP = document.createElement('p')
                infoNomeDoClienteP.innerHTML = 'Nome: '
                let nomeDoClienteP = document.createElement('p')
                nomeDoClienteP.innerHTML = arrayNomesDosClientes[c]
                
                let informacaoDoTelefoneDoClienteDiv = document.createElement('div')
                let infoDoTelefoneDoClienteP = document.createElement('p')
                infoDoTelefoneDoClienteP.innerHTML = 'Telefone: '
                let telefoneDoClienteP = document.createElement('p')
                telefoneDoClienteP.innerHTML = arrayTelefonesDosClientes[c]

                let informacaoDoEmailDoClienteDiv = document.createElement('div')
                let infoDoEmailDoClienteP = document.createElement('p')
                infoDoEmailDoClienteP.innerHTML = 'Email: '
                let emailDoClienteP = document.createElement('p')
                emailDoClienteP.innerHTML = arrayEmails[c]

                let maisInformacaoDoPetDiv = document.createElement('div')

                let informacaoDoNomeDoPetDiv = document.createElement('div')
                let infoDoNomeDoPetP = document.createElement('p')
                infoDoNomeDoPetP.innerHTML = 'Nome: '
                let nomeDoPetP = document.createElement('p')
                nomeDoPetP
                .innerHTML = arrayNomesDosPets[c]
                
                let informacaoDoAnimalDiv = document.createElement('div')
                let infoDoAnimalP = document.createElement('p')
                infoDoAnimalP.innerHTML = 'Animal: '
                let animalP = document.createElement('p')
                animalP.innerHTML = arrayAnimais[c]

                let informacaoDaRacaDoPetDiv = document.createElement('div')
                let infoDaRacaDoPetP = document.createElement('p')
                infoDaRacaDoPetP.innerHTML = 'Raça: '
                let racaDoPetP = document.createElement('p')
                racaDoPetP.innerHTML = arrayRacasDosPets[c]

                let informacaoDaIdadeDoPetDiv = document.createElement('div')
                let infoDaIdadeDoPetP = document.createElement('p')
                infoDaIdadeDoPetP.innerHTML = 'Idade: '
                let idadeDoPetP = document.createElement('p')
                idadeDoPetP.innerHTML = arrayIdadesDosPets[c]

                let informacaoDeDetalhesDoPetDiv = document.createElement('div')
                let infoDeDetalhesDoPetP = document.createElement('p')
                infoDeDetalhesDoPetP.innerHTML = 'Detalhes sobre o pet:'
                let detalhesDoPetDiv = document.createElement('div')
                let detalhesDoPetP = document.createElement('p')
                detalhesDoPetP.innerHTML = arrayDetalhesSobreOsPets[c]

                caixinhaDaContaDiv.classList.add('cartaoDeCadastro')

                caixinhaDaContaDiv.appendChild(maisInformacoesDiv)
                maisInformacoesDiv.classList.add('maisInformacoes')
                maisInformacoesDiv.appendChild(maisInformacaoDoClienteDiv)
                maisInformacaoDoClienteDiv.classList.add('maisInformacaoDoCliente')
    
                /** Nome do Cliente */
                
                maisInformacoesDiv.appendChild(informacaoDoNomeDoClienteDiv)
                informacaoDoNomeDoClienteDiv.classList.add('informacoes')
                informacaoDoNomeDoClienteDiv.appendChild(infoNomeDoClienteP)
                infoNomeDoClienteP.classList.add('info')
                informacaoDoNomeDoClienteDiv.appendChild(nomeDoClienteP)
                nomeDoClienteP.classList.add('nomeCl')
    
                /** Telefone do Cliente */
    
                maisInformacoesDiv.appendChild(informacaoDoTelefoneDoClienteDiv)
                informacaoDoTelefoneDoClienteDiv.classList.add('informacoes')
                informacaoDoTelefoneDoClienteDiv.appendChild(infoDoTelefoneDoClienteP)
                infoDoTelefoneDoClienteP.classList.add('info')
                informacaoDoTelefoneDoClienteDiv.appendChild(telefoneDoClienteP)
                
                /** Email do Cliente */
    
                maisInformacoesDiv.appendChild(informacaoDoEmailDoClienteDiv)
                informacaoDoEmailDoClienteDiv.classList.add('informacoes')
                informacaoDoEmailDoClienteDiv.appendChild(infoDoEmailDoClienteP)
                infoDoEmailDoClienteP.classList.add('info')
                informacaoDoEmailDoClienteDiv.appendChild(emailDoClienteP)
                emailDoClienteP.classList.add('emailDoCliente')

                maisInformacoesDiv.appendChild(maisInformacaoDoPetDiv)
                maisInformacaoDoPetDiv.innerHTML = 'Informações do Pet'
                maisInformacaoDoPetDiv.classList.add('maisInformacaoDoPet')
                
                /** Nome do Pet */
                
                maisInformacoesDiv.appendChild(informacaoDoNomeDoPetDiv)
                informacaoDoNomeDoPetDiv.classList.add('informacoes')
                informacaoDoNomeDoPetDiv.appendChild(infoDoNomeDoPetP)
                infoDoNomeDoPetP.classList.add('info')
                informacaoDoNomeDoPetDiv.appendChild(nomeDoPetP)
    
                /** Especie do Pet */
    
                maisInformacoesDiv.appendChild(informacaoDoAnimalDiv)
                informacaoDoAnimalDiv.classList.add('informacoes')
                informacaoDoAnimalDiv.appendChild(infoDoAnimalP)
                infoDoAnimalP.classList.add('info')
                informacaoDoAnimalDiv.appendChild(animalP)
                
                /** Raca do Pet */
    
                maisInformacoesDiv.appendChild(informacaoDaRacaDoPetDiv)
                informacaoDaRacaDoPetDiv.classList.add('informacoes')
                informacaoDaRacaDoPetDiv.appendChild(infoDaRacaDoPetP)
                infoDaRacaDoPetP.classList.add('info')
                informacaoDaRacaDoPetDiv.appendChild(racaDoPetP)
    
                /** Idade do Pet */
    
                maisInformacoesDiv.appendChild(informacaoDaIdadeDoPetDiv)
                informacaoDaIdadeDoPetDiv.classList.add('informacoes')
                informacaoDaIdadeDoPetDiv.appendChild(infoDaIdadeDoPetP)
                infoDaIdadeDoPetP.classList.add('info')
                informacaoDaIdadeDoPetDiv.appendChild(idadeDoPetP)

                /** Recado sobre o Pet */
    
                maisInformacoesDiv.appendChild(informacaoDeDetalhesDoPetDiv)
                informacaoDeDetalhesDoPetDiv.classList.add('informacoes')
                informacaoDeDetalhesDoPetDiv.appendChild(infoDeDetalhesDoPetP)
                infoDeDetalhesDoPetP.classList.add('info')

                maisInformacoesDiv.appendChild(detalhesDoPetDiv)
                detalhesDoPetDiv.classList.add('detalhes')
                detalhesDoPetDiv.appendChild(detalhesDoPetP)

                containerDasContas.appendChild(caixinhaDaContaDiv)
    
            }
    
            c++
            parar = 1

        } while (c < arrayNomesDosPets.length || parar != 1);

    }

}


let parar = 0
let containerDasContas = ""

function buscar() {

    let c = 0

    if (parar == 0) {
        let tela4Div = document.getElementById('tela4')
        containerDasContas = document.createElement('div')
        containerDasContas.classList.add('cadastros')
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

                if (arrayAnimais[c] == "Cachorro") {
                    
                    fotoDaEspecieImg.src = "cao-bonito-enfiando-a-lingua-para-fora-ilustracao-do-icone-dos-desenhos-animados_138676-2709.png"

                } else if (arrayAnimais[c] == "Gato") {
                    
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
    
                caixinhaDaContaDiv.classList.add('cartaoDeCadastro')
    
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
                racaP.classList.add('info')
                informacaoDaRacaDiv.appendChild(nomeDaRacaP)
                nomeDaRacaP.classList.add('nomeDaRaca')
                
                /** Informacao da cor */
    
                informacoesSobreOPetDiv.appendChild(informacaoDaCorDiv)
                informacaoDaCorDiv.classList.add('informacaoDaCor')
                informacaoDaCorDiv.appendChild(corP)
                corP.classList.add('info')
                informacaoDaCorDiv.appendChild(nomeDaCorP)
                nomeDaCorP.classList.add('nomeDaCor')
    
                /** Informacao da idade */
    
                informacoesSobreOPetDiv.appendChild(informacaoDaIdadeDiv)
                informacaoDaIdadeDiv.classList.add('informacaoDaIdade')
                informacaoDaIdadeDiv.appendChild(idadeP)
                idadeP.classList.add('info')
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


function mudarBotao() {

let divDiv = document.createElement('div')
    divDiv.classList.add('div')
    let tela = document.getElementById('tela5')
    tela.appendChild(divDiv)
    let botao5 = document.createElement('button')
    botao5.classList.add('botao5')
    botao5.id = "botao5"
    botao5.innerHTML = "mmamamam"
    divDiv.appendChild(botao5)

}
