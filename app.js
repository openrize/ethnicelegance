/* ======================================================
   ETHNIC ELEGANCE – E-Commerce Application Logic
   ====================================================== */

// ─── PRODUCT DATABASE ───
const ALL_PRODUCTS = [
    {
        "id": 1,
        "name": "Scarlet Heritage Lehenga Set",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 1.04.03 PM.jpeg",
        "rating": 4.6,
        "reviews": 107,
        "badge": "",
        "description": "A rich red embroidered lehenga set with ornate border detailing and festive occasion appeal.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "bridal festive red embroidered lehenga traditional occasion wear"
        ],
        "discount": 40
    },
    {
        "id": 2,
        "name": "Mustard Sunburst Lehenga Set",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 1.04.02 PM.jpeg",
        "rating": 4.7,
        "reviews": 114,
        "badge": "",
        "description": "A mustard yellow lehenga set with statement border work and a bright celebratory look.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "mustard yellow festive lehenga embroidered traditional ethnic wear"
        ],
        "discount": 40
    },
    {
        "id": 3,
        "name": "Royal Plum Lehenga Set",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 1.04.02 PM (1).jpeg",
        "rating": 4.8,
        "reviews": 121,
        "badge": "",
        "description": "A deep plum lehenga set with multicolor border accents designed for festive and wedding styling.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "plum purple festive lehenga ethnic wear embroidered set"
        ],
        "discount": 40
    },
    {
        "id": 4,
        "name": "Meadow Green Lehenga Set",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 1.04.02 PM (2).jpeg",
        "rating": 4.9,
        "reviews": 128,
        "badge": "New",
        "description": "A vibrant green lehenga set featuring contrast border detailing and a festive silhouette.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "green lehenga festive embroidered traditional outfit"
        ],
        "discount": 40
    },
    {
        "id": 5,
        "name": "Ivory Regal Lehenga Set",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 1.04.01 PM (2).jpeg",
        "rating": 4.5,
        "reviews": 135,
        "badge": "Bestseller",
        "description": "An ivory lehenga set with elegant gold-toned border work for weddings and special events.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "ivory cream lehenga wedding festive ethnic wear"
        ],
        "discount": 40
    },
    {
        "id": 6,
        "name": "Midnight Plum Floral Border Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 1.04.01 PM.jpeg",
        "rating": 4.6,
        "reviews": 142,
        "badge": "",
        "description": "A dark plum lehenga displayed with floral border detailing and a classic festive finish.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "plum floral border lehenga traditional occasion wear"
        ],
        "discount": 40
    },
    {
        "id": 7,
        "name": "Lime Zari Border Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 1.04.00 PM.jpeg",
        "rating": 4.7,
        "reviews": 149,
        "badge": "",
        "description": "A bright lime lehenga with zari-inspired border accents and statement festive color.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "lime green zari lehenga traditional festive"
        ],
        "discount": 40
    },
    {
        "id": 8,
        "name": "Vermilion Celebration Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 1.04.03 PM.jpeg",
        "rating": 4.8,
        "reviews": 156,
        "badge": "New",
        "description": "A festive red lehenga with standout border work designed for wedding-season dressing.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "red festive lehenga wedding ethnic wear"
        ],
        "discount": 40
    },
    {
        "id": 9,
        "name": "Golden Marigold Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 1.03.58 PM.jpeg",
        "rating": 4.9,
        "reviews": 163,
        "badge": "",
        "description": "A golden marigold lehenga with contrast embroidered border for a bold traditional look.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "gold mustard lehenga festive traditional embroidered"
        ],
        "discount": 40
    },
    {
        "id": 10,
        "name": "Navy Fuchsia Colorblock Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.58 PM.jpeg",
        "rating": 4.5,
        "reviews": 170,
        "badge": "Bestseller",
        "description": "A navy and fuchsia lehenga with vibrant panel contrast and festive styling appeal.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "navy pink colorblock lehenga festive"
        ],
        "discount": 40
    },
    {
        "id": 11,
        "name": "Royal Blue Saffron Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.57 PM.jpeg",
        "rating": 4.6,
        "reviews": 177,
        "badge": "",
        "description": "A royal blue lehenga set enhanced with saffron-toned accents and multicolor border work.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "blue orange lehenga festive ethnic"
        ],
        "discount": 40
    },
    {
        "id": 12,
        "name": "Silver Ivory Bridal Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.57 PM (1).jpeg",
        "rating": 4.7,
        "reviews": 184,
        "badge": "New",
        "description": "An ivory lehenga with silver-toned embellishment details suited for wedding events.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "ivory silver lehenga bridal festive"
        ],
        "discount": 40
    },
    {
        "id": 13,
        "name": "Sunset Multicolor Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.56 PM (2).jpeg",
        "rating": 4.8,
        "reviews": 191,
        "badge": "",
        "description": "A bright lehenga with pink, yellow, and navy panels for statement festive dressing.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "multicolor lehenga pink yellow navy festive"
        ],
        "discount": 40
    },
    {
        "id": 14,
        "name": "Wine Cream Tiered Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.57 PM (2).jpeg",
        "rating": 4.9,
        "reviews": 198,
        "badge": "",
        "description": "A wine-toned lehenga with cream tier detailing for a rich traditional silhouette.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "wine cream lehenga tiered ethnic festive"
        ],
        "discount": 40
    },
    {
        "id": 15,
        "name": "Rose Pink Panel Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.56 PM (1).jpeg",
        "rating": 4.5,
        "reviews": 205,
        "badge": "Bestseller",
        "description": "A rose pink lehenga featuring contrast panel work and occasion-ready detailing.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "pink panel lehenga festive ethnic wear"
        ],
        "discount": 40
    },
    {
        "id": 16,
        "name": "Indigo Print Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.54 PM.jpeg",
        "rating": 4.6,
        "reviews": 212,
        "badge": "New",
        "description": "An indigo-toned printed lehenga with contemporary ethnic styling and contrast accents.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "indigo printed lehenga blue ethnic festive"
        ],
        "discount": 40
    },
    {
        "id": 17,
        "name": "Champagne Gold Embroidered Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.31 PM.jpeg",
        "rating": 4.7,
        "reviews": 219,
        "badge": "",
        "description": "A champagne gold lehenga with elegant all-over patterning for refined festive wear.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "champagne gold lehenga embroidered festive"
        ],
        "discount": 40
    },
    {
        "id": 18,
        "name": "Blush Floral Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.31 PM (2).jpeg",
        "rating": 4.8,
        "reviews": 226,
        "badge": "",
        "description": "A soft blush lehenga with floral-inspired print and a light festive aesthetic.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "blush floral lehenga pink festive"
        ],
        "discount": 40
    },
    {
        "id": 19,
        "name": "Dusty Rose Classic Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.30 PM.jpeg",
        "rating": 4.9,
        "reviews": 233,
        "badge": "",
        "description": "A dusty rose lehenga with fine traditional patterning and a timeless festive look.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "dusty rose lehenga ethnic traditional festive"
        ],
        "discount": 40
    },
    {
        "id": 20,
        "name": "Coral Traditional Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.29 PM.jpeg",
        "rating": 4.5,
        "reviews": 240,
        "badge": "New",
        "description": "A coral lehenga set with traditional pattern work and bold festive color.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "coral red lehenga traditional festive"
        ],
        "discount": 40
    },
    {
        "id": 21,
        "name": "Sage Pastel Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-04-08 at 12.58.30 PM (2).jpeg",
        "rating": 4.6,
        "reviews": 247,
        "badge": "",
        "description": "A sage green lehenga with soft patterning for elegant festive and occasion wear.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "sage green lehenga pastel festive"
        ],
        "discount": 40
    },
    {
        "id": 22,
        "name": "Olive Ivory Border Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-03-30 at 1.04.43 PM.jpeg",
        "rating": 4.7,
        "reviews": 254,
        "badge": "",
        "description": "An olive lehenga with ivory-toned border work for traditional celebratory dressing.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "olive ivory lehenga festive border"
        ],
        "discount": 40
    },
    {
        "id": 23,
        "name": "Tricolor Festive Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-03-30 at 1.04.42 PM.jpeg",
        "rating": 4.8,
        "reviews": 261,
        "badge": "",
        "description": "A striking yellow, orange, and red lehenga designed for high-visibility festive occasions.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "yellow orange red lehenga festive multicolor"
        ],
        "discount": 40
    },
    {
        "id": 24,
        "name": "Black Copper Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-03-30 at 1.04.42 PM (2).jpeg",
        "rating": 4.9,
        "reviews": 268,
        "badge": "New",
        "description": "A black lehenga with copper-orange accents and border detail for evening festive styling.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "black copper lehenga festive evening"
        ],
        "discount": 40
    },
    {
        "id": 25,
        "name": "Fuchsia Navy Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.24 PM.jpeg",
        "rating": 4.5,
        "reviews": 275,
        "badge": "Bestseller",
        "description": "A bright fuchsia lehenga balanced with navy contrast for statement festive wear.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "fuchsia navy lehenga festive traditional"
        ],
        "discount": 40
    },
    {
        "id": 26,
        "name": "Burnt Orange Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.23 PM (1).jpeg",
        "rating": 4.6,
        "reviews": 282,
        "badge": "",
        "description": "A burnt orange lehenga with contrast border accents and traditional occasion styling.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "burnt orange lehenga festive ethnic"
        ],
        "discount": 40
    },
    {
        "id": 27,
        "name": "Teal Pink Lehenga",
        "category": "lehenga",
        "price": 89.97,
        "originalPrice": 149.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.22 PM.jpeg",
        "rating": 4.7,
        "reviews": 289,
        "badge": "",
        "description": "A teal lehenga accented with bright pink border tones for vibrant festive dressing.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "teal pink lehenga festive traditional"
        ],
        "discount": 40
    },
    {
        "id": 28,
        "name": "White Lilac Anarkali Set",
        "category": "lehenga",
        "price": 69.97,
        "originalPrice": 119.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.22 PM (1).jpeg",
        "rating": 4.8,
        "reviews": 296,
        "badge": "New",
        "description": "A white and lilac traditional set with graceful flow and occasion-ready finish.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "white lilac anarkali ethnic festive"
        ],
        "discount": 41
    },
    {
        "id": 29,
        "name": "Magenta Drape Festive Set",
        "category": "ghagra",
        "price": 59.97,
        "originalPrice": 99.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.22 PM (2).jpeg",
        "rating": 4.9,
        "reviews": 103,
        "badge": "",
        "description": "A dramatic magenta traditional outfit with fluid drape styling for festive wear.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "colors": [
            "magenta drape festive ethnic wear"
        ],
        "discount": 40
    },
    {
        "id": 30,
        "name": "Sunshine Yellow Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.22 PM (3).jpeg",
        "rating": 4.5,
        "reviews": 110,
        "badge": "Bestseller",
        "description": "A bright yellow full-flare skirt designed for pairing with festive blouses and dupattas.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "yellow flared skirt ethnic festive"
        ],
        "discount": 50
    },
    {
        "id": 31,
        "name": "Ivory Classic Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.21 PM.jpeg",
        "rating": 4.6,
        "reviews": 117,
        "badge": "",
        "description": "An ivory flared skirt with clean traditional styling for mix-and-match ethnic looks.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "ivory flared skirt ethnic traditional"
        ],
        "discount": 50
    },
    {
        "id": 32,
        "name": "Sand Beige Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.21 PM (1).jpeg",
        "rating": 4.7,
        "reviews": 124,
        "badge": "New",
        "description": "A sand beige flared skirt with versatile styling for elegant ethnic combinations.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "beige flared skirt ethnic mix match"
        ],
        "discount": 50
    },
    {
        "id": 33,
        "name": "Mauve Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.21 PM (2).jpeg",
        "rating": 4.8,
        "reviews": 131,
        "badge": "",
        "description": "A mauve flared skirt offering soft festive color and full-volume silhouette.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "mauve flared skirt ethnic festive"
        ],
        "discount": 50
    },
    {
        "id": 34,
        "name": "Navy Classic Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.20 PM.jpeg",
        "rating": 4.9,
        "reviews": 138,
        "badge": "",
        "description": "A deep navy full-flare skirt for timeless ethnic styling and easy pairing.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "navy flared skirt traditional festive"
        ],
        "discount": 50
    },
    {
        "id": 35,
        "name": "Charcoal Black Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.20 PM (1).jpeg",
        "rating": 4.5,
        "reviews": 145,
        "badge": "Bestseller",
        "description": "A charcoal-black flared skirt designed for elevated festive separates styling.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "black flared skirt ethnic traditional"
        ],
        "discount": 50
    },
    {
        "id": 36,
        "name": "Mustard Solid Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.20 PM (2).jpeg",
        "rating": 4.6,
        "reviews": 152,
        "badge": "New",
        "description": "A solid mustard flared skirt ideal for festive pairings and statement ethnic looks.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "mustard flared skirt festive ethnic"
        ],
        "discount": 50
    },
    {
        "id": 37,
        "name": "Sunset Orange Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.19 PM.jpeg",
        "rating": 4.7,
        "reviews": 159,
        "badge": "",
        "description": "A vivid orange flared skirt with bold color impact for festive styling.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "orange flared skirt festive traditional"
        ],
        "discount": 50
    },
    {
        "id": 38,
        "name": "Wine Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.16 PM.jpeg",
        "rating": 4.8,
        "reviews": 166,
        "badge": "",
        "description": "A wine-toned flared skirt for rich festive styling and traditional pairings.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "wine flared skirt festive ethnic"
        ],
        "discount": 50
    },
    {
        "id": 39,
        "name": "Emerald Netted Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.16 PM (1).jpeg",
        "rating": 4.9,
        "reviews": 173,
        "badge": "",
        "description": "A deep emerald skirt with sheer or net-inspired finish for dressed-up ethnic styling.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "emerald net skirt festive ethnic"
        ],
        "discount": 50
    },
    {
        "id": 40,
        "name": "Sky Blue Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.16 PM (2).jpeg",
        "rating": 4.5,
        "reviews": 180,
        "badge": "New",
        "description": "A sky blue flared skirt for playful festive styling and mix-and-match looks.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "sky blue flared skirt ethnic"
        ],
        "discount": 50
    },
    {
        "id": 41,
        "name": "Violet Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.14 PM.jpeg",
        "rating": 4.6,
        "reviews": 187,
        "badge": "",
        "description": "A violet full-flare skirt with vibrant color and occasion-ready silhouette.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "violet flared skirt festive"
        ],
        "discount": 50
    },
    {
        "id": 42,
        "name": "Hot Pink Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.14 PM (1).jpeg",
        "rating": 4.7,
        "reviews": 194,
        "badge": "",
        "description": "A hot pink flared skirt that adds standout festive color to ethnic outfits.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "hot pink flared skirt festive traditional"
        ],
        "discount": 50
    },
    {
        "id": 43,
        "name": "Cobalt Blue Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.14 PM (2).jpeg",
        "rating": 4.8,
        "reviews": 201,
        "badge": "",
        "description": "A cobalt blue flared skirt crafted for vibrant ethnic styling combinations.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "cobalt blue flared skirt festive"
        ],
        "discount": 50
    },
    {
        "id": 44,
        "name": "Lime Yellow Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.14 PM (3).jpeg",
        "rating": 4.9,
        "reviews": 208,
        "badge": "New",
        "description": "A lime-yellow flared skirt with energetic festive color and full volume.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "lime yellow flared skirt ethnic festive"
        ],
        "discount": 50
    },
    {
        "id": 45,
        "name": "Orchid Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.13 PM.jpeg",
        "rating": 4.5,
        "reviews": 215,
        "badge": "Bestseller",
        "description": "An orchid-toned flared skirt that works well for colorful festive styling.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "orchid flared skirt traditional festive"
        ],
        "discount": 50
    },
    {
        "id": 46,
        "name": "Lavender Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.13 PM (1).jpeg",
        "rating": 4.6,
        "reviews": 222,
        "badge": "",
        "description": "A lavender flared skirt with soft color and occasion-friendly elegance.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "lavender flared skirt ethnic"
        ],
        "discount": 50
    },
    {
        "id": 47,
        "name": "Midnight Black Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.12 PM.jpeg",
        "rating": 4.7,
        "reviews": 229,
        "badge": "",
        "description": "A midnight black flared skirt with timeless styling versatility for ethnic looks.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "black flared skirt festive mix match"
        ],
        "discount": 50
    },
    {
        "id": 48,
        "name": "Stone Beige Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.13 PM (3).jpeg",
        "rating": 4.8,
        "reviews": 236,
        "badge": "New",
        "description": "A stone beige flared skirt suited for understated festive styling.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "stone beige flared skirt ethnic"
        ],
        "discount": 50
    },
    {
        "id": 49,
        "name": "White Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.12 PM (1).jpeg",
        "rating": 4.9,
        "reviews": 243,
        "badge": "",
        "description": "A clean white flared skirt for classic mix-and-match traditional outfits.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "white flared skirt festive traditional"
        ],
        "discount": 50
    },
    {
        "id": 50,
        "name": "Rust Orange Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.12 PM (2).jpeg",
        "rating": 4.5,
        "reviews": 250,
        "badge": "Bestseller",
        "description": "A rust orange flared skirt with warm festive color and full silhouette.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "rust orange flared skirt ethnic festive"
        ],
        "discount": 50
    },
    {
        "id": 51,
        "name": "Teal Blue Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.12 PM (3).jpeg",
        "rating": 4.6,
        "reviews": 257,
        "badge": "",
        "description": "A teal blue flared skirt that brings bold color to traditional mix-and-match styling.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "teal blue flared skirt festive"
        ],
        "discount": 50
    },
    {
        "id": 52,
        "name": "Raspberry Pink Flared Skirt",
        "category": "skirt",
        "price": 39.97,
        "originalPrice": 79.97,
        "image": "images/WhatsApp Image 2026-03-19 at 12.15.11 PM.jpeg",
        "rating": 4.7,
        "reviews": 264,
        "badge": "New",
        "description": "A raspberry pink flared skirt for vibrant festive outfits and ethnic coordination.Traditional festive silhouetteStatement color and border detailingSuitable for celebrations, weddings, and cultural occasions",
        "sizes": [
            "Free Size"
        ],
        "colors": [
            "raspberry pink flared skirt ethnic"
        ],
        "discount": 50
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
    // Shared initializers (Header/Footer components)
    updateCartUI();
    updateWishlistUI();
    bindNavbarScroll();
    bindScrollTop();

    // Context-specific initializers
    if (document.getElementById('hero-particles')) createParticles();
    if (document.getElementById('products-grid')) renderProducts();
    if (document.getElementById('testimonials-slider')) {
        renderTestimonialDots();
        startTestimonialTimer();
    }

    // Mobile nav toggle
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            document.getElementById('nav-links').classList.toggle('open');
        });
    }

    // Global Action Listeners (Check existence first to avoid errors)
    const cartToggle = document.getElementById('cart-toggle');
    if (cartToggle) cartToggle.addEventListener('click', openCart);

    const wishlistToggle = document.getElementById('wishlist-toggle');
    if (wishlistToggle) wishlistToggle.addEventListener('click', openWishlist);

    const searchToggle = document.getElementById('search-toggle');
    if (searchToggle) searchToggle.addEventListener('click', toggleSearch);

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
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
    
    // Determine dynamic badge
    let badgeHtml = '';
    if (p.badge) {
        badgeHtml = `<span class="product-badge ${p.badge.toLowerCase()}">${p.badge}</span>`;
    } else if (p.discount >= 50) {
      badgeHtml = `<span class="product-badge sale">SALE ${p.discount}% OFF</span>`;
    }

    return `
    <div class="product-card" style="animation-delay:${delay}s" onclick="openProductModal(${p.id})">
      <div class="product-img-container">
        ${badgeHtml}
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="product-quick-add">
          <button class="quick-add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">Quick Add +</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${getCategoryLabel(p.category)}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price">
          <span class="price-current">$${p.price.toFixed(2)}</span>
          ${p.originalPrice > p.price ? `<span class="price-original">$${p.originalPrice.toFixed(2)}</span>` : ''}
        </div>
      </div>
    </div>`;
}

function getCategoryLabel(cat) {
    const labels = { lehenga: 'Lehenga Choli', ghagra: 'Ghagra / Chaniya', dupatta: 'Dupatta', jewelry: 'Jewelry', purse: 'Purse & Clutch', watch: 'Ethnic Watch', skirt: 'Flared Skirt' };
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
    console.log('Opening modal for product ID:', id);
    const p = ALL_PRODUCTS.find(x => x.id == id);
    if (!p) {
        console.error('Product not found for ID:', id);
        return;
    }
    const inWishlist = wishlist.some(w => w.id === p.id);

    document.getElementById('modal-content').innerHTML = `
    <div class="modal-inner">
      <div class="modal-img-column">
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <div class="modal-info-column">
        <span class="modal-category">${getCategoryLabel(p.category)}</span>
        <h2 class="modal-title">${p.name}</h2>
        <div class="modal-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-text">(${p.reviews} Professional Reviews)</span>
        </div>
        <div class="modal-price">
          <span class="modal-price-current">$${p.price.toFixed(2)}</span>
          ${p.originalPrice > p.price ? `<span class="modal-price-original">$${p.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        
        <p class="modal-description-brief">
          Artisanal craftsmanship meets contemporary style in this exquisite ${p.name}. 
          Perfectly tailored for festive celebrations and special occasions.
        </p>

        <div class="modal-selection-group">
          <span class="selection-label">Select Size</span>
          <div class="size-chips">
            ${p.sizes.map((s, i) => `
              <div class="size-chip ${i === 0 ? 'active' : ''}" onclick="selectSizeChip(this)">${s}</div>
            `).join('')}
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn-atc" onclick="addToCartFromModal(${p.id})">Add to Bag</button>
          <button class="btn-wishlist" onclick="toggleWishlist(${p.id})">
            ${inWishlist ? 'Saved' : 'Wishlist'}
          </button>
        </div>

        <div class="modal-tabs">
          <div class="tab-header">
            <button class="tab-btn active" onclick="switchTab(this, 'desc')">Description</button>
            <button class="tab-btn" onclick="switchTab(this, 'details')">Details</button>
            <button class="tab-btn" onclick="switchTab(this, 'shipping')">Shipping</button>
          </div>
          <div id="tab-desc" class="tab-content active">
            ${p.description}
          </div>
          <div id="tab-details" class="tab-content">
            • Material: Premium Heritage Fabric<br>
            • Fit: Tailored Elegance<br>
            • Wash Care: Dry Clean Only<br>
            • Origin: Handcrafted in India
          </div>
          <div id="tab-shipping" class="tab-content">
             Estimated Delivery: 5 - 7 Business Days.<br>
             Free worldwide shipping on orders above $12.
          </div>
        </div>
      </div>
    </div>`;
    
    document.getElementById('product-modal-overlay').classList.add('active');
    document.getElementById('product-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    console.log('Modal elements activated');
}

function selectSizeChip(el) {
    el.parentElement.querySelectorAll('.size-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

function switchTab(btn, tabId) {
    btn.parentElement.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const parent = btn.closest('.modal-info-column');
    parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    parent.querySelector('#tab-' + tabId).classList.add('active');
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

// ─── POLICY NAVIGATION ───
const POLICIES = {
  shipping: {
    title: 'Shipping & Delivery',
    content: `
      <p>We take great pride in our handcrafted collections and ensure they reach you in perfect condition. We ship globally from our heritage workshops in India.</p>
      <h4>Delivery Times</h4>
      <ul>
        <li><strong>Standard Shipping:</strong> 5-10 business days.</li>
        <li><strong>Express Shipping:</strong> 3-5 business days.</li>
      </ul>
      <h4>Shipping Rates</h4>
      <p>Enjoy <strong>Free Standard Shipping</strong> on all orders above $12. For orders below $12, a flat rate of $5 applies.</p>
    `
  },
  returns: {
    title: 'Returns & Exchanges',
    content: `
      <p>Your satisfaction is our priority. If you are not completely satisfied with your purchase, we are here to help.</p>
      <h4>15-Day Return Policy</h4>
      <p>Items can be returned within 15 days of delivery. The item must be unused, in the same condition that you received it, and in the original packaging.</p>
      <h4>Exchanges</h4>
      <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, please contact our support team.</p>
    `
  },
  terms: {
    title: 'Terms of Service',
    content: `
      <p>Welcome to Ethnic Elegance. By accessing our website, you agree to comply with our terms and conditions.</p>
      <h4>Artisanal Variations</h4>
      <p>Please note that because our products are handcrafted using traditional methods, slight variations in color, weave, and embroidery are expected and celebrated as a mark of authenticity.</p>
      <h4>Pricing</h4>
      <p>All prices are subject to change without notice. We reserve the right to modify or discontinue services at any time.</p>
    `
  },
  privacy: {
    title: 'Privacy Policy',
    content: `
      <p>We respect your privacy and are committed to protecting your personal data.</p>
      <h4>Data Usage</h4>
      <p>We only collect information necessary to process your orders and provide a personalized shopping experience. We never sell your data to third parties.</p>
      <h4>Security</h4>
      <p>Our website uses industry-standard SSL encryption to ensure your payment information and personal details are always secure.</p>
    `
  }
};

function showPolicy(slug) {
  const policy = POLICIES[slug];
  if (!policy) return;

  const modal = document.getElementById('product-modal');
  const overlay = document.getElementById('product-modal-overlay');
  
  document.getElementById('modal-content').innerHTML = `
    <div class="policy-page" style="padding: 60px; width: 100%;">
      <div style="max-width: 800px; margin: 0 auto;">
        <h2 style="font-family: var(--font-display); font-size: 2.5rem; margin-bottom: 30px; border-bottom: 1px solid var(--border-light); padding-bottom: 20px;">
          ${policy.title}
        </h2>
        <div class="policy-body" style="line-height: 1.8; color: var(--text-muted);">
          ${policy.content}
        </div>
        <button class="btn-primary" onclick="closeProductModal()" style="margin-top: 40px; padding: 14px 40px;">Close</button>
      </div>
    </div>
  `;
  
  overlay.classList.add('active');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
// ─── CHECKOUT SIMULATOR ───
function checkout() {
    closeAll();
    const modal = document.getElementById('product-modal');
    const overlay = document.getElementById('product-modal-overlay');
    
    document.getElementById('modal-content').innerHTML = `
      <div class="checkout-simulator" style="padding: 60px; width: 100%;">
        <div style="max-width: 600px; margin: 0 auto;">
          <h2 style="font-family: var(--font-display); font-size: 2rem; margin-bottom: 10px;">Secure Checkout</h2>
          <p style="color: var(--text-muted); margin-bottom: 40px;">Step 1 of 3: Shipping Information</p>
          
          <form id="checkout-form" onsubmit="event.preventDefault(); nextCheckoutStep(2)">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div class="form-group">
                <label class="selection-label">First Name</label>
                <input type="text" required style="width:100%; padding:14px; border:1px solid var(--border);">
              </div>
              <div class="form-group">
                <label class="selection-label">Last Name</label>
                <input type="text" required style="width:100%; padding:14px; border:1px solid var(--border);">
              </div>
            </div>
            <div class="form-group" style="margin-bottom: 20px;">
              <label class="selection-label">Email Address</label>
              <input type="email" required style="width:100%; padding:14px; border:1px solid var(--border);">
            </div>
            <div class="form-group" style="margin-bottom: 20px;">
              <label class="selection-label">Shipping Address</label>
              <input type="text" required style="width:100%; padding:14px; border:1px solid var(--border);">
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px;">
              <div class="form-group">
                <label class="selection-label">City</label>
                <input type="text" required style="width:100%; padding:14px; border:1px solid var(--border);">
              </div>
              <div class="form-group">
                <label class="selection-label">Postal Code</label>
                <input type="text" required style="width:100%; padding:14px; border:1px solid var(--border);">
              </div>
            </div>
            <button class="btn-primary full-width" style="padding: 20px;">Continue to Shipping</button>
          </form>
        </div>
      </div>
    `;
    
    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function nextCheckoutStep(step) {
  const content = document.getElementById('modal-content');
  if (step === 2) {
    content.innerHTML = `
      <div class="checkout-simulator" style="padding: 60px; width: 100%;">
        <div style="max-width: 600px; margin: 0 auto;">
          <h2 style="font-family: var(--font-display); font-size: 2rem; margin-bottom: 10px;">Shipping Method</h2>
          <p style="color: var(--text-muted); margin-bottom: 40px;">Step 2 of 3: Choose your speed</p>
          
          <div style="border: 1.5px solid var(--primary); padding: 20px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="display: block;">Standard Delivery</strong>
              <span style="font-size: 0.8rem; color: var(--text-muted);">5-7 Business Days</span>
            </div>
            <strong>FREE</strong>
          </div>
          <div style="border: 1px solid var(--border); padding: 20px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
            <div>
              <strong style="display: block;">Express Shipping</strong>
              <span style="font-size: 0.8rem; color: var(--text-muted);">2-3 Business Days</span>
            </div>
            <strong>$12.00</strong>
          </div>
          
          <button class="btn-primary full-width" style="padding: 20px;" onclick="nextCheckoutStep(3)">Continue to Payment</button>
        </div>
      </div>
    `;
  } else if (step === 3) {
    content.innerHTML = `
      <div class="checkout-simulator" style="padding: 60px; width: 1100px;">
        <div style="max-width: 600px; margin: 0 auto;">
          <h2 style="font-family: var(--font-display); font-size: 2rem; margin-bottom: 10px;">Payment Information</h2>
          <p style="color: var(--text-muted); margin-bottom: 40px;">Step 3 of 3: Secure Payment</p>
          
          <div style="background: var(--bg-alt); padding: 20px; border-radius: 4px; margin-bottom: 30px; display: grid; gap: 15px;">
            <div class="form-group">
              <label class="selection-label">Card Number</label>
              <input type="text" placeholder="XXXX XXXX XXXX XXXX" style="width:100%; padding:14px; border:1px solid var(--border);">
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div class="form-group">
                <label class="selection-label">Expiry Date</label>
                <input type="text" placeholder="MM/YY" style="width:100%; padding:14px; border:1px solid var(--border);">
              </div>
              <div class="form-group">
                <label class="selection-label">CVV</label>
                <input type="text" placeholder="XXX" style="width:100%; padding:14px; border:1px solid var(--border);">
              </div>
            </div>
          </div>
          
          <button class="btn-primary full-width" style="padding: 20px;" onclick="finalizeCheckout()">Complete Purchase</button>
        </div>
      </div>
    `;
  }
}

function finalizeCheckout() {
    document.getElementById('modal-content').innerHTML = `
      <div style="padding: 80px 40px; text-align: center; width: 100%;">
        <div style="font-size: 4rem; margin-bottom: 24px;">✨</div>
        <h2 style="font-family: var(--font-display); font-size: 2.5rem; margin-bottom: 16px;">Order Confirmed!</h2>
        <p style="color: var(--text-muted); margin-bottom: 40px; max-width: 500px; margin-left: auto; margin-right: auto;">
          Thank you for choosing Ethnic Elegance. We've received your order and are preparing your handcrafted treasures.
        </p>
        <div style="background: var(--bg-alt); padding: 24px; border-radius: 8px; margin-bottom: 40px; display: inline-block;">
          <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light);">Order Number</span>
          <div style="font-weight: 700; font-size: 1.2rem; color: var(--primary);">#EE-${Math.floor(Math.random()*90000) + 10000}</div>
        </div>
        <br>
        <button class="btn-primary" onclick="closeProductModal(); location.reload();" style="padding: 16px 60px;">Return Home</button>
      </div>
    `;
    cart = [];
    saveCart();
    updateCartUI();
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
