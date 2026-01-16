const projetos = [
    {
        titulo: "Dashboard de Vendas",
        categoria: "powerbi",
        imagem: "../imagens/dash4.png",
        descricao: "Análise completa de vendas de supermercado, com insights por período e filial.",
        tags: ["Power BI", "DAX", "SQL"],
        links: [
            { tipo: "externo", url: "https://app.powerbi.com/view?r=eyJrIjoiYWU1ZGMwZGQtN2E1Zi00YjE1LWE4OWQtYTljYjFiM2I2N2IwIiwidCI6IjgzZWE2ZGJmLTkzYTQtNGZmNy05NTk4LTNhZDA4NWIwNWU4MyJ9", texto: "Ver Dashboard" },
            { tipo: "analise", url: "../pages/dashboard-supermercado.html", texto: "Análise Completa" }
        ]
    },
    {
        titulo: "Dashboard Imobiliário",
        categoria: "powerbi",
        imagem: "../imagens/dash3.png",
        descricao: "Dashboard para análise estratégica do mercado imobiliário: tendências, perfil de clientes e benchmark competitivo",
        tags: ["Power BI", "DAX", "SQL", "Análise de Mercado"],
        links: [
            { tipo: "externo", url: "https://app.powerbi.com/view?r=eyJrIjoiMDk4YWJiODAtOTg5OS00ZWQ3LTk0MjgtNzQ4NWQzZjk0ZGI5IiwidCI6IjgzZWE2ZGJmLTkzYTQtNGZmNy05NTk4LTNhZDA4NWIwNWU4MyJ9&pageName=ReportSection&navContentPaneEnabled=false", texto: "Ver Completo" }
        ]
    },
    {
        titulo: "Dashboard de Jogos",
        categoria: "python",
        imagem: "../imagens/dash1.png",
        descricao: "Análise relacionada a dados de jogos",
        tags: ["Python", "Plotly", "Pandas", "Numpy"],
        links: [
            { tipo: "externo", url: "https://matheusfernandescarillo.github.io/analise-jogos", texto: "Ver Dashboard" },
            { tipo: "github", url: "https://github.com/MatheusFernandesCarillo/analise-jogos", texto: "Código" }
        ]
    },
    
    {
        titulo: "Dashboard de Animes",
        categoria: "python",
        imagem: "../imagens/dash2.png",
        descricao: "Análise baseada nos dados do MyAnimeList",
        tags: ["Python", "Plotly", "Pandas", "JavaScript", "Seaborn"],
        links: [
            { tipo: "externo", url: "https://matheusfernandescarillo.github.io/analise-animes", texto: "Ver Dashboard" },
            { tipo: "analise", url: "https://github.com/MatheusFernandesCarillo/analise-animes", texto: "Código" }
        ]
    }
];

function renderizarProjetos() {
    const container = document.getElementById('container-projetos');
    if (!container) return;

    container.innerHTML = projetos.map(p => `
        <div class="project-card fade-in visible" data-category="${p.categoria}">
            <div class="project-image">
                <img src="${p.imagem}" alt="${p.titulo}">
            </div>
            <div class="project-content">
                <h3>${p.titulo}</h3>
                <p>${p.descricao}</p>
                <div class="project-tags">
                    ${p.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${p.links.map(l => {
                        let icone = l.tipo === 'github' ? 'fab fa-github' : (l.tipo === 'analise' ? 'fas fa-file-alt' : 'fas fa-external-link-alt');
                        return `<a href="${l.url}" class="project-link" target="_blank">
                                    <i class="${icone}"></i> ${l.texto}
                                </a>`;
                    }).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Inicia a renderização
document.addEventListener('DOMContentLoaded', renderizarProjetos);
