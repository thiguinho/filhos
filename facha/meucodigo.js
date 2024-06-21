function atualizar() {
    let nome = document.getElementById('nome').value;
    let nivel = parseInt(document.getElementById('nivel').value);
    let forca = parseInt(document.getElementById('forca').value);
    let agilidade = parseInt(document.getElementById('agilidade').value);
    let armadura = parseInt(document.getElementById('armadura').value);
    //classificar o nome
    if (nivel <= 5) {
        nome += ' [INICIANTE]';
    } 
    if (nivel >=5) {
        nome += ' [VETERANO]';
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
//rolagem de dado
function rollDice(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    document.getElementById('result').innerText = `You rolled a d${sides}: ${result}`;
}
//chamar
atualizar();
rollDice();
