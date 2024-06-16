function converter() {
    let resp = document.querySelector('p#res')
    let valor = window.prompt('Digite uma distância em metros (m)')
    let km = valor / 1000
    resp.innerHTML = `${parseFloat(km)} quilômetros(Km)`

}