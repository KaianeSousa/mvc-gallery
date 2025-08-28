class ImageModel {
    constructor() {
        this.images = [
            {
                id: 1,
                title: "Rosa Com Gotas de Água",
                category: "flores",
                url: "img/plantas/flores/rosa-vermelha-com-gotas-de-agua.jpg",
                keywords: ["rosa", "vermelha", "rosa vermelha", "flor", "romântica", "gotas", "água"]
            },
            {
                id: 2,
                title: "Lírio do Campo",
                category: "flores",
                url: "img/plantas/flores/lirio-branco-do-campo.jpg",
                keywords: ["lírio", "branco", "flor", "campo"]
            },
            {
                id: 3,
                title: "Peônias Vermelhas",
                category: "flores",
                url: "img/plantas/flores/peonias-vermelhas.jpg",
                keywords: ["peônias", "vermelha", "flor", "arbusto"]
            },
            {
                id: 4,
                title: "Flores de Cerejeira",
                category: "flores",
                url: "img/plantas/flores/flores-de-cerejeira.jpeg",
                keywords: ["sakura", "cerejeira", "flor", "primavera", "Japão", "rosa"]
            },
            {
                id: 5,
                title: "Lírio do Vale",
                category: "flores",
                url: "img/plantas/flores/lirio-do-vale.jpeg",
                keywords: ["lírio", "vale", "flor", "pequena", "flores pequenas"]
            },
            {
                id: 6,
                title: "Carvalho Centenário",
                category: "árvores",
                url: "img/plantas/arvores/carvalho-centenario.jpeg",
                keywords: ["carvalho", "árvore", "grande", "sombra", "natureza", "força", "centenário"]
            },
            {
                id: 7,
                title: "Bambu Verde",
                category: "árvores",
                url: "img/plantas/arvores/bambu-verde.jpeg",
                keywords: ["bambu", "verde", "árvore", "oriental"]
            },
            {
                id: 8,
                title: "Palmeiras Tropicais",
                category: "árvores",
                url: "img/plantas/arvores/palmeiras-tropicais.jpg",
                keywords: ["palmeira", "tropical", "árvore", "praia", "verão", "exótica"]
            },
            {
                id: 9,
                title: "Bétula Branca",
                category: "árvores",
                url: "img/plantas/arvores/betula-branca.jpg",
                keywords: ["bétula", "branca", "árvore", "inverno", "elegante", "nórdica"]
            },
            {
                id: 10,
                title: "Seringueira",
                category: "árvores",
                url: "img/plantas/arvores/seringueira.jpeg",
                keywords: ["seringueira", "látex", "árvore", "seiva"]
            },
            {
                id: 11,
                title: "Echeveria Elegans",
                category: "suculentas",
                url: "img/plantas/suculentas/echeveria-elegan.jpg",
                keywords: ["echeveria", "suculenta", "resistente", "decorativa", "casa"]
            },
            {
                id: 12,
                title: "Aloe Vera",
                category: "suculentas",
                url: "img/plantas/suculentas/aloe-vera.jpeg",
                keywords: ["aloe vera", "suculenta", "medicinal", "gel"]
            },
            {
                id: 13,
                title: "Cactos Bola",
                category: "suculentas",
                url: "img/plantas/suculentas/cacto-bola.jpg",
                keywords: ["cacto", "cacto bola", "suculenta", "deserto", "resistente", "redondo"]
            },
            {
                id: 14,
                title: "Sedum",
                category: "suculentas",
                url: "img/plantas/suculentas/sedum.jpg",
                keywords: ["sedum", "adorável", "suculenta", "pequena"]
            },
            {
                id: 15,
                title: "Rabo de Tatu - Haworthia Fasciata",
                category: "suculentas",
                url: "img/plantas/suculentas/haworthia-fasciata.jpeg",
                keywords: ["haworthia fasciata", "rabo de tatu", "suculenta", "pontuda"]
            },
            {
                id: 16,
                title: "Manjericão Fresco",
                category: "ervas",
                url: "img/plantas/ervas/manjericao-fresco.jpg",
                keywords: ["manjericão", "fresco", "erva", "culinária", "aroma"]
            },
            {
                id: 17,
                title: "Alecrim Aromático",
                category: "ervas",
                url: "img/plantas/ervas/alecrim-aromatico.jpg",
                keywords: ["alecrim", "aromático", "erva", "culinária"]
            },
            {
                id: 18,
                title: "Hortelã Refrescante",
                category: "ervas",
                url: "img/plantas/ervas/hortela-refrescante.jpg",
                keywords: ["hortelã", "refrescante", "erva", "chá", "frescor"]
            },
            {
                id: 19,
                title: "Camomila Ressecada",
                category: ["ervas", "flores"],
                url: "img/plantas/ervas/camomila.jpeg",
                keywords: ["camomila", "calmante", "flores secas", "chá"]
            },
            {
                id: 20,
                title: "Sálvia Medicinal",
                category: "ervas",
                url: "img/plantas/ervas/salvia-medicinal.jpg",
                keywords: ["sálvia", "medicinal", "erva"]
            },
            {
                id: 21,
                title: "Pé de Romã",
                category: "frutíferas",
                url: "img/plantas/frutiferas/pe-roma.jpg",
                keywords: ["frutífera", "frutíferas", "romã"]
            },
            {
                id: 22,
                title: "Figueira",
                category: "frutíferas",
                url: "img/plantas/frutiferas/figueira.jpg",
                keywords: ["frutífera", "frutíferas", "figueira"]
            },
            {
                id: 23,
                title: "Pé de Tangerinas",
                category: "frutíferas",
                url: "img/plantas/frutiferas/pe-de-tangerinas.jpg",
                keywords: ["frutífera", "frutíferas", "tangerina"]
            },
            {
                id: 24,
                title: "Pé de Manga",
                category: "frutíferas",
                url: "img/plantas/frutiferas/pe-de-manga.jpg",
                keywords: ["frutífera", "frutíferas", "manga"]
            },
            {
                id: 25,
                title: "Laranjeira",
                category: "frutíferas",
                url: "img/plantas/frutiferas/pe-de-laranja.jpg",
                keywords: ["frutífera", "frutíferas", "laranja", "ácida"]
            }
        ];

        this.currentCategory = 'todas';
        this.currentSearch = '';
        this.currentPage = 1;
        this.imagesPerPage = 8;
        this.updateImagesPerPage(); 
        window.addEventListener('resize', () => this.updateImagesPerPage()); 
    }

    // Calcula o número de cards por página com base na largura da tela
    updateImagesPerPage() {
        const width = window.innerWidth;
        if (width >= 1200) {
            this.imagesPerPage = 8;
        } else if (width >= 992) {
            this.imagesPerPage = 6;
        } else if (width >= 768) {
            this.imagesPerPage = 4;
        } else {
            this.imagesPerPage = 2;
        }
    }

    // Retorna todas as imagens disponíveis
    getAllImages() {
        return this.images;
    }

    // Normaliza texto para busca 
    normalizeText(text) {
        return text
            ? text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase()
            : '';
    }
    // Filtra imagens por categoria e termo de busca
    getFilteredImages() {
        let filtered = this.images;

        // Filtra por categoria'
        if (this.currentCategory !== 'todas') {
            filtered = filtered.filter(image => {
                if (Array.isArray(image.category)) {
                    return image.category.includes(this.currentCategory);
                }
                return image.category === this.currentCategory;
            });
        }

        // Filtra por termo de busca
        if (this.currentSearch.trim() !== '') {
            const searchTerm = this.normalizeText(this.currentSearch);
            filtered = filtered.filter(image => {
                const inTitle = this.normalizeText(image.title).includes(searchTerm);
                const categories = Array.isArray(image.category) ? image.category : [image.category];
                const inCategory = categories.some(cat => this.normalizeText(cat).includes(searchTerm));
                const keywords = Array.isArray(image.keywords) ? image.keywords : [];
                const inKeywords = keywords.some(k => this.normalizeText(k).includes(searchTerm));
                return inTitle || inCategory || inKeywords;
            });
        }

        return filtered;
    }


    // Retorna as imagens da página atual
    getCurrentPageImages() {
        const filtered = this.getFilteredImages();
        const totalPages = Math.max(1, Math.ceil(filtered.length / this.imagesPerPage));

        // Impede que a página atual exceda o total disponível
        if (this.currentPage > totalPages) {
            this.currentPage = totalPages;
        }

        const startIndex = (this.currentPage - 1) * this.imagesPerPage;
        const endIndex = startIndex + this.imagesPerPage;
        return filtered.slice(startIndex, endIndex);
    }

    // Retorna informações de paginação
    getPaginationInfo() {
        const filtered = this.getFilteredImages();
        const totalPages = Math.max(1, Math.ceil(filtered.length / this.imagesPerPage));

        return {
            currentPage: this.currentPage,
            totalPages: totalPages,
            totalImages: filtered.length,
            hasNextPage: this.currentPage < totalPages,
            hasPrevPage: this.currentPage > 1
        };
    }

    // Define a categoria atual e reseta a página para a primiera
    setCategory(category) {
        this.currentCategory = category;
        this.currentPage = 1;
    }

    // Define o termo de busca e reseta a página para a primiera
    setSearch(search) {
        this.currentSearch = search;
        this.currentPage = 1;
    }

    // Avança para a próxima página, se disponível
    nextPage() {
        const paginationInfo = this.getPaginationInfo();
        if (paginationInfo.hasNextPage) {
            this.currentPage++;
            return true;
        }
        return false;
    }

    // Retrocede para a página anterior
    prevPage() {
        const paginationInfo = this.getPaginationInfo();
        if (paginationInfo.hasPrevPage) {
            this.currentPage--;
            return true;
        }
        return false;
    }

    // Retorna os dados da galeria
    getStats() {
        const filtered = this.getFilteredImages();
        return {
            totalImages: this.images.length,
            filteredImages: filtered.length,
            currentCategory: this.currentCategory,
            currentSearch: this.currentSearch
        };
    }
}