// Complete Product Data
const PRODUCTS = [
  // Organic & Animal-based Fresh Foods
  {
    "id": 1000,
    "title": "Beans (1kg)",
    "category": "Organic & Animal-based Fresh Foods",
    "price": 1200,
    "img": "https://source.unsplash.com/800x600/?beans",
    "popular": true
  },
  {
    "id": 1001,
    "title": "Maize/Corn (1kg)",
    "category": "Organic & Animal-based Fresh Foods",
    "price": 800,
    "img": "https://source.unsplash.com/800x600/?corn",
    "popular": true
  },
  {
    "id": 1002,
    "title": "Soybean (1kg)",
    "category": "Organic & Animal-based Fresh Foods",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?soybean"
  },
  {
    "id": 1003,
    "title": "Groundnuts/Peanuts (1kg)",
    "category": "Organic & Animal-based Fresh Foods",
    "price": 1800,
    "img": "https://source.unsplash.com/800x600/?peanuts"
  },
  {
    "id": 1004,
    "title": "Rice (1kg)",
    "category": "Organic & Animal-based Fresh Foods",
    "price": 2000,
    "img": "https://source.unsplash.com/800x600/?rice",
    "popular": true
  },
  {
    "id": 1005,
    "title": "Sorghum (1kg)",
    "category": "Organic & Animal-based Fresh Foods",
    "price": 1000,
    "img": "https://source.unsplash.com/800x600/?sorghum"
  },
  {
    "id": 1006,
    "title": "Millet (1kg)",
    "category": "Organic & Animal-based Fresh Foods",
    "price": 1200,
    "img": "https://source.unsplash.com/800x600/?millet"
  },
  {
    "id": 1047,
    "title": "Irish Potato (1kg)",
    "category": "Organic & Animal-based Fresh Foods",
    "price": 1200,
    "img": "https://source.unsplash.com/800x600/?potato",
    "popular": true
  },
  {
    "id": 1048,
    "title": "Sweet Potato (1kg)",
    "category": "Organic & Animal-based Fresh Foods",
    "price": 1000,
    "img": "https://source.unsplash.com/800x600/?sweet-potato"
  },
  {
    "id": 1049,
    "title": "Green Beans (1kg)",
    "category": "Organic & Animal-based Fresh Foods",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?green-beans"
  },

  // Meat Products
  {
    "id": 1008,
    "title": "Fresh Beef (1kg)",
    "category": "Meat",
    "price": 3500,
    "img": "https://source.unsplash.com/800x600/?beef",
    "popular": true
  },
  {
    "id": 1009,
    "title": "Beef Steak (1kg)",
    "category": "Meat",
    "price": 5000,
    "img": "https://source.unsplash.com/800x600/?steak"
  },
  {
    "id": 1010,
    "title": "Minced Beef (1kg)",
    "category": "Meat",
    "price": 4500,
    "img": "https://source.unsplash.com/800x600/?minced-beef"
  },
  {
    "id": 1011,
    "title": "Beef Liver (1kg)",
    "category": "Meat",
    "price": 3000,
    "img": "https://source.unsplash.com/800x600/?liver"
  },
  {
    "id": 1012,
    "title": "Beef Ribs (1kg)",
    "category": "Meat",
    "price": 4000,
    "img": "https://source.unsplash.com/800x600/?beef-ribs"
  },
  {
    "id": 1014,
    "title": "Fresh Goat Meat (1kg)",
    "category": "Meat",
    "price": 3800,
    "img": "https://source.unsplash.com/800x600/?goat-meat"
  },
  {
    "id": 1015,
    "title": "Roasted Goat (Brochette) per stick",
    "category": "Meat",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?brochette",
    "popular": true
  },
  {
    "id": 1016,
    "title": "Goat Liver (1kg)",
    "category": "Meat",
    "price": 3000,
    "img": "https://source.unsplash.com/800x600/?goat-liver"
  },
  {
    "id": 1018,
    "title": "Fresh Mutton (1kg)",
    "category": "Meat",
    "price": 4500,
    "img": "https://source.unsplash.com/800x600/?mutton"
  },
  {
    "id": 1019,
    "title": "Mutton Ribs (1kg)",
    "category": "Meat",
    "price": 5000,
    "img": "https://source.unsplash.com/800x600/?mutton-ribs"
  },
  {
    "id": 1021,
    "title": "Local Chicken (Free-range)",
    "category": "Meat",
    "price": 6000,
    "img": "https://source.unsplash.com/800x600/?chicken",
    "popular": true
  },
  {
    "id": 1022,
    "title": "Broiler Chicken",
    "category": "Meat",
    "price": 4500,
    "img": "https://source.unsplash.com/800x600/?broiler-chicken"
  },
  {
    "id": 1023,
    "title": "Chicken Wings (1kg)",
    "category": "Meat",
    "price": 3500,
    "img": "https://source.unsplash.com/800x600/?chicken-wings"
  },
  {
    "id": 1024,
    "title": "Chicken Legs (1kg)",
    "category": "Meat",
    "price": 3800,
    "img": "https://source.unsplash.com/800x600/?chicken-legs"
  },
  {
    "id": 1026,
    "title": "Fresh Pork (1kg)",
    "category": "Meat",
    "price": 3800,
    "img": "https://source.unsplash.com/800x600/?pork"
  },
  {
    "id": 1027,
    "title": "Pork Ribs (1kg)",
    "category": "Meat",
    "price": 4000,
    "img": "https://source.unsplash.com/800x600/?pork-ribs"
  },
  {
    "id": 1028,
    "title": "Sausages (a pack)",
    "category": "Meat",
    "price": 2500,
    "img": "https://source.unsplash.com/800x600/?sausages",
    "popular": true
  },
  {
    "id": 1029,
    "title": "Bacon (1kg)",
    "category": "Meat",
    "price": 5000,
    "img": "https://source.unsplash.com/800x600/?bacon"
  },
  {
    "id": 1031,
    "title": "Tilapia (1kg)",
    "category": "Meat",
    "price": 4000,
    "img": "https://source.unsplash.com/800x600/?tilapia"
  },
  {
    "id": 1032,
    "title": "Nile Perch (1kg)",
    "category": "Meat",
    "price": 5000,
    "img": "https://source.unsplash.com/800x600/?nile-perch"
  },
  {
    "id": 1033,
    "title": "Sardines/ Isambaza (1kg)",
    "category": "Meat",
    "price": 2500,
    "img": "https://source.unsplash.com/800x600/?sardines"
  },
  {
    "id": 1034,
    "title": "Smoked Fish (1kg)",
    "category": "Meat",
    "price": 3500,
    "img": "https://source.unsplash.com/800x600/?smoked-fish"
  },

  // Fruits & Vegetables
  {
    "id": 1036,
    "title": "Carrot (1kg)",
    "category": "Fruits & Vegetables",
    "price": 800,
    "img": "https://source.unsplash.com/800x600/?carrot",
    "popular": true
  },
  {
    "id": 1037,
    "title": "Cabbage (1)",
    "category": "Fruits & Vegetables",
    "price": 1000,
    "img": "https://source.unsplash.com/800x600/?cabbage"
  },
  {
    "id": 1038,
    "title": "Onion (1kg)",
    "category": "Fruits & Vegetables",
    "price": 1200,
    "img": "https://source.unsplash.com/800x600/?onion"
  },
  {
    "id": 1039,
    "title": "Tomato (1kg)",
    "category": "Fruits & Vegetables",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?tomato",
    "popular": true
  },
  {
    "id": 1040,
    "title": "Green Pepper (1kg)",
    "category": "Fruits & Vegetables",
    "price": 1000,
    "img": "https://source.unsplash.com/800x600/?green-pepper"
  },
  {
    "id": 1041,
    "title": "Eggplant (1kg)",
    "category": "Fruits & Vegetables",
    "price": 1000,
    "img": "https://source.unsplash.com/800x600/?eggplant"
  },
  {
    "id": 1042,
    "title": "Spinach (1 bunch)",
    "category": "Fruits & Vegetables",
    "price": 800,
    "img": "https://source.unsplash.com/800x600/?spinach"
  },
  {
    "id": 1043,
    "title": "Lettuce (1 bunch)",
    "category": "Fruits & Vegetables",
    "price": 1200,
    "img": "https://source.unsplash.com/800x600/?lettuce"
  },
  {
    "id": 1044,
    "title": "Cucumber (each)",
    "category": "Fruits & Vegetables",
    "price": 800,
    "img": "https://source.unsplash.com/800x600/?cucumber"
  },
  {
    "id": 1045,
    "title": "Garlic (250g)",
    "category": "Fruits & Vegetables",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?garlic"
  },
  {
    "id": 1046,
    "title": "Ginger (250g)",
    "category": "Fruits & Vegetables",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?ginger"
  },
  {
    "id": 1050,
    "title": "Pumpkin (each)",
    "category": "Fruits & Vegetables",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?pumpkin"
  },
  {
    "id": 1052,
    "title": "Apple (each)",
    "category": "Fruits & Vegetables",
    "price": 500,
    "img": "https://source.unsplash.com/800x600/?apple",
    "popular": true
  },
  {
    "id": 1053,
    "title": "Banana (1 bunch)",
    "category": "Fruits & Vegetables",
    "price": 1000,
    "img": "https://source.unsplash.com/800x600/?banana"
  },
  {
    "id": 1054,
    "title": "Orange (each)",
    "category": "Fruits & Vegetables",
    "price": 400,
    "img": "https://source.unsplash.com/800x600/?orange"
  },
  {
    "id": 1055,
    "title": "Mango (each)",
    "category": "Fruits & Vegetables",
    "price": 800,
    "img": "https://source.unsplash.com/800x600/?mango",
    "popular": true
  },
  {
    "id": 1056,
    "title": "Pineapple (each)",
    "category": "Fruits & Vegetables",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?pineapple"
  },
  {
    "id": 1057,
    "title": "Papaya (each)",
    "category": "Fruits & Vegetables",
    "price": 1200,
    "img": "https://source.unsplash.com/800x600/?papaya"
  },
  {
    "id": 1058,
    "title": "Watermelon (each)",
    "category": "Fruits & Vegetables",
    "price": 2500,
    "img": "https://source.unsplash.com/800x600/?watermelon"
  },
  {
    "id": 1059,
    "title": "Avocado (each)",
    "category": "Fruits & Vegetables",
    "price": 600,
    "img": "https://source.unsplash.com/800x600/?avocado"
  },
  {
    "id": 1060,
    "title": "Passion Fruit (1kg)",
    "category": "Fruits & Vegetables",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?passion-fruit"
  },
  {
    "id": 1061,
    "title": "Lemon (each)",
    "category": "Fruits & Vegetables",
    "price": 400,
    "img": "https://source.unsplash.com/800x600/?lemon"
  },
  {
    "id": 1062,
    "title": "Grapes (1kg)",
    "category": "Fruits & Vegetables",
    "price": 4000,
    "img": "https://source.unsplash.com/800x600/?grapes"
  },
  {
    "id": 1063,
    "title": "Strawberry (1 pack)",
    "category": "Fruits & Vegetables",
    "price": 2500,
    "img": "https://source.unsplash.com/800x600/?strawberry"
  },
  {
    "id": 1064,
    "title": "Pomegranate (each)",
    "category": "Fruits & Vegetables",
    "price": 2000,
    "img": "https://source.unsplash.com/800x600/?pomegranate"
  },
  {
    "id": 1065,
    "title": "Guava (each)",
    "category": "Fruits & Vegetables",
    "price": 700,
    "img": "https://source.unsplash.com/800x600/?guava"
  },
  {
    "id": 1066,
    "title": "Kiwi (each)",
    "category": "Fruits & Vegetables",
    "price": 800,
    "img": "https://source.unsplash.com/800x600/?kiwi"
  },
  {
    "id": 1067,
    "title": "Coconut (each)",
    "category": "Fruits & Vegetables",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?coconut"
  },
  {
    "id": 1068,
    "title": "Sugarcane (1 piece)",
    "category": "Fruits & Vegetables",
    "price": 500,
    "img": "https://source.unsplash.com/800x600/?sugarcane"
  },
  {
    "id": 1069,
    "title": "Pear (each)",
    "category": "Fruits & Vegetables",
    "price": 600,
    "img": "https://source.unsplash.com/800x600/?pear"
  },
  {
    "id": 1070,
    "title": "Plum (each)",
    "category": "Fruits & Vegetables",
    "price": 1200,
    "img": "https://source.unsplash.com/800x600/?plum"
  },

  // Drinks
  {
    "id": 1072,
    "title": "Beone Gin",
    "category": "Drinks",
    "price": 1800,
    "img": "https://source.unsplash.com/800x600/?gin",
    "sub": "Alcoholic",
    "popular": true
  },
  {
    "id": 1073,
    "title": "Rabiant",
    "category": "Drinks",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?alcohol",
    "sub": "Alcoholic"
  },
  {
    "id": 1074,
    "title": "Mambo",
    "category": "Drinks",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?drink",
    "sub": "Alcoholic"
  },
  {
    "id": 1075,
    "title": "Rack Gin",
    "category": "Drinks",
    "price": 2300,
    "img": "https://source.unsplash.com/800x600/?rack-gin",
    "sub": "Alcoholic"
  },
  {
    "id": 1076,
    "title": "Fimbo",
    "category": "Drinks",
    "price": 1700,
    "img": "https://source.unsplash.com/800x600/?fimbo",
    "sub": "Alcoholic"
  },
  {
    "id": 1077,
    "title": "Big Konyagi",
    "category": "Drinks",
    "price": 7500,
    "img": "https://source.unsplash.com/800x600/?konyagi",
    "sub": "Alcoholic"
  },
  {
    "id": 1078,
    "title": "Small Konyagi",
    "category": "Drinks",
    "price": 2800,
    "img": "https://source.unsplash.com/800x600/?small-konyagi",
    "sub": "Alcoholic"
  },
  {
    "id": 1079,
    "title": "Big Boss",
    "category": "Drinks",
    "price": 4000,
    "img": "https://source.unsplash.com/800x600/?big-boss",
    "sub": "Alcoholic"
  },
  {
    "id": 1080,
    "title": "Small Boss",
    "category": "Drinks",
    "price": 2300,
    "img": "https://source.unsplash.com/800x600/?small-boss",
    "sub": "Alcoholic"
  },
  {
    "id": 1081,
    "title": "Bond 7",
    "category": "Drinks",
    "price": 3500,
    "img": "https://source.unsplash.com/800x600/?bond-7",
    "sub": "Alcoholic"
  },
  {
    "id": 1083,
    "title": "Wine",
    "category": "Drinks",
    "price": 15000,
    "img": "https://source.unsplash.com/800x600/?wine",
    "sub": "Alcoholic"
  },
  {
    "id": 1084,
    "title": "Bavaria",
    "category": "Drinks",
    "price": 3000,
    "img": "https://source.unsplash.com/800x600/?bavaria",
    "sub": "Non-Alcoholic"
  },
  {
    "id": 1085,
    "title": "Smirnoff Ice",
    "category": "Drinks",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?smirnoff",
    "sub": "Alcoholic"
  },
  {
    "id": 1086,
    "title": "Agasusuruko",
    "category": "Drinks",
    "price": 1200,
    "img": "https://source.unsplash.com/800x600/?agasusuruko",
    "sub": "Alcoholic"
  },
  {
    "id": 1087,
    "title": "Tuiste Yatangawize",
    "category": "Drinks",
    "price": 500,
    "img": "https://source.unsplash.com/800x600/?tuiste",
    "sub": "Non-Alcoholic"
  },
  {
    "id": 1089,
    "title": "Amstel",
    "category": "Drinks",
    "price": 2000,
    "img": "https://source.unsplash.com/800x600/?amstel",
    "sub": "Alcoholic"
  },
  {
    "id": 1090,
    "title": "Turbo",
    "category": "Drinks",
    "price": 2000,
    "img": "https://source.unsplash.com/800x600/?turbo",
    "sub": "Alcoholic"
  },
  {
    "id": 1091,
    "title": "Small Primus",
    "category": "Drinks",
    "price": 2000,
    "img": "https://source.unsplash.com/800x600/?primus",
    "sub": "Alcoholic"
  },
  {
    "id": 1092,
    "title": "Big Primus",
    "category": "Drinks",
    "price": 2500,
    "img": "https://source.unsplash.com/800x600/?big-primus",
    "sub": "Alcoholic"
  },
  {
    "id": 1093,
    "title": "Petit Skol Malt",
    "category": "Drinks",
    "price": 2000,
    "img": "https://source.unsplash.com/800x600/?skol-malt",
    "sub": "Alcoholic"
  },
  {
    "id": 1094,
    "title": "Big Skol Malt",
    "category": "Drinks",
    "price": 2500,
    "img": "https://source.unsplash.com/800x600/?big-skol",
    "sub": "Alcoholic"
  },
  {
    "id": 1095,
    "title": "Big Skol Gatanu",
    "category": "Drinks",
    "price": 2500,
    "img": "https://source.unsplash.com/800x600/?skol-gatanu",
    "sub": "Alcoholic"
  },
  {
    "id": 1096,
    "title": "Big Primus",
    "category": "Drinks",
    "price": 2500,
    "img": "https://source.unsplash.com/800x600/?primus-beer",
    "sub": "Alcoholic"
  },
  {
    "id": 1097,
    "title": "Petit Miitzing",
    "category": "Drinks",
    "price": 2000,
    "img": "https://source.unsplash.com/800x600/?miitzing",
    "sub": "Alcoholic"
  },
  {
    "id": 1098,
    "title": "Big Miitzing",
    "category": "Drinks",
    "price": 2500,
    "img": "https://source.unsplash.com/800x600/?big-miitzing",
    "sub": "Alcoholic"
  },
  {
    "id": 1100,
    "title": "Novida",
    "category": "Drinks",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?novida",
    "sub": "Non-Alcoholic"
  },
  {
    "id": 1101,
    "title": "Coca-cola",
    "category": "Drinks",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?coca-cola",
    "sub": "Non-Alcoholic",
    "popular": true
  },
  {
    "id": 1102,
    "title": "Energy Drink",
    "category": "Drinks",
    "price": 800,
    "img": "https://source.unsplash.com/800x600/?energy-drink",
    "sub": "Non-Alcoholic"
  },
  {
    "id": 1103,
    "title": "Pineapple Juice",
    "category": "Drinks",
    "price": 700,
    "img": "https://source.unsplash.com/800x600/?pineapple-juice",
    "sub": "Non-Alcoholic"
  },
  {
    "id": 1104,
    "title": "Mixed Fruit Juice",
    "category": "Drinks",
    "price": 2000,
    "img": "https://source.unsplash.com/800x600/?fruit-juice",
    "sub": "Non-Alcoholic"
  },
  {
    "id": 1105,
    "title": "Mango Juice",
    "category": "Drinks",
    "price": 1500,
    "img": "https://source.unsplash.com/800x600/?mango-juice",
    "sub": "Non-Alcoholic"
  },
  {
    "id": 1106,
    "title": "Big Bottle of Water",
    "category": "Drinks",
    "price": 1200,
    "img": "https://source.unsplash.com/800x600/?water-bottle",
    "sub": "Non-Alcoholic"
  },
  {
    "id": 1107,
    "title": "Small Bottle of Water",
    "category": "Drinks",
    "price": 700,
    "img": "https://source.unsplash.com/800x600/?small-water",
    "sub": "Non-Alcoholic"
  }
];

// Shopping Cart Management
let cart = JSON.parse(localStorage.getItem('freshdrop_cart')) || {};

// Product Display Management
let currentCategory = 'all';
let currentSearchTerm = '';
let currentProducts = [];
let productsPerPage = 12;
let currentPage = 1;

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

// Mobile Menu Elements
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const mobileCategoryLinks = document.querySelectorAll('.mobile-category-link');

// About Modal Elements
const aboutModal = document.getElementById('aboutModal');
const closeAboutModal = document.getElementById('closeAboutModal');

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
function initApp() {
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
  
  checkoutBtn.addEventListener('click', () => {
    if (Object.keys(cart).length === 0) {
      showNotification('Your cart is empty');
      return;
    }
    
    // In a real app, this would redirect to checkout
    showNotification('Proceeding to checkout...');
    setTimeout(() => {
      showNotification('Checkout functionality would be implemented here');
    }, 1000);
  });
  
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

  closeAboutModal.addEventListener('click', toggleAboutModal);

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
    }
  });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initApp();
  
  // Initialize mobile menu state
  mobileMenu.classList.remove('open');
});