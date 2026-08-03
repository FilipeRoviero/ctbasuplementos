/* ==========================================================================
   CTBA SUPLEMENTOS - Lógica de Aplicação & E-commerce WhatsApp
   ========================================================================== */

// Configuração Geral da Loja
const STORE_CONFIG = {
    whatsappNumber: "5541999999999", // Alterar para o número do WhatsApp da loja (com DDD)
    pixDiscount: 0.05, // 5% de desconto via Pix
};

// Banco de Dados de Produtos Mock
const PRODUCTS = [
    {
        id: 1,
        name: "Whey Protein 80% Concentrado (1kg)",
        brand: "Growth Supplements",
        category: "hipertrofia",
        price: 100.00, // Preço Promocional Pix
        originalPrice: 115.00, // Preço em Cartão
        image: "assets/whey.jpg",
        description: "O Whey Protein mais vendido do Brasil. Alta concentração proteica por dose, auxiliando no ganho e recuperação muscular.",
        benefits: ["80% de proteína pura", "Rico em BCAAs e Glutamina", "Matéria-prima importada de alta qualidade"],
        nutritional: {
            "Sabor": "Chocolate Belga",
            "Dose": "30g (3 colheres)",
            "Proteína": "24g",
            "Carboidratos": "4.5g",
            "Calorias": "120 kcal"
        }
    },
    {
        id: 2,
        name: "Creatina Monohidratada (250g)",
        brand: "Growth Supplements",
        category: "performance",
        price: 85.00,
        originalPrice: 99.00,
        image: "assets/creatine.jpg",
        description: "Aumento de força explosiva, ganho de energia intramuscular e melhora no rendimento físico de alta intensidade.",
        benefits: ["Creatina 100% pura e micronizada", "Aumento imediato de força", "Melhora recuperação pós-treino"],
        nutritional: {
            "Tipo": "Monohidratada",
            "Dose": "3g (1 scoop)",
            "Creatina Pura": "3g",
            "Glúten": "Não contém",
            "Carboidratos": "0g"
        }
    },
    {
        id: 3,
        name: "100% Whey Concentrado (900g)",
        brand: "Max Titanium",
        category: "hipertrofia",
        price: 140.00,
        originalPrice: 160.00,
        image: "assets/whey.jpg",
        description: "Composto por proteína concentrada do soro do leite de excelente qualidade, promovendo rápida absorção e síntese proteica.",
        benefits: ["Proteína de rápida absorção", "Auxilia na hipertrofia de forma acelerada", "Excelente custo-benefício e sabores premiados"],
        nutritional: {
            "Sabor": "Baunilha Premium",
            "Dose": "30g",
            "Proteína": "21g",
            "Carboidratos": "5g",
            "BCAAs": "4.8g"
        }
    },
    {
        id: 4,
        name: "Pré-Treino Hórus (300g)",
        brand: "Max Titanium",
        category: "performance",
        price: 120.00,
        originalPrice: 139.00,
        image: "assets/preworkout.jpg",
        description: "Formulado com Beta-Alanina, Arginina, Taurina e Cafeína. Foco mental extremo, pump muscular insano e energia inesgotável.",
        benefits: ["Foco mental e concentração extrema", "Alta vascularização (Arginina)", "Resistência à fadiga muscular (Beta-Alanina)"],
        nutritional: {
            "Sabor": "Frutas Vermelhas",
            "Dose": "8.4g",
            "Beta-Alanina": "2g",
            "Cafeína": "150mg",
            "Taurina": "1.000mg"
        }
    },
    {
        id: 5,
        name: "Pré-Treino Évora PW (300g)",
        brand: "Integralmedica",
        category: "performance",
        price: 115.00,
        originalPrice: 129.00,
        image: "assets/preworkout.jpg",
        description: "Desenhado para treinos de altíssima intensidade. Fornece energia explosiva e foco mental absoluto com cafeína de liberação gradual.",
        benefits: ["Energia de impacto rápido", "Termogênese e foco aprimorados", "Ajuda na quebra de recordes pessoais de força"],
        nutritional: {
            "Sabor": "Limão Ácido",
            "Dose": "5g",
            "Cafeína": "140mg",
            "Taurina": "1.000mg",
            "Glúten": "Não contém"
        }
    },
    {
        id: 6,
        name: "Therma Pro Hardcore (120 caps)",
        brand: "Integralmedica",
        category: "definicao",
        price: 90.00,
        originalPrice: 109.00,
        image: "assets/therma.jpg",
        description: "Poderoso termogênico à base de cafeína concentrada. Acelera o metabolismo basal, auxiliando na queima de gordura e definição muscular.",
        benefits: ["Aceleração do metabolismo basal", "Maior disposição e queima calórica nos treinos", "Definição muscular visível"],
        nutritional: {
            "Formato": "Cápsulas",
            "Dose": "2 cápsulas",
            "Cafeína por dose": "280mg",
            "Carboidratos": "0g",
            "Sódio": "0mg"
        }
    },
    {
        id: 7,
        name: "Combo Monstros (Whey Max + Creatina Growth)",
        brand: "Max / Growth",
        category: "combos",
        price: 215.00,
        originalPrice: 259.00,
        image: "assets/combo.jpg",
        description: "O combo definitivo para quem busca ganho de massa magra e força bruta. Whey Max Titanium 900g + Creatina Growth 250g + Coqueteleira Brinde.",
        benefits: ["Super combo promocional", "Proteína de qualidade com creatina pura", "Coqueteleira exclusiva da loja inclusa"],
        nutritional: {
            "Whey": "Max Titanium 900g",
            "Creatina": "Growth 250g",
            "Brinde": "Coqueteleira CTBA Suplementos",
            "Indicação": "Pós-treino de alta carga"
        }
    },
    {
        id: 8,
        name: "Combo Definição Insana (Évora + Therma Pro)",
        brand: "Integralmedica",
        category: "combos",
        price: 195.00,
        originalPrice: 238.00,
        image: "assets/combo2.jpg",
        description: "Queime gordura corporal mantendo o rendimento e a energia no topo. Termogênico Therma Pro 120caps + Pré-Treino Évora PW 300g.",
        benefits: ["Foco e queima termogênica máximos", "Redução rápida de percentual de gordura (BF)", "Ideal para períodos de cutting"],
        nutritional: {
            "Pré-Treino": "Évora PW 300g",
            "Termogênico": "Therma Pro 120 caps",
            "Combinação": "Foco + Aceleração Metabólica",
            "Indicação": "Antes do aeróbico/treino"
        }
    }
];

// Estado da Aplicação
let cart = [];
let currentCategory = "todos";
let searchQuery = "";

// Elementos do DOM
const productsGrid = document.getElementById("products-grid");
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
    // Filtros por categoria
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
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

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="loading-products">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted);"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <p>Nenhum suplemento encontrado com os filtros aplicados.</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(prod => {
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
