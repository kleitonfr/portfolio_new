// Torna os cards de projetos clicáveis
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Script projects-clickable.js carregado!');
    
    // Mapeia os títulos dos cards para os IDs dos projetos
    const projectMapping = {
        'Diário Oficial - Caraguatatuba': 'diario-oficial',
        'Sistema de Consulta Pública': 'consulta-publica',
        'Sistema LGPD': 'sistema-lgpd',
        'Nest Florestal': 'nest-florestal',
        'PetMatch Backend': 'petmatch-backend',
        'Hono API Worker': 'hono-api-worker'
    };

    // Seleciona todos os cards de projetos
    const projectCards = document.querySelectorAll('.project-card');
    console.log(`📋 ${projectCards.length} cards de projetos encontrados`);

    if (projectCards.length === 0) {
        console.error('❌ Nenhum card com classe .project-card encontrado!');
        return;
    }

    projectCards.forEach((card, index) => {
        // Adiciona cursor pointer para indicar que é clicável
        card.style.cursor = 'pointer';
        
        const title = card.querySelector('h3')?.textContent;
        console.log(`Card ${index + 1}: "${title}"`);
        
        // Adiciona evento de clique
        card.addEventListener('click', function(e) {
            console.log('👆 Card clicado!');
            
            // Previne que cliques em links/botões dentro do card ativem a navegação
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                console.log('⚠️ Clique em link detectado, ignorando navegação do card');
                return;
            }

            // Pega o título do projeto
            const title = this.querySelector('h3')?.textContent;
            console.log('📌 Título do card:', title);
            
            // Mapeia o título para o ID do projeto
            const projectId = projectMapping[title];
            console.log('🔑 ID do projeto:', projectId);

            if (projectId) {
                const url = `project-detail.html?project=${projectId}`;
                console.log('🔗 Redirecionando para:', url);
                window.location.href = url;
            } else {
                console.error('❌ ID do projeto não encontrado para:', title);
                console.log('Mapeamentos disponíveis:', Object.keys(projectMapping));
            }
        });

        // Adiciona efeito visual hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    console.log('✅ Eventos de clique adicionados a todos os cards');
});
