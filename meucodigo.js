function atualizar() {
    let nome = document.getElementById('nome').value;
    let nivel = parseInt(document.getElementById('nivel').value);
    let forca = parseInt(document.getElementById('forca').value);
    let agilidade = parseInt(document.getElementById('agilidade').value);
    let armadura = parseInt(document.getElementById('armadura').value);

    // Atualizar Nome
    if (nivel <= 5) {
        nome += ' [INICIANTE]';
    } else {
        nome += ' [VETERANO]';
    }

    if (nivel >= 10){
        nome += ' [MASTERS]'
    }
    // Atualizar Poder de Ataque
    let poderAtaque = (forca - 10) / 2 + nivel / 2;

    // Atualizar Defesa
    let defesa = agilidade + armadura;

    // Exibir resultados
    document.getElementById('outputNome').textContent = 'Nome: ' + nome;
    document.getElementById('outputPoderAtaque').textContent = 'Poder de Ataque: ' + poderAtaque;
    document.getElementById('outputDefesa').textContent = 'Defesa: ' + defesa;
}
 atualizar();