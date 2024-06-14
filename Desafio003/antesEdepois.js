function antesEdepois() {
    let numero = window.prompt('Digite um Número inteiro')
    let antecessor = Number(numero) - 1
    let sucessor = Number(numero) + 1
    alert(`Antes de ${numero}, temos o Número ${antecessor} \nDepois de ${numero}, temos o Número ${sucessor}`)
}