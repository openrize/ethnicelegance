/* ======================================================
   ETHNIC ELEGANCE – E-Commerce Application Logic
   ====================================================== */

// ─── PRODUCT DATABASE ───
const ALL_PRODUCTS = [
    {
        id: 1, name: "Crimson Mirrored Lehenga Choli", category: "lehenga",
        price: 89.97, originalPrice: 143.97, image: "images/lehenga_red_gold.png",
        rating: 4.8, reviews: 312, badge: "Bestseller",
        description: "A stunning red and gold lehenga choli adorned with intricate mirror work embroidery and a golden gota patti border. Perfect for Navratri, weddings, and festive celebrations. Includes blouse and dupatta.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"], colors: ["Red & Gold"],
        discount: 38
    },
    {
        id: 2, name: "Magenta Rose Bridal Lehenga", category: "lehenga",
        price: 119.97, originalPrice: 179.97, image: "images/lehenga_magenta_pink.png",
        rating: 4.9, reviews: 189, badge: "New",
        description: "A breathtaking magenta pink lehenga choli with heavy silver embroidery, gota patti border, and a gorgeous matching dupatta. Ideal for bridal events and wedding ceremonies.",
        sizes: ["XS", "S", "M", "L", "XL"], colors: ["Magenta & Silver"],
        discount: 34
    },
    {
        id: 3, name: "Mustard Bandhani Ghagra Choli", category: "ghagra",
        price: 65.97, originalPrice: 101.97, image: "images/ghagra_mustard_yellow.png",
        rating: 4.7, reviews: 425, badge: "Bestseller",
        description: "Vibrant mustard yellow Chaniya Choli with colorful bandhani print, mirror embroidery work, and playful tassel accents. Your perfect Navratri & Garba outfit!",
        sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Mustard Yellow"],
        discount: 36
    },
    {
        id: 4, name: "Royal Blue Peacock Lehenga", category: "lehenga",
        price: 104.97, originalPrice: 164.97, image: "images/lehenga_royal_blue.png",
        rating: 4.6, reviews: 143, badge: "Sale",
        description: "Elegant royal blue lehenga choli with exquisite zari embroidery, sequin work, and beautiful peacock motifs. A timeless piece for weddings and grand festivals.",
        sizes: ["XS", "S", "M", "L", "XL"], colors: ["Royal Blue & Gold"],
        discount: 36
    },
    {
        id: 5, name: "Lime Green Garba Chaniya Choli", category: "ghagra",
        price: 59.97, originalPrice: 89.97, image: "images/green_lehenga_choli.png",
        rating: 4.5, reviews: 267, badge: "New",
        description: "Beautiful lime green Chaniya Choli with bandhani print, mirror embroidery, and a matching chunri dupatta. Dance your heart out this Navratri in style!",
        sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Lime Green & Red"],
        discount: 36
    },
    {
        id: 6, name: "Kundan Meenakari Gold Set", category: "jewelry",
        price: 47.97, originalPrice: 80.97, image: "images/jewelry_gold_set.png",
        rating: 4.9, reviews: 534, badge: "Bestseller",
        description: "An exquisite traditional Indian gold jewelry set featuring a necklace, earrings, maang tikka, and bangles. Crafted with authentic kundan and meenakari work.",
        sizes: ["One Size"], colors: ["Gold"],
        discount: 41
    },
    {
        id: 7, name: "Embroidered Ethnic Clutch Purse", category: "purse",
        price: 29.97, originalPrice: 47.97, image: "images/traditional_purse_clutch.png",
        rating: 4.6, reviews: 289, badge: "Sale",
        description: "Gorgeous traditional ethnic clutch purse with hand-embroidery, mirror work, and sequin accents in vibrant maroon and gold. The perfect festive accessory!",
        sizes: ["One Size"], colors: ["Maroon & Gold"],
        discount: 38
    },
    {
        id: 8, name: "Golden Ethnic Ladies Watch", category: "watch",
        price: 53.97, originalPrice: 89.97, image: "images/traditional_watch_ladies.png",
        rating: 4.4, reviews: 98, badge: "New",
        description: "An elegant ladies' traditional Indian style watch featuring a golden bracelet band, ethnic motif dial with colorful enamel work, and a beautiful floral design. Timeless fashion meets tradition.",
        sizes: ["One Size"], colors: ["Gold"],
        discount: 40
    },
    // Additional products (use gradient placeholders with emoji)
    {
        id: 9, name: "Bandhani Silk Dupatta", category: "dupatta",
        price: 26.97, originalPrice: 38.97, image: null, emoji: "🧣", color: "#8e44ad",
        rating: 4.5, reviews: 178, badge: "New",
        description: "A vibrant Bandhani silk dupatta with rich traditional print and decorative golden border. Pairs beautifully with any ethnic outfit.",
        sizes: ["One Size"], colors: ["Purple", "Red", "Green"],
        discount: 36
    },
    {
        id: 10, name: "Silver Oxidized Jhumka Set", category: "jewelry",
        price: 17.97, originalPrice: 29.97, image: null, emoji: "💍", color: "#7f8c8d",
        rating: 4.7, reviews: 612, badge: "Bestseller",
        description: "Classic silver oxidized jhumka earrings with traditional floral motif. A wardrobe essential for every ethnic look.",
        sizes: ["One Size"], colors: ["Silver"],
        discount: 38
    },
    {
        id: 11, name: "Floral Zardosi Anarkali Suit", category: "lehenga",
        price: 80.97, originalPrice: 125.97, image: null, emoji: "👗", color: "#e74c3c",
        rating: 4.6, reviews: 156, badge: "New",
        description: "Elegant floral Zardosi embroidered Anarkali suit in rich fabric. Perfect for festive gatherings and family celebrations.",
        sizes: ["XS", "S", "M", "L", "XL"], colors: ["Red", "Teal"],
        discount: 37
    },
    {
        id: 12, name: "Navratri Special Chaniya Set", category: "ghagra",
        price: 47.97, originalPrice: 71.97, image: null, emoji: "🌸", color: "#e67e22",
        rating: 4.4, reviews: 321, badge: "Sale",
        description: "Colorful Navratri special Chaniya Choli with multicolor bandhani print and mirror embroidery. Light and comfortable for long hours of Garba.",
        sizes: ["S", "M", "L", "XL"], colors: ["Multicolor"],
        discount: 35
    }
];

// ─── STATE ───
let cart = JSON.parse(localStorage.getItem('ee_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ee_wishlist') || '[]');
let currentFilter = 'all';
let testimonialIndex = 0;
let testimonialInterval;
let visibleProducts = 8;
const PRODUCTS_PER_PAGE = 4;

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderProducts();
    renderTestimonialDots();
    startTestimonialTimer();
    updateCartUI();
    updateWishlistUI();
    bindNavbarScroll();
    bindScrollTop();

    // Mobile nav
    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('nav-links').classList.toggle('open');
    });
    // Cart toggle
    document.getElementById('cart-toggle').addEventListener('click', openCart);
    // Wishlist toggle
    document.getElementById('wishlist-toggle').addEventListener('click', openWishlist);
    // Search toggle
    document.getElementById('search-toggle').addEventListener('click', toggleSearch);
    // Search input enter
    document.getElementById('search-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') performSearch(); });
});

// ─── HERO PARTICLES ───
function createParticles() {
    const container = document.getElementById('hero-particles');
    const shapes = ['✦', '✿', '◆', '❋', '◈'];
    for (let i = 0; i < 20; i++) {
        const el = document.createElement('div');
        el.style.cssText = `
      position:absolute; font-size:${8 + Math.random() * 14}px; left:${Math.random() * 100}%;
      bottom: -20px; color:rgba(218,165,32,${0.2 + Math.random() * 0.5});
      animation: float-up ${8 + Math.random() * 12}s ${Math.random() * 8}s linear infinite;
    `;
        el.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        container.appendChild(el);
    }
}

// ─── PRODUCTS ───
function getFilteredProducts() {
    let filtered = currentFilter === 'all' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === currentFilter);
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm));
    }
    return filtered;
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const filtered = getFilteredProducts();
    const toShow = filtered.slice(0, visibleProducts);

    if (toShow.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)">
      <span style="font-size:3rem">🔍</span>
      <p style="margin-top:16px;font-size:1.1rem">No products found. Try a different filter!</p>
    </div>`;
        document.getElementById('load-more-btn').style.display = 'none';
        return;
    }

    grid.innerHTML = toShow.map((p, i) => buildProductCard(p, i)).join('');
    document.getElementById('load-more-btn').style.display = filtered.length > visibleProducts ? 'inline-flex' : 'none';
}

function buildProductCard(p, index) {
    const inWishlist = wishlist.some(w => w.id === p.id);
    const delay = (index % 4) * 0.08;
    const starStr = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');

    const imgContent = p.image
        ? `<img src="${p.image}" alt="${p.name}" loading="lazy" />`
        : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,${p.color}22,${p.color}44);font-size:5rem;">${p.emoji}</div>`;

    return `
    <div class="product-card" style="animation-delay:${delay}s" onclick="openProductModal(${p.id})">
      <div class="product-img-wrap">
        ${imgContent}
        ${p.badge ? `<span class="product-badge ${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
        <div class="product-actions" onclick="event.stopPropagation()">
          <button class="action-btn" onclick="toggleWishlist(${p.id})" title="${inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            ${inWishlist ? '❤' : '♡'}
          </button>
          <button class="action-btn" onclick="quickAddToCart(${p.id})" title="Add to Cart">🛒</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${getCategoryLabel(p.category)}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">★★★★${p.rating >= 4.5 ? '★' : '☆'}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-current">$${p.price.toFixed(2)}</span>
          <span class="price-original">$${p.originalPrice.toFixed(2)}</span>
          <span class="price-discount">${p.discount}% OFF</span>
        </div>
        <button class="add-to-cart" onclick="event.stopPropagation(); quickAddToCart(${p.id})">Add to Cart 🛍</button>
      </div>
    </div>`;
}

function getCategoryLabel(cat) {
    const labels = { lehenga: 'Lehenga Choli', ghagra: 'Ghagra / Chaniya', dupatta: 'Dupatta', jewelry: 'Jewelry', purse: 'Purse & Clutch', watch: 'Ethnic Watch' };
    return labels[cat] || cat;
}

function filterByCategory(cat) {
    currentFilter = cat;
    visibleProducts = 8;
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById('filter-' + cat);
    if (activeBtn) activeBtn.classList.add('active');
    else document.getElementById('filter-all').classList.add('active');
    // Update category cards
    document.querySelectorAll('.category-card').forEach(c => c.style.transform = '');
    renderProducts();
    if (cat !== 'all') scrollToSection('products');
}

function loadMoreProducts() {
    visibleProducts += PRODUCTS_PER_PAGE;
    renderProducts();
}

// ─── PRODUCT MODAL ───
function openProductModal(id) {
    const p = ALL_PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const inWishlist = wishlist.some(w => w.id === p.id);
    const imgContent = p.image
        ? `<img src="${p.image}" alt="${p.name}" />`
        : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,${p.color}33,${p.color}66);font-size:8rem;">${p.emoji}</div>`;

    document.getElementById('modal-content').innerHTML = `
    <div class="modal-inner">
      <div class="modal-img">${imgContent}</div>
      <div class="modal-details">
        <div class="modal-category">${getCategoryLabel(p.category)}</div>
        <h2 class="modal-title">${p.name}</h2>
        <div class="modal-rating">
          <span style="color:var(--accent)">★★★★${p.rating >= 4.5 ? '★' : '☆'}</span>
          <span style="color:var(--text-muted)">${p.rating} (${p.reviews} reviews)</span>
        </div>
        <div class="modal-price">
          <span class="modal-price-current">$${p.price.toFixed(2)}</span>
          <span class="modal-price-original">$${p.originalPrice.toFixed(2)}</span>
          <span class="price-discount" style="font-size:0.85rem">${p.discount}% OFF</span>
        </div>
        <p class="modal-desc">${p.description}</p>
        ${p.sizes.length > 1 ? `
          <div class="modal-size-label">Select Size:</div>
          <div class="modal-sizes">
            ${p.sizes.map((s, i) => `<button class="size-btn ${i === 1 ? 'active' : ''}" onclick="selectSize(this)">${s}</button>`).join('')}
          </div>
        ` : ''}
        <div class="modal-actions">
          <button class="btn-primary full-width" onclick="addToCartFromModal(${p.id})">Add to Cart 🛍</button>
          <button class="modal-wishlist" onclick="toggleWishlist(${p.id}); this.innerHTML = wishlist.some(w=>w.id===${p.id}) ? '❤ Saved to Wishlist' : '♡ Add to Wishlist'">
            ${inWishlist ? '❤ Saved to Wishlist' : '♡ Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>`;
    document.getElementById('product-modal-overlay').classList.add('active');
    document.getElementById('product-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('product-modal-overlay').classList.remove('active');
    document.getElementById('product-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function selectSize(btn) {
    btn.closest('.modal-sizes').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// ─── CART ───
function openCart() {
    closeAll(); // close others first
    document.getElementById('cart-drawer').classList.add('open');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openWishlist() {
    closeAll();
    document.getElementById('wishlist-drawer').classList.add('open');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAll() {
    document.getElementById('cart-drawer').classList.remove('open');
    document.getElementById('wishlist-drawer').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
}

function quickAddToCart(id) {
    addToCart(id);
}

function addToCartFromModal(id) {
    addToCart(id);
    closeProductModal();
    setTimeout(openCart, 200);
}

function addToCart(id) {
    const p = ALL_PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const existing = cart.find(c => c.id === id);
    if (existing) { existing.qty++; }
    else { cart.push({ ...p, qty: 1 }); }
    saveCart();
    updateCartUI();
    showToast(`✓ ${p.name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else { saveCart(); updateCartUI(); }
}

function saveCart() { localStorage.setItem('ee_cart', JSON.stringify(cart)); }

function updateCartUI() {
    const count = cart.reduce((sum, c) => sum + c.qty, 0);
    document.getElementById('cart-count').textContent = count;

    const cartItems = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');

    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
        cartItems.innerHTML = '';
        cartItems.appendChild(cartEmpty);
    } else {
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'flex';
        const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
        document.getElementById('cart-total-amount').textContent = '$' + total.toFixed(2);
        cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        ${item.image
                ? `<img src="${item.image}" class="cart-item-img" alt="${item.name}" />`
                : `<div class="cart-item-img" style="background:linear-gradient(135deg,${item.color}22,${item.color}44);display:flex;align-items:center;justify-content:center;font-size:2rem">${item.emoji}</div>`}
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove ✕</button>
          </div>
        </div>
      </div>
    `).join('');
    }
}

// ─── WISHLIST ───
function toggleWishlist(id) {
    const p = ALL_PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const idx = wishlist.findIndex(w => w.id === id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast(`♡ Removed from wishlist`);
    } else {
        wishlist.push(p);
        showToast(`❤ Saved to wishlist!`);
    }
    localStorage.setItem('ee_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts(); // re-render to update heart icons
}

function updateWishlistUI() {
    document.getElementById('wishlist-count').textContent = wishlist.length;
    const container = document.getElementById('wishlist-items');
    if (wishlist.length === 0) {
        container.innerHTML = `<div class="cart-empty"><span>♡</span><p>No items in wishlist yet</p><button class="btn-primary" onclick="closeAll()">Explore Products</button></div>`;
    } else {
        container.innerHTML = wishlist.map(p => `
      <div class="cart-item">
        ${p.image
                ? `<img src="${p.image}" class="cart-item-img" alt="${p.name}" />`
                : `<div class="cart-item-img" style="background:linear-gradient(135deg,${p.color}22,${p.color}44);display:flex;align-items:center;justify-content:center;font-size:2rem">${p.emoji}</div>`}
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">$${p.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="addToCart(${p.id}); closeAll(); setTimeout(openCart, 200)">Add to Cart</button>
            <button class="cart-item-remove" onclick="toggleWishlist(${p.id})">Remove ✕</button>
          </div>
        </div>
      </div>`).join('');
    }
}

// ─── CHECKOUT ───
function checkout() {
    showToast('🎉 Redirecting to checkout... (Demo Mode)');
    setTimeout(() => {
        alert('Thank you for shopping at Ethnic Elegance! 🌸\n\nFor orders or inquiries, please contact us on:\nWhatsApp: +91 98765 43210\nInstagram: @ethenic_elegance44\n\nWe look forward to serving you!');
    }, 800);
}

// ─── SEARCH ───
function toggleSearch() {
    const overlay = document.getElementById('search-overlay');
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
        setTimeout(() => document.getElementById('search-input').focus(), 100);
    }
}
function closeSearch() {
    document.getElementById('search-overlay').classList.remove('active');
}
function performSearch() {
    closeSearch();
    scrollToSection('products');
    renderProducts();
}

// ─── TESTIMONIALS ───
function renderTestimonialDots() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.getElementById('slider-dots');
    dotsContainer.innerHTML = [...cards].map((_, i) =>
        `<div class="slider-dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})"></div>`
    ).join('');
}

function goToTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(c => c.classList.remove('active'));
    cards[index].classList.add('active');
    testimonialIndex = index;
    document.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function changeTestimonial(dir) {
    const cards = document.querySelectorAll('.testimonial-card');
    testimonialIndex = (testimonialIndex + dir + cards.length) % cards.length;
    goToTestimonial(testimonialIndex);
    resetTestimonialTimer();
}

function startTestimonialTimer() {
    testimonialInterval = setInterval(() => changeTestimonial(1), 5000);
}
function resetTestimonialTimer() {
    clearInterval(testimonialInterval);
    startTestimonialTimer();
}

// ─── CONTACT FORM ───
function submitContactForm(e) {
    e.preventDefault();
    showToast('✓ Message sent! We\'ll get back to you within 24 hours.');
    e.target.reset();
}

// ─── SCROLL UTILITIES ───
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── NAVBAR SCROLL EFFECT ───
function bindNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        // Update active nav links
        const sections = ['home', 'categories', 'products', 'about', 'contact'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                const rect = el.getBoundingClientRect();
                const link = document.querySelector(`.nav-link[href="#${id}"]`);
                if (link) link.classList.toggle('active', rect.top <= 100 && rect.bottom > 100);
            }
        });
    }, { passive: true });
}

// ─── BACK TO TOP ───
function bindScrollTop() {
    window.addEventListener('scroll', () => {
        document.getElementById('back-to-top').classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
}

// ─── TOAST ───
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}
