/* . CAPTURA ID DA URL E BUSCA DADOS  */
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("idChanp")); 

fetch("assets/data/campeoes.json")
    .then(res => res.json())
    .then(data => {
        // Procura o campeão pelo ID
        const campeao = data.find(c => c.idChanp === id);
        
        if (!campeao) {
            document.getElementById("detalhesContainer").innerHTML = 
                "<h2 style='color:white; text-align:center'>Campeão não encontrado.</h2>";
            return;
        }

        montarDetalhes(campeao);
    })
    .catch(err => console.error("Erro:", err));
/*   FUNÇÃO PARA RENDERIZAR O CARD  */
function montarDetalhes(c) {
    const container = document.getElementById("detalhesContainer");
// Define a posição da imagem (top, center, bottom) ou usa padrão
    let posicaoBanner = c.posicao || "center center";

    container.innerHTML = `
        <article class="detalhes-card">
            
            <div class="banner"> 
                <img src="${c.imagem}" alt="${c.nome}" style="object-position: ${posicaoBanner}">
            </div>
            
            <div class="conteudo-texto">
                <h1>${c.nome}</h1>
                <h3>${c.titulo}</h3>

                <p class="descricao">${c.descriçao}</p>

                <a href="${c.linkBuild}" target="_blank" class="btn-link">
                    Ver Build Recomendada
                </a>
            </div>

        </article>
    `;
}
/* CONTROLE DE ÁUDIO (IGUAL À INDEX)  */
const audio = document.getElementById('audioNoxus');
const btnSom = document.getElementById('btnSom');
let estaTocando = false;

if (btnSom && audio) {
    audio.volume = 0.2;

    btnSom.addEventListener('click', () => {
        if (estaTocando) {
            audio.pause();
            btnSom.innerHTML = "🔇 Som Off";
            estaTocando = false;
        } else {
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