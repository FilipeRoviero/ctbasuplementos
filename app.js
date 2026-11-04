/* ==========================================================================
   CTBA SUPLEMENTOS - Lógica de Aplicação & Pedido via WhatsApp
   Os dados (STORE_CONFIG, CATEGORIES, PRODUCTS) ficam em produtos.js.
   Este script é usado por index.html (somente kits) e catalogo.html (todos).
   ========================================================================== */

const PAGE = document.body.dataset.page; // "home" ou "catalogo"

// Estado do catálogo
let currentCategory = "todos";
let searchQuery = "";
let displayLimit = 8; // Limite inicial para "todos" sem busca

// Elementos do DOM
const productsGrid = document.getElementById("products-grid");
const loadMoreContainer = document.getElementById("load-more-container");
const loadMoreBtn = document.getElementById("load-more-btn");
const categoryFilters = document.getElementById("category-filters");
const searchInputDesktop = document.getElementById("search-input-desktop");
const searchInputMobile = document.getElementById("search-input-mobile");
const searchStatus = document.getElementById("search-status");
const searchQueryDisplay = document.getElementById("search-query-display");
const clearSearchBtn = document.getElementById("clear-search-btn");
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

const WHATSAPP_ICON = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 2.01 14.12 1.01 11.5 1.012c-5.443 0-9.869 4.371-9.873 9.802-.001 1.777.476 3.51 1.38 5.061L1.96 22.04l6.27-1.626c-.523-.314.417.252-1.583-.92zm11.19-6.315c-.3-.15-1.77-.875-2.045-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 0-.275-.3-.8-1.725-1.1-2.025s-.6-.225-.9-.075c-.3.15-1.77.875-2.045.975-.275.1-.475.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075z"/></svg>`;

// ==========================================================================
// Utilitários
// ==========================================================================
function escapeHtml(text) {
    return String(text ?? "").replace(/[&<>"']/g, ch => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
}

// 159.9 -> "R$ 159,90"
function formatPrice(value) {
    return "R$ " + value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Minúsculas e sem acentos, para a busca achar "pre treino" em "Pré-treino"
function normalizeText(text) {
    return String(text ?? "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Produtos com price: null ficam ocultos até o preço ser confirmado
function getAvailableProducts() {
    return PRODUCTS.filter(prod => typeof prod.price === "number");
}

// Link do WhatsApp com mensagem pré-preenchida (nome + preço)
function buildWhatsAppUrl(prod) {
    const message = `Olá! Gostaria de pedir o produto *${prod.name}* por ${formatPrice(prod.price)}. Pode me ajudar?`;
    return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// ==========================================================================
// Inicialização
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    setupSearch();

    if (PAGE === "catalogo") {
        setupCatalog();
    } else {
        renderProducts(getAvailableProducts().filter(prod => prod.category === STORE_CONFIG.homeCategory));
    }
});

// ==========================================================================
// Menu de navegação (hambúrguer no celular)
// ==========================================================================
function setupMenu() {
    if (!menuToggle || !mainNav) return;

    const setMenu = (open) => {
        mainNav.classList.toggle("open", open);
        menuToggle.classList.toggle("open", open);
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    };

    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        setMenu(!mainNav.classList.contains("open"));
    });

    // Fecha ao tocar num link, fora do menu ou com ESC
    mainNav.addEventListener("click", (e) => {
        if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("click", (e) => {
        if (!mainNav.contains(e.target)) setMenu(false);
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setMenu(false);
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) setMenu(false);
    });
}

// ==========================================================================
// Busca (no catálogo filtra na hora; na home leva ao catálogo)
// ==========================================================================
function setupSearch() {
    const inputs = [searchInputDesktop, searchInputMobile].filter(Boolean);

    inputs.forEach(input => {
        if (PAGE === "catalogo") {
            input.addEventListener("input", () => {
                setSearch(input.value);
            });
        } else {
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") goToCatalogSearch(input.value);
            });
        }
    });

    // Botão da lupa
    document.querySelectorAll(".search-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const input = btn.parentElement.querySelector("input");
            if (!input) return;
            if (PAGE === "catalogo") input.focus();
            else goToCatalogSearch(input.value);
        });
    });

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            inputs.forEach(input => { input.value = ""; });
            setSearch("");
        });
    }
}

function goToCatalogSearch(value) {
    const term = value.trim();
    window.location.href = term ? `catalogo.html?busca=${encodeURIComponent(term)}` : "catalogo.html";
}

function setSearch(rawValue) {
    searchQuery = normalizeText(rawValue).trim();
    displayLimit = 8;

    // Sincroniza os dois campos de busca (desktop e celular)
    [searchInputDesktop, searchInputMobile].forEach(input => {
        if (input && input.value !== rawValue) input.value = rawValue;
    });

    if (searchQuery.length > 0) {
        searchStatus.classList.remove("hidden");
        searchQueryDisplay.textContent = rawValue.trim();
    } else {
        searchStatus.classList.add("hidden");
    }
    updateUrl();
    renderCatalog();
}

// ==========================================================================
// Catálogo completo (catalogo.html)
// ==========================================================================
function setupCatalog() {
    const params = new URLSearchParams(window.location.search);
    const available = getAvailableProducts();

    // Só mostra filtro de categorias que têm produto disponível
    const activeCategories = CATEGORIES.filter(cat => available.some(prod => prod.category === cat.id));

    categoryFilters.innerHTML = "";
    [{ id: "todos", label: "Todos" }, ...activeCategories].forEach(cat => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "filter-btn";
        btn.dataset.category = cat.id;
        btn.textContent = cat.label;
        btn.addEventListener("click", () => {
            currentCategory = cat.id;
            displayLimit = 8;
            updateFilterButtons();
            updateUrl();
            renderCatalog();
        });
        categoryFilters.appendChild(btn);
    });

    // Estado inicial vindo do link (?categoria=combos&busca=whey)
    const catParam = params.get("categoria");
    if (catParam && activeCategories.some(cat => cat.id === catParam)) currentCategory = catParam;

    const searchParam = params.get("busca") || "";
    if (searchParam) {
        [searchInputDesktop, searchInputMobile].forEach(input => { if (input) input.value = searchParam; });
        searchQuery = normalizeText(searchParam).trim();
        searchStatus.classList.remove("hidden");
        searchQueryDisplay.textContent = searchParam.trim();
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            displayLimit = Infinity;
            renderCatalog();
        });
    }

    updateFilterButtons();
    renderCatalog();
}

function updateFilterButtons() {
    categoryFilters.querySelectorAll(".filter-btn").forEach(btn => {
        const isActive = btn.dataset.category === currentCategory;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", String(isActive));
        // No celular a barra de filtros rola na horizontal: mantém o botão ativo à vista
        if (isActive && categoryFilters.scrollWidth > categoryFilters.clientWidth) {
            categoryFilters.scrollTo({ left: btn.offsetLeft - 16, behavior: "smooth" });
        }
    });
}

// Mantém o filtro no endereço (permite compartilhar o link e usar "voltar")
function updateUrl() {
    const params = new URLSearchParams();
    if (currentCategory !== "todos") params.set("categoria", currentCategory);
    const rawSearch = (searchInputDesktop && searchInputDesktop.value.trim()) ||
                      (searchInputMobile && searchInputMobile.value.trim()) || "";
    if (searchQuery && rawSearch) params.set("busca", rawSearch);
    const query = params.toString();
    history.replaceState(null, "", window.location.pathname + (query ? "?" + query : ""));
}

function renderCatalog() {
    const filtered = getAvailableProducts().filter(prod => {
        const matchesCategory = currentCategory === "todos" || prod.category === currentCategory;
        const matchesSearch = searchQuery === "" ||
            normalizeText(prod.name).includes(searchQuery) ||
            normalizeText(prod.brand).includes(searchQuery) ||
            normalizeText(prod.description).includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    let toRender = filtered;
    const limited = currentCategory === "todos" && searchQuery === "";
    if (limited) toRender = filtered.slice(0, displayLimit);

    if (loadMoreContainer) {
        loadMoreContainer.classList.toggle("hidden", !(limited && filtered.length > displayLimit));
    }
    renderProducts(toRender);
}

// ==========================================================================
// Renderização de Produtos (cards)
// ==========================================================================
function renderProducts(list) {
    productsGrid.innerHTML = "";

    if (list.length === 0) {
        productsGrid.innerHTML = `
            <div class="loading-products">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted);"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <p>Nenhum suplemento encontrado com os filtros aplicados.</p>
            </div>
        `;
        return;
    }

    list.forEach(prod => productsGrid.appendChild(createProductCard(prod)));
}

function createProductCard(prod) {
    const hasDiscount = prod.originalPrice && prod.originalPrice > prod.price;
    const card = document.createElement("article");
    card.className = "product-card";

    const image = prod.image
        ? `<img src="${escapeHtml(prod.image)}" alt="${escapeHtml(prod.name)}" loading="lazy" onerror="this.replaceWith(createImagePlaceholder())">`
        : `<div class="image-placeholder">Foto em breve</div>`;

    card.innerHTML = `
        ${hasDiscount ? `<span class="product-badge">🔥 OFERTA</span>` : ""}
        ${prod.brand ? `<span class="product-brand">${escapeHtml(prod.brand)}</span>` : ""}
        <div class="product-image-container">${image}</div>
        <div class="product-details">
            <h3 class="product-title">${escapeHtml(prod.name)}</h3>
            ${prod.description ? `<p class="product-description" title="Toque para ver a descrição completa">${escapeHtml(prod.description)}</p>` : ""}
            <div class="product-price-box">
                ${hasDiscount ? `<span class="old-price">${formatPrice(prod.originalPrice)}</span>` : ""}
                <span class="current-price">${formatPrice(prod.price)}</span>
            </div>
            <div class="product-actions">
                <a class="btn btn-success btn-order" href="${buildWhatsAppUrl(prod)}" target="_blank" rel="noopener">
                    ${WHATSAPP_ICON}
                    <span>Pedir no WhatsApp</span>
                </a>
            </div>
        </div>
    `;

    // Toque na descrição expande/recolhe o texto completo
    const desc = card.querySelector(".product-description");
    if (desc) desc.addEventListener("click", () => desc.classList.toggle("expanded"));

    return card;
}

// Usado quando uma foto cadastrada não carrega
function createImagePlaceholder() {
    const el = document.createElement("div");
    el.className = "image-placeholder";
    el.textContent = "Foto em breve";
    return el;
}
