let botaoDeConverter = document.getElementById('botao-de-conversao')
let trocarMoedaEmselecao = document.getElementById('selecao-moeda')


async function conversaoDeMoeda() {

    let moedasApi = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL').then(function (respostaMoeda) {
        return respostaMoeda.json()
    })

    let dolarDaApi = moedasApi.USDBRL.high
    let euroDaApi = moedasApi.EURBRL.high


    let realBrasileiroValor = Number(document.getElementById('moeda-real-brasileiro').value)
    let valorDoRealTrocar = document.getElementById('moeda-valor-do-real')
    let moedaMudarValor = document.getElementById('moedas-valores')

    if (trocarMoedaEmselecao.value === 'Dólar Americano') {
        let valorDaMoedaEmDolar = realBrasileiroValor / dolarDaApi

        moedaMudarValor.innerHTML = valorDaMoedaEmDolar.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
    }

    if (trocarMoedaEmselecao.value === 'Euro') {
        let valorDaMoedaEuro = realBrasileiroValor / euroDaApi
        moedaMudarValor.innerHTML = valorDaMoedaEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }

    valorDoRealTrocar.innerHTML = realBrasileiroValor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

function trocarMoeda() {
    let bandeirasTrocar = document.querySelector('#bandeiras')
    let textoDaMoedasTrocar = document.getElementById('moeda-texto')
    
    switch(trocarMoedaEmselecao.value) {
        case'Dólar Americano':
        bandeirasTrocar.setAttribute('src','src/img/bandeira-eua.svg')
        textoDaMoedasTrocar.innerHTML = 'Dólar Americano'
        break
        case'Euro':
        bandeirasTrocar.setAttribute('src','src/img/bandeira-euro.svg')
        textoDaMoedasTrocar.innerHTML = 'Euro'

        break
    }

    conversaoDeMoeda()
    
}


botaoDeConverter.addEventListener('click',conversaoDeMoeda)
trocarMoedaEmselecao.addEventListener('click',trocarMoeda)