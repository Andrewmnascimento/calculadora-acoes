let pPrecoJusto = document.getElementById("pj")
let pCompensa = document.getElementById("paec")
function calcularPrecoJusto(){
    let LPA = document.getElementById("lpa").value
    let VPA = document.getElementById("vpa").value
    let precoAtual = document.getElementById("pca").value
    let precoJusto = Math.sqrt(22.5*LPA*VPA).toFixed(2)
    pPrecoJusto.innerHTML = "O Preço Justo por essa ação é de no maximo R$" + precoJusto  
    if(precoAtual <= precoJusto){
        pCompensa.innerHTML = "Essa ação está em um preço justo"
    } else{
        pCompensa.innerHTML = "No dia de Hoje esta ação não está compensando"
    }
}