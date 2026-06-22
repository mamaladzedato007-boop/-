// ==========================================
// 1. პროდუქტების ბაზა (v7_sale)
// ==========================================
const defaultProducts = [
    // --- ბოსტნეული ---
    { id: 1, name: "მწიფე პომიდორი", category: "ბოსტნეული", price: 3.20, oldPrice: 4.50, img: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=300", stock: 25.0, desc: "ახალი, ტკბილი და წვნიანი სათბურის პომიდორი პირდაპირ კახეთის რეგიონიდან." },
    { id: 2, name: "ახალი კიტრი", category: "ბოსტნეული", price: 2.50, oldPrice: null, img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=300", stock: 40.0, desc: "ხრაშუნა და არომატული ადგილობრივი კიტრი, იდეალურია სალათებისთვის." },
    { id: 3, name: "ბროკოლი", category: "ბოსტნეული", price: 6.50, oldPrice: null, img: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?q=80&w=300", stock: 12.0, desc: "ვიტამინებით მდიდარი, ეკოლოგიურად सუფთა მწვანე ბროკოლი." },
    { id: 4, name: "ტკბილი წიწაკა (ბულგარული)", category: "ბოსტნეული", price: 4.20, oldPrice: 5.50, img: "https://images.unsplash.com/photo-1563565080-1c9f1a50d212?q=80&w=300", stock: 18.5, desc: "ხორციანი და ტკბილი წითელი ბულგარული წიწაკა." },
    { id: 5, name: "ყვავილოვანი კომბოსტო", category: "ბოსტნეული", price: 4.80, oldPrice: null, img: "https://images.unsplash.com/photo-1568584711271-6c929fb49b60?q=80&w=300", stock: 15.0, desc: "ახალი და ჯანსაღი ყვავილოვანი კომბოსტო პირდაპირ ფერმიდან." },
    { id: 6, name: "თეთრი კომბოსტო", category: "ბოსტნეული", price: 1.50, oldPrice: null, img: "https://images.unsplash.com/photo-1581074817532-a362bf87fc0b?q=80&w=300", stock: 100.0, desc: "ახალი მოსავლის თეთრი კომბოსტო, იდეალურია მწნილისა და ხარშვისთვის." },
    { id: 7, name: "ტკბილი სტაფილო", category: "ბოსტნეული", price: 1.80, oldPrice: null, img: "https://images.unsplash.com/photo-1598170845058-32b996a695e6?q=80&w=300", stock: 35.0, desc: "გარეცხილი, ტკბილი და ხრაშუნა სტაფილო." },
    { id: 8, name: "ახალი კარტოფილი", category: "ბოსტნეული", price: 2.00, oldPrice: 2.60, img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=300", stock: 120.0, desc: "ახალი მოსავლის უგემრიელესი ახალქალაქის კარტოფილი." },
    { id: 9, name: "იალტური ხახვი", category: "ბოსტნეული", price: 2.20, oldPrice: null, img: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=300", stock: 28.0, desc: "ტკბილი სალათის წითელი ხახვი, ნაკლებად მწარე არომატით." },
    { id: 10, name: "არომატული ნიორი", category: "ბოსტნეული", price: 8.00, oldPrice: null, img: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=300", stock: 10.0, desc: "მკვეთრი არომატის მქონე ადგილობრივი ნიორი." },
    { id: 11, name: "მეწამული ბადრიჯანი", category: "ბოსტნეული", price: 3.40, oldPrice: null, img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=300", stock: 16.0, desc: "პრიალა და საღი ბადრიჯანი სხვადასხვა კერძისთვის." },
    { id: 12, name: "ნორჩი ყაბაყი", category: "ბოსტნეული", price: 2.90, oldPrice: 3.80, img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=300", stock: 22.0, desc: "ახალგაზრდა, ნაზი კანის მქონე მწვანე ყაბაყი." },
    { id: 13, name: "მწვანე ლობიო", category: "ბოსტნეული", price: 4.50, oldPrice: null, img: "https://images.unsplash.com/photo-1567375638346-e7b0d565132b?q=80&w=300", stock: 14.0, desc: "სილიკონის გარეშე, ნაზი და უძარღვო მწვანე ლობიო." },
    { id: 14, name: "სუფრის ჭარხალი", category: "ბოსტნეული", price: 1.90, oldPrice: null, img: "https://images.unsplash.com/photo-1593105541509-e82a610b42e9?q=80&w=300", stock: 40.0, desc: "მუკო წითელი, ტკბილი ჭარხალი სალათებისა და ბორშჩისთვის." },
    { id: 15, name: "წითელი ბოლოკი", category: "ბოსტნეული", price: 2.10, oldPrice: null, img: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=300", stock: 15.0, desc: "ხრაშუნა და ოდნავ ცხარე საგაზაფხულო ბოლოკი." },
    { id: 35, name: "მწვანე ბულგარული", category: "ბოსტნეული", price: 3.90, oldPrice: null, img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=300", stock: 20.0, desc: "სურნელოვანი მწვანე წიწაკა სალათებისთვის." },

    // --- ხილი ---
    { id: 16, name: "მწვანე ვაშლი", category: "ხილი", price: 2.80, oldPrice: null, img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=300", stock: 60.0, desc: "მომჟავო-ტკბილი ხრაშუნა მწვანე ვაშლი სიმირენკო." },
    { id: 17, name: "წითელი ვაშლი", category: "ხილი", price: 3.00, oldPrice: 3.80, img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=300", stock: 55.0, desc: "ტკბილი და არომატული წითელი ვაშლი გოლდენი." },
    { id: 18, name: "ყვითელი მსხალი", category: "ხილი", price: 4.50, oldPrice: null, img: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?q=80&w=300", stock: 15.0, desc: "რბილი, წვნიანი და ძალიან ტკბილი ყვითელი მსხალი." },
    { id: 19, name: "წვნიანი ატამი", category: "ხილი", price: 5.50, oldPrice: 7.00, img: "https://images.unsplash.com/photo-1595124253363-c59402f61d3a?q=80&w=300", stock: 0.0, desc: "ხავერდოვანი და საოცრად არომატული საადრეო ატამი." },
    { id: 22, name: "ტკბილი საზამთრო", category: "ხილი", price: 1.20, oldPrice: 1.60, img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=300", stock: 200.0, desc: "მურაბასავით ტკბილი და წითელი კახური საზამთრო." },

    // --- კენკრა ---
    { id: 36, name: "ქართული მარწყვი", category: "კენკრა", price: 8.00, oldPrice: 10.00, img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=300", stock: 15.0, desc: "ნატურალური არომატის მქონე, ადგილობრივი საგაზაფხულო მარწყვი." },
    { id: 39, name: "კულტივირებული მოცვი", category: "კენკრა", price: 15.00, oldPrice: 19.00, img: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=300", stock: 8.0, desc: "უმაღლესი ხარისხის, ანტიოქსიდანტებით მდიდარი შავი მოცვი გურიიდან." }
];

const fallbackImg = "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=300";
const FREE_SHIPPING_LIMIT = 50;
const phoneNumber = "995555562241"; 
const correctPassword = "1234";

// ახალი ვერსია სუფთად მუშაობს სააქციო სისტემასთან
let products = JSON.parse(localStorage.getItem('shop_products_v7_sale')) || defaultProducts;
if (!localStorage.getItem('shop_products_v7_sale')) {
    products = defaultProducts;
    localStorage.setItem('shop_products_v7_sale', JSON.stringify(defaultProducts));
}

let cart = JSON.parse(localStorage.getItem('shop_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('shop_favorites')) || [];
let orderHistory = JSON.parse(localStorage.getItem('shop_order_history')) || [];

let currentFilter = 'all';
let currentSort = 'default';
let searchQuery = '';
let activeDiscount = 0;
let activeDiscountCode = "";

// ==========================================
// 2. დინამიური სტილები (CSS)
// ==========================================
const injectV7Styles = () => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
        .flash-sale-banner {
            background: linear-gradient(45deg, #ff1744, #ff9100);
            color: white; text-align: center; padding: 10px; font-weight: bold;
            font-size: 15px; letter-spacing: 0.5px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            display: flex; justify-content: center; align-items: center; gap: 10px; z-index: 999;
        }
        .flash-timer { background: rgba(0,0,0,0.2); padding: 3px 8px; border-radius: 4px; font-family: monospace; font-size: 16px; }

        #toastContainer { position: fixed; bottom: 20px; right: 20px; z-index: 10000; display: flex; flex-direction: column; gap: 10px; }
        .toast-msg {
            background: #323232; color: white; padding: 12px 24px; border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2); font-weight: bold; font-size: 14px;
            transform: translateY(20px); opacity: 0; animation: slideIn 0.3s forwards;
            display: flex; align-items: center; gap: 8px; min-width: 200px;
        }
        .toast-msg.success { border-left: 5px solid #4caf50; background: #1e3a24; color: #e8f5e9; }
        .toast-msg.error { border-left: 5px solid #f44336; background: #3a1e1e; color: #ffebee; }
        @keyframes slideIn { to { transform: translateY(0); opacity: 1; } }

        .modal-overlay {
            position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6);
            display: flex; align-items: center; justify-content: center; z-index: 9999;
            opacity: 0; pointer-events: none; transition: 0.3s ease;
        }
        .modal-overlay.open { opacity: 1; pointer-events: auto; }
        .modal-content {
            background: white; padding: 25px; border-radius: 12px; max-width: 500px; width: 90%;
            position: relative; box-shadow: 0 10px 30px rgba(0,0,0,0.3); text-align: center;
            transform: scale(0.8); transition: 0.3s ease;
        }
        .modal-overlay.open .modal-content { transform: scale(1); }
        .close-modal-btn { position: absolute; top:15px; right:15px; background:none; border:none; font-size:24px; cursor:pointer; }
        body.dark-theme .modal-content { background: #1e1e1e; color: #fff; }

        .stock-label { font-size: 12px; margin-top: 4px; font-weight: bold; }
        .stock-in { color: #2e7d32; }
        .stock-low { color: #ff9100; }
        .stock-out { color: #d32f2f; }

        .history-section { margin-top: 20px; border-top: 2px solid #ddd; padding-top: 15px; text-align: left; }
        .history-title { font-size: 14px; font-weight: bold; margin-bottom: 10px; display: flex; justify-content: space-between; }
        .history-item { background: rgba(0,0,0,0.02); padding: 8px; border-radius: 6px; margin-bottom: 6px; font-size: 12px; }
        body.dark-theme .history-item { background: rgba(255,255,255,0.04); }
        
        body.dark-theme .product-card { background: #1e1e1e !important; color: #fff; border: 1px solid #333; }
        .shop-controls-bar { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; margin: 20px auto; max-width: 1200px; padding: 0 15px; }
        .fav-btn { position: absolute; top: 10px; left: 10px; background: rgba(255,255,255,0.8); border: none; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 5; font-size: 18px; }
        .fav-btn.active { color: #e91e63; }
        .shipping-progress-container { margin: 15px 0; padding: 10px 0; border-bottom: 1px dashed #ddd; }
        .progress-bar-bg { background: #eee; border-radius: 10px; height: 8px; overflow: hidden; }
        .progress-bar-fill { background: #4caf50; height: 100%; width: 0%; transition: width 0.4s; }
        .promo-section { margin: 15px 0; display: flex; gap: 5px; }
        .checkout-user-form input { width: 100%; padding: 8px; margin-bottom: 6px; border-radius: 4px; border: 1px solid #ccc; box-sizing: border-box; }
        
        /* აქციების ღილაკის სპეციალური სტილი */
        .sale-filter-btn { background: #ff1744; color: white; border: none; padding: 8px 14px; border-radius: 6px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: 0.2s; }
        .sale-filter-btn:hover { background: #b3002d; transform: scale(1.05); }
        .sale-filter-btn.active { background: #ffd600; color: #000; box-shadow: 0 0 10px rgba(255,214,0,0.5); }
        
        .admin-dashboard { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin-bottom: 20px; }
        .admin-dashboard-card { background: #f5f5f5; padding: 12px; border-radius: 6px; text-align: center; border-left: 4px solid #4caf50; }
        body.dark-theme .admin-dashboard-card { background: #2d2d2d; }
    `;
    document.head.appendChild(styleTag);
};

// ==========================================
// 3. ინიციალიზაცია
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    injectV7Styles();
    initToastContainer();
    initModalStructure();
    initFlashSaleBanner();
    initDarkMode();
    injectControlsBar();

    if (document.getElementById("productGrid")) {
        renderUserProducts();
        updateCartUI();
    }
    if (document.getElementById("loginForm")) {
        checkSession();
        document.getElementById("loginForm").addEventListener("submit", handleLogin);
        document.getElementById("productForm").addEventListener("submit", saveProduct);
    }
});

function initToastContainer() {
    if (!document.getElementById("toastContainer")) {
        const tc = document.createElement("div");
        tc.id = "toastContainer";
        document.body.appendChild(tc);
    }
}

function showToast(msg, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast-msg ${type}`;
    toast.innerHTML = type === "success" ? `✅ ${msg}` : `❌ ${msg}`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

function initModalStructure() {
    if (!document.getElementById("quickViewModal")) {
        const modal = document.createElement("div");
        modal.id = "quickViewModal";
        modal.className = "modal-overlay";
        modal.onclick = closeQuickView;
        modal.innerHTML = `
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="close-modal-btn" onclick="closeQuickView()">&times;</button>
                <div id="modalBody"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

function initFlashSaleBanner() {
    if (document.querySelector(".flash-sale-banner")) return;
    const banner = document.createElement("div");
    banner.className = "flash-sale-banner";
    banner.innerHTML = `⚡ სუპერ აქცია დასრულდება: <span class="flash-timer" id="flashTimer">00:00:00</span>`;
    document.body.insertBefore(banner, document.body.firstChild);
    
    setInterval(() => {
        const now = new Date();
        const night = new Date();
        night.setHours(24, 0, 0, 0);
        const diff = night - now;
        
        const hrs = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const mins = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0');
        const secs = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
        
        const timerSpan = document.getElementById("flashTimer");
        if(timerSpan) timerSpan.innerText = `${hrs}:${mins}:${secs}`;
    }, 1000);
}

function initDarkMode() {
    if (localStorage.getItem('shop_dark_mode') === 'true') document.body.classList.add('dark-theme');
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('shop_dark_mode', isDark);
    const btn = document.getElementById("themeToggleBtn");
    if(btn) btn.innerText = isDark ? "☀️ ნათელი" : "🌙 ღამის თემა";
}

// აერთიანებს მართვის პანელს და უმატებს "სააქციო" ღილაკს
function injectControlsBar() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput || document.querySelector(".shop-controls-bar")) return;

    const controlsBar = document.createElement("div");
    controlsBar.className = "shop-controls-bar";
    const isDark = document.body.classList.contains('dark-theme');

    controlsBar.innerHTML = `
        <div>
            <select class="sort-dropdown" onchange="changeSorting(this.value)" style="padding:8px; border-radius:6px; cursor:pointer;">
                <option value="default">🧬 სორტირება</option>
                <option value="price-asc">📈 ფასი: ზრდადობით</option>
                <option value="price-desc">📉 ფასი: კლებადობით</option>
            </select>
        </div>
        <div style="display:flex; gap:10px; align-items:center;">
            <button id="saleFilterBtn" class="sale-filter-btn" onclick="toggleSaleFilter()">🔥 აქციები</button>
            <button class="filter-btn" onclick="filterProducts('favorites')" style="padding:8px 12px; cursor:pointer; border-radius:6px;">❤️ რჩეულები (<span id="favCount">0</span>)</button>
            <button id="themeToggleBtn" style="background:#4caf50; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer;" onclick="toggleDarkMode()">
                ${isDark ? "☀️ ნათელი" : "🌙 ღამის თემა"}
            </button>
        </div>
    `;
    searchInput.parentNode.insertBefore(controlsBar, searchInput.nextSibling);
}

// ==========================================
// 4. პროდუქციის ფილტრაცია და რენდერი
// ==========================================
function renderUserProducts() {
    const grid = document.getElementById("productGrid");
    if (!grid) return;
    grid.innerHTML = "";

    // ჭკვიანი ფილტრის ლოგიკა (უმატებს 'sale'-ის მხარდაჭერას)
    let filtered = products.filter(p => {
        let matchesCategory = false;
        
        if (currentFilter === 'all') {
            matchesCategory = true;
        } else if (currentFilter === 'favorites') {
            matchesCategory = favorites.includes(p.id);
        } else if (currentFilter === 'sale') {
            matchesCategory = p.oldPrice && parseFloat(p.oldPrice) > parseFloat(p.price);
        } else {
            matchesCategory = p.category === currentFilter;
        }

        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (currentSort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-desc') filtered.sort((a, b) => b.price - a.price);

    // აქტიური კლასის მინიჭება აქციების ღილაკისთვის
    const saleBtn = document.getElementById("saleFilterBtn");
    if(saleBtn) {
        if(currentFilter === 'sale') saleBtn.classList.add("active");
        else saleBtn.classList.remove("active");
    }

    if(filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px; color:gray; font-weight:bold;">პროდუქცია ვერ მოიძებნა 🤷‍♂️</div>`;
        return;
    }

    filtered.forEach(p => {
        const hasSale = p.oldPrice && parseFloat(p.oldPrice) > parseFloat(p.price);
        const isFav = favorites.includes(p.id);
        const hasStock = p.stock && p.stock > 0;

        let stockTxt = `<span class="stock-label stock-out">❌ ამოიწურა</span>`;
        if (hasStock) {
            stockTxt = p.stock < 10 
                ? `<span class="stock-label stock-low">⚠️ დარჩა მხოლოდ ${p.stock.toFixed(1)} კგ!</span>`
                : `<span class="stock-label stock-in">✅ მარაგშია: ${p.stock.toFixed(1)} კგ</span>`;
        }

        const card = document.createElement("div");
        card.className = "product-card";
        card.style.position = "relative";
        
        card.innerHTML = `
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${p.id})">${isFav ? '❤️' : '🤍'}</button>
            <div class="product-img-holder" onclick="openQuickView(${p.id})" style="cursor:pointer;">
                <img src="${p.img || fallbackImg}" alt="${p.name}" onerror="this.onerror=null; this.src='${fallbackImg}';">
            </div>
            <h3 onclick="openQuickView(${p.id})" style="cursor:pointer; margin-bottom:2px;">${p.name}</h3>
            <div style="margin-bottom: 8px;">${stockTxt}</div>
            <div class="price">
                ${hasSale ? `<span class="old-price">${parseFloat(p.oldPrice).toFixed(2)} ₾</span>` : ''}
                <span class="current-price">${parseFloat(p.price).toFixed(2)} ₾ / კგ</span>
            </div>
            ${hasStock 
                ? `
                <div class="weight-selector">
                    <input type="number" id="weight-${p.id}" value="1" min="0.1" max="${p.stock}" step="0.1" style="width:60px; padding:4px;"> <span>კგ.</span>
                </div>
                <button class="order-btn" onclick="addToCart(${p.id})">კალათაში</button>
                ` 
                : `<button class="order-btn" disabled style="background:#ccc; cursor:not-allowed;">არ არის</button>`}
        `;
        grid.appendChild(card);
    });
    
    const fCount = document.getElementById("favCount");
    if(fCount) fCount.innerText = favorites.length;
}

function filterProducts(category) {
    currentFilter = category;
    renderUserProducts();
}

function toggleSaleFilter() {
    if (currentFilter === 'sale') {
        currentFilter = 'all'; // თუ უკვე ჩართული იყო, გამორთავს და აჩვენებს ყველას
    } else {
        currentFilter = 'sale'; // ჩართავს მხოლოდ აქციებს
    }
    renderUserProducts();
}

function changeSorting(val) {
    currentSort = val;
    renderUserProducts();
}

function searchProducts() {
    searchQuery = document.getElementById("searchInput").value;
    renderUserProducts();
}

function toggleFavorite(id) {
    favorites = favorites.includes(id) ? favorites.filter(f => f !== id) : [...favorites, id];
    localStorage.setItem('shop_favorites', JSON.stringify(favorites));
    renderUserProducts();
    showToast("რჩეულების სია განახლდა!", "success");
}

// ==========================================
// 5. Quick View (მოდალური ფანჯარა)
// ==========================================
function openQuickView(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    const modal = document.getElementById("quickViewModal");
    const body = document.getElementById("modalBody");
    
    body.innerHTML = `
        <img src="${p.img || fallbackImg}" style="max-width:100%; height:200px; object-fit:cover; border-radius:8px; margin-bottom:15px;">
        <h2>${p.name}</h2>
        <p style="color:#666; margin: 10px 0; font-size:14px;">${p.desc || 'აღწერა არ არის ხელმისაწვდომი.'}</p>
        <div style="font-size:18px; font-weight:bold; margin:10px 0; color:#4caf50;">ფასი: ${p.price.toFixed(2)} ₾ / კგ</div>
        <div style="font-weight:bold; margin-bottom:15px;">🛍️ ხელმისაწვდომი რაოდენობა: ${p.stock ? p.stock.toFixed(1) : 0} კგ</div>
        <button onclick="closeQuickView()" style="background:#333; color:white; border:none; padding:10px 20px; border-radius:6px; cursor:pointer; font-weight:bold;">დახურვა</button>
    `;
    modal.classList.add("open");
}

function closeQuickView() {
    document.getElementById("quickViewModal").classList.remove("open");
}

// ==========================================
// 6. კალათა და შეკვეთა
// ==========================================
function toggleCart() {
    document.getElementById("cartSidebar").classList.toggle("open");
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const weightInput = document.getElementById(`weight-${id}`);
    const chosenWeight = parseFloat(weightInput.value) || 1;

    if (chosenWeight <= 0) {
        showToast("მიუთითეთ სწორი წონა!", "error");
        return;
    }

    if (chosenWeight > product.stock) {
        showToast(`შეცდომა! ბაზაში მხოლოდ ${product.stock.toFixed(1)} კგ პროდუქტია.`, "error");
        return;
    }

    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        if (cartItem.weight + chosenWeight > product.stock) {
            showToast("კალათაში არსებული რაოდენობა აჭარბებს მარაგს!", "error");
            return;
        }
        cartItem.weight += chosenWeight;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, weight: chosenWeight });
    }

    showToast(`${product.name} დაემატა კალათაში!`);
    updateCartUI();
    localStorage.setItem('shop_cart', JSON.stringify(cart));
    weightInput.value = "1";
}

function changeWeight(id, amount) {
    const item = cart.find(item => item.id === id);
    const p = products.find(prod => prod.id === id);
    if (!item || !p) return;

    if (item.weight + amount > p.stock) {
        showToast(`მარაგი შეზღუდულია! მაქსიმუმ: ${p.stock} კგ.`, "error");
        return;
    }

    item.weight += amount;
    if (item.weight <= 0.1) {
        cart = cart.filter(i => i.id !== id);
    } else {
        item.weight = Math.round(item.weight * 100) / 100;
    }
    updateCartUI();
    localStorage.setItem('shop_cart', JSON.stringify(cart));
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
    localStorage.setItem('shop_cart', JSON.stringify(cart));
    showToast("ნივთი წაიშალა კალათიდან", "error");
}

function applyPromo() {
    const code = document.getElementById("promoInput").value.trim().toUpperCase();
    if(code === "FRESH10") {
        activeDiscount = 10;
        activeDiscountCode = "FRESH10 (-10%)";
        showToast("კუპონი გააქტიურდა: -10%");
    } else {
        showToast("არასწორი კუპონი!", "error");
        activeDiscount = 0;
        activeDiscountCode = "";
    }
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById("cartItems");
    if (!container) return;
    container.innerHTML = "";
    
    let subtotal = 0;
    cart.forEach(i => subtotal += i.price * i.weight);

    const diff = FREE_SHIPPING_LIMIT - subtotal;
    const pct = Math.min((subtotal / FREE_SHIPPING_LIMIT) * 100, 100);
    container.innerHTML += `
        <div class="shipping-progress-container">
            <div style="font-size:12px; font-weight:bold; margin-bottom:4px;">
                ${diff > 0 ? `🚚 კიდევ ${diff.toFixed(2)} ₾ უფასო მიწოდებისთვის` : `🎉 მიწოდება უფასოა!`}
            </div>
            <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        </div>
    `;

    if(cart.length === 0) {
        container.innerHTML += `<p style="text-align:center; padding:20px;">კალათა ცარიელია 🛒</p>`;
    } else {
        cart.forEach(item => {
            const div = document.createElement("div");
            div.className = "cart-item";
            div.style.display="flex"; div.style.justifyContent="space-between"; div.style.marginBottom="10px";
            div.innerHTML = `
                <div>
                    <h4 style="margin:0;">${item.name}</h4>
                    <small>${item.weight.toFixed(1)} კგ x ${item.price.toFixed(2)} ₾</small>
                    <div>
                        <button onclick="changeWeight(${item.id}, -0.5)">-</button>
                        <button onclick="changeWeight(${item.id}, 0.5)">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" style="color:red; background:none; border:none; cursor:pointer;">❌</button>
            `;
            container.appendChild(div);
        });
    }

    container.innerHTML += `
        <div class="promo-section">
            <input type="text" id="promoInput" placeholder="კუპონი" style="padding:5px; width:70%;">
            <button onclick="applyPromo()">OK</button>
        </div>
        <div class="checkout-user-form">
            <input type="text" id="custName" placeholder="სახელი" value="${localStorage.getItem('cust_name') || ''}">
            <input type="text" id="custPhone" placeholder="ტელეფონი" value="${localStorage.getItem('cust_phone') || ''}">
            <input type="text" id="custAddress" placeholder="მისამართი" value="${localStorage.getItem('cust_addr') || ''}">
        </div>
    `;

    renderOrderHistory(container);

    let finalTotal = activeDiscount === 10 ? subtotal * 0.9 : subtotal;
    document.getElementById("cartCount").innerText = cart.length;
    document.getElementById("cartTotal").innerText = finalTotal.toFixed(2);
}

function renderOrderHistory(container) {
    if (orderHistory.length === 0) return;
    const historyDiv = document.createElement("div");
    historyDiv.className = "history-section";
    historyDiv.innerHTML = `<div class="history-title">📜 წინა შეკვეთები <button onclick="clearHistory()" style="font-size:10px; background:none; border:none; color:gray; cursor:pointer;">გასუფთავება</button></div>`;
    
    orderHistory.slice(-3).reverse().forEach(h => {
        historyDiv.innerHTML += `
            <div class="history-item">
                <strong>📅 ${h.date}</strong> — 💰 ${h.total.toFixed(2)} ₾<br>
                <span style="color:#777">${h.items}</span>
            </div>
        `;
    });
    container.appendChild(historyDiv);
}

function clearHistory() {
    orderHistory = [];
    localStorage.removeItem('shop_order_history');
    updateCartUI();
    showToast("ისტორია წაიშალა");
}

function checkoutWhatsApp() {
    if (cart.length === 0) return;

    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const addr = document.getElementById("custAddress").value.trim();

    if(!name || !phone || !addr) {
        showToast("შეავსეთ საკონტაქტო ველები!", "error");
        return;
    }

    localStorage.setItem('cust_name', name);
    localStorage.setItem('cust_phone', phone);
    localStorage.setItem('cust_addr', addr);

    let text = `📦 *ახალი შეკვეთის გაფორმება*:\n👤 კლიენტი: ${name}\n📍 მისამართი: ${addr}\n\n🛒 პროდუქტები:\n`;
    let subtotal = 0;
    let itemsSummary = [];

    cart.forEach(item => {
        const sum = item.price * item.weight;
        text += `• ${item.name} — ${item.weight.toFixed(1)} კგ. (${sum.toFixed(2)} ₾)\n`;
        subtotal += sum;
        itemsSummary.push(`${item.name} (${item.weight}კგ)`);

        const pIndex = products.findIndex(p => p.id === item.id);
        if(pIndex !== -1) {
            products[pIndex].stock = Math.max(0, products[pIndex].stock - item.weight);
        }
    });

    let finalTotal = activeDiscount === 10 ? subtotal * 0.9 : subtotal;
    text += `\n*ჯამში გადასახდელი: ${finalTotal.toFixed(2)} ₾*`;

    orderHistory.push({
        date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        total: finalTotal,
        items: itemsSummary.join(", ")
    });

    localStorage.setItem('shop_products_v7_sale', JSON.stringify(products));
    localStorage.setItem('shop_order_history', JSON.stringify(orderHistory));

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
    
    cart = [];
    activeDiscount = 0;
    localStorage.removeItem('shop_cart');
    
    updateCartUI();
    renderUserProducts();
    toggleCart();
    showToast("შეკვეთა გადაიგზავნა და მარაგები განახლდა!");
}

// ==========================================
// 7. ადმინ პანელი
// ==========================================
function handleLogin(e) {
    e.preventDefault();
    if (document.getElementById("adminPassword").value === correctPassword) {
        sessionStorage.setItem("admin_logged", "true");
        showAdminPanel();
    } else {
        document.getElementById("loginError").innerText = "არასწორი პაროლი!";
    }
}

function checkSession() {
    if (sessionStorage.getItem("admin_logged") === "true") showAdminPanel();
}

function showAdminPanel() {
    const loginBox = document.getElementById("loginContainer");
    const adminBox = document.getElementById("adminPanelContainer");
    if (loginBox && adminBox) {
        loginBox.style.display = "none";
        adminBox.style.display = "block";
        renderAdminDashboard();
        renderAdminTable();
    }
}

function renderAdminDashboard() {
    const adminBox = document.getElementById("adminPanelContainer");
    if (!adminBox) return;

    let dbZone = document.getElementById("dynamicAdminZone");
    if (!dbZone) {
        dbZone = document.createElement("div");
        dbZone.id = "dynamicAdminZone";
        const table = adminBox.querySelector("table") || adminBox.querySelector(".table-responsive");
        if(table) table.parentNode.insertBefore(dbZone, table);
    }

    const totalCount = products.length;
    const outOfStock = products.filter(p => !p.stock || p.stock <= 0).length;
    const totalWeight = products.reduce((acc, p) => acc + (p.stock || 0), 0);

    dbZone.innerHTML = `
        <h3>📊 მაღაზიის მართვის პანელი</h3>
        <div class="admin-dashboard">
            <div class="admin-dashboard-card"><h5>ბაზაშია</h5><span>${totalCount} პროდ.</span></div>
            <div class="admin-dashboard-card" style="border-left-color: #e91e63"><h5>ამოწურული</h5><span>${outOfStock} დასახ.</span></div>
            <div class="admin-dashboard-card" style="border-left-color: #2196f3"><h5>საერთო წონა</h5><span>${totalWeight.toFixed(1)} კგ</span></div>
        </div>
        <div style="margin-bottom:15px; background:#e8f5e9; padding:10px; border-radius:6px; display:inline-block; font-size:12px; font-weight:bold; color:#2e7d32; cursor:pointer;" onclick="exportJSON()">📥 ბაზის სრული რეზერვაცია (JSON დაარქივება)</div>
    `;

    const priceInput = document.getElementById("productPrice");
    if(priceInput && !document.getElementById("productStock")) {
        const stockInput = document.createElement("input");
        stockInput.type = "number";
        stockInput.id = "productStock";
        stockInput.placeholder = "რაოდენობა მარაგში (კგ)";
        stockInput.step = "0.1";
        stockInput.style.width = "100%"; stockInput.style.padding="8px"; stockInput.style.margin="6px 0";
        priceInput.parentNode.insertBefore(stockInput, priceInput.nextSibling);
    }
}

function renderAdminTable() {
    const tbody = document.getElementById("adminTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    products.forEach(p => {
        const tr = document.createElement("tr");
        const hasStock = p.stock && p.stock > 0;
        tr.innerHTML = `
            <td><img src="${p.img || fallbackImg}" style="width:40px; height:40px; object-fit:cover; border-radius:4px;"></td>
            <td><strong>${p.name}</strong></td>
            <td>${p.category}</td>
            <td>${p.price.toFixed(2)} ₾</td>
            <td style="color: ${hasStock ? '#2e7d32' : '#d32f2f'}; font-weight: bold;">${hasStock ? p.stock.toFixed(1) + ' კგ' : 'ამოწურულია'}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editProduct(${p.id})">შეცვლა</button>
                <button class="action-btn delete-btn" onclick="deleteProduct(${p.id})">წაშლა</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function saveProduct(e) {
    e.preventDefault();
    const id = document.getElementById("productId").value;
    const name = document.getElementById("productName").value;
    const category = document.getElementById("productCategory").value;
    const price = parseFloat(document.getElementById("productPrice").value);
    const stock = parseFloat(document.getElementById("productStock").value) || 0;
    const img = document.getElementById("productImgUrl").value;

    if (id) {
        const index = products.findIndex(p => p.id == id);
        if (index !== -1) products[index] = { ...products[index], name, category, price, stock, img };
    } else {
        products.push({ id: Date.now(), name, category, price, stock, img, oldPrice: null, desc: "" });
    }

    localStorage.setItem('shop_products_v7_sale', JSON.stringify(products));
    renderAdminDashboard();
    renderAdminTable();
    document.getElementById("productForm").reset();
    document.getElementById("productId").value = "";
    document.getElementById("saveBtn").innerText = "შენახვა";
    showToast("პროდუქტი წარმატებით შეინახა!");
}

function editProduct(id) {
    const p = products.find(prod => prod.id === id);
    if (p) {
        document.getElementById("productId").value = p.id;
        document.getElementById("productName").value = p.name;
        document.getElementById("productCategory").value = p.category;
        document.getElementById("productPrice").value = p.price;
        if(document.getElementById("productStock")) document.getElementById("productStock").value = p.stock || 0;
        document.getElementById("productImgUrl").value = p.img || "";
        document.getElementById("saveBtn").innerText = "განახლება";
        window.scrollTo(0, 0);
    }
}

function deleteProduct(id) {
    if (confirm("წავშალოთ პროდუქტი?")) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('shop_products_v7_sale', JSON.stringify(products));
        renderAdminDashboard();
        renderAdminTable();
        showToast("პროდუქტი წაიშალა ბაზიდან", "error");
    }
}

function exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", `market_v7_sale_backup.json`);
    dl.click();
}