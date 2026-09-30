let saldo = 100;
const iconsCassino = ["🍎", "🍌", "🍒", "7️⃣"];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function jogar() {
    if (saldo < 10) return;

    const btn = document.getElementById("btnJogar");
    const roleta = document.getElementById("roleta");
    const msg = document.getElementById("mensagem");
    const visorSaldo = document.getElementById("saldo");

    // 1. Desconta o valor e bloqueia o botão durante o giro
    saldo -= 10;
    visorSaldo.innerText = saldo;
    msg.innerText = "A girar...";
    btn.disabled = true;

    // 2. Animação de giro no ecrã
    for (let i = 0; i < 15; i++) {
        let t1 = iconsCassino[Math.floor(Math.random() * iconsCassino.length)];
        let t2 = iconsCassino[Math.floor(Math.random() * iconsCassino.length)];
        let t3 = iconsCassino[Math.floor(Math.random() * iconsCassino.length)];
        roleta.innerText = `${t1}${t2}${t3}`;
        await sleep(100);
    }

    // 3. Sorteio definitivo
    let r1 = iconsCassino[Math.floor(Math.random() * iconsCassino.length)];
    let r2 = iconsCassino[Math.floor(Math.random() * iconsCassino.length)];
    let r3 = iconsCassino[Math.floor(Math.random() * iconsCassino.length)];
    roleta.innerText = `${r1}${r2}${r3}`;

    // 4. Verificação de prémios
    if (r1 === "🍎" && r2 === "🍎" && r3 === "🍎") {
        msg.innerText = "Ganhou 50 pontos!";
        saldo += 50;
    } else if (r1 === "🍌" && r2 === "🍌" && r3 === "🍌") {
        msg.innerText = "Ganhou 75 pontos!";
        saldo += 75;
    } else if (r1 === "🍒" && r2 === "🍒" && r3 === "🍒") {
        msg.innerText = "Ganhou 100 pontos!";
        saldo += 100;
    } else if (r1 === "7️⃣" && r2 === "7️⃣" && r3 === "7️⃣") {
        msg.innerText = "INCRÍVEL! Sete triplo! Ganhou 200 pontos!";
        saldo += 200;
    } else {
        msg.innerText = "Sem prémio nesta rodada.";
    }

    visorSaldo.innerText = saldo;

    // 5. Liberta o botão se ainda houver saldo
    if (saldo >= 10) {
        btn.disabled = false;
    } else {
        msg.innerText += " Saldo esgotado. Fim de jogo.";
    }
}