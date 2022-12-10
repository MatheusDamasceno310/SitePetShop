function limpar() {
    document.getElementById('nomeDoPet').value = ""
    document.getElementById('animal').value = ""
    document.getElementById('racaDoPet').value = ""
    document.getElementById('idadeDoPet').value = ""
    document.getElementById('detalhesSobreOPet').value = ""
    document.getElementById('nomeDoCliente').value = ""
    document.getElementById('telefoneDoCliente').value = ""
    document.getElementById('email').value = ""
    document.getElementById('agendarCliente').value = ""
    document.getElementById('agendarPet').value = ""
    document.getElementById('escolherServico').value = ""
    document.getElementById('agendarHora').value = ""
}

var nomesEncontrados = []

function home() {

    document.getElementById('tela1').style.display = 'block'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'none'
    document.getElementById('tela6').style.display = 'none'
}

function opcoesDeCadastro() {
    document.getElementById('cadastroDoPet').style.display='none'
    document.getElementById('cadastroDoCliente').style.display='none'
    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'block'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'none'
    document.getElementById('tela6').style.display = 'none'

    limpar()
    containerDasContas.outerHTML=""
    tabelaDosAgendamentos.outerHTML=""
    parar = 0
    
}

function opcoesDeAgendamento() {
    document.getElementById('cadastroDoPet').style.display='none'
    document.getElementById('cadastroDoCliente').style.display='none'
    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'block'
    document.getElementById('tela6').style.display = 'none'

    limpar()
    tabelaDosAgendamentos.outerHTML=""
    parar = 0
}

function proximaEtapa() {

    nomeDoCliente = document.getElementById('nomeDoCliente').value
    telefoneDoCliente = document.getElementById('telefoneDoCliente').value
    email = document.getElementById('email').value

    let emailBuscado = new String(email)
    let letrasBuscadas = emailBuscado.length
    let retirarGmail = letrasBuscadas - 10
    let gmail = emailBuscado
    .slice(retirarGmail, letrasBuscadas)
    

    
        
        if (nomeDoCliente.trim() != "" && telefoneDoCliente.trim() != "" && email.trim() != "") {
            if(gmail == "@gmail.com") {
                let esperandoEtapa2 = document.getElementById('esperandoEtapa2')
                esperandoEtapa2.classList.remove('esperandoEtapa2')
                esperandoEtapa2.classList.add('cadastroEtapa2')
                
                document.getElementById('cadastroDoPet').style.display='block'
                document.getElementById('cadastroDoCliente').style.
                display='none'
    
            } else {
                window.alert("Adicione o @gmail.com no email")
            }

        } else {
            window.alert("Preencha todos os campos corretamente")
        }
        
}

function voltar() {
    document.getElementById('cadastroDoPet').style.display='none'
    document.getElementById('cadastroDoCliente').style.display='block'
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

    if (nomeDoCliente.trim() != "" && telefoneDoCliente.trim() != "" && email.trim() != "" && nomeDoPet.trim() != "" && animal.trim() != "" && racaDoPet.trim() != "" && idadeDoPet.trim() != "") {

        document.getElementById('pergunta1').style.display = 'block'

        arrayNomesDosClientes.push(nomeDoCliente)
        arrayTelefonesDosClientes.push(telefoneDoCliente)
        arrayEmails.push(email)
        arrayNomesDosPets.push(nomeDoPet)
        arrayAnimais.push(animal)
        arrayRacasDosPets.push(racaDoPet)
        arrayIdadesDosPets.push(idadeDoPet)
        arrayDetalhesSobreOsPets.push(detalhesSobreOPet)

        document.getElementById('nomeDoPet').value = ""
        document.getElementById('animal').value = ""
        document.getElementById('racaDoPet').value = ""
        document.getElementById('idadeDoPet').value = ""
        document.getElementById('detalhesSobreOPet').value = ""

    } else {
        window.alert("Preencha todos os campos corretamente")
    }


}

function resposta1Sim() {

    document.getElementById('pergunta1').style.display = 'none'

    nomeDoPet = document.getElementById('nomeDoPet').value
    animal = document.getElementById('animal').value
    racaDoPet = document.getElementById('racaDoPet').value
    idadeDoPet = document.getElementById('idadeDoPet').value
    detalhesSobreOPet = document.getElementById('detalhesSobreOPet').value

    if (nomeDoPet.trim() != "" && animal.trim() == "" && racaDoPet.trim() == "" && idadeDoPet.trim() == "") {

        arrayNomesDosClientes.push(nomeDoCliente)
        arrayTelefonesDosClientes.push(telefoneDoCliente)
        arrayEmails.push(email)
        arrayNomesDosPets.push(nomeDoPet)
        arrayAnimais.push(animal)
        arrayRacasDosPets.push(racaDoPet)
        arrayIdadesDosPets.push(idadeDoPet)
        arrayDetalhesSobreOsPets.push(detalhesSobreOPet)
        
    }

}

function resposta1Nao() {

    document.getElementById('cadastroDoPet').style.display='block'
    document.getElementById('cadastroDoCliente').style.display='none'
    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'block'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'none'
    document.getElementById('tela6').style.display = 'none'

    limpar()
    containerDasContas.outerHTML=""
    parar = 0
}

function cadastro() {

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'block'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'none'
    document.getElementById('tela6').style.display = 'none'
}

function agendamento() {

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'block'
    document.getElementById('tela6').style.display = 'none'
}

function cadastrarCliente() {

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'block'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'none'
    document.getElementById('tela6').style.display = 'none'

    document.getElementById('pergunta1').style.display = 'none'
    document.getElementById('cadastroDoPet').style.display='none'
    document.getElementById('cadastroDoCliente').style.display='block'

}

function verCadastros() {

    let c = 0

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'block'
    document.getElementById('tela5').style.display = 'none'
    document.getElementById('tela6').style.display = 'none'
    document.getElementById('filtrarQual').style.display = "none"

    if (parar == 0) {
        let tela4Div = document.getElementById('tela4')
        containerDasContas = document.createElement('div')
        containerDasContas.classList.add('cadastros')
        tela4Div.appendChild(containerDasContas)

        do {

            if (arrayNomesDosClientes[c] == null) {
                
                parar = 1
    
            } else {
    
                let caixinhaDaContaDiv = document.createElement('div')
                let maisInformacoesDiv = document.createElement('div')
                let maisInformacaoDoClienteDiv = document.createElement('div')
                maisInformacaoDoClienteDiv.innerHTML = 'Informações do Cliente'

                let informacaoDoNomeDoClienteDiv = document.createElement('div')
                let infoNomeDoClienteP = document.createElement('p')
                infoNomeDoClienteP.innerHTML = 'Nome:'
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

        } while (c < arrayNomesDosClientes.length || parar != 1);

    }

}


let parar = 0
let containerDasContas = ""

function buscar() {

    document.getElementById('filtrarQual').style.display = "block"

    containerDasContas.remove()
    parar = 0

}

function filtrarNomeDoCliente() {

    document.getElementById('filtrarQual').style.display = "none"

    let buscarNome = document.getElementById("buscarNome").value

    let nomeBuscado = new String(buscarNome)
    
    let letrasBuscadas = nomeBuscado.length

            if (parar == 0) {
            let tela4Div = document.getElementById('tela4')
            containerDasContas = document.createElement('div')
            containerDasContas.classList.add('cadastros')
            tela4Div.appendChild(containerDasContas)

            for (let c = 0; c < arrayNomesDosClientes.length; c++) {

                let procurandoNome = new String(arrayNomesDosClientes[c])
                let buscando = procurandoNome.slice(0,letrasBuscadas)
        
                if (buscando == nomeBuscado) {

            let caixinhaDaContaDiv = document.createElement('div')
                let maisInformacoesDiv = document.createElement('div')
                let maisInformacaoDoClienteDiv = document.createElement('div')
                maisInformacaoDoClienteDiv.innerHTML = 'Informações do Cliente'

                let informacaoDoNomeDoClienteDiv = document.createElement('div')
                let infoNomeDoClienteP = document.createElement('p')
                infoNomeDoClienteP.innerHTML = 'Nome:'
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

        }
 
    }


}

function filtrarNomeDoPet() {
    
    document.getElementById('filtrarQual').style.display = "none"

    let buscarNome = document.getElementById("buscarNome").value

    let nomeBuscado = new String(buscarNome)
    
    let letrasBuscadas = nomeBuscado.length

            if (parar == 0) {
            let tela4Div = document.getElementById('tela4')
            containerDasContas = document.createElement('div')
            containerDasContas.classList.add('cadastros')
            tela4Div.appendChild(containerDasContas)

            for (let c = 0; c < arrayNomesDosPets.length; c++) {

                let procurandoNome = new String(arrayNomesDosPets[c])
                let buscando = procurandoNome.slice(0,letrasBuscadas)
        
                if (buscando == nomeBuscado) {

            let caixinhaDaContaDiv = document.createElement('div')
                let maisInformacoesDiv = document.createElement('div')
                let maisInformacaoDoClienteDiv = document.createElement('div')
                maisInformacaoDoClienteDiv.innerHTML = 'Informações do Cliente'

                let informacaoDoNomeDoClienteDiv = document.createElement('div')
                let infoNomeDoClienteP = document.createElement('p')
                infoNomeDoClienteP.innerHTML = 'Nome:'
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

        }
 
    }

}

function agendarCliente() {

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'none'
    document.getElementById('tela6').style.display = 'block'
    document.getElementById('tela7').style.display = 'none'
}

let tabelaDosAgendamentos = ""

function apagarAgendamento() {
    


}
function verAgendamentos() {

    let c = 0

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'none'
    document.getElementById('tela6').style.display = 'none'
    document.getElementById('tela7').style.display = 'block'

    if (parar == 0 && arrayAgendarCliente[c] != null) {
        let todosOsAgendamentosDiv = document.getElementById('todosOsAgendamentos')
        tabelaDosAgendamentos = document.createElement('table')
        tabelaDosAgendamentos.classList.add('agendamentos')
        todosOsAgendamentosDiv.appendChild(tabelaDosAgendamentos)
        let trMenuTabela = document.createElement('tr')
        tabelaDosAgendamentos.appendChild(trMenuTabela)
        let tdMenuCliente = document.createElement('td')
        tdMenuCliente.innerHTML = "Cliente"
        tdMenuCliente.classList.add('menuTabela')
        let tdMenuPet = document.createElement('td')
        tdMenuPet.innerHTML = "Pet"
        tdMenuPet.classList.add('menuTabela')
        let tdMenuServico = document.createElement('td')
        tdMenuServico.innerHTML = "Serviço"
        tdMenuServico.classList.add('menuTabela')
        let tdMenuHorario = document.createElement('td')
        tdMenuHorario.innerHTML = "Horário"
        tdMenuHorario.classList.add('menuTabela')
        let tdMenuData = document.createElement('td')
        tdMenuData.innerHTML = "Data"
        tdMenuData.classList.add('menuTabela')

        trMenuTabela.appendChild(tdMenuCliente)
        trMenuTabela.appendChild(tdMenuPet)
        trMenuTabela.appendChild(tdMenuServico)
        trMenuTabela.appendChild(tdMenuHorario)
        trMenuTabela.appendChild(tdMenuData)

        do {

            if (arrayAgendarCliente[c] == null) {
                
                parar = 1
    
            } else {

                trInfoAgendamentos = document.createElement('tr')
                
                trInfoAgendamentos.innerHTML = `
                <td>${arrayAgendarCliente[c]}</td>
                <td>${arrayAgendarPet[c]}</td>
                <td>${arrayEscolherServico[c]}</td>
                <td>${arrayHorarioAgendado[c]}</td>
                <td>${arrayDataAgendada[c]}</td>
                <td>
                  <button onclick="apagarAgendamento()">Exluir</button>
                </td>`

                tabelaDosAgendamentos.appendChild(trInfoAgendamentos)

            }

            c++
            parar = 1

        } while (c < arrayAgendarCliente.length || parar != 1)
    }

}

let arrayClientesAgendados = [ ]
let arrayAgendarCliente = [ ]
let arrayAgendarPet = [ ]
let arrayEscolherServico = [ ]
let arrayHorarioAgendado = [ ]
let arrayDiaAgendado = [ ]
let arrayMesAgendado = [ ]
let arrayAnoAgendado = [ ]
let arrayDataAgendada = [ ]

function agendar() {
    let agendarCliente = document.getElementById('agendarCliente').value
    let agendarPet = document.getElementById('agendarPet').value
    let escolherServico = document.getElementById('escolherServico').value
    let agendarParaQuando = document.getElementById('agendarHora').value

    let nomeValido = 0
    let petValido = 0
    let horarioValido = 0

        if (agendarCliente.trim() != "" && agendarPet.trim() != "" && escolherServico.trim() != "" && agendarParaQuando.trim() != "") {

            for (let i = 0; i < arrayNomesDosClientes.length; i++) {
                if (agendarCliente == arrayNomesDosClientes[i]) {
                    nomeValido++
                }
            }   
            for (let i = 0; i < arrayNomesDosPets.length; i++) {
                if (agendarPet == arrayNomesDosPets[i]) {
                    petValido++
                }
            }  
            for (let i = 0; i < arrayHorarioAgendado.length; i++) {
                if (agendarParaQuando == arrayHorarioAgendado[i]) {
                    horarioValido++
                }
            }
            if(nomeValido != 0) {
                
                if(petValido != 0) {
                    
                    if(horarioValido == 0 && agendarParaQuando != "") {

                        let horarioString = new String(agendarParaQuando)

                        let hora = horarioString.slice(11,16)
                        let horas = hora.slice(0,2)
                        let minutos = hora.slice(3,6)
                        let horarioAgendado = horas + ":" + minutos
                        
                        let data = horarioString.slice(0,10)
                        
                        let dia = data.slice(8,10)
                        let mes = data.slice(5,7)
                        let ano = data.slice(0,4)

                        let dataAgendada = dia + "/" + mes + "/" + ano
    
                        arrayAgendarCliente.push(agendarCliente)
                        arrayAgendarPet.push(agendarPet)
                        arrayEscolherServico.push(escolherServico)
                        arrayHorarioAgendado.push(horarioAgendado)
                        arrayDataAgendada.push(dataAgendada)

                        document.getElementById('agendarCliente').value = ""
                        document.getElementById('agendarPet').value = ""
                        document.getElementById('escolherServico').value = ""
                        document.getElementById('agendarHora').value = ""

                        document.getElementById('tela1').style.display = 'none'
                        document.getElementById('tela2').style.display = 'none'
                        document.getElementById('tela3').style.display = 'none'
                        document.getElementById('tela4').style.display = 'none'
                        document.getElementById('tela5').style.display = 'block'
                        document.getElementById('tela6').style.display = 'none'
                        document.getElementById('tela7').style.display = 'none'

                        tabelaDosAgendamentos.outerHTML=""

                    } else {
                        window.alert("Horário indisponível")
                    }
    
                } else {
                    document.getElementById('pergunta3').style.display='block'
                }
    
            } else {
                document.getElementById('pergunta2').style.display='block'
            }
        } else {
            window.alert('Preencha os campos corretamente')
        }

    
}
function resposta2Sim() {
    document.getElementById('pergunta2').style.display='none'
    document.getElementById('cadastroDoPet').style.display='none'
    document.getElementById('cadastroDoCliente').style.display='block'
    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'block'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'none'
    document.getElementById('tela6').style.display = 'none'
}
function resposta2Nao() {
    document.getElementById('pergunta2').style.display='none'
    window.alert('Não é possivel fazer agendamento sem o cliente tá cadastrado')
}

function resposta3Sim() {
    document.getElementById('pergunta3').style.display='none'
    document.getElementById('cadastroDoPet').style.display='block'
    document.getElementById('cadastroDoCliente').style.display='none'
    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'block'
    document.getElementById('tela4').style.display = 'none'
    document.getElementById('tela5').style.display = 'none'
    document.getElementById('tela6').style.display = 'none'

}
function resposta3Nao() {
    document.getElementById('pergunta3').style.display='none'
    window.alert('Não é possivel fazer agendamento sem o pet tá cadastrado')
}

