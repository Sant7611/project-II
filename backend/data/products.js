const products = [
    {
        name: "Stylish Running Shoes",
        description: "Comfortable and durable running shoes, perfect for daily workouts and marathons. Features breathable mesh and cushioned sole.",
        price: 120.99,
        discountPrice: 99.99,
        countInStock: 150,
        sku: "RUN-SHOE-BLK-001",
        category: "Footwear",
        brand: "ActiveGear",
        sizes: ["8", "9", "10", "11"],
        colors: ["Black", "Red Trim"],
        collections: "Spring 2025 Active",
        gender: "Unisex",
        images: [
            {
                url: "https://example.com/images/shoe1.jpg",
                altText: "Stylish Running Shoe - Main View"
            },
            {
                url: "https://example.com/images/shoe2.jpg",
                altText: "Stylish Running Shoe - Side View"
            }
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["running", "sports", "activewear", "marathon"],
        dimensions: {
            length: 30,
            width: 12,
            height: 10
        },
        weight: 0.85
    },
    {
        name: "Classic Leather Sneakers",
        description: "Timeless leather sneakers for everyday comfort and style. Durable sole and cushioned insole.",
        price: 89.99,
        discountPrice: 74.99,
        countInStock: 120,
        sku: "SNK-LEA-WHT-002",
        category: "Footwear",
        brand: "UrbanStyle",
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["White", "Navy"],
        collections: "Essentials 2025",
        gender: "Unisex",
        images: [
            {
                url: "https://example.com/images/sneaker1.jpg",
                altText: "Classic Leather Sneakers - Main View"
            }
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["sneakers", "leather", "casual"],
        dimensions: {
            length: 29,
            width: 11,
            height: 10
        },
        weight: 0.9
    },
    {
        name: "Trail Hiking Boots",
        description: "Rugged hiking boots designed for tough terrains. Waterproof and supportive for long hikes.",
        price: 149.99,
        discountPrice: 129.99,
        countInStock: 60,
        sku: "HIK-BOOT-BRN-003",
        category: "Footwear",
        brand: "MountainPro",
        sizes: ["8", "9", "10", "11", "12"],
        colors: ["Brown", "Olive"],
        collections: "Outdoor 2025",
        gender: "Men",
        images: [
            {
                url: "https://example.com/images/boot1.jpg",
                altText: "Trail Hiking Boots - Main View"
            }
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["hiking", "boots", "outdoor"],
        dimensions: {
            length: 32,
            width: 13,
            height: 14
        },
        weight: 1.2
    },
    {
        name: "Lightweight Slip-On Shoes",
        description: "Easy to wear slip-on shoes with breathable fabric. Ideal for travel and casual outings.",
        price: 59.99,
        discountPrice: 44.99,
        countInStock: 100,
        sku: "SLP-ON-GRY-004",
        category: "Footwear",
        brand: "EverydayWear",
        sizes: ["6", "7", "8", "9", "10"],
        colors: ["Grey", "Black"],
        collections: "Summer 2025",
        gender: "Unisex",
        images: [
            {
                url: "https://example.com/images/slipon1.jpg",
                altText: "Lightweight Slip-On Shoes - Main View"
            }
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["slipon", "casual", "travel"],
        dimensions: {
            length: 28,
            width: 10,
            height: 9
        },
        weight: 0.5
    },
    {
        name: "Wireless Charging Sneakers",
        description: "Innovative sneakers with built-in wireless charging for your devices. Modern design and comfort.",
        price: 199.99,
        discountPrice: 159.99,
        countInStock: 40,
        sku: "CHG-SNK-BLK-005",
        category: "Footwear",
        brand: "TechPulse",
        sizes: ["8", "9", "10", "11"],
        colors: ["Black", "Silver"],
        collections: "Tech 2025",
        gender: "Unisex",
        images: [
            {
                url: "https://example.com/images/techsneaker1.jpg",
                altText: "Wireless Charging Sneakers - Main View"
            }
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["tech", "sneakers", "charging"],
        dimensions: {
            length: 30,
            width: 12,
            height: 11
        },
        weight: 1.0
    },
    {
        name: "Men' Colorful Trainers",
        description: "Fun and vibrant trainers for kids. Lightweight and supportive for active play.",
        price: 49.99,
        discountPrice: 39.99,
        countInStock: 90,
        sku: "KID-TRN-CLR-006",
        category: "Footwear",
        brand: "LittleSteps",
        sizes: ["1", "2", "3", "4", "5"],
        colors: ["Blue", "Yellow", "Pink"],
        collections: "Men 2025",
        gender: "Men",
        images: [
            {
                url: "https://example.com/images/kidstrainer1.jpg",
                altText: "Men' Colorful Trainers - Main View"
            }
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["kids", "trainers", "colorful"],
        dimensions: {
            length: 20,
            width: 8,
            height: 7
        },
        weight: 0.3
    },
    {
        name: "Elegant Dress Shoes",
        description: "Polished dress shoes for formal occasions. Premium leather and classic design.",
        price: 139.99,
        discountPrice: 119.99,
        countInStock: 70,
        sku: "DRS-SHO-BLK-007",
        category: "Footwear",
        brand: "FormalLine",
        sizes: ["7", "8", "9", "10", "11"],
        colors: ["Black", "Brown"],
        collections: "Formal 2025",
        gender: "Men",
        images: [
            {
                url: "https://example.com/images/dressshoe1.jpg",
                altText: "Elegant Dress Shoes - Main View"
            }
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["dress", "formal", "leather"],
        dimensions: {
            length: 31,
            width: 11,
            height: 10
        },
        weight: 0.95
    },
    {
        name: "Women's Ballet Flats",
        description: "Comfortable ballet flats with cushioned insoles. Perfect for work or casual wear.",
        price: 59.99,
        discountPrice: 49.99,
        countInStock: 110,
        sku: "FLT-WOM-BLK-008",
        category: "Footwear",
        brand: "GraceStep",
        sizes: ["5", "6", "7", "8", "9"],
        colors: ["Black", "Beige"],
        collections: "Spring 2025",
        gender: "Women",
        images: [
            {
                url: "https://example.com/images/balletflat1.jpg",
                altText: "Women's Ballet Flats - Main View"
            }
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["ballet", "flats", "women"],
        dimensions: {
            length: 26,
            width: 9,
            height: 7
        },
        weight: 0.4
    },
    {
        name: "High-Top Basketball Shoes",
        description: "High-top shoes for basketball players. Superior ankle support and grip.",
        price: 129.99,
        discountPrice: 109.99,
        countInStock: 80,
        sku: "BSK-HIT-RED-009",
        category: "Footwear",
        brand: "CourtKing",
        sizes: ["8", "9", "10", "11", "12"],
        colors: ["Red", "Black"],
        collections: "Sports 2025",
        gender: "Unisex",
        images: [
            {
                url: "https://example.com/images/basketballshoe1.jpg",
                altText: "High-Top Basketball Shoes - Main View"
            }
        ],
        isFeatured: true,
        isPublished: true,
        tags: ["basketball", "sports", "high-top"],
        dimensions: {
            length: 33,
            width: 13,
            height: 15
        },
        weight: 1.1
    },
    {
        name: "Beach Flip Flops",
        description: "Lightweight and waterproof flip flops for the beach or poolside.",
        price: 19.99,
        discountPrice: 14.99,
        countInStock: 200,
        sku: "FLP-FLP-BLU-010",
        category: "Footwear",
        brand: "SunnySteps",
        sizes: ["6", "7", "8", "9", "10", "11"],
        colors: ["Blue", "Green", "Pink"],
        collections: "Summer 2025",
        gender: "Unisex",
        images: [
            {
                url: "https://example.com/images/flipflop1.jpg",
                altText: "Beach Flip Flops - Main View"
            }
        ],
        isFeatured: false,
        isPublished: true,
        tags: ["flipflops", "beach", "summer"],
        dimensions: {
            length: 27,
            width: 10,
            height: 2
        },
        weight: 0.2
    }
];

module.exports = products;