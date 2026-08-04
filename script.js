// بيانات المطعم
const categories = [
    { id: 'all', nameAr: 'الكل', nameEn: 'All', count: 0 },
    { id: 'shawarma', nameAr: 'شاورما', nameEn: 'Shawarma', count: 0 },
    { id: 'pizza', nameAr: 'بيتزا', nameEn: 'Pizza', count: 0 },
    { id: 'calzone', nameAr: 'كلزوني', nameEn: 'Calzone', count: 0 },
    { id: 'snacks', nameAr: 'سناكات', nameEn: 'Snacks', count: 0 },
    { id: 'fries', nameAr: 'بطاطا', nameEn: 'Fries', count: 0 },
    { id: 'extras', nameAr: 'إضافات', nameEn: 'Extras', count: 0 },
    { id: 'offers', nameAr: 'العروض', nameEn: 'Offers', count: 0 }
];

// نصوص الترجمة
const translations = {
    ar: {
        categoriesTitle: 'أصناف',
        orderNow: 'اطلب الآن',
        viewImage: 'عرض',
        image: 'الصورة',
        noItemsTitle: 'لا توجد أصناف في هذه الفئة',
        noItemsDesc: 'اختر فئة أخرى للاطلاع على الأصناف المتوفرة',
        bonnMenu: 'منيو كافيه BONN Coffee & Bakery',
        bonnDesc: 'اضغط لعرض المنيو الكامل الخاص بالكافيه',
        footerThanks: 'طعم ليس له مثيل',
        all: 'الكل',
        shawarma: 'شاورما',
        pizza: 'بيتزا',
        calzone: 'كلزوني',
        snacks: 'سناكات',
        fries: 'بطاطا',
        extras: 'إضافات',
        offers: 'العروض',
        googleReview: 'قييمنا على جوجل',
        note: 'ملاحظة',
        PIZZA_WHEAT_NOTE: 'ملاحظة: البيتزا متوفرة بعجينة القمح الكامل مقابل زيادة 0.50 JD على السعر',
        MEAL_ADD_NOTE: 'إضافة وجبة: 1.25 JD'
    },
    en: {
        categoriesTitle: 'Categories',
        orderNow: 'Order Now',
        viewImage: 'View',
        image: 'Image',
        noItemsTitle: 'No items in this category',
        noItemsDesc: 'Choose another category to see available items',
        bonnMenu: 'BONN Coffee & Bakery Menu',
        bonnDesc: 'Click to view the full cafe menu',
        footerThanks: 'Taste like no other',
        all: 'All',
        shawarma: 'Shawarma',
        pizza: 'Pizza',
        calzone: 'Calzone',
        snacks: 'Snacks',
        fries: 'Fries',
        extras: 'Extras',
        offers: 'Offers',
        googleReview: 'Rate us on Google',
        note: 'Note',
        PIZZA_WHEAT_NOTE: 'Note: Pizza is available with whole wheat dough for an extra 0.50 JD',
        MEAL_ADD_NOTE: 'Add meal: 1.25 JD'
    }
};

// عناصر المودال
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalImageTitle');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');
const loadingSpinner = document.getElementById('loadingSpinner');
const menuGrid = document.getElementById('menuGrid');
const noItems = document.getElementById('noItems');
const categoryFilter = document.getElementById('categoryFilter');
const activeCategoryName = document.getElementById('activeCategoryName');
const activeCategoryCount = document.getElementById('activeCategoryCount');

// اللغة الحالية
let currentLang = 'ar';

// دوال مساعدة
function getCategoryName(category) {
    const t = translations[currentLang];
    const categoryNames = {
        'shawarma': t.shawarma,
        'pizza': t.pizza,
        'calzone': t.calzone,
        'snacks': t.snacks,
        'fries': t.fries,
        'extras': t.extras,
        'offers': t.offers
    };
    return categoryNames[category] || category;
}

// الأصناف
const menuItems = [
    // شاورما
    {
        id: 1,
        nameAr: 'ساندوش شاورما (دجاج)',
        nameEn: 'Shawarma Sandwich (Chicken)',
        description: '',
        category: 'shawarma',
        prices: [
            { sizeAr: 'عادي', sizeEn: 'Regular', price: 0.75 },
            { sizeAr: 'سوبر', sizeEn: 'Super', price: 1.35 }
        ],
        image: 'images/ساندوش شاورما عادي (دجاج).png'
    },
    {
        id: 2,
        nameAr: 'ساندوش شاورما (لحمة)',
        nameEn: 'Shawarma Sandwich (Meat)',
        description: '',
        category: 'shawarma',
        prices: [
            { sizeAr: 'عادي', sizeEn: 'Regular', price: 0.90 },
            { sizeAr: 'سوبر', sizeEn: 'Super', price: 1.50 }
        ],
        image: 'images/ساندوش شاورما عادي (لحمة).png'
    },
    {
        id: 3,
        nameAr: 'وجبة شاورما (دجاج)',
        nameEn: 'Shawarma Meal (Chicken)',
        description: '',
        category: 'shawarma',
        prices: [
            { sizeAr: 'عادي', sizeEn: 'Regular', price: 2.25 },
            { sizeAr: 'سوبر', sizeEn: 'Super', price: 2.85 },
            { sizeAr: 'دبل', sizeEn: 'Double', price: 3.50 },
            { sizeAr: 'تربل', sizeEn: 'Triple', price: 4.25 }
        ],
        image: 'images/وجبة شاورما دجاج.png'
    },
    {
        id: 4,
        nameAr: 'وجبة شاورما (لحمة)',
        nameEn: 'Shawarma Meal (Meat)',
        description: '',
        category: 'shawarma',
        prices: [
            { sizeAr: 'عادي', sizeEn: 'Regular', price: 2.50 },
            { sizeAr: 'سوبر', sizeEn: 'Super', price: 3.25 },
            { sizeAr: 'دبل', sizeEn: 'Double', price: 3.75 },
            { sizeAr: 'تربل', sizeEn: 'Triple', price: 4.50 }
        ],
        image: 'images/وجبة شاورما لحمة.png'
    },
    {
        id: 5,
        nameAr: 'وجبة إيطالي شاورما (دجاج)',
        nameEn: 'Italian Shawarma Meal (Chicken)',
        description: '',
        category: 'shawarma',
        price: 4.00,
        image: 'images/وجبة شاورما ايطالي دجاج.png'
    },
    {
        id: 6,
        nameAr: 'وجبة إيطالي شاورما (لحمة)',
        nameEn: 'Italian Shawarma Meal (Meat)',
        description: '',
        category: 'shawarma',
        price: 4.75,
        image: 'images/وجبة شاورما ايطالي لحمة.png'
    },
    // بيتزا
    {
        id: 15,
        nameAr: 'بيتزا مارغريتا',
        nameEn: 'Margherita Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 1.75 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 2.75 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 3.75 }
        ],
        image: 'images/بيتزا مارغريتا.png'
    },
    {
        id: 18,
        nameAr: 'بيتزا خضار',
        nameEn: 'Vegetables Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 1.75 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 3.00 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 4.00 }
        ],
        image: 'images/بيتزا خضار.png'
    },
    {
        id: 21,
        nameAr: 'بيتزا سلامي',
        nameEn: 'Salami Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 1.75 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 3.00 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 4.00 }
        ],
        image: 'images/بيتزا سلامي.png'
    },
    {
        id: 24,
        nameAr: 'بيتزا تيركي',
        nameEn: 'Turkey Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 1.75 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 3.00 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 4.00 }
        ],
        image: 'images/بيتزا تيركي.png'
    },
    {
        id: 27,
        nameAr: 'بيتزا زنجر',
        nameEn: 'Zinger Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 2.00 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 3.25 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 4.50 }
        ],
        image: 'images/بيتزا زنجر.png'
    },
    {
        id: 30,
        nameAr: 'بيتزا ألفريدو',
        nameEn: 'Alfredo Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 2.00 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 3.25 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 4.50 }
        ],
        image: 'images/بيتزا ألفريدو.png'
    },
    {
        id: 33,
        nameAr: 'بيتزا باربكيو',
        nameEn: 'BBQ Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 2.00 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 3.25 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 4.50 }
        ],
        image: 'images/بيتزا باربكيو.png'
    },
    {
        id: 36,
        nameAr: 'بيتزا فاهيتا',
        nameEn: 'Fajita Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 2.00 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 3.25 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 4.50 }
        ],
        image: 'images/بيتزا فاهيتا.png'
    },
    {
        id: 39,
        nameAr: 'بيتزا رانش',
        nameEn: 'Ranch Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 2.00 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 3.25 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 4.50 }
        ],
        image: 'images/بيتزا رانش.png'
    },
    {
        id: 42,
        nameAr: 'بيتزا سوبريم',
        nameEn: 'Supreme Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 2.00 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 3.25 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 4.50 }
        ],
        image: 'images/بيتزا سوبريم.png'
    },
    {
        id: 45,
        nameAr: 'بيتزا بافيلو',
        nameEn: 'Buffalo Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 2.00 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 3.25 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 4.50 }
        ],
        image: 'images/بيتزا بافيلو.png'
    },
    {
        id: 48,
        nameAr: 'بيتزا الفصول الأربعة',
        nameEn: 'Four Seasons Pizza',
        description: 'PIZZA_WHEAT_NOTE',
        category: 'pizza',
        prices: [
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 4.00 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 5.00 }
        ],
        image: 'images/بيتزا الفصول الأربعة.png'
    },
    // كلزوني
    {
        id: 50,
        nameAr: 'كلزوني مكس أجبان',
        nameEn: 'Cheese Mix Calzone',
        description: 'MEAL_ADD_NOTE',
        category: 'calzone',
        price: 2.25,
        image: 'images/كلزوني مكس أجبان.png'
    },
    {
        id: 51,
        nameAr: 'كلزوني زنجر',
        nameEn: 'Zinger Calzone',
        description: 'MEAL_ADD_NOTE',
        category: 'calzone',
        price: 2.75,
        image: 'images/كلزوني زنجر.png'
    },
    {
        id: 52,
        nameAr: 'كلزوني فاهيتا',
        nameEn: 'Fajita Calzone',
        description: 'MEAL_ADD_NOTE',
        category: 'calzone',
        price: 2.50,
        image: 'images/كلزوني فاهيتا.png'
    },
    {
        id: 53,
        nameAr: 'كلزوني باربكيو',
        nameEn: 'BBQ Calzone',
        description: 'MEAL_ADD_NOTE',
        category: 'calzone',
        price: 2.75,
        image: 'images/كلزوني باربكيو.png'
    },
    {
        id: 54,
        nameAr: 'كلزوني ألفريدو',
        nameEn: 'Alfredo Calzone',
        description: 'MEAL_ADD_NOTE',
        category: 'calzone',
        price: 2.75,
        image: 'images/كلزوني ألفريدو.png'
    },
    {
        id: 55,
        nameAr: 'كلزوني رانش',
        nameEn: 'Ranch Calzone',
        description: 'MEAL_ADD_NOTE',
        category: 'calzone',
        price: 2.75,
        image: 'images/كلزوني رانش.png'
    },
    // سناكات
    {
        id: 56,
        nameAr: 'سناك زنجر',
        nameEn: 'Zinger Snack',
        description: '',
        category: 'snacks',
        prices: [
            { sizeAr: 'ساندوتش', sizeEn: 'Single', price: 1.75 },
            { sizeAr: 'وجبة', sizeEn: 'Meal', price: 3.00 }
        ],
        image: 'images/سناك زنجر.png'
    },
    {
        id: 58,
        nameAr: 'سناك فاهيتا',
        nameEn: 'Fajita Snack',
        description: '',
        category: 'snacks',
        prices: [
            { sizeAr: 'ساندوتش', sizeEn: 'Single', price: 1.75 },
            { sizeAr: 'وجبة', sizeEn: 'Meal', price: 3.00 }
        ],
        image: 'images/سناك فاهيتا.png'
    },
    {
        id: 60,
        nameAr: 'سناك باربكيو',
        nameEn: 'BBQ Snack',
        description: '',
        category: 'snacks',
        prices: [
            { sizeAr: 'ساندوتش', sizeEn: 'Single', price: 1.75 },
            { sizeAr: 'وجبة', sizeEn: 'Meal', price: 3.00 }
        ],
        image: 'images/سناك باربكيو.png'
    },
    {
        id: 62,
        nameAr: 'سناك كوردون بلو',
        nameEn: 'Cordon Bleu Snack',
        description: '',
        category: 'snacks',
        prices: [
            { sizeAr: 'ساندوتش', sizeEn: 'Single', price: 2.00 },
            { sizeAr: 'وجبة', sizeEn: 'Meal', price: 3.00 }
        ],
        image: 'images/سناك كوردون بلو.png'
    },
    {
        id: 64,
        nameAr: 'سناك زنجر بالكريمة',
        nameEn: 'Creamy Zinger Snack',
        description: '',
        category: 'snacks',
        prices: [
            { sizeAr: 'ساندوتش', sizeEn: 'Single', price: 2.25 },
            { sizeAr: 'وجبة', sizeEn: 'Meal', price: 3.25 }
        ],
        image: 'images/سناك زنجر بالكريمة.png'
    },
    {
        id: 66,
        nameAr: 'سناك دجاج بالكريمة',
        nameEn: 'Creamy Chicken Snack',
        description: '',
        category: 'snacks',
        prices: [
            { sizeAr: 'ساندوتش', sizeEn: 'Single', price: 2.00 },
            { sizeAr: 'وجبة', sizeEn: 'Meal', price: 3.00 }
        ],
        image: 'images/سناك دجاج بالكريمة.png'
    },
    {
        id: 68,
        nameAr: 'سناك سكالوب',
        nameEn: 'Scalope Snack',
        description: '',
        category: 'snacks',
        prices: [
            { sizeAr: 'ساندوتش', sizeEn: 'Single', price: 1.25 },
            { sizeAr: 'وجبة', sizeEn: 'Meal', price: 2.50 }
        ],
        image: 'images/سناك سكالوب.png'
    },
    {
        id: 70,
        nameAr: 'سناك برغر كلاسيك',
        nameEn: 'Classic Burger Snack',
        description: '',
        category: 'snacks',
        prices: [
            { sizeAr: 'ساندوتش', sizeEn: 'Single', price: 1.50 },
            { sizeAr: 'وجبة', sizeEn: 'Meal', price: 2.75 }
        ],
        image: 'images/سناك برغر كلاسيك.png'
    },
    {
        id: 72,
        nameAr: 'سناك برغر ديمي جلاس',
        nameEn: 'Demi Glace Burger Snack',
        description: '',
        category: 'snacks',
        prices: [
            { sizeAr: 'ساندوتش', sizeEn: 'Single', price: 1.75 },
            { sizeAr: 'وجبة', sizeEn: 'Meal', price: 3.00 }
        ],
        image: 'images/سناك برغر ديمي جلاس.png'
    },
    {
        id: 74,
        nameAr: 'سناك برغر إكس صاج',
        nameEn: 'X Saj Burger Snack',
        description: '',
        category: 'snacks',
        prices: [
            { sizeAr: 'ساندوتش', sizeEn: 'Single', price: 2.25 },
            { sizeAr: 'وجبة', sizeEn: 'Meal', price: 3.25 }
        ],
        image: 'images/سناك برغر إكس صاج.png'
    },
    // بطاطا
    {
        id: 76,
        nameAr: 'علبة بطاطا',
        nameEn: 'Fries Box',
        description: '',
        category: 'fries',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 0.60 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 1.00 }
        ],
        image: 'images/علبة بطاطا.png'
    },
    {
        id: 78,
        nameAr: 'علبة بطاطا ودجز',
        nameEn: 'Wedges Fries Box',
        description: '',
        category: 'fries',
        prices: [
            { sizeAr: 'عادي', sizeEn: 'Regular', price: 1.00 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 1.50 }
        ],
        image: 'images/علبة بطاطا ودجز.png'
    },
    // إضافات
    {
        id: 80,
        nameAr: 'إضافة جبنة',
        nameEn: 'Add Cheese',
        description: '',
        category: 'extras',
        price: 0.50,
        image: 'images/إضافة جبنة.png'
    },
    {
        id: 81,
        nameAr: 'إضافة صوصات العلبة',
        nameEn: 'Add Box Sauces',
        description: '',
        category: 'extras',
        price: 0.25,
        image: 'images/إضافة صوصات العلبة.png'
    },
    // العروض
    {
        id: 82,
        nameAr: '5 بيتزا صغير من اختيارك + بطاطا عائلي + ماتركس عائلي + صوصات',
        nameEn: '5 Small Pizzas of your choice + Family Fries + Family Matrix + Sauces',
        description: '',
        category: 'offers',
        price: 9.99,
        image: 'images/5 بيتزا صغير.png'
    },
    {
        id: 83,
        nameAr: '3 بيتزا من اختيارك',
        nameEn: '3 Pizzas of your choice',
        description: '',
        category: 'offers',
        prices: [
            { sizeAr: 'صغير', sizeEn: 'Small', price: 5.50 },
            { sizeAr: 'وسط', sizeEn: 'Medium', price: 8.00 },
            { sizeAr: 'كبير', sizeEn: 'Large', price: 10.00 }
        ],
        image: 'images/3 بيتزا من اختيارك.png'
    }
];

// تحديث عدد الأصناف في الفئات
categories.forEach(category => {
    if (category.id === 'all') {
        category.count = menuItems.length;
    } else {
        category.count = menuItems.filter(item => item.category === category.id).length;
    }
});

// عناصر DOM
// عناصر DOM تم تعريفها في الأعلى

// متغيرات عامة
let activeCategory = 'all';
let isLoading = false;

// أيقونات الفئات
const categoryIcons = {
    'all': `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="35" height="35" rx="5" fill="currentColor" opacity="0.8"/>
    <rect x="55" y="10" width="35" height="35" rx="5" fill="currentColor" opacity="0.8"/>
    <rect x="10" y="55" width="35" height="35" rx="5" fill="currentColor" opacity="0.8"/>
    <rect x="55" y="55" width="35" height="35" rx="5" fill="currentColor" opacity="0.8"/>
    <text x="50" y="35" font-size="20" fill="white" text-anchor="middle" font-weight="bold">ALL</text>
  </svg>`,
    'shawarma': '<i class="fas fa-drumstick-bite"></i>',
    'pizza': '<i class="fas fa-pizza-slice"></i>',
    'calzone': '<i class="fas fa-cookie"></i>',
    'snacks': '<i class="fas fa-burger"></i>',
    'fries': '<i class="fas fa-hotdog"></i>',
    'extras': '<i class="fas fa-plus-circle"></i>',
    'offers': '<i class="fas fa-tags"></i>'
};

// دوال اللغة
function toggleLanguageMenu() {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

function setLanguage(lang) {
    currentLang = lang;
    updateStaticText();
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

// إغلاق القائمة عند النقر خارجها
window.addEventListener('click', function (event) {
    if (!event.target.closest('.lang-dropdown-container')) {
        const dropdowns = document.getElementsByClassName("lang-dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

function updateStaticText() {
    const t = translations[currentLang];

    // تحديث اتجاه الصفحة
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // تحديث زر اللغة
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        let langText = 'EN';
        if (currentLang === 'ar') langText = 'EN';
        else if (currentLang === 'en') langText = 'عربي';

        langBtn.querySelector('.lang-text').textContent = langText;
    }

    // تحديث العناوين والنصوص الثابتة
    document.querySelector('.header-order .order-main').textContent = t.orderNow;

    // تحديث عنوان الأصناف
    const categoriesTitle = document.querySelector('h2 span:first-child');
    if (categoriesTitle) categoriesTitle.textContent = t.categoriesTitle;

    // تحديث زر بون كوفي
    const bonnBtn = document.querySelector('.bonn-menu-btn');
    if (bonnBtn) {
        bonnBtn.querySelector('span span:first-child').textContent = t.bonnMenu;
        bonnBtn.querySelector('span span:last-child').textContent = t.bonnDesc;
    }

    // تحديث رسالة عدم وجود أصناف
    const noItemsDiv = document.getElementById('noItems');
    if (noItemsDiv) {
        noItemsDiv.querySelector('h3').textContent = t.noItemsTitle;
        noItemsDiv.querySelector('p').textContent = t.noItemsDesc;
    }

    // تحديث الفوتر
    const footerThanks = document.querySelector('.footer-thanks-ar');
    if (footerThanks) footerThanks.textContent = t.footerThanks;

    // تحديث أزرار الفئات
    createCategoryButtons();

    // تحديث عنوان الفئة النشطة
    const activeCatObj = categories.find(cat => cat.id === activeCategory);
    if (activeCatObj) {
        if (currentLang === 'ar') activeCategoryName.textContent = activeCatObj.nameAr;
        else activeCategoryName.textContent = activeCatObj.nameEn;
    }

    // إعادة عرض الأصناف
    const filteredItems = getFilteredItems(activeCategory);
    displayMenuItems(filteredItems);
}

function renderCategories(selected) {
    return `<div class="categories">
    ${categories.map(cat => `
      <button class="category-btn${selected === cat.id ? ' active' : ''}" data-id="${cat.id}">
        ${cat.id === 'all' ? `${cat.nameAr}` : `<span class="cat-icon">${categoryIcons[cat.id] || ''}</span><span>${cat.nameAr}</span>`}
      </button>`).join('')}
  </div>`;
}

function getFilteredItems(categoryId) {
    if (categoryId === 'all') {
        return menuItems;
    }
    return menuItems.filter(item => item.category === categoryId);
}

function changeCategory(categoryId) {
    activeCategory = categoryId;
    createCategoryButtons();

    const activeCatObj = categories.find(cat => cat.id === categoryId);
    if (activeCatObj) {
        if (currentLang === 'ar') activeCategoryName.textContent = activeCatObj.nameAr;
        else activeCategoryName.textContent = activeCatObj.nameEn;
    }

    const filteredItems = getFilteredItems(categoryId);
    displayMenuItems(filteredItems);
}

function createCategoryButtons() {
    categoryFilter.innerHTML = '';

    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = `category-btn${activeCategory === category.id ? ' active' : ''}`;
        button.dataset.id = category.id;

        let name;
        if (currentLang === 'ar') name = category.nameAr;
        else name = category.nameEn;

        if (category.id === 'all') {
            // تحديث نص الأيقونة "الكل" حسب اللغة
            let icon = categoryIcons[category.id];
            let allText = 'All';
            if (currentLang === 'ar') allText = 'الكل';

            icon = icon.replace('ALL', allText);

            button.innerHTML = `
            <span class="cat-icon">${icon}</span>
            <span>${name}</span>
          `;
        } else {
            button.innerHTML = `
            <span class="cat-icon">${categoryIcons[category.id] || ''}</span>
            <span>${name}</span>
          `;
        }
        button.addEventListener('click', () => changeCategory(category.id));
        categoryFilter.appendChild(button);
    });
}

// إنشاء بطاقة صنف
function createMenuItemCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-item-card';
    const t = translations[currentLang];

    const imageUrl = encodeURI(item.image || '');

    // تحديد العناوين بناءً على اللغة
    let mainTitle;
    if (currentLang === 'ar') mainTitle = item.nameAr;
    else mainTitle = item.nameEn;

    // نص "لا توجد صورة"
    let noImageText = 'No Image';
    if (currentLang === 'ar') noImageText = 'لا توجد صورة';

    card.innerHTML = `
        <div class="card-image-container">
            ${item.image ? `<img data-src="${imageUrl}" alt="${mainTitle}" class="card-image lazy-image"
                 loading="lazy" decoding="async"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
            <div class="no-image" style="display:${item.image ? 'none' : 'flex'};align-items:center;justify-content:center;height:12rem;width:100%;background:var(--bg-element);color:var(--color-accent);font-weight:bold;font-size:1rem;border-radius:0.75rem 0.75rem 0 0;">
                <span>${noImageText}</span>
            </div>
            ${item.image ? `<div class="image-overlay">
                <button class="view-image-btn" onclick="openImageModal('${imageUrl}', '${mainTitle.replace(/'/g, "\\'")}')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </button>
            </div>` : ''}
        </div>
        
        <div class="card-content">
            <div class="card-header">
                <h3 class="card-title-ar">${mainTitle}</h3>
            </div>
            
            <div class="card-price" style="${item.prices ? 'width: 100%; min-height: auto; align-items: stretch;' : ''}">
              ${item.prices ? `
                <div class="price-list" style="width: 100%; display: flex; flex-direction: column; gap: 0.5rem; padding: 0.25rem 0;">
                    ${item.prices.map(p => `
                        <div class="price-row" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--color-border); padding-bottom: 0.25rem;">
                            <span class="price-size" style="font-size: 0.9rem; color: var(--color-text); font-weight: bold; opacity: 0.85;">${currentLang === 'ar' ? p.sizeAr : p.sizeEn}</span>
                            <span class="price-badge" style="font-size: 0.9rem; padding: 0.2rem 0.6rem; margin: 0; min-width: 65px; text-align: center;">${p.price.toFixed(2)} JD</span>
                        </div>
                    `).join('')}
                </div>
              ` : `<span class="price-badge">${item.price !== undefined ? item.price.toFixed(2) : ''} JD</span>`}
            </div>
            ${item.description ? `<div class="card-extra-info">
                ${t[item.description] || item.description}
              </div>` : ''}
            <div class="card-footer">
                <div class="footer-info-grid" style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
                    ${item.image ? `<div class="footer-info-item" onclick="openImageModal('${imageUrl}', '${mainTitle.replace(/'/g, "\\'")}')" style="width: auto; padding: 0 1.5rem;">
                        <div class="footer-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </div>
                        <span>${t.viewImage}</span>
                    </div>` : ''}
                    <span style="color: var(--color-accent); font-weight: bold; font-size: 1.1rem; letter-spacing: 1px; font-family: 'Noto Kufi Arabic', sans-serif;">Shawarma X Saj</span>
                </div>
            </div>
        </div>
    `;

    return card;
}

// ==========================================================
// نظام التحميل الكسول للصور (Lazy Loading)
// الفكرة: الصور لا تُحمَّل فعلياً (لا يوجد طلب شبكة) إلا عندما
// تقترب البطاقة من الظهور ضمن نطاق رؤية المستخدم (viewport).
// هذا يقلل استهلاك الباندويث بشكل كبير، لأن الصور التي لم
// يصل إليها المستخدم بالتمرير لن تُحمَّل إطلاقاً.
// ==========================================================
let lazyImageObserver = null;

function getLazyImageObserver() {
    // ننشئ الـ observer مرة واحدة فقط ونعيد استخدامه لكل الصور
    if (lazyImageObserver) return lazyImageObserver;

    // دعم المتصفحات القديمة جداً التي لا تدعم IntersectionObserver:
    // في هذه الحالة نحمّل الصور مباشرة كخطة بديلة (fallback)
    if (!('IntersectionObserver' in window)) {
        lazyImageObserver = {
            observe: (img) => {
                img.src = img.dataset.src;
                img.classList.remove('lazy-image');
            }
        };
        return lazyImageObserver;
    }

    lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // نستبدل data-src بـ src الفعلي، وهذا ما يشغّل طلب التحميل
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.remove('lazy-image');
                img.classList.add('lazy-loaded');
                observer.unobserve(img); // نوقف مراقبة هذه الصورة بعد تحميلها
            }
        });
    }, {
        // نبدأ تحميل الصورة قبل 200px من وصولها فعلياً للشاشة
        // لضمان ظهورها بسلاسة دون انتظار ملحوظ من المستخدم
        rootMargin: '200px 0px',
        threshold: 0.01
    });

    return lazyImageObserver;
}

// تفعيل المراقبة على كل الصور الكسولة الموجودة حالياً في menuGrid
function observeLazyImages() {
    const observer = getLazyImageObserver();
    const lazyImages = menuGrid.querySelectorAll('img.lazy-image[data-src]');
    lazyImages.forEach(img => observer.observe(img));
}

// عرض الأصناف
function displayMenuItems(items) {
    menuGrid.innerHTML = '';

    if (items.length === 0) {
        noItems.style.display = 'block';
        return;
    }

    noItems.style.display = 'none';

    // إضافة تأخير بسيط لكل بطاقة لإنشاء تأثير متتابع
    let delay = 0;

    // تحديد ما إذا كان الجهاز محمولاً وتعيين قيمة التأخير المناسبة
    const isMobile = window.innerWidth <= 768;
    // تقليل التأخير على الأجهزة المحمولة للعرض المزدوج
    const delayIncrement = isMobile ? 50 : 100;

    items.forEach(item => {
        const card = createMenuItemCard(item);
        card.style.animationDelay = `${delay}ms`;
        delay += delayIncrement; // زيادة التأخير لكل بطاقة بناءً على نوع الجهاز
        menuGrid.appendChild(card);
    });

    // بعد إضافة كل البطاقات للـ DOM، نفعّل مراقبة الصور الكسولة
    // (سواء كانت هذه كل أصناف "الكل" أو أصناف فئة معينة فقط —
    // في الحالتين لن تُحمَّل الصور إلا عند التمرير إليها)
    observeLazyImages();
}

// فتح مودال الصورة
function openImageModal(imageUrl, title) {
    modalImage.src = imageUrl;
    modalTitle.textContent = title;
    imageModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// إغلاق مودال الصورة
function closeImageModal() {
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // زر اللغة
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLanguageMenu();
        });
    }

    // خيارات اللغة
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // إغلاق المودال
    modalClose.addEventListener('click', closeImageModal);
    modalBackdrop.addEventListener('click', closeImageModal);

    // إغلاق المودال بمفتاح Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal.style.display === 'flex') {
            closeImageModal();
        }
    });
}

// إعداد معالجة أخطاء الشعار
function setupLogoErrorHandling() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('error', function () {
            this.style.display = 'none';
        });
    }
}

// تهيئة التطبيق
function initApp() {
    setupLogoErrorHandling();
    setupEventListeners();
    createCategoryButtons();

    // عند الضغط على الشعار في الهيدر انتقل لأعلى الصفحة
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.style.cursor = 'pointer';
        logoContainer.addEventListener('click', function (e) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // إظهار شاشة التحميل أولاً
    loadingSpinner.style.display = 'flex';
    menuGrid.style.display = 'none';

    // تأخير قصير لإظهار الأصناف بتأثير جميل
    setTimeout(() => {
        loadingSpinner.style.display = 'none';
        menuGrid.style.display = 'grid';

        // عرض جميع الأصناف في البداية
        const allItems = getFilteredItems('all');
        displayMenuItems(allItems);
    }, 500);
}

// تشغيل التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initApp);
