// Variáveis Globais
let cardContainer = document.querySelector(".card_Container");
let dados = [];

// === ANIMAÇÃO 3D DO BRASÃO (Roda ao carregar a página) ===
document.addEventListener("DOMContentLoaded", () => {
    
    const heroSection = document.getElementById('heroInteractive');
    const crest = document.getElementById('noxusCrest');

    // Verifica se os elementos existem antes de tentar animar
    if (heroSection && crest) {
        
        // Movimento do Mouse: Calcula a rotação 3D
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            // Ajuste a sensibilidade aqui
            const rotateX = (mouseY / rect.height / 2) * -55; 
            const rotateY = (mouseX / rect.width / 2) * 55;

            // Aplica a rotação e a sombra dinâmica
            crest.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.15)`;
            crest.style.filter = `drop-shadow(0 20px 30px rgba(0,0,0,0.9))`;
        });

        // Mouse Saiu: Reseta o brasão para o centro
        heroSection.addEventListener('mouseleave', () => {
            crest.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
            crest.style.filter = `drop-shadow(0 10px 20px rgba(0,0,0,0.8))`;
        });
    }
});

// === FUNÇÃO DE BUSCAR (Acionada pelo botão) ===
async function novaBuscar() {
    
    //  Esconde o Brasão/Hero
    const heroSection = document.getElementById('heroInteractive');
    if (heroSection) {
        heroSection.style.display = 'none';
    }

    // Para a Música e Esconde o Botão de Som (Importante!)
    const audio = document.getElementById('audioNoxus');
    const btnSom = document.getElementById('btnSom');
    if (audio) {
        audio.pause();       
        audio.currentTime = 0; 
    }
    if (btnSom) {
        btnSom.classList.add('oculto'); 
    }

    //  Pega o texto digitado (converte para minúsculo)
    let campoPesquisa = document.getElementById("campoPesquisa").value.toLowerCase();

    try {
        // Busca os dados no JSON
        let resposta = await fetch("assets/data/campeoes.json");
        let dadosOriginais = await resposta.json();
        
        // Se não digitou nada, mostra todos
        if (campoPesquisa == "") {
            mostrarCards(dadosOriginais);
            return;
        }

        // Filtra por Nome ou Título
        let resultados = dadosOriginais.filter(dado => 
            dado.nome.toLowerCase().includes(campoPesquisa) || 
            dado.titulo.toLowerCase().includes(campoPesquisa)
        );

        // Se não achou nada, mostra mensagem de erro
        if (resultados.length == 0) {
            cardContainer.innerHTML = `
                <div style="text-align: center; color: var(--texto); padding: 4rem; width: 100%;">
                    <h2 style="font-size: 4rem; margin-bottom: 1rem; color: var(--vermelhoNoxusClaro);">:(</h2>
                    <p style="font-size: 1.4rem; color: var(--textoSecundario);">
                        Ainda não estudamos essa ciência, mas logo vai sair!
                    </p>
                </div>
            `;
        } else {
            // Se achou, mostra os cards
            mostrarCards(resultados);
        }
        
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
    }
}

// === FUNÇÃO PARA DESENHAR OS CARDS ===
function mostrarCards(dadosParaMostrar) {
    cardContainer.innerHTML = ""; // Limpa a tela

    for (let dado of dadosParaMostrar) {
        let article = document.createElement("article");
        article.classList.add("card");
        
        // Define posição da imagem (usa center se não tiver no JSON)
        let posicaoImagem = dado.posicao || "center center";

        // Cria o HTML do card
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.titulo}</p>
            <img src="${dado.imagem}" alt="${dado.nome}" style="object-position: ${posicaoImagem}">
        `;

        // Cria o link para a página de detalhes
        let link = document.createElement("a");
        link.href = "detalhes.html?idChanp=" + dado.idChanp;
        link.appendChild(article);

        cardContainer.appendChild(link);
    }
}

// ===  EVENTO DE TECLA "ENTER" ===
let inputPesquisa = document.getElementById("campoPesquisa");

if (inputPesquisa) {
    inputPesquisa.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            document.getElementById("Buscar").click(); 
        }
    });
}

// ===  CONTROLE DE ÁUDIO (Botão Mute/Unmute) ===
const audio = document.getElementById('audioNoxus');
const btnSom = document.getElementById('btnSom');
let estaTocando = false;

if (btnSom && audio) {
    audio.volume = 0.2; 

    btnSom.addEventListener('click', () => {
        if (estaTocando) {
            // Se está tocando, pausa
            audio.pause();
            btnSom.innerHTML = "🔇 Som Off";
            estaTocando = false;
        } else {
            // Se está pausado, toca
            audio.play().then(() => {
                btnSom.innerHTML = "🔊 Som On";
                btnSom.style.borderColor = "#00FF00"; 
                estaTocando = true;
            }).catch(error => {
                console.log("O navegador bloqueou o áudio automático:", error);
            });
        }
    });
}