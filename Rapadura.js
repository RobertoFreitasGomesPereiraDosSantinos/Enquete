let clicks_S = 0;
let clicks_N = 0;
function contagem(opt) {
    if (opt == "Sim") {
        clicks_S += 1;
        document.getElementById('SIM').innerHTML = clicks_S;
        document.getElementById('SIM').style.width = (clicks_S * 10)+"px";
    } else if (opt == 'Nao') {
        clicks_N += 1;
        document.getElementById('NAO').innerHTML = clicks_N;
        document.getElementById('NAO').style.width = (clicks_N * 10)+"px";
    }
} 