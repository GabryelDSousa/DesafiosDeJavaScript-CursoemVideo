function comprar() {
    let produto = prompt('Que produto você está comprando?')
    let valor = prompt(`Quanto custa o ${produto} que você esta comprando?`)
    let dinheiro = prompt(`Quanto foi o valor que você deu para pagar ${produto}`)
    let troco = Number(dinheiro) - Number(valor)
    alert(`Você comprou ${produto} que custa R$${valor} \nDeu R$${valor} e vai receber R$${troco}. \nVolte Sempre!`)
}