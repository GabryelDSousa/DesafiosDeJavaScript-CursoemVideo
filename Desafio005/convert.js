function converter() {
    let resp = document.querySelector('p#res')
    let valor = window.prompt('Digite uma distância em metros (m)')
    let km = valor / 1000
    let hm = valor / 100
    let dam = valor / 10
    let dm = valor * 10
    let cm = valor * 100
    let mm = valor * 1000
    resp.innerHTML = `<strong>A distância de ${valor.toString().replace('.', ',')} metros, corresponte a...</strong><br>`
    resp.innerHTML += `${parseFloat(km).toFixed(3)} quilômetros(Km)<br>`
    resp.innerHTML += `${parseFloat(hm).toFixed(3)} hectômetros(Hm)<br>`
    resp.innerHTML += `${parseFloat(dam).toFixed(3)} decâmetro(Dam)<br>`
    resp.innerHTML += `${Number(dm).toFixed(1)} decímetros(dm)<br>`
    resp.innerHTML += `${Number(cm)} centimetros(cm)<br>`
    resp.innerHTML += `${Number(mm)} milimetros(mm)`

}