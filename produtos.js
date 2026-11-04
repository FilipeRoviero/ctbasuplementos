/* ==========================================================================
   CTBA SUPLEMENTOS - Dados da loja e catálogo de produtos
   Arquivo compartilhado por index.html (kits) e catalogo.html (todos os itens).
   Para incluir ou alterar produtos, edite SOMENTE este arquivo.
   ========================================================================== */

// Configuração Geral da Loja
const STORE_CONFIG = {
    whatsappNumber: "554191331314", // Alterar para o número do WhatsApp da loja (com DDD)
    homeCategory: "combos",         // Categoria exibida na página inicial (kits)
};

// Categorias do catálogo (ordem = ordem dos botões de filtro).
// "id" é o valor usado em "category" de cada produto.
const CATEGORIES = [
    { id: "aminoacidos", label: "Aminoácidos" },
    { id: "barrinhas", label: "Barrinhas" },
    { id: "combos", label: "Combos" },
    { id: "creatina", label: "Creatina" },
    { id: "hiper-sem-lac", label: "Hipercalórico Zero Lactose" },
    { id: "hipercalorico", label: "Hipercalórico" },
    { id: "pasta-de-amendoim", label: "Pasta de Amendoim" },
    { id: "pre-sem-cafeina", label: "Pré-treino S/ Cafeína" },
    { id: "pre-treino", label: "Pré-treino" },
    { id: "repositores", label: "Repositores" },
    { id: "termogenico", label: "Termogênico" },
    { id: "vitaminas e omega 3", label: "Vitaminas e Ômega 3" },
    { id: "whey-iso", label: "Whey Isolado" },
    { id: "whey-protein", label: "Whey Protein" },
];

// Produtos. Como acrescentar um item: copie um bloco { ... } do fim da lista, use um "id" novo
// (maior que o último), escolha "category" entre os ids de CATEGORIES e preencha nome, preço e imagem.
// - price: número com ponto (ex. 159.90). Com price: null o produto fica OCULTO no site.
// - image: caminho da foto (ex. "assets/combos/arquivo.png"). Vazio ("") mostra um espaço reservado.
// - brand, benefits e originalPrice (preço "de", mostra selo OFERTA) são opcionais.
const PRODUCTS = [
    {
        id: 1,
        name: "Beta Alanina Muscletech 200g",
        brand: "Muscletech",
        category: "aminoacidos",
        price: 79.90,
        image: "assets/aminoacidos/beta-alanina-muscletech-200g.png",
        description: "Seu limite é o próximo nível. Com Beta Alanina Muscletech, você treina mais forte, aguenta mais e recupera melhor. Pura performance para quem não aceita estagnação.",
        benefits: ["Aumento de força", "Recuperação mais rápida", "Performance melhor"

        ]
    },
    {
        id: 2,
        name: "Barra Darkbar com 08 unidades",
        brand: "Darkbar",
        category: "barrinhas",
        price: 109.00,
        image: "assets/barrinhas/barra-darkbar.png",
        description: "A barra de proteína é uma opção prática e deliciosa para aumentar a ingestão de proteínas em sua dieta.",
        benefits: ["Carboidratos de baixo índice glicêmico", "TCM", "Vitaminas e minerais"

        ]
    },
    {
        id: 3,
        name: "Barra Integral caixa com 12",
        brand: "Integral",
        category: "barrinhas",
        price: 99.90,
        image: "assets/barrinhas/barra-integral.png",
        description: "A barra de proteína é uma opção prática e deliciosa para aumentar a ingestão de proteínas em sua dieta.",
        benefits: ["Carboidratos de baixo índice glicêmico", "TCM", "Vitaminas e minerais"

        ]
    },
    {
        id: 4,
        name: "Barra Nutrata caixa com 12",
        brand: "Marca",
        category: "barrinhas",
        price: 89.90,
        image: "assets/barrinhas/barra-nutrata.png",
        description: "A barra de proteína é uma opção prática e deliciosa para aumentar a ingestão de proteínas em sua dieta.",
        benefits: ["Carboidratos de baixo índice glicêmico", "TCM", "Vitaminas e minerais"

        ]
    },
    {
        id: 5,
        name: "Combo Integral Whey 900g + Creatina 300g",
        brand: "Integral",
        category: "combos",
        price: 229.90,
        image: "assets/combos/combo-integral-whey-creat.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 6,
        name: "Combo Whey HealthTime 2,1kg + Creatina Dux 300g",
        brand: "HealthTime + Dux",
        category: "combos",
        price: 239.90,
        image: "assets/combos/combo-whey-creat.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 7,
        name: "Combo Whey HealthTime 2,1kg + Shaker",
        brand: "HealthTime + Shaker",
        category: "combos",
        price: 149.90,
        image: "assets/combos/combo-whey-shaker.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 8,
        name: "Creatina Dux 300g",
        brand: "Dux",
        category: "creatina",
        price: 69.90,
        image: "assets/creatina/creatina-dux-300g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 9,
        name: "Creatina Integral 300g",
        brand: "Integral",
        category: "creatina",
        price: 79.90,
        image: "assets/creatina/creatina-integral-300g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 10,
        name: "Creatina Max Titanium 300g",
        brand: "Max Titanium",
        category: "creatina",
        price: 69.90,
        image: "assets/creatina/creatina-max-300g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 11,
        name: "Hipercalórico Sem Lactose Max Titanium 2kg",
        brand: "Max Titanium",
        category: "hiper-sem-lac",
        price: 109.90,
        image: "assets/hiper-sem-lac/hiper-sem-lactose-2kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 12,
        name: "Hipercalórico X Charge 3kg",
        brand: "Charge",
        category: "hipercalorico",
        price: 99.90,
        image: "assets/hipercalorico/hiper-charge-3kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 13,
        name: "Hipercalórico Creamass 3kg",
        brand: "Integral",
        category: "hipercalorico",
        price: 119.90,
        image: "assets/hipercalorico/hiper-integral-3kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 14,
        name: "Hipercalórico Mass Titanium 3kg",
        brand: "Max",
        category: "hipercalorico",
        price: 119.90,
        image: "assets/hipercalorico/hiper-max-3kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 15,
        name: "Dr. Peanut 600g",
        brand: "Dr Peanut",
        category: "pasta-de-amendoim",
        price: 49.90,
        image: "assets/pasta-de-amendoim/drpeanut-600g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 16,
        name: "La Ganexa 1kg",
        brand: "La Ganexa",
        category: "pasta-de-amendoim",
        price: 69.90,
        image: "assets/pasta-de-amendoim/laganexa-1kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 17,
        name: "La Ganexa 450g",
        brand: "La Ganexa",
        category: "pasta-de-amendoim",
        price: 44.90,
        image: "assets/pasta-de-amendoim/laganexa-450g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 18,
        name: "Dila Pump 300g",
        brand: "Adaptogen",
        category: "pre-sem-cafeina",
        price: 129.90,
        image: "assets/pre-sem-cafeina/dila-pump-300g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 19,
        name: "Pre Night 200g",
        brand: "Bodyaction",
        category: "pre-sem-cafeina",
        price: 89.90,
        image: "assets/pre-sem-cafeina/pre-night-200g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 20,
        name: "Vasculos 300g",
        brand: "Darkness",
        category: "pre-sem-cafeina",
        price: 119.90,
        image: "assets/pre-sem-cafeina/vasculos-300g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 21,
        name: "Pre Bope 150g",
        brand: "Black Skull",
        category: "pre-treino",
        price: 79.90,
        image: "assets/pre-treino/pre-bope-150g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 22,
        name: "Insane Clown 350g",
        brand: "Demons Labs",
        category: "pre-treino",
        price: 129.90,
        image: "assets/pre-treino/pre-clown-350g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 23,
        name: "Pre Psicho Killer 294g",
        brand: "Demons Labs",
        category: "pre-treino",
        price: 129.90,
        image: "assets/pre-treino/pre-psicho-killer-294g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 24,
        name: "Energy Kick 1kg",
        brand: "Dux",
        category: "repositores",
        price: 129.90,
        image: "assets/repositores/energy-kick-1kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 25,
        name: "Thermo 2Hot Max 200g",
        brand: "Max Titanium",
        category: "termogenico",
        price: 79.90,
        image: "assets/termogenico/2hot-max-200g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 26,
        name: "Dimethylex 60caps",
        brand: "Under Labz",
        category: "termogenico",
        price: 89.90,
        image: "assets/termogenico/dimethylex-60caps.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 27,
        name: "Psicho Killer 60caps",
        brand: "Demons Labs",
        category: "termogenico",
        price: 89.90,
        image: "assets/termogenico/psicho-killer-60caps.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 28,
        name: "Multivit Dux 90caps",
        brand: "Dux",
        category: "vitaminas e omega 3",
        price: 79.90,
        image: "assets/vitaminas e omega 3/multivit-dux-90caps.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 29,
        name: "Omega3 Dux 120caps",
        brand: "Dux",
        category: "vitaminas e omega 3",
        price: 79.90,
        image: "assets/vitaminas e omega 3/omega3-dux-120caps.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 30,
        name: "Carnibol 900g",
        brand: "Darkness",
        category: "whey-iso",
        price: 169.90,
        image: "assets/whey-iso/carnibol-900g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 31,
        name: "Iso Dux 900g",
        brand: "Dux",
        category: "whey-iso",
        price: 329.90,
        image: "assets/whey-iso/iso-dux-900g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 32,
        name: "Isolate Prime 900g",
        brand: "Bodyaction",
        category: "whey-iso",
        price: 169.90,
        image: "assets/whey-iso/isolate-prime-900g.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 33,
        name: "Whey Full Health 2kg",
        brand: "Full Health",
        category: "whey-protein",
        price: 159.90,
        image: "assets/whey-protein/whey-fhealt-2kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 34,
        name: "Whey Health Time 2,1kg",
        brand: "Health Time",
        category: "whey-protein",
        price: 169.90,
        image: "assets/whey-protein/whey-health-2kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },
    {
        id: 35,
        name: "Whey Melius 2kg",
        brand: "Melius",
        category: "whey-protein",
        price: 139.90,
        image: "assets/whey-protein/whey-melius-2kg.png",
        description: "Descrição provisória. Altere depois.",
        benefits: ["Benefício 1", "Benefício 2", "Benefício 3"

        ]
    },


    // ---- Itens importados do catálogo do WhatsApp (sem foto até receberem "image") ----
    {
        id: 36,
        name: "Combo Whey Max 100% + Creatina 300g",
        brand: "",
        category: "combos",
        price: 199.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "Combo com Whey Max 100% mais Creatina Max 300g pura. Solicite o sabor de sua preferência . Parcele em até 3x sem Juros Morango,Chocolate,Baunilha, Cookies"
    },
    {
        id: 37,
        name: "Whey Health 2kg Hiper 3kg Creatina 300g",
        brand: "",
        category: "combos",
        price: 249.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "No combo vai 01 Whey 2kg Health 01 Hiper 3kg Body Action 01 Creatina 300g pura Solicite os sabores de preferência"
    },
    {
        id: 38,
        name: "Combo Whey Black Skull + Creatina Black Skull 300g",
        brand: "",
        category: "combos",
        price: 199.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "Solicite o sabor de sua preferência."
    },
    {
        id: 39,
        name: "Whey Health 2kg + Dr Peanut 600g",
        brand: "",
        category: "combos",
        price: 179.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "No combo vai : Whey 2kg + Dr Peanut 600g R$179,90 Solicite o sabor de sua preferência"
    },
    {
        id: 40,
        name: "Whey Health 2.1kg + Pré Treino Insane Clown 350g",
        brand: "",
        category: "combos",
        price: 289.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "No combo você leva 01 Whey Health 2.1kg + 01 Pré treino Insane Clown 350g. Solicite o sabor de sua preferência."
    },
    {
        id: 41,
        name: "Whey Nutrata 900g Creatina 300g",
        brand: "",
        category: "combos",
        price: null,
        // PREÇO A CONFIRMAR (no catálogo do WhatsApp: R$ 209.90 ou R$ 219.90). Produto oculto no site enquanto price for null.
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "No combo vai os dois itens . Solicite o sabor de sua preferência ."
    },
    {
        id: 42,
        name: "Whey 2kg + Creatina Universal + Shaker",
        brand: "",
        category: "combos",
        price: 199.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "No combo você leva o Whey 2kg mais uma Creatina Universal e uma coqueteleira. . Solicite o sabor de sua preferência."
    },
    {
        id: 43,
        name: "Whey Mellius 2kg + Creatina Integral 300g",
        brand: "",
        category: "combos",
        price: 199.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "No combo você leva 01 Whey Mellius 2kg + 01 Creatina 300g Integralmedica 300g Pura. Solicite o sabor de sua preferência."
    },
    {
        id: 44,
        name: "Whey 100% Tasty Max Titanium",
        brand: "Max Titanium",
        category: "whey-protein",
        price: 139.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "Solicite o sabor de sua preferência. Chocolate,Baunilha,Cookies e Chocolate ?"
    },
    {
        id: 45,
        name: "100% Prime Body Action 900g",
        brand: "Body Action",
        category: "whey-protein",
        price: 129.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "Ou 02 pacotes por R$239,90 Rende 27 doses Sabores; Morango,Chocolate,Baunilha e Leite Condensado."
    },
    {
        id: 46,
        name: "Whey 100% Integralmedica 900g",
        brand: "Integralmedica",
        category: "whey-protein",
        price: 159.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "Solicite o sabor de sua preferência."
    },
    {
        id: 47,
        name: "Whey 100% Hd Black Skull 900g",
        brand: "Black Skull",
        category: "whey-protein",
        price: 119.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "Solicite o sabor de preferência."
    },
    {
        id: 48,
        name: "Whey Crush Under Labz 900g",
        brand: "Under Labz",
        category: "whey-protein",
        price: 139.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "02 Pacotes R$259,99 Doce de leite Chocolate Suíço Morango Leite Caramelo Ovomaltine Vitamina de Frutas"
    },
    {
        id: 49,
        name: "Whey Gold Adaptogen 900g",
        brand: "Adaptogen",
        category: "whey-protein",
        price: 189.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "Solicite o sabor de sua preferência"
    },
    {
        id: 50,
        name: "Whey 100% Dr Peanut Max 900g",
        brand: "Dr Peanut",
        category: "whey-protein",
        price: 169.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "Solicite o sabor de sua preferência. Avelã,Buenissimo,Paçoca,Doce de Leite e Bom Bom Italiano."
    },
    {
        id: 51,
        name: "Tasty Whey Adaptogen 900g",
        brand: "Adaptogen",
        category: "whey-protein",
        price: 219.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "A premiada Tasty Whey possui o melhor sabor do mercado com 24g de proteína e com alto valor biológico de excelente absorção e custo-benefício que auxilia no crescimento muscular."
    },
    {
        id: 52,
        name: "Creatina Universal 200g Pura",
        brand: "Universal",
        category: "creatina",
        price: 59.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/creatina/arquivo.png
        description: "01 R$59,90 ou 02 R$109,90"
    },
    {
        id: 53,
        name: "Creatina Probiotica 300g pura",
        brand: "Probiótica",
        category: "creatina",
        price: 64.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/creatina/arquivo.png
        description: "Creatina pura 300g ou duas por R$129,90"
    },
    {
        id: 54,
        name: "Creatina Creapure Dux 300g",
        brand: "Dux",
        category: "creatina",
        price: 199.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/creatina/arquivo.png
        description: "Creatina com selo Creapure . Melhor matéria prima do mundo"
    },
    {
        id: 55,
        name: "Creatina Creapure 250g Max Titanium",
        brand: "Max Titanium",
        category: "creatina",
        price: 139.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/creatina/arquivo.png
        description: "Creatina com selo Creapure . Melhor matéria prima do mundo ."
    },
    {
        id: 56,
        name: "Creatina Turbo Black Skull 300g",
        brand: "Black Skull",
        category: "creatina",
        price: null,
        // PREÇO A CONFIRMAR (no catálogo do WhatsApp: R$ 59.90 ou R$ 69.90). Produto oculto no site enquanto price for null.
        image: "", // ainda sem foto: coloque o caminho, ex. assets/creatina/arquivo.png
        description: "Creatina Turbo 300g 50 doses ."
    },
    {
        id: 57,
        name: "Creatina New Millen pura 500g",
        brand: "New Millen",
        category: "creatina",
        price: 89.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/creatina/arquivo.png
        description: "Creatina 500g pura"
    },
    {
        id: 58,
        name: "Creatina Dark Lab 300g 100% pura",
        brand: "Dark Lab",
        category: "creatina",
        price: 59.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/creatina/arquivo.png
        description: "Creatina Dark um suplemento de creatina 100% monoidratada que te fornece 3g de creatina por dose. Fundamental no transporte e armazenamento de energia em todas as células do corpo humano, a creatina auxilia no aumento do desempenho físico durante exercícios."
    },
    {
        id: 59,
        name: "Pré Treino Ectoplasma 340g",
        brand: "",
        category: "pre-treino",
        price: 149.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "O Ectoplasma Super Power da Demons Lab é um pré-treino de alta performance, desenvolvido para proporcionar energia explosiva, foco intenso e resistência durante os treinos mais desafiadores. Com 480g, este suplemento é ideal para atletas e entusiastas do fitness que buscam maximizar seus resultados e atingir novos níveis de desempenho."
    },
    {
        id: 60,
        name: "Psichotic Hell",
        brand: "",
        category: "pre-treino",
        price: 129.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "O Psichotic Hell da Demons Lab é um suplemento pré-treino desenvolvido para melhorar o desempenho durante atividades físicas intensas. Ele combina ingredientes que fornecem energia, aumentam o foco, reduzem a fadiga muscular e promovem resistência. Informações importantes Ingredientes Beta - Alanina, Taurina, L-Carnitina, Cafeína, Tirosina, Bisglicinato de Magnésio, Aspartato de Zinco, Vitamina B6 (Cloridrato de Piridoxina), Vitamina B12 (Cianocobalamina), Acidulante Acido Citrico, Aroma Idêntico ao Natural de Frutas Vermelhas, Guaraná em Pó (Paulinia cupana), Antiumectante Dióxido de Silicio, Aromatizante Natural de Café Verde, Laranja amarga, Pimenta (Capsicum annuum), Edulcorante Sucralose e Corante Natural de Beterraba."
    },
    {
        id: 61,
        name: "Pré Treino Horus 300g",
        brand: "",
        category: "pre-treino",
        price: 109.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "Este é um suplemento diferente e possui a formulação única que vai melhorar sua performance física e mental. Ao final de cada jornada você verá a diferença. O HÓRUS é um pré-treino para você que se exercita de verdade. É o fim da fadiga que atrapalha no rendimento, bem como em suas metas de treino. Uma formulação altamente tecnológica, de qualidade e com ingredientes como Beta-Alanina, Taurina, Arginina e Cafeína que, aumentam o estado de alerta, concentração e resistência"
    },
    {
        id: 62,
        name: "Égide 300g",
        brand: "",
        category: "pre-treino",
        price: 139.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "pré-treino ÉGIDE é seu mais novo aliado para realizar treinos cada vez mais intensos! Sua formulação é concentrada e é fonte dos aminoácidos beta-alanina, taurina, cafeína, arginina e tirosina, que atuam em sinergia para auxiliar ainda mais seu desempenho. Prepare-se para treinar com muito mais intensidade, concentração e resistência! ÉGIDE tem saborização agradável e suave, tornando ainda mais fácil a inclusão do pré-treino em sua rotina."
    },
    {
        id: 63,
        name: "Prohibido 3vs 360g",
        brand: "",
        category: "pre-treino",
        price: 109.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "A FÓRMULA DE PROHIBIDO FOI PENSADA PARA QUE VOCÊ TIVESSE OS MELHORES TREINOS DE SUA VIDA seu corpo é uma máquina, que para funcionar na sua máxima potência precisa dos aditivos corretos, nas doses certas. é exatamente essa perfeição aditiva que a fórmula de prohibido traz para o seu corpo. o prohibido contém seis ingredientes principais: beta alanina, arginina, creatina, taurina, l-tirosina, palatinose."
    },
    {
        id: 64,
        name: "Vasculor 300g",
        brand: "",
        category: "pre-treino",
        price: 119.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "Novo Vasculor Darkeness ! Pré-Treino em Pó 300g: Mais Potência, Energia e Sabores Incríveis! Chegou o novo Vasculor Darkeness, agora na versão em pó de 300g, desenvolvido para elevar seu desempenho ao máximo e proporcionar treinos mais intensos e produtivos. Este pré-treino poderoso foi formulado para quem busca energia explosiva, foco extremo e resistência incomparável durante os treinos."
    },
    {
        id: 65,
        name: "C4 Pré Workout",
        brand: "",
        category: "pre-treino",
        price: null,
        // PREÇO A CONFIRMAR (no catálogo do WhatsApp: R$ 79.90 ou R$ 99.90). Produto oculto no site enquanto price for null.
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "O C4 Beta Pump é o pré-treino ideal para elevar sua performance a outro nível. Eleito 4 vezes o melhor pré-treino nacional, este suplemento altamente concentrado foi formulado para fornecer energia explosiva, foco extremo e maior resistência durante os treinos. Com ingredientes poderosos como cafeína, taurina, alanina e arginina, o C4 Beta Pump melhora a força, combate a fadiga muscular e promove vasodilatação, permitindo evolução contínua nos seus resultados. Perfeito para atletas e praticantes de atividades físicas que buscam o máximo desempenho."
    },
    {
        id: 66,
        name: "Warzone Under Labz",
        brand: "Under Labz",
        category: "pre-treino",
        price: null,
        // PREÇO A CONFIRMAR (no catálogo do WhatsApp: R$ 89.90 ou R$ 119.90). Produto oculto no site enquanto price for null.
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "WARZONE COM PUMP MATRIX™ - O pré treino em 2 estágios. É o primeiro e único pré treino do Brasil com PUMP MATRIX™ Um pré treino inteligente de efeito prolongado que funciona em 2 estágios. → Estágio 01 No primeiro estágio ele faz você atingir o ápice de energia dos estimulantes te colocando em um nível de alto rendimento. → Estágio 02 Quando isso acontece, de forma inteligente o estágio 02 é ativado com a Pump Matrix™ liberando mais potência muscular ao intensificar o fluxo sanguíneo. Ele ultrapassa os limites dos estimulantes, te colocando em um nível prolongado de ultra performance."
    },
    {
        id: 67,
        name: "Pré Workout Dux 300g",
        brand: "Dux",
        category: "pre-treino",
        price: 129.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "APRESENTAÇÃO: O Pre Workout Original DUX é um produto completo que oferece suporte nutricional superior durante treinos e competições. Com mais de 15 ingredientes multifuncionais, o DUX Pre Workout Original foi desenvolvido para estabelecer um novo padrão em pré-treinos. Sua fórmula foi concebida para proporcionar qualidade máxima e desempenhar diversas funções. COMPOSIÇÃO: Fórmula avançada superconcentrada (15g) para energia e foco em dois estágios de ação: Cafeína: 300 mg. Taurina: 1.500 mg. Beta-Alanina: 2.000 mg. L-Arginina: 3.000 mg. BCAAs: 3.550 mg."
    },
    {
        id: 68,
        name: "Evora 300g",
        brand: "",
        category: "pre-treino",
        price: null,
        // PREÇO A CONFIRMAR (no catálogo do WhatsApp: R$ 99.90 ou R$ 109.90). Produto oculto no site enquanto price for null.
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "Darkness, especialista em produtos de alta qualidade e com concentração de nutrientes, Évora PW. Pré-treino para auxiliar nas metas nos treinos. Com fórmula energizante, garante melhora da condição física e do desgaste mental, pontos primordiais para bodybuilders que querem sempre dar um \"passo a diante\" em sua forma física ou no desempenho. Alcance alta energia com um pré-treino!"
    },
    {
        id: 69,
        name: "Panic Adaptogen 300g",
        brand: "Adaptogen",
        category: "pre-treino",
        price: null,
        // PREÇO A CONFIRMAR (no catálogo do WhatsApp: R$ 109.90 ou R$ 119.90). Produto oculto no site enquanto price for null.
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "Estamos animados em apresentar a mais recente evolução do nosso querido Pré-Treino Panic! Com uma fórmula reformulada e um sabor ainda melhor, estamos prontos para levar sua experiência de treino a um novo patamar."
    },
    {
        id: 70,
        name: "Insane Psicho Path",
        brand: "",
        category: "pre-treino",
        price: 139.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "Chegou a hora de tocar o terror no treino! Com Insane Psycho Path você vai sentir a energia bater como um filme de terror… mas com final feliz na academia!"
    },
    {
        id: 71,
        name: "Crack Demons Lab 300g",
        brand: "Demons Lab",
        category: "pre-treino",
        price: 109.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "O CRACK PRE WORKOUT é o mais completo e mais equilibrado pré-treino da DEMONS LAB. Com as quantidades e concentrações perfeitas de cada componente, o CRACK PRE WORKOUT auxilia na entrega do melhor equilíbrio entre força, energia, performance, foco mental, resistência e também na recuperação muscular. MONSTRUOSO!!! Destaques: - 2.000mg de Beta Alanina (porção); - 2.000mg de Arginina (porção); - 400mg de Cafeína (porção); - 350mg de Creatina (porção); - 500mg L-carnitina com selo CARNIPURE de qualidade (porção); - 500mg de Taurina (porção); - 3g de D-ribose (porção)."
    },
    {
        id: 72,
        name: "Bone Crusher Black Skull 150g",
        brand: "Black Skull",
        category: "pre-treino",
        price: 69.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "Pré Treino Bone Crusher Black Skull 150g . Solicite o sabor de sua preferência"
    },
    {
        id: 73,
        name: "Bone Crusher 300g Black Skull",
        brand: "Black Skull",
        category: "pre-treino",
        price: 99.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "Pré Treino Black skull 300g . Solicite o sabor de sua preferência."
    },
    {
        id: 74,
        name: "D-Vaster 300g",
        brand: "",
        category: "pre-treino",
        price: 129.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "Pré Treino 300g"
    },
    {
        id: 75,
        name: "Pré Treino Dark Pump 300g",
        brand: "",
        category: "pre-treino",
        price: 89.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: "Solicite o sabor de sua preferência."
    },
    {
        id: 76,
        name: "Crisp Bar caixa com 12",
        brand: "",
        category: "barrinhas",
        price: 109.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/barrinhas/arquivo.png
        description: "R$10,90 Cada Sabores : Ovomaltine,Ninho com trufa,Doce de Coco,Duo Crunch e Trufa de Avelã."
    },
    {
        id: 77,
        name: "Grego Bar Caixa com 12 unidades",
        brand: "",
        category: "barrinhas",
        price: 89.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/barrinhas/arquivo.png
        description: "SABOR INCOMPARÁVEL, CREMOSIDADE ÚNICA! Composta pela associação de diferentes proteínas de alto valor biológico que conferem completo perfil de aminoácidos, com o toque de sabor incomparável e cremosidade única do iogurte GREGO original. GREGO BAR É PERFEIÇÃO EM FORMA DE BARRA PROTEICA."
    },
    {
        id: 78,
        name: "Energy Kick com cafeína 1kg",
        brand: "",
        category: "repositores",
        price: 129.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/repositores/arquivo.png
        description: "Solicite o sabor de sua preferência"
    },
    {
        id: 79,
        name: "Recharge 4:1",
        brand: "",
        category: "repositores",
        price: 139.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/repositores/arquivo.png
        description: "Solicite o sabor de preferência"
    },
    {
        id: 80,
        name: "Whey Fort 3w Vitafor",
        brand: "Vitafor",
        category: "whey-protein",
        price: 219.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "Solicite o sabor de sua preferência."
    },
    {
        id: 81,
        name: "Mega Pump Pack",
        brand: "",
        category: "pre-treino",
        price: 99.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-treino/arquivo.png
        description: ""
    },
    {
        id: 82,
        name: "Tasty Whey + Creatina 300g",
        brand: "",
        category: "combos",
        price: 269.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "Combo Tasty Whey Diversos sabores . Proteína Isolada,Concentrada e Hidrolisada. Mais proteína 100% pura 300g"
    },
    {
        id: 83,
        name: "Beef Protein Adaptogen 900g",
        brand: "Adaptogen",
        category: "whey-iso",
        price: 179.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-iso/arquivo.png
        description: "Protein Isolada da carne Adaptogen . Baunilha,Chocolate e Morango ."
    },
    {
        id: 84,
        name: "Combo Whey Dux + Creatina 300g",
        brand: "",
        category: "combos",
        price: 279.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "Solicitar o sabor de Preferência."
    },
    {
        id: 85,
        name: "Iso Prosize 900g",
        brand: "Prosize",
        category: "whey-iso",
        price: 239.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-iso/arquivo.png
        description: "Whey 100% isolado . Chocolate Morango Baunilha"
    },
    {
        id: 86,
        name: "Top taste Whey 3w",
        brand: "",
        category: "whey-protein",
        price: 139.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "32g de Proteína na Dose Isolado,concentrado e hidrolisado. Chocolate,Baunilha e morango ."
    },
    {
        id: 87,
        name: "Whey Dark Lab 100% 900g",
        brand: "Dark Lab",
        category: "whey-protein",
        price: 149.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "* Banoffee * Baunilha * Cappuccino * Chocolate * Coco * Cookies * Gelato Di Latte * Morango"
    },
    {
        id: 88,
        name: "Whey 100% Probiotica 900g",
        brand: "Probiótica",
        category: "whey-protein",
        price: 159.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "Solicite o sabor de sua preferência"
    },
    {
        id: 89,
        name: "Whey 100% Concentrado 900g Dux",
        brand: "Dux",
        category: "whey-protein",
        price: 209.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "Solicite o sabor de preferência. O Whey Protein Concentrado da Dux oferece um perfil nutricional completo, tornando-o uma excelente escolha para consumo antes e depois dos treinos. Cada porção fornece 20g de proteína 100% pura e de alta qualidade, extraída diretamente do soro do leite e sem a adição de blends ou outras proteínas. Possui um perfil completo de aminoácidos, incluindo todos os aminoácidos essenciais, que são cruciais para a construção muscular, a recuperação rápida e a manutenção da massa magra. Sua fórmula balanceada fornece suporte energético equilibrado e uma recuperação mais eficaz."
    },
    {
        id: 90,
        name: "Whey 100% Neyer 1kg",
        brand: "Neyer",
        category: "whey-protein",
        price: 119.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-protein/arquivo.png
        description: "01 R$119,90 02 R$219,90 Solicite o sabor de sua preferência"
    },
    {
        id: 91,
        name: "Whey 2.1kg + Creapure 250g",
        brand: "",
        category: "combos",
        price: 249.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "Combo com Whey 2.1kg mais Creatina Creapure 250g Solicite o sabor de sua preferência . Parcele em até 3x sem Juros Ninho,Ovomaltine,Chocolate,Baunilha,Capuccino,Banana com Canela e Chocolate Branco ."
    },
    {
        id: 92,
        name: "Isolate Juice Adaptogen",
        brand: "Adaptogen",
        category: "whey-iso",
        price: 169.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/whey-iso/arquivo.png
        description: "Proteína com gosto e sabor de suco . Nosa sabores : Abacaxi com coco,manga com laranja , maracujá e morango com Kiwi"
    },
    {
        id: 93,
        name: "Prepared 300g Demons Lab",
        brand: "Demons Lab",
        category: "pre-sem-cafeina",
        price: 119.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/pre-sem-cafeina/arquivo.png
        description: "Pré Treino sem cafeína 300g"
    },
    {
        id: 94,
        name: "Creatina Underlabz 300g Pura",
        brand: "Under Labz",
        category: "creatina",
        price: 74.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/creatina/arquivo.png
        description: "Creatina Underlabz pura 300g"
    },
    {
        id: 95,
        name: "Hydro Lite",
        brand: "",
        category: "repositores",
        price: 99.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/repositores/arquivo.png
        description: "Solicite o sabor de sua preferência"
    },
    {
        id: 96,
        name: "Whey Probiotica Creatina 300g",
        brand: "",
        category: "combos",
        price: 199.90,
        image: "", // ainda sem foto: coloque o caminho, ex. assets/combos/arquivo.png
        description: "Combo campeão da Probiotica por R$189,90 no Pix ou R$199,90 até 3x 100% Whey Probiotica – recuperação e crescimento muscular Creatina 300g pura – mais força e explosão nos treinos Qualidade, resultado e custo-benefício de verdade. Garanta o seu antes que acabe!"
    },
];
