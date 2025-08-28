# 🌿 Galeria de Flora - Padrão MVC

Uma galeria de plantas e flores moderna desenvolvida em JavaScript puro seguindo o padrão arquitetural MVC (Model-View-Controller).

## ✨ Funcionalidades

- **Filtragem por Categorias**: Flores, Árvores, Suculentas, Ervas, Jardim
- **Busca por Palavra-chave**: Pesquisa em nomes, categorias e características das plantas
- **Paginação**: Exibe 4 plantas por página com navegação
- **Efeitos de Transição**: Animações suaves de fade in/out
- **Design Responsivo**: Interface moderna com tema botânico
- **Navegação por Teclado**: Atalhos para navegação rápida

## 🏗️ Arquitetura MVC

### Model (`model.js`)
- Gerencia os dados das plantas e flores
- Aplica lógica de filtragem e paginação
- Mantém o estado da aplicação

### View (`view.js`)
- Renderiza a interface do usuário
- Gerencia eventos de interação
- Aplica animações e transições

### Controller (`controller.js`)
- Coordena a comunicação entre Model e View
- Processa eventos e atualiza a interface
- Gerencia o fluxo de dados

## 📁 Estrutura do Projeto

```
gallery/
├── index.html          # Página principal
├── js/
│   ├── model.js        # Modelo de dados
│   ├── view.js         # Interface do usuário
│   ├── controller.js   # Controlador
│   └── app.js          # Inicializador
├── img/                # Pasta para imagens (opcional)
└── README.md           # Documentação
```

## 🚀 Como Usar

1. **Clone ou baixe o projeto**
2. **Abra o arquivo `index.html` em um navegador**
3. **Explore as funcionalidades**:
   - Clique nas categorias para filtrar plantas
   - Use o campo de busca para encontrar plantas específicas
   - Navegue pelas páginas usando os botões de paginação

## 🎯 Funcionalidades Detalhadas

### Filtros de Categoria
- **Todas**: Exibe todas as plantas
- **Flores**: Rosas, girassóis, lavanda, tulipas
- **Árvores**: Carvalho, bambu, palmeira, bétula
- **Suculentas**: Echeveria, aloe vera, cacto, sedum
- **Ervas**: Manjericão, alecrim, hortelã, sálvia
- **Jardim**: Jardim zen, vertical, de flores, botânico

### Sistema de Busca
- Pesquisa em tempo real
- Busca por nome, categoria ou características
- Debounce de 300ms para otimização

### Paginação
- 4 plantas por página
- Navegação anterior/próxima
- Indicador de página atual
- Botões desabilitados quando apropriado

### Animações
- Fade in/out ao trocar plantas
- Efeito escalonado no carregamento
- Hover effects nos cards
- Transições suaves

## ⌨️ Atalhos de Teclado

- `Ctrl/Cmd + ←`: Página anterior
- `Ctrl/Cmd + →`: Próxima página
- `Escape`: Resetar filtros

## 🛠️ Tecnologias Utilizadas

- **JavaScript Puro**: Sem frameworks ou bibliotecas
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com gradientes e animações
- **Padrão MVC**: Arquitetura organizada e escalável

## 🌱 Dados das Plantas

O projeto inclui 20 plantas de exemplo do Unsplash, organizadas em 5 categorias:
- 4 flores (rosa, girassol, lavanda, tulipa)
- 4 árvores (carvalho, bambu, palmeira, bétula)
- 4 suculentas (echeveria, aloe vera, cacto, sedum)
- 4 ervas (manjericão, alecrim, hortelã, sálvia)
- 4 jardins (zen, vertical, de flores, botânico)

Cada planta possui:
- ID único
- Nome descritivo
- Categoria botânica
- URL da imagem
- Palavras-chave para busca

## 🔧 Personalização

### Adicionar Novas Plantas
Edite o array `images` no arquivo `model.js`:

```javascript
{
    id: 21,
    title: "Nova Planta",
    category: "flores",
    url: "https://exemplo.com/planta.jpg",
    keywords: ["palavra1", "palavra2"]
}
```

### Modificar Categorias
Edite os botões no `index.html` e as categorias no `model.js`.

### Alterar Plantas por Página
Modifique a propriedade `imagesPerPage` no construtor do `ImageModel`.

## 🐛 Debug e Desenvolvimento

A aplicação expõe métodos globais para debug:

```javascript
// Acessar a aplicação
window.galleryApp

// Obter estatísticas
galleryApp.getController().getDetailedStats()

// Testar funcionalidades
galleryApp.testFunctionality()

// Obter plantas filtradas
galleryApp.getController().getFilteredImages()
```

## 📱 Responsividade

O design é totalmente responsivo:
- **Desktop**: Grid com múltiplas colunas
- **Tablet**: Grid adaptativo
- **Mobile**: Layout em coluna única

## 🎨 Design System

### Cores (Tema Botânico)
- **Primária**: #4a7c59 (verde floresta)
- **Secundária**: #2d5a27 (verde escuro)
- **Acento**: #6b8e23 (verde oliva)
- **Neutra**: #6c757d (cinza)
- **Sucesso**: #28a745 (verde)
- **Erro**: #dc3545 (vermelho)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Componentes
- Cards com sombras e bordas arredondadas
- Botões com hover effects
- Inputs com focus states
- Loading spinner animado

## 📈 Performance

- **Lazy Loading**: Imagens carregadas sob demanda
- **Debounce**: Busca otimizada
- **Intersection Observer**: Para lazy loading
- **CSS Transitions**: Animações suaves

## 🔒 Tratamento de Erros

- Fallback para imagens não carregadas
- Tratamento de erros globais
- Mensagens de erro amigáveis
- Botão de recarregar página

## 🌿 Categorias Botânicas

### Flores (🌸)
- Plantas ornamentais com flores coloridas
- Ideais para decoração e presentes
- Variedades sazonais e perenes

### Árvores (🌳)
- Plantas lenhosas de grande porte
- Fornecem sombra e oxigênio
- Importantes para o ecossistema

### Suculentas (🌵)
- Plantas resistentes à seca
- Ideais para iniciantes
- Perfeitas para decoração interna

### Ervas (🌿)
- Plantas aromáticas e medicinais
- Usadas na culinária e fitoterapia
- Fáceis de cultivar em casa

### Jardim (🏡)
- Espaços verdes organizados
- Combinam diferentes tipos de plantas
- Promovem bem-estar e conexão com a natureza

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais, demonstrando a implementação do padrão MVC em JavaScript puro com foco em botânica.

---

**Desenvolvido com ❤️ usando JavaScript puro e padrão MVC - Celebrando a beleza da flora!** 🌱 