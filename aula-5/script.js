const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    msg: "Jogador 1 venceu!"
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    msg: "Jogador 2 venceu!"
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#placarMaximo');

for (let i = 1; i<=21; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    winningScoreSelect.appendChild(opt);
}

let winningScore = 1;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            alert(player.msg);
        }   
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
    }
}