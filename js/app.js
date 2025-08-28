// Inicializador da aplicação
class GalleryApp {
    constructor() {
        this.model = null;
        this.view = null;
        this.controller = null;
        
        this.init();
    }

    init() {
        // Aguardar o DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApplication();
            });
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        try {
            // Criar instâncias dos componentes MVC
            this.model = new ImageModel();
            this.view = new ImageView();
            this.controller = new ImageController(this.model, this.view);

            // Configurar funcionalidades adicionais
            this.setupKeyboardNavigation();
            this.setupPerformanceOptimizations();
            this.setupErrorHandling();

            console.log('🌿 Galeria de Flora MVC inicializada com sucesso!');
            console.log('📊 Estatísticas iniciais:', this.controller.getDetailedStats());

        } catch (error) {
            console.error('❌ Erro ao inicializar a aplicação:', error);
            this.showErrorMessage('Erro ao carregar a galeria de flora. Tente recarregar a página.');
        }
    }

    setupKeyboardNavigation() {
        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.controller.handlePrevPage();
                    }
                    break;
                case 'ArrowRight':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.controller.handleNextPage();
                    }
                    break;
                case 'Escape':
                    // Resetar filtros
                    this.controller.resetFilters();
                    break;
            }
        });
    }

    setupPerformanceOptimizations() {
        // Lazy loading para imagens
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            // Observar imagens para lazy loading
            document.addEventListener('DOMContentLoaded', () => {
                const lazyImages = document.querySelectorAll('img[data-src]');
                lazyImages.forEach(img => imageObserver.observe(img));
            });
        }

        // Debounce para busca
        let searchTimeout;
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.controller.handleSearchChange(e.target.value);
                }, 300);
            });
        }
    }

    setupErrorHandling() {
        // Tratamento de erros para carregamento de imagens
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlBsYW50YSBuw6NvIGVuY29udHJhZGE8L3RleHQ+PC9zdmc+';
                e.target.alt = 'Planta não encontrada';
            }
        }, true);

        // Tratamento de erros globais
        window.addEventListener('error', (e) => {
            console.error('Erro global:', e.error);
        });

        // Tratamento de promessas rejeitadas
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Promessa rejeitada:', e.reason);
        });
    }

    showErrorMessage(message) {
        const galleryContainer = document.getElementById('gallery');
        if (galleryContainer) {
            galleryContainer.innerHTML = `
                <div class="error-message" style="text-align: center; padding: 2rem; color: #dc3545;">
                    <h3>Erro</h3>
                    <p>${message}</p>
                    <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Recarregar Página
                    </button>
                </div>
            `;
        }
    }

    // Métodos públicos para debug e desenvolvimento
    getController() {
        return this.controller;
    }

    getModel() {
        return this.model;
    }

    getView() {
        return this.view;
    }

    // Método para testar funcionalidades
    testFunctionality() {
        console.log('🧪 Testando funcionalidades da galeria de flora...');
        
        // Testar filtros
        console.log('🌸 Testando filtros de plantas...');
        this.controller.handleCategoryChange('flores');
        setTimeout(() => {
            this.controller.handleCategoryChange('arvores');
            setTimeout(() => {
                this.controller.handleCategoryChange('todas');
            }, 1000);
        }, 1000);

        // Testar busca
        setTimeout(() => {
            console.log('🔍 Testando busca por plantas...');
            this.controller.handleSearchChange('rosa');
            setTimeout(() => {
                this.controller.handleSearchChange('');
            }, 2000);
        }, 3000);

        // Testar paginação
        setTimeout(() => {
            console.log('📄 Testando paginação...');
            this.controller.handleNextPage();
            setTimeout(() => {
                this.controller.handlePrevPage();
            }, 1000);
        }, 5000);
    }
}

// Inicializar a aplicação quando o script for carregado
const galleryApp = new GalleryApp();

// Expor a aplicação globalmente para debug (opcional)
window.galleryApp = galleryApp;

// Adicionar animação de spin para o loading
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style); 