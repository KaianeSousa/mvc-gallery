class ImageController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.setupViewCallbacks();
        this.initializeGallery();
    }

    // Configura os callbacks da visualização
    setupViewCallbacks() {
        // Callback para cliques no botão de busca
        this.view.setSearchChangeCallback((searchTerm) => {
            this.handleSearchChange(searchTerm);
        });

        // Callback para mudanças de categoria
        this.view.setCategoryChangeCallback((category) => {
            this.handleCategoryChange(category);
        });

        // Callback para navegação para a página anterior
        this.view.setPrevPageCallback(() => {
            this.handlePrevPage();
        });

        // Callback para navegação para a próxima página
        this.view.setNextPageCallback(() => {
            this.handleNextPage();
        });

        // Callback para cliques em imagens
        this.view.setImageClickCallback((imageId) => {
            this.handleImageClick(imageId);
        });
    }

    // Lida com cliques em imagens, exibindo o modal
    handleImageClick(imageId) {
        const image = this.model.getAllImages().find(img => img.id === imageId);
        if (image) {
            this.view.showModal(image);
        }
    }

    // Inicializa a galeria com todas as imagens
    initializeGallery() {
        this.updateGallery();
        
    }

    // Lida com mudanças no termo de busca
    handleSearchChange(searchTerm) {
        this.model.setSearch(searchTerm);
        this.updateGallery();
    }

    // Lida com mudanças na categoria
    handleCategoryChange(category) {
        this.model.setCategory(category);
        this.updateGallery();
    }

    // Lida com navegação para a página anterior
    handlePrevPage() {
        if (this.model.prevPage()) {
            this.updateGallery();
        }
    }

    // Lida com navegação para a próxima página
    handleNextPage() {
        if (this.model.nextPage()) {
            this.updateGallery();
        }
    }

    // Atualiza a galeria com base no estado atual do modelo
    updateGallery() {
        // this.view.showLoading(); // Removido o indicador de carregamento

        setTimeout(() => {
            // Obtém dados do modelo
            const images = this.model.getCurrentPageImages();
            const paginationInfo = this.model.getPaginationInfo();
            const stats = this.model.getStats();

            // Atualiza a visualização
            this.view.renderGallery(images);
            this.view.updatePagination(paginationInfo);
            this.view.updateCategoryButtons(this.model.currentCategory);
            this.view.updateSearchInput(this.model.currentSearch);
            this.view.showStats(stats);

            // Aplica animações aos cartões de imagem
            this.animateImageCards();
        }, 300);
    }

    // Aplica animações escalonadas aos cartões de imagem
    animateImageCards() {
        const imageCards = document.querySelectorAll('.image-card');
        imageCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    }

    // Retorna estatísticas detalhadas da galeria
    getDetailedStats() {
        const stats = this.model.getStats();
        const paginationInfo = this.model.getPaginationInfo();

        return {
            ...stats,
            ...paginationInfo,
            imagesPerPage: this.model.imagesPerPage
        };
    }

    // Reseta os filtros de categoria e busca
    resetFilters() {
        this.model.setCategory('todas');
        this.model.setSearch('');
        this.updateGallery();
    }

    // Retorna todas as imagens do modelo
    getAllImages() {
        return this.model.getAllImages();
    }

    // Retorna as imagens filtradas do modelo
    getFilteredImages() {
        return this.model.getFilteredImages();
    }
}