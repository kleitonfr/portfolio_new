// Carrega os dados do projeto ao abrir a página
document.addEventListener('DOMContentLoaded', function() {
    // Pega o ID do projeto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');

    if (!projectId || !projectsData[projectId]) {
        // Se não houver projeto válido, redireciona para a home
        window.location.href = 'index.html#projects';
        return;
    }

    const project = projectsData[projectId];
    loadProjectDetails(project);
});

function loadProjectDetails(project) {
    // Atualiza título da página
    document.title = `${project.title} - Kleiton Ferreira`;

    // Atualiza título e descrição breve
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectBrief').textContent = project.brief;

    // Carrega conteúdo embed se existir ANTES da descrição (para PetMatch e Hono API)
    if (project.embedContent) {
        document.getElementById('embedContent').innerHTML = project.embedContent;
    }

    // Atualiza descrição completa
    document.getElementById('projectDescription').innerHTML = project.description;

    // Carrega tecnologias
    const techStack = document.getElementById('techStack');
    techStack.innerHTML = project.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join(' ');

    // Carrega imagens
    loadProjectImages(project.images, project.id);

    // Carrega links
    loadProjectLinks(project.links);
}

function loadProjectImages(images, projectId) {
    const imageContainer = document.getElementById('imageContainer');
    
    if (!images || images.length === 0) {
        imageContainer.style.display = 'none';
        return;
    }

    imageContainer.style.display = 'block';

    // Se houver apenas uma imagem
    if (images.length === 1) {
        imageContainer.innerHTML = `<img src="${images[0]}" alt="Screenshot do projeto" class="img-fluid rounded">`;
        return;
    }

    // Se houver múltiplas imagens, cria um carrossel
    const carouselId = 'projectCarousel';
    
    // Adiciona classe especial para Nest Florestal ter imagens menores
    const carouselClass = projectId === 'nest-florestal' ? 'carousel-compact' : '';
    
    const indicators = images.map((_, index) => 
        `<button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${index}" 
                ${index === 0 ? 'class="active" aria-current="true"' : ''} 
                aria-label="Slide ${index + 1}"></button>`
    ).join('');

    const slides = images.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block mx-auto" alt="Screenshot ${index + 1}" style="max-height: ${projectId === 'nest-florestal' ? '500px' : '600px'}; width: auto; object-fit: contain;">
        </div>
    `).join('');

    imageContainer.innerHTML = `
        <div id="${carouselId}" class="carousel slide ${carouselClass}" data-bs-ride="carousel">
            <div class="carousel-indicators">
                ${indicators}
            </div>
            <div class="carousel-inner">
                ${slides}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
            </button>
        </div>
    `;
}

function loadProjectLinks(links) {
    const linksContainer = document.getElementById('projectLinks');
    
    if (!links || links.length === 0) {
        linksContainer.innerHTML = '<p class="text-muted">Nenhum link disponível</p>';
        return;
    }

    linksContainer.innerHTML = links.map(link => {
        if (link.disabled) {
            return `
                <button class="btn btn-outline-secondary w-100 mb-2" disabled>
                    <i class="${link.icon}"></i> ${link.name}
                </button>
            `;
        }
        return `
            <a href="${link.url}" target="_blank" class="btn btn-outline-primary w-100 mb-2">
                <i class="${link.icon}"></i> ${link.name}
            </a>
        `;
    }).join('');
}
