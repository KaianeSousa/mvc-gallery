class ImageView {
    constructor() {
        // Seleciona os elementos do DOM para interações
        this.galleryContainer = document.getElementById('gallery');
        this.searchInput = document.getElementById('searchInput');
        this.categoryButtons = document.querySelectorAll('.category-btn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.pageInfo = document.getElementById('pageInfo');
        this.modal = document.getElementById('imageModal');
        this.modalImage = document.getElementById('modalImage');
        this.modalTitle = document.getElementById('modalTitle');
        this.keywordsContainer = document.getElementById('keywordsContainer');
        this.closeBtn = document.querySelector('.close-btn');
        this.searchBtn = document.getElementById('searchBtn');

        // Configura os eventos listeners para interações do usuário
        this.setupEventListeners();
        // Configura os eventos para o modal
        this.setupModalEvents();
    }

    // Configura os eventos do modal 
    setupModalEvents() {
        // Fecha o modal ao clicar no botão de fechar
        this.closeBtn.addEventListener('click', () => {
            this.hideModal();
        });

        // Fecha o modal ao clicar fora de seu conteúdo
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });

        // Impede que cliques dentro do conteúdo do modal o fechem
        this.modalContent = this.modal.querySelector('.modal-content');
        this.modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Configura os eventos para busca, categorias e paginação
    setupEventListeners() {
        // Configura o clique no botão de busca
        this.searchBtn.addEventListener('click', () => {
            if (this.onSearchSubmit) {
                this.onSearchSubmit(this.searchInput.value);
            }
        });

        // Configura a busca ao pressionar 'Enter' no campo de input
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (this.onSearchSubmit) {
                    this.onSearchSubmit(this.searchInput.value);
                }
            }
        });

        // Configura cliques nos botões de categoria
        this.categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                if (this.onCategoryChange) {
                    this.onCategoryChange(category);
                }
            });
        });

        // Configura a navegação para a página anterior
        this.prevBtn.addEventListener('click', () => {
            if (this.onPrevPage) {
                this.onPrevPage();
            }
        });

        // Configura a navegação para a próxima página
        this.nextBtn.addEventListener('click', () => {
            if (this.onNextPage) {
                this.onNextPage();
            }
        });
    }

    // Exibe a galeria com uma animação de fade
    renderGallery(plants) {
        this.galleryContainer.classList.add('fade-out');

        setTimeout(() => {
            if (plants.length === 0) {
                this.renderNoResults();
            } else {
                this.renderPlants(plants);
            }

            this.galleryContainer.classList.remove('fade-out');
            this.galleryContainer.classList.add('fade-in');

            setTimeout(() => {
                this.galleryContainer.classList.remove('fade-in');
            }, 300);
        }, 150);
    }

    // Exibe as imagens de plantas na galeria
    renderPlants(plants) {
        this.galleryContainer.innerHTML = plants
            .map(plant => `
                <div class="image-card" data-id="${plant.id}">
                    <img src="${plant.url}" alt="${plant.title}" loading="lazy">
                    <div class="image-info">
                        <h3 class="image-title">${plant.title}</h3>
                        <span class="image-category">${
                            Array.isArray(plant.category)
                                ? plant.category.map(c => this.capitalizeFirst(c)).join(', ')
                                : this.capitalizeFirst(plant.category)
                        }</span>
                    </div>
                </div>
            `)
            .join('');

        this.bindImageClick();
    }

    // Exibe uma mensagem quando nenhuma planta é encontrada
    renderNoResults() {
        this.galleryContainer.innerHTML = `
            <div class="no-results">
                <h3>Nenhuma planta encontrada</h3>
                <p>Tente ajustar os filtros ou termos de busca</p>
            </div>
        `;
    }

    // Atualiza o estado dos botões de categoria
    updateCategoryButtons(activeCategory) {
        this.categoryButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.category === activeCategory);
        });
    }

    // Atualiza as informações de paginação e estado de seus botões
    updatePagination(paginationInfo) {
        this.pageInfo.textContent = `Página ${paginationInfo.currentPage} de ${paginationInfo.totalPages}`;
        this.prevBtn.disabled = !paginationInfo.hasPrevPage;
        this.nextBtn.disabled = !paginationInfo.hasNextPage;
    }

    // Atualiza o campo de busca com um termo fornecido
    updateSearchInput(searchTerm) {
        this.searchInput.value = searchTerm;
    }

    // Capitaliza a primeira letra de uma string
    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Define o callback para submissão de busca
    setSearchSubmitCallback(callback) {
        this.onSearchSubmit = callback;
    }

    // Define o callback para mudanças de categoria
    setCategoryChangeCallback(callback) {
        this.onCategoryChange = callback;
    }

    // Define o callback para navegação para a página anterior
    setPrevPageCallback(callback) {
        this.onPrevPage = callback;
    }

    // Define o callback para navegação para a próxima página
    setNextPageCallback(callback) {
        this.onNextPage = callback;
    }

    // Aplica animação de entrada em um cartão de imagem
    animateImageCard(card, delay = 0) {
        card.style.animationDelay = `${delay}ms`;
        card.style.animation = 'fadeInUp 0.6s ease forwards';
    }

    // Define o callback para cliques em imagens
    setImageClickCallback(callback) {
        this.onImageClick = callback;
    }

    // Vincula eventos de clique aos cartões de imagem
    bindImageClick() {
        const imageCards = document.querySelectorAll('.image-card');
        imageCards.forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                if (this.onImageClick) {
                    this.onImageClick(id);
                }
            });
        });
    }

    // Exibe o modal com detalhes da imagem
    showModal(image) {
        this.modalImage.src = image.url;
        this.modalImage.alt = image.title;
        this.modalTitle.textContent = image.title;

        // Exibi as palavras-chave no modal
        this.keywordsContainer.innerHTML = image.keywords
            .map(keyword => `<span>${keyword}</span>`)
            .join('');

        // Exibe o modal 
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            this.closeBtn.focus();
        }, 100);
    }

    // Esconde o modal 
    hideModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = '';

        // Limpa o conteúdo do modal 
        setTimeout(() => {
            this.modalImage.src = '';
            this.modalImage.alt = '';
            this.keywordsContainer.innerHTML = '';
        }, 300);
    }
}