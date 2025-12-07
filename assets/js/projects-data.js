// Dados dos projetos com informações detalhadas
const projectsData = {
    'diario-oficial': {
        id: 'diario-oficial',
        title: 'Diário Oficial - Caraguatatuba',
        brief: 'Nova interface moderna para o Diário Oficial de Caraguatatuba',
        description: `
            <p>Nova interface do <strong>Diário Oficial Eletrônico</strong> da Prefeitura Municipal de Caraguatatuba, desenvolvida com foco em modernidade, acessibilidade e experiência do usuário.</p>
            
            <h3 class="mt-4 mb-3">♿ Acessibilidade</h3>
            <p>Este projeto foi avaliado pelo <strong>ASES – Avaliador e Simulador de Acessibilidade de Sítios</strong> do Governo Federal com <strong>98,12% de conformidade</strong>.</p>
            
            <h4>Principais recursos:</h4>
            <ul>
                <li>Compatível com leitores de tela</li>
                <li>Teclado navegável (tabindex, aria-labels)</li>
                <li>Atalhos rápidos por teclado</li>
                <li>VLibras integrado</li>
                <li>Contraste e tamanho da fonte ajustáveis</li>
            </ul>

            <h3 class="mt-4 mb-3">🎯 Funcionalidades</h3>
            <ul>
                <li>Interface responsiva e intuitiva</li>
                <li>Sistema de consulta de edições</li>
                <li>Visualização de últimas publicações</li>
                <li>Design moderno e acessível</li>
                <li>Componentes reutilizáveis</li>
            </ul>
        `,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5.3', 'Bootstrap Icons', 'VLibras'],
        images: [
            '../assets/img/diario_oficial/image.png',
            '../assets/img/diario_oficial/image2.png',
            '../assets/img/diario_oficial/image3.png'
        ],
        links: [
            { name: 'GitHub', url: 'https://github.com/kleitonfr/front_diario-oficial', icon: 'bi-github' },
            { name: 'Demo ao Vivo', url: 'https://kleitonfr.github.io/front_diario-oficial/', icon: 'bi-box-arrow-up-right' }
        ]
    },
    'consulta-publica': {
        id: 'consulta-publica',
        title: 'Sistema de Consulta Pública',
        brief: 'Colaboração em refatoração e implementação de melhores práticas',
        description: `
            <p><strong>Projeto colaborativo</strong> onde atuei na <strong>refatoração do código</strong> e <strong>implementação de melhores práticas</strong> de desenvolvimento em um sistema de gerenciamento de consultas públicas.</p>
            
            <h3 class="mt-4 mb-3">🤝 Minha Contribuição</h3>
            <ul>
                <li><strong>Refatoração de Código:</strong> Melhorias na arquitetura e organização do código-fonte</li>
                <li><strong>Boas Práticas:</strong> Implementação de padrões de desenvolvimento Laravel</li>
                <li><strong>Otimização:</strong> Melhorias de performance e queries do banco de dados</li>
                <li><strong>Code Review:</strong> Revisão e sugestões de melhorias no código existente</li>
                <li><strong>Documentação:</strong> Criação e atualização da documentação técnica</li>
            </ul>

            <h3 class="mt-4 mb-3">🎯 Principais Funcionalidades do Sistema</h3>
            <ul>
                <li><strong>Gestão de Consultas:</strong> Criação, edição e controle completo de consultas públicas</li>
                <li><strong>Participação Cidadã:</strong> Interface intuitiva para que cidadãos possam enviar suas contribuições</li>
                <li><strong>Painel Administrativo:</strong> Dashboard completo para gestores acompanharem estatísticas e contribuições</li>
                <li><strong>Sistema de Notificações:</strong> Alertas para novos comentários e atualizações</li>
                <li><strong>Relatórios:</strong> Geração de relatórios detalhados sobre participações</li>
            </ul>

            <h3 class="mt-4 mb-3">🔐 Segurança e Conformidade</h3>
            <ul>
                <li>Autenticação segura de usuários</li>
                <li>Validação de dados em múltiplas camadas</li>
                <li>Proteção contra ataques CSRF e XSS</li>
                <li>Conformidade com LGPD</li>
            </ul>

            <h3 class="mt-4 mb-3">💡 Melhorias Implementadas</h3>
            <ul>
                <li>Arquitetura MVC seguindo padrões Laravel</li>
                <li>Service Layer para lógica de negócio</li>
                <li>Form Requests para validação</li>
                <li>Eager Loading para otimização de queries</li>
                <li>Soft Deletes para auditoria</li>
            </ul>
        `,
        technologies: ['PHP', 'Laravel 10+', 'MySQL', 'Bootstrap 4', 'jQuery', 'AdminLTE'],
        images: [
            '../assets/img/consulta_publica/image.png',
            '../assets/img/consulta_publica/image2.png',
            '../assets/img/consulta_publica/image3.png',
            '../assets/img/consulta_publica/image4.png',
            '../assets/img/consulta_publica/image5.png'
        ],
        links: [
            { name: 'Projeto Privado', url: '#', icon: 'bi-lock-fill', disabled: true }
        ]
    },
    'sistema-lgpd': {
        id: 'sistema-lgpd',
        title: 'Sistema LGPD - Gestão ROPA',
        brief: 'Sistema para gerenciamento e conformidade com a Lei Geral de Proteção de Dados',
        description: `
            <p>Sistema completo de gestão de registros de operações de tratamento de dados pessoais (ROPA), em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.</p>
            
            <h3 class="mt-4 mb-3">📋 Funcionalidades Principais</h3>
            
            <h4>Gestão de Unidades</h4>
            <ul>
                <li>Cadastro de Secretarias/Setores responsáveis</li>
                <li>Informações de gestores e contatos</li>
                <li>Listagem com filtros avançados</li>
                <li>Edição e exclusão (soft delete)</li>
            </ul>

            <h4>Gestão de Registros ROPA</h4>
            <ul>
                <li>Registro completo de operações de tratamento</li>
                <li>Vínculo com unidades responsáveis</li>
                <li>Categorização de titulares</li>
                <li>Mapeamento de dados pessoais coletados</li>
                <li>Documentação de bases legais LGPD</li>
                <li>Descrição de compartilhamento</li>
                <li>Medidas de segurança implementadas</li>
                <li>Período de retenção de dados</li>
            </ul>

            <h3 class="mt-4 mb-3">🏗️ Arquitetura</h3>
            <p>O sistema utiliza <strong>Service Layer Pattern</strong> para separação de responsabilidades:</p>
            <ul>
                <li>Views (Blade Templates)</li>
                <li>Controllers limpos e focados</li>
                <li>Form Requests para validação</li>
                <li>Services com lógica de negócio reutilizável</li>
                <li>Models com Eloquent ORM</li>
            </ul>

            <h3 class="mt-4 mb-3">🔐 Segurança</h3>
            <ul>
                <li>CSRF Protection em todos os formulários</li>
                <li>Mass Assignment Protection</li>
                <li>SQL Injection Prevention com Eloquent</li>
                <li>XSS Prevention com Blade</li>
                <li>Soft Deletes para auditoria</li>
                <li>Validation com regras rígidas</li>
            </ul>
        `,
        technologies: ['PHP', 'Laravel 10+', 'MySQL', 'Bootstrap 4', 'jQuery', 'AdminLTE'],
        images: [
            '../assets/img/sistema_lgpd/login.png',
            '../assets/img/sistema_lgpd/cadastro.png',
            '../assets/img/sistema_lgpd/formulario.png',
            '../assets/img/sistema_lgpd/lista.png',
            '../assets/img/sistema_lgpd/detalhe-registro.png',
            '../assets/img/sistema_lgpd/lista-usuario.png',
            '../assets/img/sistema_lgpd/novo-usuario.png',
            '../assets/img/sistema_lgpd/deletar-usuario.png'
        ],
        links: [
            { name: 'Projeto Privado', url: '#', icon: 'bi-lock-fill', disabled: true }
        ]
    },
    'nest-florestal': {
        id: 'nest-florestal',
        title: 'MPOA - Manual de Procedimentos',
        brief: 'Sistema de gestão para vigilantes florestais do Parque Estadual Serra do Mar',
        description: `
            <p>O aplicativo <strong>Manual de Procedimentos Operacionais e Administrativos (MPOA)</strong> foi desenvolvido para o Parque Estadual Serra do Mar, núcleo Caraguatatuba, com o objetivo de capacitar e padronizar a atuação dos vigilantes florestais.</p>
            
            <h3 class="mt-4 mb-3">🎯 Objetivo</h3>
            <p>A necessidade de uma ferramenta como essa surgiu do desafio de gerenciar uma equipe majoritariamente composta por guardas terceirizados, muitas vezes com pouca experiência e conhecimento limitado sobre a legislação ambiental e os procedimentos corretos para lidar com infrações dentro da Unidade de Conservação.</p>

            <h3 class="mt-4 mb-3">⚡ Problema Resolvido</h3>
            <p><strong>Antes:</strong> A rotina de fiscalização era ineficiente:</p>
            <ul>
                <li>Uso de planilhas Excel manuais para gerar Autos de Infração</li>
                <li>Documentos com erros que exigiam revisões constantes</li>
                <li>Relatório Diário preenchido separadamente via Google Forms</li>
                <li>Dúvidas constantes em campo sobre procedimentos corretos</li>
            </ul>

            <p class="mt-3"><strong>Depois:</strong> Com o MPOA, o processo foi completamente otimizado:</p>
            <ul>
                <li><strong>Consulta Rápida:</strong> Acesso imediato às infrações ambientais com artigos penais e exemplos práticos</li>
                <li><strong>Geração Automática:</strong> Formulário simplificado que gera automaticamente o texto do Auto de Infração</li>
                <li><strong>Eliminação de Erros:</strong> Redução drástica de erros de escrita e dúvidas</li>
                <li><strong>Integração Completa:</strong> Relatório Diário integrado com anexo de Autos de Infração</li>
                <li><strong>Envio Digital:</strong> Todo o pacote enviado de forma organizada para o setor administrativo</li>
            </ul>

            <div class="project-detail-card mt-4 text-center">
                <h3 class="mb-4">🎓 Entrega do Projeto</h3>
                <img src="../assets/img/nest_florestal/WhatsApp Image 2025-12-03 at 10.30.38.jpeg" 
                     alt="Turma entregando o projeto ao Parque Serramar" 
                     class="img-fluid rounded shadow-lg"
                     style="max-width: 800px; width: 100%;">
                <p class="mt-3 text-muted">Equipe de desenvolvimento apresentando o sistema MPOA aos gestores do Parque Estadual Serra do Mar</p>
            </div>

            <h3 class="mt-5 mb-3">🚀 Impacto</h3>
            <ul>
                <li>Redução significativa no tempo de preenchimento de documentos</li>
                <li>Maior segurança e certeza na identificação de irregularidades</li>
                <li>Eliminação de erros de documentação</li>
                <li>Otimização completa do fluxo de trabalho</li>
                <li>Capacitação contínua da equipe através do acesso ao manual</li>
            </ul>
        `,
        technologies: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'React Native', 'Expo'],
        images: [
            '../assets/img/nest_florestal/WhatsApp Image 2025-12-02 at 09.09.35.jpeg',
            '../assets/img/nest_florestal/WhatsApp Image 2025-12-02 at 09.09.36.jpeg',
            '../assets/img/nest_florestal/WhatsApp Image 2025-12-02 at 09.09.37.jpeg',
            '../assets/img/nest_florestal/WhatsApp Image 2025-12-02 at 09.09.40.jpeg',
            '../assets/img/nest_florestal/WhatsApp Image 2025-12-02 at 09.09.41.jpeg',
            '../assets/img/nest_florestal/WhatsApp Image 2025-12-02 at 09.09.42.jpeg'
        ],
        links: [
            { name: 'Projeto Privado', url: '#', icon: 'bi-lock-fill', disabled: true }
        ]
    },
    'petmatch-backend': {
        id: 'petmatch-backend',
        title: 'PetMatch Backend',
        brief: 'Backend para plataforma de adoção de pets com sistema de matching',
        description: `
            <p>Backend completo para plataforma de adoção de pets desenvolvido com <strong>Node.js, Express e PostgreSQL</strong>. Sistema com autenticação, gerenciamento de perfis e funcionalidades avançadas.</p>
            
            <h3 class="mt-4 mb-3">🎯 Funcionalidades Desenvolvidas</h3>
            
            <h4>1. Cadastro de Usuário</h4>
            <p>Na tela inicial do aplicativo, ao selecionar "Criar conta", o usuário é redirecionado à tela de cadastro dividida em três etapas. As informações são enviadas ao back-end e salvas no banco de dados, registrando o usuário no sistema.</p>

            <h4>2. Redefinição de Senha</h4>
            <p>Na tela de login, caso o usuário tenha esquecido sua senha, ele pode redefinir através dos seguintes passos:</p>
            <ul>
                <li>Pressionar "Esqueci minha senha"</li>
                <li>Receber código via e-mail</li>
                <li>Inserir o código de verificação</li>
                <li>Criar nova senha (criptografada no banco)</li>
                <li>Sistema valida código e exibe erros se necessário</li>
            </ul>

            <h4>3. Registro de Preferências</h4>
            <p>No primeiro acesso após login, o usuário preenche suas preferências relacionadas aos pets para que o aplicativo possa realizar sugestões futuras personalizadas.</p>

            <h3 class="mt-4 mb-3">👥 Equipe de Desenvolvimento</h3>
            <ul>
                <li><strong>Planejamento e Requisitos:</strong> Alef Thallys</li>
                <li><strong>Banco de Dados:</strong> Kleiton Ferreira</li>
                <li><strong>Design e Front-end:</strong> Maria Eduarda de Faria</li>
                <li><strong>Back-end:</strong> Tulio Koogi e Kleiton Ferreira</li>
            </ul>

            <h3 class="mt-4 mb-3">🔐 Segurança</h3>
            <ul>
                <li>Senhas criptografadas com bcrypt</li>
                <li>Validação de dados com Zod</li>
                <li>Autenticação JWT</li>
                <li>Verificação por e-mail</li>
            </ul>
        `,
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Zod', 'TypeScript', 'React Native', 'Expo'],
        embedContent: `
            <div class="embed-container mt-4 mb-4">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7360751130110242816?compact=1" 
                        height="399" 
                        width="504" 
                        frameborder="0" 
                        allowfullscreen="" 
                        title="Vídeo de demonstração do PetMatch"></iframe>
            </div>
        `,
        images: [],
        links: [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/posts/kleiton-ferreira_nodejs-postgresql-prisma-activity-7360751140461146112-MJpL', icon: 'bi-linkedin' }
        ]
    },
    'hono-api-worker': {
        id: 'hono-api-worker',
        title: 'Trilhas Interativas - Ecossistema Completo',
        brief: 'API ultrarrápida com Hono e Cloudflare Workers para sistema de trilhas',
        description: `
            <p>O <strong>Trilhas Interativas</strong> é um ecossistema completo para exploração e gerenciamento de trilhas, composto por três partes principais integradas.</p>
            
            <h3 class="mt-4 mb-3">🌐 Arquitetura do Ecossistema</h3>
            
            <h4>📱 App Mobile (front-end-expo)</h4>
            <p>Aplicativo desenvolvido em <strong>Expo + React Native</strong>, voltado para usuários finais que desejam:</p>
            <ul>
                <li>Explorar trilhas disponíveis</li>
                <li>Acompanhar estatísticas pessoais</li>
                <li>Navegar com GPS integrado</li>
                <li>Interface intuitiva com NativeWind (Tailwind CSS)</li>
            </ul>

            <h4>⚙️ Backend API (hono-api-worker)</h4>
            <p>API construída em <strong>TypeScript + Hono</strong>, rodando em <strong>Cloudflare Workers</strong>:</p>
            <ul>
                <li>Performance ultra-rápida com Edge Computing</li>
                <li>Autenticação JWT segura</li>
                <li>Gerenciamento de dados de trilhas e usuários</li>
                <li>Escalabilidade serverless automática</li>
                <li>Baixa latência global</li>
            </ul>

            <h4>🖥️ Dashboard Web (front-end-dashboard)</h4>
            <p>Interface administrativa em <strong>React + Vite</strong> para:</p>
            <ul>
                <li>Monitoramento de usuários e trilhas</li>
                <li>Gerenciamento de conteúdo</li>
                <li>Visualização de estatísticas</li>
                <li>Ferramentas administrativas completas</li>
            </ul>

            <h3 class="mt-4 mb-3">🚀 Tecnologias Principais</h3>
            <ul>
                <li><strong>Mobile:</strong> Expo, React Native, TypeScript, NativeWind, React Navigation</li>
                <li><strong>Backend:</strong> Hono, Cloudflare Workers, TypeScript, Edge Computing</li>
                <li><strong>Dashboard:</strong> React, Vite, TypeScript, Tailwind CSS, Axios</li>
                <li><strong>Ferramentas:</strong> ESLint, Prettier, GitHub Actions</li>
            </ul>

            <h3 class="mt-4 mb-3">🌟 Diferenciais</h3>
            <ul>
                <li>Arquitetura serverless moderna</li>
                <li>Performance otimizada com Cloudflare Workers</li>
                <li>Ecossistema completo e integrado</li>
                <li>Código TypeScript type-safe</li>
                <li>Design responsivo em todas as plataformas</li>
            </ul>

            <h3 class="mt-4 mb-3">🎨 Design</h3>
            <p>Todo o design foi criado no Figma com foco em UX/UI moderno e intuitivo.</p>
        `,
        technologies: ['Hono', 'TypeScript', 'Cloudflare Workers', 'Edge Computing', 'Expo', 'React Native', 'React', 'Vite', 'Tailwind CSS'],
        embedContent: `
            <div class="mt-4 mb-4 text-center">
                <h3 class="mb-4">🎨 Design no Figma</h3>
                <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" 
                        width="800" 
                        height="450" 
                        src="https://embed.figma.com/design/mHkYrsQzjRDrgBTSpW5zCv/Trilhas-Interativas?node-id=1-8239&embed-host=share" 
                        allowfullscreen
                        class="rounded shadow-lg"></iframe>
            </div>
        `,
        images: [],
        links: [
            { name: 'Design Figma', url: 'https://www.figma.com/design/mHkYrsQzjRDrgBTSpW5zCv/Trilhas-Interativas?node-id=1-8239&t=Anwff2wHSdqAoCzr-1', icon: 'bi-palette-fill' },
            { name: 'Projeto Privado', url: '#', icon: 'bi-lock-fill', disabled: true }
        ]
    }
};
