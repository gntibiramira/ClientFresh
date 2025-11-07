// Complete Product Data
// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDi35okgsN4YgBxCHi5jgRtF20Dd2X8PFc",
    authDomain: "fresh-drop-rwanda-ad11f.firebaseapp.com",
    projectId: "fresh-drop-rwanda-ad11f",
    storageBucket: "fresh-drop-rwanda-ad11f.firebasestorage.app",
    messagingSenderId: "1045979954241",
    appId: "1:1045979954241:web:3663d006c3ae9ae62bdac0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Shopping Cart Management
let cart = JSON.parse(localStorage.getItem('freshdrop_cart')) || {};

// Product Display Management
let currentCategory = 'all';
let currentSearchTerm = '';
let currentProducts = [];
let productsPerPage = 12;
let currentPage = 1;

// Current User
let currentUser = null;

// DOM Elements
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');
const globalSearch = document.getElementById('globalSearch');
const searchClear = document.getElementById('searchClear');
const productsGrid = document.getElementById('productsGrid');
const productsTitle = document.getElementById('productsTitle');
const productsSubtitle = document.getElementById('productsSubtitle');
const categoryFilters = document.querySelectorAll('.category-filter');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreContainer = document.getElementById('loadMoreContainer');

// Auth Elements
const authButtons = document.getElementById('authButtons');
const userMenuWrapper = document.getElementById('userMenuWrapper');
const userDropdownBtn = document.getElementById('userDropdownBtn');
const userDropdown = document.getElementById('userDropdown');
const userDisplayName = document.getElementById('userDisplayName');
const dropdownUserName = document.getElementById('dropdownUserName');
const dropdownUserEmail = document.getElementById('dropdownUserEmail');
const dropdownAccount = document.getElementById('dropdownAccount');
const dropdownOrders = document.getElementById('dropdownOrders');
const dropdownLogout = document.getElementById('dropdownLogout');

const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const accountModal = document.getElementById('accountModal');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

// Social Login Elements
const googleLogin = document.getElementById('googleLogin');
const facebookLogin = document.getElementById('facebookLogin');
const googleSignup = document.getElementById('googleSignup');
const facebookSignup = document.getElementById('facebookSignup');

// Mobile Auth Elements
const mobileAuthSection = document.getElementById('mobileAuthSection');
const mobileUserSection = document.getElementById('mobileUserSection');
const mobileLoginBtn = document.getElementById('mobileLoginBtn');
const mobileSignupBtn = document.getElementById('mobileSignupBtn');
const mobileUserName = document.getElementById('mobileUserName');
const mobileUserEmail = document.getElementById('mobileUserEmail');
const mobileAccountLink = document.getElementById('mobileAccountLink');
const mobileOrdersLink = document.getElementById('mobileOrdersLink');
const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');

// Account Elements
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');
const totalOrders = document.getElementById('totalOrders');
const pendingOrders = document.getElementById('pendingOrders');
const completedOrders = document.getElementById('completedOrders');
const ordersList = document.getElementById('ordersList');
const accountLogout = document.getElementById('accountLogout');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Payment Elements
const paymentModal = document.getElementById('paymentModal');
const orderItemsSummary = document.getElementById('orderItemsSummary');
const orderTotalSummary = document.getElementById('orderTotalSummary');
const deliveryAddress = document.getElementById('deliveryAddress');
const deliveryNotes = document.getElementById('deliveryNotes');
const confirmPayment = document.getElementById('confirmPayment');

// Mobile Menu Elements
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const mobileCategoryLinks = document.querySelectorAll('.mobile-category-link');

// About Modal Elements
const aboutModal = document.getElementById('aboutModal');

// Replace the PRODUCTS array with empty array
const PRODUCTS = [];

// Test Firebase connection
async function testFirebaseConnection() {
  try {
    console.log("Testing Firebase connection...");
    const testDoc = await db.collection('products').limit(1).get();
    console.log("✅ Firebase connection successful!");
    return true;
  } catch (error) {
    console.error("❌ Firebase connection failed:", error);
    showNotification('Cannot connect to database');
    return false;
  }
}

// Load products from Firebase
async function loadProductsFromFirebase() {
  try {
    console.log("🔄 Loading products from Firebase...");
    const snapshot = await db.collection('products').get();
    PRODUCTS.length = 0; // Clear array
    
    console.log(`✅ Found ${snapshot.size} products`);
    
    if (snapshot.empty) {
      console.log("❌ No products found in Firestore");
      showNotification('No products available');
      return;
    }
    
    snapshot.forEach(doc => {
      const productData = doc.data();
      PRODUCTS.push({
        id: doc.id,
        ...productData
      });
    });
    
    console.log("📦 Products loaded successfully");
    updateProductDisplay();
    
  } catch (error) {
    console.error('❌ Error loading products:', error);
    showNotification('Error loading products. Check console for details.');
  }
}

// Authentication Functions
function initAuth() {
  // Auth state listener
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      currentUser = user;
      console.log("👤 User signed in:", user.email);
      await updateUserProfile(user);
      showUserMenu();
    } else {
      currentUser = null;
      console.log("👤 No user signed in");
      showAuthButtons();
    }
  });

  // User dropdown functionality
  userDropdownBtn.addEventListener('click', toggleUserDropdown);
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!userMenuWrapper.contains(e.target)) {
      userDropdown.classList.remove('active');
      userDropdownBtn.classList.remove('active');
    }
  });

  // Dropdown item clicks
  dropdownAccount.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('accountModal');
    userDropdown.classList.remove('active');
    userDropdownBtn.classList.remove('active');
  });

  dropdownOrders.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('accountModal');
    // Switch to orders tab
    setTimeout(() => {
      document.querySelector('[data-tab="orders"]').click();
    }, 100);
    userDropdown.classList.remove('active');
    userDropdownBtn.classList.remove('active');
  });

  dropdownLogout.addEventListener('click', (e) => {
    e.preventDefault();
    handleLogout();
  });

  // Auth event listeners
  loginBtn.addEventListener('click', () => toggleModal('loginModal'));
  signupBtn.addEventListener('click', () => toggleModal('signupModal'));

  // Mobile auth events
  mobileLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('loginModal');
    closeMobileMenuFunction();
  });
  mobileSignupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('signupModal');
    closeMobileMenuFunction();
  });
  mobileAccountLink.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('accountModal');
    closeMobileMenuFunction();
  });
  mobileOrdersLink.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('accountModal');
    closeMobileMenuFunction();
    setTimeout(() => {
      document.querySelector('[data-tab="orders"]').click();
    }, 100);
  });
  mobileLogoutBtn.addEventListener('click', handleLogout);
  accountLogout.addEventListener('click', handleLogout);

  // Form submissions
  loginForm.addEventListener('submit', handleLogin);
  signupForm.addEventListener('submit', handleSignup);

  // Auth modal switches
  showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('loginModal');
    toggleModal('signupModal');
  });
  showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('signupModal');
    toggleModal('loginModal');
  });

  // Social login handlers
  googleLogin.addEventListener('click', () => handleSocialLogin('google'));
  facebookLogin.addEventListener('click', () => handleSocialLogin('facebook'));
  googleSignup.addEventListener('click', () => handleSocialLogin('google'));
  facebookSignup.addEventListener('click', () => handleSocialLogin('facebook'));
}

function toggleUserDropdown() {
  userDropdown.classList.toggle('active');
  userDropdownBtn.classList.toggle('active');
}

async function handleSocialLogin(provider) {
  try {
    let authProvider;
    
    if (provider === 'google') {
      authProvider = new firebase.auth.GoogleAuthProvider();
    } else if (provider === 'facebook') {
      authProvider = new firebase.auth.FacebookAuthProvider();
    }
    
    const result = await auth.signInWithPopup(authProvider);
    const user = result.user;
    
    // Save user profile if it's their first time
    const userDoc = await db.collection('users').doc(user.uid).get();
    if (!userDoc.exists) {
      await db.collection('users').doc(user.uid).set({
        name: user.displayName || 'User',
        email: user.email,
        phone: user.phoneNumber || '',
        photoURL: user.photoURL || '',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
    
    showNotification(`Welcome${user.displayName ? ' ' + user.displayName : ''}!`);
    toggleModal('loginModal');
    toggleModal('signupModal');
    
  } catch (error) {
    console.error('Social login error:', error);
    showNotification(error.message);
  }
}

async function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  try {
    const result = await auth.signInWithEmailAndPassword(email, password);
    showNotification('Welcome back!');
    toggleModal('loginModal');
    loginForm.reset();
  } catch (error) {
    console.error('Login error:', error);
    showNotification(error.message);
  }
}

async function handleSignup(e) {
  e.preventDefault();
  
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const phone = document.getElementById('signupPhone').value;
  const password = document.getElementById('signupPassword').value;
  
  try {
    const result = await auth.createUserWithEmailAndPassword(email, password);
    
    // Save user profile
    await db.collection('users').doc(result.user.uid).set({
      name: name,
      email: email,
      phone: phone,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    showNotification('Account created successfully!');
    toggleModal('signupModal');
    signupForm.reset();
  } catch (error) {
    console.error('Signup error:', error);
    showNotification(error.message);
  }
}

async function handleLogout() {
  try {
    await auth.signOut();
    showNotification('Logged out successfully');
    closeMobileMenuFunction();
    toggleModal('accountModal');
    userDropdown.classList.remove('active');
    userDropdownBtn.classList.remove('active');
  } catch (error) {
    console.error('Logout error:', error);
    showNotification('Error logging out');
  }
}

async function updateUserProfile(user) {
  try {
    const userDoc = await db.collection('users').doc(user.uid).get();
    if (userDoc.exists) {
      const userData = userDoc.data();
      
      // Update desktop dropdown
      userDisplayName.textContent = userData.name || 'User';
      dropdownUserName.textContent = userData.name || 'User';
      dropdownUserEmail.textContent = userData.email;
      
      // Update mobile menu
      mobileUserName.textContent = userData.name || 'User';
      mobileUserEmail.textContent = userData.email;
      
      // Update account modal
      userName.textContent = userData.name || 'User';
      userEmail.textContent = userData.email;
      userPhone.textContent = userData.phone || 'Not provided';
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}

function showUserMenu() {
  authButtons.style.display = 'none';
  userMenuWrapper.style.display = 'block';
  mobileAuthSection.style.display = 'none';
  mobileUserSection.style.display = 'block';
}

function showAuthButtons() {
  authButtons.style.display = 'flex';
  userMenuWrapper.style.display = 'none';
  mobileAuthSection.style.display = 'block';
  mobileUserSection.style.display = 'none';
}

// Payment Functions
function initPayment() {
  checkoutBtn.addEventListener('click', handleCheckout);
  confirmPayment.addEventListener('click', processPayment);
}

function handleCheckout() {
  if (Object.keys(cart).length === 0) {
    showNotification('Your cart is empty');
    return;
  }
  
  if (!currentUser) {
    showNotification('Please login to checkout');
    toggleModal('loginModal');
    return;
  }
  
  // Show payment modal
  showPaymentSummary();
  toggleModal('paymentModal');
  toggleCart();
}

function showPaymentSummary() {
  orderItemsSummary.innerHTML = '';
  
  let total = 0;
  
  Object.values(cart).forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    const itemElement = document.createElement('div');
    itemElement.className = 'order-item-summary';
    itemElement.innerHTML = `
      <span class="name">${item.title}</span>
      <span class="quantity">Qty: ${item.quantity}</span>
      <span class="price">${formatCurrency(itemTotal)}</span>
    `;
    
    orderItemsSummary.appendChild(itemElement);
  });
  
  orderTotalSummary.textContent = formatCurrency(total);
}

async function processPayment() {
  if (!deliveryAddress.value.trim()) {
    showNotification('Please enter delivery address');
    deliveryAddress.focus();
    return;
  }
  
  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
  const totalAmount = Object.values(cart).reduce((total, item) => total + (item.price * item.quantity), 0);
  
  try {
    showNotification('Processing your order...');
    
    const order = {
      userId: currentUser.uid,
      customer: {
        name: currentUser.displayName || dropdownUserName.textContent,
        email: currentUser.email,
        phone: document.getElementById('userPhone').textContent
      },
      items: cart,
      total: totalAmount,
      paymentMethod: paymentMethod,
      deliveryAddress: deliveryAddress.value,
      deliveryNotes: deliveryNotes.value,
      status: 'confirmed',
      orderNumber: generateOrderNumber(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    await db.collection('orders').add(order);
    
    showNotification('Order placed successfully! We will contact you soon.');
    
    // Clear cart and close modals
    cart = {};
    localStorage.setItem('freshdrop_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    toggleModal('paymentModal');
    deliveryAddress.value = '';
    deliveryNotes.value = '';
    
  } catch (error) {
    console.error('Payment error:', error);
    showNotification('Payment failed. Please try again.');
  }
}

// Account and Orders Functions
async function loadUserOrders() {
  if (!currentUser) return;
  
  ordersList.innerHTML = `
    <div class="loading-orders">
      <i class="fas fa-spinner fa-spin"></i>
      <p>Loading your orders...</p>
    </div>
  `;
  
  try {
    const ordersSnapshot = await db.collection('orders')
      .where('userId', '==', currentUser.uid)
      .orderBy('createdAt', 'desc')
      .get();
    
    if (ordersSnapshot.empty) {
      ordersList.innerHTML = `
        <div class="no-orders">
          <i class="fas fa-shopping-bag"></i>
          <h3>No orders yet</h3>
          <p>Start shopping to see your orders here</p>
        </div>
      `;
      updateOrderStats(0, 0, 0);
      return;
    }
    
    let total = 0;
    let pending = 0;
    let completed = 0;
    
    ordersList.innerHTML = '';
    
    ordersSnapshot.forEach(doc => {
      const order = doc.data();
      const orderElement = createOrderElement(order, doc.id);
      ordersList.appendChild(orderElement);
      
      total++;
      if (order.status === 'completed') completed++;
      if (['pending', 'confirmed', 'preparing', 'delivering'].includes(order.status)) pending++;
    });
    
    updateOrderStats(total, pending, completed);
    
  } catch (error) {
    console.error('Error loading orders:', error);
    ordersList.innerHTML = `
      <div class="no-orders">
        <i class="fas fa-exclamation-triangle"></i>
        <h3>Error loading orders</h3>
        <p>Please try again later</p>
      </div>
    `;
  }
}

function createOrderElement(order, orderId) {
  const orderElement = document.createElement('div');
  orderElement.className = 'order-item';
  
  const orderDate = order.createdAt ? order.createdAt.toDate().toLocaleDateString() : 'N/A';
  const statusClass = `status-${order.status}`;
  
  orderElement.innerHTML = `
    <div class="order-header">
      <div class="order-info">
        <h4>Order #${order.orderNumber}</h4>
        <div class="order-meta">
          <span>Placed on ${orderDate}</span>
          <span> • </span>
          <span>Total: ${formatCurrency(order.total)}</span>
        </div>
      </div>
      <div class="order-status ${statusClass}">${order.status}</div>
    </div>
    <div class="order-items">
      ${Object.values(order.items).map(item => `
        <div class="order-item-row">
          <span class="order-item-name">${item.title}</span>
          <span class="order-item-quantity">Qty: ${item.quantity}</span>
          <span class="order-item-price">${formatCurrency(item.price * item.quantity)}</span>
        </div>
      `).join('')}
    </div>
    <div class="order-total">
      <span>Total Amount:</span>
      <span>${formatCurrency(order.total)}</span>
    </div>
  `;
  
  return orderElement;
}

function updateOrderStats(total, pending, completed) {
  totalOrders.textContent = total;
  pendingOrders.textContent = pending;
  completedOrders.textContent = completed;
}

function generateOrderNumber() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `FRESH-${timestamp}-${random}`;
}

// Modal Management
function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
}

// Update all modal close buttons
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    toggleModal(modalId);
  });
});

// Tab functionality
tabBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const tabId = this.getAttribute('data-tab');
    
    // Update active tab
    tabBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Show active content
    tabContents.forEach(content => {
      content.classList.remove('active');
      if (content.id === `${tabId}Tab`) {
        content.classList.add('active');
      }
    });
    
    // Load orders if orders tab is active
    if (tabId === 'orders') {
      loadUserOrders();
    }
  });
});

// Format currency
function formatCurrency(amount) {
  return 'RWF ' + amount.toLocaleString();
}

// Filter products based on current category and search term
function filterProducts() {
  let filtered = PRODUCTS;

  // Apply category filter
  if (currentCategory !== 'all') {
    filtered = filtered.filter(product => product.category === currentCategory);
  }

  // Apply search filter
  if (currentSearchTerm) {
    const searchTerm = currentSearchTerm.toLowerCase();
    filtered = filtered.filter(product => 
      product.title.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      (product.sub && product.sub.toLowerCase().includes(searchTerm))
    );
  }

  // For "all" category with no search, show popular products first
  if (currentCategory === 'all' && !currentSearchTerm) {
    filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
  }

  return filtered;
}

// Update product display
function updateProductDisplay() {
  currentProducts = filterProducts();
  currentPage = 1;
  
  // Update title and subtitle
  updateProductHeaders();
  
  // Render products
  renderProducts();
  
  // Update load more button
  updateLoadMoreButton();
}

// Update product headers based on current view
function updateProductHeaders() {
  if (currentSearchTerm) {
    productsTitle.textContent = `Search Results for "${currentSearchTerm}"`;
    productsSubtitle.textContent = `Found ${currentProducts.length} product${currentProducts.length !== 1 ? 's' : ''}`;
  } else if (currentCategory === 'all') {
    productsTitle.textContent = 'Popular Products';
    productsSubtitle.textContent = 'Our customers\' favorite items';
  } else {
    productsTitle.textContent = getCategoryDisplayName(currentCategory);
    productsSubtitle.textContent = `Browse our ${getCategoryDisplayName(currentCategory).toLowerCase()} collection`;
  }
}

// Get display name for category
function getCategoryDisplayName(category) {
  const displayNames = {
    'all': 'All Products',
    'Meat': '🥩 Meat Products',
    'Fruits & Vegetables': '🍎 Fruits & Vegetables',
    'Drinks': '🥤 Drinks',
    'Organic & Animal-based Fresh Foods': '🌿 Organic Foods'
  };
  return displayNames[category] || category;
}

// Render products to grid
function renderProducts() {
  productsGrid.innerHTML = '';
  
  const productsToShow = currentProducts.slice(0, currentPage * productsPerPage);
  
  if (productsToShow.length === 0) {
    showNoResults();
    return;
  }
  
  productsToShow.forEach(product => {
    const productElement = createProductElement(product);
    productsGrid.appendChild(productElement);
  });
}

// Show no results message
function showNoResults() {
  productsGrid.innerHTML = `
    <div class="no-results">
      <i class="fas fa-search"></i>
      <h3>No products found</h3>
      <p>Try adjusting your search or browse different categories</p>
      <div class="mt-2">
        <button class="btn btn-primary" onclick="clearSearchAndFilters()">
          <i class="fas fa-times"></i>
          Clear Filters
        </button>
      </div>
    </div>
  `;
}

// Create product element
function createProductElement(product) {
  const productElement = document.createElement('div');
  productElement.className = 'product-card fade-in';
  productElement.innerHTML = `
    <img src="${product.img}" alt="${product.title}" class="product-image">
    <div class="product-content">
      <h4 class="product-title">${product.title}</h4>
      <div class="product-category">${product.category}${product.sub ? ` • ${product.sub}` : ''}</div>
      <div class="product-footer">
        <div class="product-price">${formatCurrency(product.price)}</div>
        <div class="product-actions">
          <input type="number" class="quantity-input" value="1" min="1" id="qty-${product.id}">
          <button class="btn-add" data-id="${product.id}">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  
  const addButton = productElement.querySelector('.btn-add');
  addButton.addEventListener('click', () => {
    const quantityInput = document.getElementById(`qty-${product.id}`);
    const quantity = parseInt(quantityInput.value) || 1;
    addToCart(product, quantity);
    quantityInput.value = 1;
  });
  
  return productElement;
}

// Update load more button visibility
function updateLoadMoreButton() {
  const totalProducts = currentProducts.length;
  const showingProducts = Math.min(currentPage * productsPerPage, totalProducts);
  
  if (showingProducts >= totalProducts) {
    loadMoreContainer.style.display = 'none';
  } else {
    loadMoreContainer.style.display = 'flex';
    loadMoreBtn.innerHTML = `
      <i class="fas fa-plus"></i>
      Load More (${showingProducts} of ${totalProducts})
    `;
  }
}

// Load more products
function loadMoreProducts() {
  currentPage++;
  renderProducts();
  updateLoadMoreButton();
}

// Search functionality
function performSearch(searchTerm) {
  currentSearchTerm = searchTerm.toLowerCase().trim();
  updateProductDisplay();
}

// Clear search and filters
function clearSearchAndFilters() {
  currentSearchTerm = '';
  currentCategory = 'all';
  globalSearch.value = '';
  
  // Update active category filter
  categoryFilters.forEach(filter => {
    filter.classList.toggle('active', filter.dataset.category === 'all');
  });
  
  updateProductDisplay();
}

// Clear search only
function clearSearch() {
  currentSearchTerm = '';
  globalSearch.value = '';
  updateProductDisplay();
}

// Update cart count
function updateCartCount() {
  const count = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = count;
}

// Update cart display
function updateCartDisplay() {
  cartItems.innerHTML = '';
  
  if (Object.keys(cart).length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <p>Your cart is empty</p>
        <p class="text-light">Add some products to get started</p>
      </div>
    `;
    cartTotal.textContent = formatCurrency(0);
    return;
  }

  let total = 0;
  
  Object.values(cart).forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';
    cartItemElement.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="cart-item-image">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-price">${formatCurrency(item.price)}</div>
        <div class="cart-item-actions">
          <button class="quantity-btn decrease" data-id="${item.id}">
            <i class="fas fa-minus"></i>
          </button>
          <span class="cart-item-quantity">${item.quantity}</span>
          <button class="quantity-btn increase" data-id="${item.id}">
            <i class="fas fa-plus"></i>
          </button>
          <button class="remove-item" data-id="${item.id}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `;
    
    cartItems.appendChild(cartItemElement);
  });
  
  cartTotal.textContent = formatCurrency(total);
  
  // Add event listeners to cart item buttons
  document.querySelectorAll('.decrease').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.closest('.decrease').dataset.id;
      decreaseQuantity(id);
    });
  });
  
  document.querySelectorAll('.increase').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.closest('.increase').dataset.id;
      increaseQuantity(id);
    });
  });
  
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.closest('.remove-item').dataset.id;
      removeFromCart(id);
    });
  });
}

// Add to cart
function addToCart(product, quantity = 1) {
  if (cart[product.id]) {
    cart[product.id].quantity += quantity;
  } else {
    cart[product.id] = {
      ...product,
      quantity: quantity
    };
  }
  
  localStorage.setItem('freshdrop_cart', JSON.stringify(cart));
  updateCartCount();
  updateCartDisplay();
  
  // Show notification
  showNotification(`${product.title} added to cart`);
}

// Increase quantity
function increaseQuantity(id) {
  if (cart[id]) {
    cart[id].quantity += 1;
    localStorage.setItem('freshdrop_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
  }
}

// Decrease quantity
function decreaseQuantity(id) {
  if (cart[id]) {
    cart[id].quantity -= 1;
    if (cart[id].quantity <= 0) {
      delete cart[id];
    }
    localStorage.setItem('freshdrop_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
  }
}

// Remove from cart
function removeFromCart(id) {
  if (cart[id]) {
    delete cart[id];
    localStorage.setItem('freshdrop_cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
  }
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--primary);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 300px;
  `;
  notification.innerHTML = `
    <div class="d-flex align-center">
      <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Toggle cart sidebar
function toggleCart() {
  cartSidebar.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
}

// Mobile Menu Functionality
function closeMobileMenuFunction() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
  overlay.classList.remove('active');
}

// About Modal Functionality
function toggleAboutModal() {
  aboutModal.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = aboutModal.classList.contains('active') ? 'hidden' : '';
}

// Initialize app
async function initApp() {
  console.log("🚀 Initializing Fresh Drop Rwanda app...");
  
  // Initialize authentication
  initAuth();
  
  // Initialize payment system
  initPayment();
  
  // Test Firebase connection first
  const connected = await testFirebaseConnection();
  
  if (connected) {
    // Load products from Firebase
    await loadProductsFromFirebase();
  }
  
  // Load initial cart state
  updateCartCount();
  updateCartDisplay();
  
  // Initialize product display
  updateProductDisplay();
  
  // Event listeners
  cartIcon.addEventListener('click', toggleCart);
  closeCart.addEventListener('click', toggleCart);
  
  // Category filter events
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.category;
      
      // Update active state
      categoryFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      
      // Update current category
      currentCategory = category;
      updateProductDisplay();
    });
  });
  
  // Search functionality
  let searchTimeout;
  globalSearch.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(e.target.value);
    }, 300);
  });
  
  searchClear.addEventListener('click', clearSearch);
  
  // Load more button
  loadMoreBtn.addEventListener('click', loadMoreProducts);
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    overlay.classList.add('active');
  });

  closeMobileMenu.addEventListener('click', closeMobileMenuFunction);

  // Mobile Navigation Links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      
      // Update active state
      mobileNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Navigate to section
      if (section) {
        const targetElement = document.getElementById(section);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
      
      closeMobileMenuFunction();
    });
  });

  // Mobile Category Links
  mobileCategoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      
      // Update current category
      currentCategory = category;
      
      // Update desktop category filters
      categoryFilters.forEach(filter => {
        filter.classList.toggle('active', filter.dataset.category === category);
      });
      
      // Update product display
      updateProductDisplay();
      
      // Scroll to products section
      const productsSection = document.getElementById('products');
      if (productsSection) {
        window.scrollTo({
          top: productsSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      
      closeMobileMenuFunction();
    });
  });

  // About Modal Functionality
  document.querySelectorAll('.about-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      toggleAboutModal();
      
      // Close mobile menu if open
      if (mobileMenu.classList.contains('open')) {
        closeMobileMenuFunction();
      }
    });
  });

  // Footer category links
  document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      
      // Update current category
      currentCategory = category;
      
      // Update desktop category filters
      categoryFilters.forEach(filter => {
        filter.classList.toggle('active', filter.dataset.category === category);
      });
      
      // Update product display
      updateProductDisplay();
      
      // Scroll to products section
      const productsSection = document.getElementById('products');
      if (productsSection) {
        window.scrollTo({
          top: productsSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Overlay click handler
  overlay.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      closeMobileMenuFunction();
    }
    if (cartSidebar.classList.contains('open')) {
      toggleCart();
    }
    if (aboutModal.classList.contains('active')) {
      toggleAboutModal();
    }
    if (loginModal.classList.contains('active')) {
      toggleModal('loginModal');
    }
    if (signupModal.classList.contains('active')) {
      toggleModal('signupModal');
    }
    if (accountModal.classList.contains('active')) {
      toggleModal('accountModal');
    }
    if (paymentModal.classList.contains('active')) {
      toggleModal('paymentModal');
    }
  });
  
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // Observe product cards as they're added
  const productObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.classList.contains('product-card')) {
          observer.observe(node);
        }
      });
    });
  });
  
  productObserver.observe(productsGrid, { childList: true, subtree: true });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      globalSearch.focus();
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
      if (cartSidebar.classList.contains('open')) {
        toggleCart();
      }
      if (mobileMenu.classList.contains('open')) {
        closeMobileMenuFunction();
      }
      if (aboutModal.classList.contains('active')) {
        toggleAboutModal();
      }
      if (loginModal.classList.contains('active')) {
        toggleModal('loginModal');
      }
      if (signupModal.classList.contains('active')) {
        toggleModal('signupModal');
      }
      if (accountModal.classList.contains('active')) {
        toggleModal('accountModal');
      }
      if (paymentModal.classList.contains('active')) {
        toggleModal('paymentModal');
      }
      if (userDropdown.classList.contains('active')) {
        userDropdown.classList.remove('active');
        userDropdownBtn.classList.remove('active');
      }
    }
  });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initApp();
  
  // Initialize mobile menu state
  mobileMenu.classList.remove('open');
});