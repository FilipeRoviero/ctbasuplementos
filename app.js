/* ==========================================================================
   CTBA SUPLEMENTOS - Lógica de Aplicação & E-commerce WhatsApp
   ========================================================================== */

// Configuração Geral da Loja
const STORE_CONFIG = {
    whatsappNumber: "554191331314", // Alterar para o número do WhatsApp da loja (com DDD)
    pixDiscount: 0.05, // 5% de desconto via Pix
};

// Banco de Dados de Produtos Mock
const PRODUCTS = [
    {
        id: 1,
        name: "Beta Alanina Muscletech 200g",
        brand: "Marca",
        category: "aminoacidos",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/aminoacidos/beta-alanina-muscletech-200g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 2,
        name: "Barra Darkbar",
        brand: "Marca",
        category: "barrinhas",
        price: 15.00,
        originalPrice: 18.00,
        image: "assets/barrinhas/barra-darkbar.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 3,
        name: "Barra Integral",
        brand: "Marca",
        category: "barrinhas",
        price: 15.00,
        originalPrice: 18.00,
        image: "assets/barrinhas/barra-integral.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 4,
        name: "Barra Nutrata",
        brand: "Marca",
        category: "barrinhas",
        price: 15.00,
        originalPrice: 18.00,
        image: "assets/barrinhas/barra-nutrata.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 5,
        name: "Combo Integral Whey Creat",
        brand: "Marca",
        category: "combos",
        price: 250.00,
        originalPrice: 280.00,
        image: "assets/combos/combo-integral-whey-creat.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 6,
        name: "Combo Whey Creat",
        brand: "Marca",
        category: "combos",
        price: 250.00,
        originalPrice: 280.00,
        image: "assets/combos/combo-whey-creat.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 7,
        name: "Combo Whey Shaker",
        brand: "Marca",
        category: "combos",
        price: 250.00,
        originalPrice: 280.00,
        image: "assets/combos/combo-whey-shaker.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 8,
        name: "Creatina Dux 300g",
        brand: "Marca",
        category: "creatina",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/creatina/creatina-dux-300g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 9,
        name: "Creatina Integral 300g",
        brand: "Marca",
        category: "creatina",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/creatina/creatina-integral-300g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 10,
        name: "Creatina Max 300g",
        brand: "Marca",
        category: "creatina",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/creatina/creatina-max-300g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 11,
        name: "Hiper Sem Lactose 2kg",
        brand: "Marca",
        category: "hiper-sem-lac",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/hiper-sem-lac/hiper-sem-lactose-2kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 12,
        name: "Hiper Charge 3kg",
        brand: "Marca",
        category: "hipercalorico",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/hipercalorico/hiper-charge-3kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 13,
        name: "Hiper Integral 3kg",
        brand: "Marca",
        category: "hipercalorico",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/hipercalorico/hiper-integral-3kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 14,
        name: "Hiper Max 3kg",
        brand: "Marca",
        category: "hipercalorico",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/hipercalorico/hiper-max-3kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 15,
        name: "Dr. Peanut 600g",
        brand: "Marca",
        category: "pasta-de-amendoim",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/pasta-de-amendoim/drpeanut-600g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 16,
        name: "Laganexa 1kg",
        brand: "Marca",
        category: "pasta-de-amendoim",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/pasta-de-amendoim/laganexa-1kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 17,
        name: "Laganexa 450g",
        brand: "Marca",
        category: "pasta-de-amendoim",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/pasta-de-amendoim/laganexa-450g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 18,
        name: "Dila Pump 300g",
        brand: "Marca",
        category: "pre-sem-cafeina",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/pre-sem-cafeina/dila-pump-300g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 19,
        name: "Pre Night 200g",
        brand: "Marca",
        category: "pre-sem-cafeina",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/pre-sem-cafeina/pre-night-200g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 20,
        name: "Vasculos 300g",
        brand: "Marca",
        category: "pre-sem-cafeina",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/pre-sem-cafeina/vasculos-300g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 21,
        name: "Pre Bope 150g",
        brand: "Marca",
        category: "pre-treino",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/pre-treino/pre-bope-150g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 22,
        name: "Pre Clown 350g",
        brand: "Marca",
        category: "pre-treino",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/pre-treino/pre-clown-350g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 23,
        name: "Pre Psicho Killer 294g",
        brand: "Marca",
        category: "pre-treino",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/pre-treino/pre-psicho-killer-294g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 24,
        name: "Energy Kick 1kg",
        brand: "Marca",
        category: "repositores",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/repositores/energy-kick-1kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 25,
        name: "2Hot Max 200g",
        brand: "Marca",
        category: "termogenico",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/termogenico/2hot-max-200g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 26,
        name: "Dimethylex 60caps",
        brand: "Marca",
        category: "termogenico",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/termogenico/dimethylex-60caps.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 27,
        name: "Psicho Killer 60caps",
        brand: "Marca",
        category: "termogenico",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/termogenico/psicho-killer-60caps.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 28,
        name: "Multivit Dux 90caps",
        brand: "Marca",
        category: "vitaminas e omega 3",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/vitaminas e omega 3/multivit-dux-90caps.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 29,
        name: "Omega3 Dux 120caps",
        brand: "Marca",
        category: "vitaminas e omega 3",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/vitaminas e omega 3/omega3-dux-120caps.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 30,
        name: "Carnibol 900g",
        brand: "Marca",
        category: "whey-iso",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/whey-iso/carnibol-900g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 31,
        name: "Iso Dux 900g",
        brand: "Marca",
        category: "whey-iso",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/whey-iso/iso-dux-900g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 32,
        name: "Isolate Prime 900g",
        brand: "Marca",
        category: "whey-iso",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/whey-iso/isolate-prime-900g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 33,
        name: "Whey Fhealt 2kg",
        brand: "Marca",
        category: "whey-protein",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/whey-protein/whey-fhealt-2kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 34,
        name: "Whey Health 2kg",
        brand: "Marca",
        category: "whey-protein",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/whey-protein/whey-health-2kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    },
    {
        id: 35,
        name: "Whey Melius 2kg",
        brand: "Marca",
        category: "whey-protein",
        price: 99.90,
        originalPrice: 120.00,
        image: "assets/whey-protein/whey-melius-2kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"],
        nutritional: {
            "Porção": "X g",
            "Proteína": "0g",
            "Carboidratos": "0g"
        }
    }
];

// Estado da Aplicação
let cart = [];
let currentCategory = "todos";
let searchQuery = "";
let displayLimit = 8; // Limit for 'todos'

// Elementos do DOM
const productsGrid = document.getElementById("products-grid");
const loadMoreContainer = document.getElementById("load-more-container");
const loadMoreBtn = document.getElementById("load-more-btn");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInputDesktop = document.getElementById("search-input-desktop");
const searchInputMobile = document.getElementById("search-input-mobile");
const searchStatus = document.getElementById("search-status");
const searchQueryDisplay = document.getElementById("search-query-display");
const clearSearchBtn = document.getElementById("clear-search-btn");

const cartToggleBtn = document.getElementById("cart-toggle-btn");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartBadge = document.getElementById("cart-badge");
const cartSubtotal = document.getElementById("cart-subtotal");
const pixDiscountRow = document.getElementById("pix-discount-row");
const cartDiscount = document.getElementById("cart-discount");
const cartTotal = document.getElementById("cart-total");
const whatsappCheckoutBtn = document.getElementById("whatsapp-checkout-btn");

const productModal = document.getElementById("product-modal");
const modalOverlay = document.getElementById("modal-overlay");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalBodyContent = document.getElementById("modal-body-content");

const footerCatLinks = document.querySelectorAll(".cat-link");

// ==========================================================================
// Inicialização
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromLocalStorage();
    renderProducts();
    setupEventListeners();
    updateCartUI();
});

// ==========================================================================
// Event Listeners Setup
// ==========================================================================
function setupEventListeners() {
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            displayLimit = Infinity;
            renderProducts();
        });
    }

    // Filtros por categoria
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            displayLimit = 8;
            renderProducts();
        });
    });

    // Links de categoria do rodapé
    footerCatLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const cat = link.dataset.cat;
            const correspondingBtn = document.querySelector(`.filter-btn[data-category="${cat}"]`);
            if (correspondingBtn) {
                correspondingBtn.click();
            }
        });
    });

    // Busca de texto (Desktop e Mobile)
    const handleSearch = (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        displayLimit = 8;
        
        // Sincroniza campos de busca
        if (e.target === searchInputDesktop) {
            searchInputMobile.value = e.target.value;
        } else {
            searchInputDesktop.value = e.target.value;
        }

        if (searchQuery.length > 0) {
            searchStatus.classList.remove("hidden");
            searchQueryDisplay.textContent = e.target.value;
        } else {
            searchStatus.classList.add("hidden");
        }
        renderProducts();
    };

    searchInputDesktop.addEventListener("input", handleSearch);
    searchInputMobile.addEventListener("input", handleSearch);

    // Limpar filtros de busca
    clearSearchBtn.addEventListener("click", () => {
        searchQuery = "";
        displayLimit = 8;
        searchInputDesktop.value = "";
        searchInputMobile.value = "";
        searchStatus.classList.add("hidden");
        renderProducts();
    });

    // Carrinho Drawer Toggle
    cartToggleBtn.addEventListener("click", openCart);
    cartCloseBtn.addEventListener("click", closeCart);
    cartOverlay.addEventListener("click", closeCart);
    
    // Links de fechar carrinho no drawer
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("close-cart-link")) {
            closeCart();
        }
    });

    // Modal Close
    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);

    // Fechar com tecla ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCart();
            closeModal();
        }
    });

    // Checkout via WhatsApp
    whatsappCheckoutBtn.addEventListener("click", sendCartToWhatsApp);
}

// ==========================================================================
// Renderização de Produtos
// ==========================================================================
function renderProducts() {
    productsGrid.innerHTML = "";

    // Filtragem baseada na categoria e na barra de pesquisa
    const filteredProducts = PRODUCTS.filter(prod => {
        const matchesCategory = currentCategory === "todos" || prod.category === currentCategory;
        const matchesSearch = searchQuery === "" || 
            prod.name.toLowerCase().includes(searchQuery) ||
            prod.brand.toLowerCase().includes(searchQuery) ||
            prod.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    let productsToRender = filteredProducts;

    if (currentCategory === "todos" && searchQuery === "") {
        productsToRender = filteredProducts.slice(0, displayLimit);
        
        if (filteredProducts.length > displayLimit) {
            loadMoreContainer.classList.remove("hidden");
        } else {
            loadMoreContainer.classList.add("hidden");
        }
    } else {
        if (loadMoreContainer) {
            loadMoreContainer.classList.add("hidden");
        }
    }

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="loading-products">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted);"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <p>Nenhum suplemento encontrado com os filtros aplicados.</p>
            </div>
        `;
        return;
    }

    productsToRender.forEach(prod => {
        const hasDiscount = prod.originalPrice && prod.originalPrice > prod.price;
        const card = document.createElement("div");
        card.className = "product-card";
        
        card.innerHTML = `
            ${hasDiscount ? `<span class="product-badge">🔥 OFERTA</span>` : ''}
            <span class="product-brand">${prod.brand}</span>
            <div class="product-image-container" onclick="openProductQuickView(${prod.id})">
                <img src="${prod.image}" alt="${prod.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop'">
            </div>
            <div class="product-details">
                <h3 class="product-title" onclick="openProductQuickView(${prod.id})">${prod.name}</h3>
                <p class="product-description">${prod.description}</p>
                <div class="product-price-box">
                    ${hasDiscount ? `<span class="old-price">R$ ${prod.originalPrice.toFixed(2)}</span>` : ''}
                    <span class="current-price">R$ ${prod.price.toFixed(2)}</span>
                    <span class="pix-note">no Pix (-5%) ou R$ ${(prod.price / (1 - STORE_CONFIG.pixDiscount)).toFixed(2)} no cartão</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="buyNowSingle(${prod.id})">
                        COMPRAR AGORA
                    </button>
                    <button class="btn-add-cart" aria-label="Adicionar ao carrinho" onclick="addToCart(${prod.id})">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(card);
    });
}

// ==========================================================================
// Gerenciamento do Carrinho
// ==========================================================================
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            product: product,
            quantity: 1
        });
    }

    saveCartToLocalStorage();
    updateCartUI();
    openCart();
    
    // Animação temporária no ícone do carrinho
    cartToggleBtn.style.transform = "scale(1.15)";
    setTimeout(() => {
        cartToggleBtn.style.transform = "none";
    }, 200);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    saveCartToLocalStorage();
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.product.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToLocalStorage();
        updateCartUI();
    }
}

function openCart() {
    cartDrawer.classList.add("active");
    document.body.style.overflow = "hidden"; // impede scroll de fundo
}

function closeCart() {
    cartDrawer.classList.remove("active");
    document.body.style.overflow = "";
}

function updateCartUI() {
    // Quantidade total de itens
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    
    if (totalItems === 0) {
        cartBadge.classList.add("hidden");
    } else {
        cartBadge.classList.remove("hidden");
    }

    // Listagem dos itens
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="cart-empty-message">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted);"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <p>Seu carrinho de compras está vazio.</p>
                <a href="#catalogo" class="btn btn-primary btn-sm close-cart-link">Ver Catálogo</a>
            </div>
        `;
        
        cartSubtotal.textContent = "R$ 0,00";
        pixDiscountRow.classList.add("hidden");
        cartTotal.textContent = "R$ 0,00";
        whatsappCheckoutBtn.disabled = true;
        return;
    }

    // Calcula Preços
    // Preço no cartão seria o valor sem o desconto Pix.
    // Como os produtos já vêm com preço promocional Pix nas variáveis,
    // o preço integral de tabela (Cartão) é calculado a partir do originalPrice
    // ou dividindo o preço promocional Pix para recriar o preço base.
    let baseCartaoSubtotal = 0;
    
    cart.forEach(item => {
        const itemOriginalPrice = item.product.originalPrice || (item.product.price / (1 - STORE_CONFIG.pixDiscount));
        baseCartaoSubtotal += itemOriginalPrice * item.quantity;

        const cartItemEl = document.createElement("div");
        cartItemEl.className = "cart-item";
        
        cartItemEl.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.product.image}" alt="${item.product.name}" onerror="this.src='https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop'">
            </div>
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.product.name}</h4>
                <span class="cart-item-brand">${item.product.brand}</span>
                <span class="cart-item-price">R$ ${item.product.price.toFixed(2)} <small style="font-size:10px; color:var(--text-secondary);">un (Pix)</small></span>
                
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="updateQuantity(${item.product.id}, -1)">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.product.id}, 1)">+</button>
                    </div>
                    <button class="btn-remove-item" onclick="removeFromCart(${item.product.id})">
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        Remover
                    </button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItemEl);
    });

    const discountAmount = baseCartaoSubtotal * STORE_CONFIG.pixDiscount;
    const totalPix = baseCartaoSubtotal - discountAmount;

    cartSubtotal.textContent = `R$ ${baseCartaoSubtotal.toFixed(2)}`;
    pixDiscountRow.classList.remove("hidden");
    cartDiscount.textContent = `- R$ ${discountAmount.toFixed(2)}`;
    cartTotal.textContent = `R$ ${totalPix.toFixed(2)}`;
    whatsappCheckoutBtn.disabled = false;
}

// Persistência local
function saveCartToLocalStorage() {
    localStorage.setItem("ctba_sups_cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const local = localStorage.getItem("ctba_sups_cart");
    if (local) {
        try {
            cart = JSON.parse(local);
        } catch (e) {
            cart = [];
        }
    }
}

// ==========================================================================
// Quick View Modal do Produto
// ==========================================================================
function openProductQuickView(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const hasDiscount = prod.originalPrice && prod.originalPrice > prod.price;
    const cartaoPrice = prod.originalPrice || (prod.price / (1 - STORE_CONFIG.pixDiscount));

    // Monta a Tabela Nutricional
    let nutRows = "";
    for (const [key, val] of Object.entries(prod.nutritional)) {
        nutRows += `
            <div class="table-row">
                <span>${key}</span>
                <span>${val}</span>
            </div>
        `;
    }

    // Monta os benefícios em Bullet Points
    let benefitsList = "";
    prod.benefits.forEach(benefit => {
        benefitsList += `<li>💪 ${benefit}</li>`;
    });

    modalBodyContent.innerHTML = `
        <div class="modal-grid">
            <div class="modal-img-container">
                <img src="${prod.image}" alt="${prod.name}" onerror="this.src='https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop'">
            </div>
            <div class="modal-info">
                <span class="modal-brand">${prod.brand}</span>
                <h2 class="modal-title">${prod.name}</h2>
                <div class="modal-benefit-badge">Foco & Rendimento</div>
                
                <p class="modal-desc">${prod.description}</p>
                
                <ul style="list-style:none; font-size: 13px; color: var(--text-secondary); margin-bottom: 20px; display:flex; flex-direction:column; gap:6px;">
                    ${benefitsList}
                </ul>

                <h4 style="font-family: var(--font-headings); font-weight:800; font-size:14px; text-transform:uppercase; margin-bottom: 10px; color: var(--text-primary);">Informação Nutricional</h4>
                <div class="modal-details-table">
                    ${nutRows}
                </div>

                <div class="modal-price-box">
                    <div style="display:flex; flex-direction:column;">
                        ${hasDiscount ? `<span class="old-price" style="margin-bottom:0;">De R$ ${prod.originalPrice.toFixed(2)}</span>` : ''}
                        <span class="current-price">R$ ${prod.price.toFixed(2)}</span>
                        <span class="pix-note">Valor com 5% de Desconto via Pix</span>
                    </div>
                    <div style="font-size:12px; text-align:right; color: var(--text-secondary);">
                        ou <strong>R$ ${cartaoPrice.toFixed(2)}</strong><br>sem desconto no cartão
                    </div>
                </div>

                <div class="product-actions" style="grid-template-columns: 1fr 1fr;">
                    <button class="btn btn-primary" onclick="buyNowSingle(${prod.id})">
                        COMPRAR VIA WHATSAPP
                    </button>
                    <button class="btn btn-outline" onclick="addToCart(${prod.id}); closeModal();">
                        ADD AO CARRINHO
                    </button>
                </div>
            </div>
        </div>
    `;

    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    productModal.classList.remove("active");
    if (!cartDrawer.classList.contains("active")) {
        document.body.style.overflow = "";
    }
}

// ==========================================================================
// Envio para WhatsApp (Checkout)
// ==========================================================================

// Comprar produto único imediatamente
function buyNowSingle(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const cartaoPrice = prod.originalPrice || (prod.price / (1 - STORE_CONFIG.pixDiscount));
    
    let message = `🔥 *OLÁ! QUERO FECHAR ESSE SUPLEMENTO:* 🔥\n\n`;
    message += `👉 *Produto:* ${prod.name}\n`;
    message += `🏷️ *Marca:* ${prod.brand}\n`;
    message += `💵 *Preço no Pix:* R$ ${prod.price.toFixed(2)}\n`;
    message += `💳 *Preço no Cartão:* R$ ${cartaoPrice.toFixed(2)}\n\n`;
    message += `----------------------------------\n`;
    message += `🛵 *Curitiba e Região Metropolitana*\n`;
    message += `Gostaria de combinar a entrega/retirada desse item!`;

    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}

// Enviar todo o carrinho consolidado
function sendCartToWhatsApp() {
    if (cart.length === 0) return;

    let baseCartaoSubtotal = 0;
    
    let message = `🔥 *NOVO PEDIDO - CTBA SUPLEMENTOS* 🔥\n`;
    message += `----------------------------------\n`;
    message += `Gostaria de fechar os seguintes suplementos:\n\n`;

    cart.forEach((item, index) => {
        const itemOriginalPrice = item.product.originalPrice || (item.product.price / (1 - STORE_CONFIG.pixDiscount));
        const itemSubtotalCartao = itemOriginalPrice * item.quantity;
        baseCartaoSubtotal += itemSubtotalCartao;
        
        message += `*${item.quantity}x* ${item.product.name}\n`;
        message += `   └ Marca: ${item.product.brand}\n`;
        message += `   └ Subtotal: R$ ${itemSubtotalCartao.toFixed(2)} (${item.quantity}x R$ ${itemOriginalPrice.toFixed(2)})\n\n`;
    });

    const discountAmount = baseCartaoSubtotal * STORE_CONFIG.pixDiscount;
    const totalPix = baseCartaoSubtotal - discountAmount;

    message += `----------------------------------\n`;
    message += `💰 *Subtotal no Cartão:* R$ ${baseCartaoSubtotal.toFixed(2)}\n`;
    message += `⚡ *Total com Desconto Pix (5% Off):* R$ ${totalPix.toFixed(2)}\n\n`;
    message += `🛵 *Entrega/Retirada:* A combinar para Curitiba ou Região Metropolitana.\n`;
    message += `Gostaria de verificar o frete e as formas de pagamento!`;

    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}
