# 🛡️ Guia Off-Meta: A Ciência da Toplane

> "A força é a única verdade." - Noxus

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Tech](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JS-orange)

## 📜 Sobre o Projeto
O **Guia Off-Meta** é uma aplicação web interativa (SPA) desenvolvida para jogadores de League of Legends que buscam estratégias não convencionais para a rota superior. Particularmente, acredito que é aí que está toda a graça do jogo: a famosa 'Ciência', para os mais íntimos.

Diferente de wikis comuns, este projeto foca na **imersão do usuário**, trazendo a estética agressiva de Noxus combinada com funcionalidades modernas de front-end.

## ✨ Destaques Criativos & Técnicos
O projeto foi avaliado com base em **Criatividade**, **Utilidade** e **Eficácia**. Aqui estão os diferenciais:

### 🎨 Criatividade & UI/UX
- **Hero Section 3D Interativa:** Um brasão vetorial personalizado que reage ao movimento do mouse usando cálculos matemáticos de perspectiva CSS/JS.
- **Atmosfera Imersiva:** Sistema de áudio (BGM) com toggle (Mute/Unmute) e feedback visual.
- **Identidade Visual Noxiana:** Paleta de cores, fontes e texturas alinhadas com o universo do jogo (Lore-accurate).

### ⚙️ Eficácia & Código
- **Lógica SPA (Single Page Application):** O site não recarrega. O JavaScript manipula o DOM para alternar entre a "Tela Inicial" e os "Resultados" instantaneamente.
- **Consumo de Dados (JSON):** Os campeões não estão "chumbados" no HTML. O sistema consome um banco de dados simulado (`campeoes.json`) via `fetch API`.
- **Busca Inteligente:** - Filtra em tempo real.
  - Ignora maiúsculas/minúsculas.
  - Exibe mensagem de erro personalizada e bem humorada caso o campeão não exista.
- **Responsividade Total:** Layout fluido que se adapta de monitores 4K até celulares pequenos.

## 🚀 Tecnologias Utilizadas
- **HTML5 Semântico**
- **CSS3** (Grid, Flexbox, Animations, CSS Variables, 3D Transforms)
- **JavaScript Vanilla** (Manipulação de DOM, Event Listeners, Fetch API, Audio API)
- **SVG** (Vetores otimizados para performance)

## 🔧 Como Rodar o Projeto
1. Clone este repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. **Dica:** Para uma melhor experiência, ative o som no botão inferior direito!

## 🚧 Próximos Passos (Roadmap)
Este projeto é apenas o começo. O banco de dados (`campeoes.json`) foi estruturado para ser escalável, e minhas próximas metas são:

- [ ] **Expansão do Catálogo:** Adicionar novos campeões Off-Meta periodicamente.
- [ ] **Builds Detalhadas:** Incluir variações de itens para diferentes "matchups" (contra quem você está jogando).
- [ ] **Seção de Runas:** Implementar visualização gráfica das runas ideais para cada escolha.

## 👀 Veja o resultado final

O projeto está no ar! Você pode visualizar o site hospedado através do link abaixo:

🔗 [Clique aqui para acessar o projeto online](https://kalbraga.github.io/Imersao-DevAlura/)

---
<p align="center">
  Desenvolvido por <strong>Kauã</strong> ⚔️
  <br>
  <em>Projeto sem fins lucrativos. Assets e sons pertencem à Riot Games.</em>
</p>
