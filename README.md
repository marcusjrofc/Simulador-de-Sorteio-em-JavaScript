# Simulador de Sorteio Web 🎰

Aplicação web interativa que simula um sorteio de ícones com pontos virtuais, desenvolvida com **HTML5**, **CSS3** (responsivo para mobile) e **JavaScript**.

## ⚙️ Funcionalidades

* **Animação em Tempo Real:** Efeito visual dos rolos a girar antes de revelar o resultado final.
* **Design Responsivo:** Adaptado para telemóveis, tablets e computadores desktop.
* **Sistema de Saldo Virtual:** O jogador inicia a sessão com 100 pontos e cada jogada custa 10 pontos.
* **Tabela de Recompensas:** Atribuição de pontos instantânea para combinações de 3 símbolos iguais.
* **Proteção de Interface:** Bloqueio do botão durante o giro para evitar múltiplos cliques simultâneos.

## 🏆 Tabela de Prémios

| Combinação (3 iguais) | Prémio |
| :--- | :--- |
| 🍎 🍎 🍎 | 50 pontos |
| 🍌 🍌 🍌 | 75 pontos |
| 🍒 🍒 🍒 | 100 pontos |
| 7️⃣ 7️⃣ 7️⃣ | 200 pontos |

## 📁 Estrutura dos Ficheiros

```text
/
├── index.html   # Estrutura e elementos da página
├── style.css    # Estilos, cores e responsividade móvel
└── script.js    # Lógica do jogo, animação e manipulação do DOM