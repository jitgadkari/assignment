export interface ProductType {
    productId: number;
    productName: string;
    productCurrency: string;
    productImg: string[];
    actualPrice: number; // Original price before any discounts
    reducedPrice: number; // Price after discount
    offPercentage: number; // Discount percentage
    productSpecification: string;
    productDescription: string;
  }
  

  
  export const products: ProductType[] = [
    {
      productId: 1,
      productName: "Redmi 13C",
      productCurrency: "₹",
      productImg: [
        "https://m.media-amazon.com/images/I/71d1ytcCntL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71d1ytcCntL._SL1500_.jpg"
      ],
      actualPrice: 9999,
      reducedPrice: 8499,
      offPercentage: 15,
      productSpecification: "(Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
      productDescription: "The Redmi 13C combines sleek design with powerful performance, featuring a large display and advanced camera system for capturing every moment.",
    },
    {
      productId: 2,
      productName: "Vivo X100 5G",
      productCurrency: "₹",
      productImg: [
        "https://m.media-amazon.com/images/I/51D7bicj2gL._SL1080_.jpg",
        "https://m.media-amazon.com/images/I/518ogNYZebL._SX569_.jpg",
        "https://m.media-amazon.com/images/I/41kT3UkGhGL._SL1080_.jpg"
      ],
      actualPrice: 64990,
      reducedPrice: 59990,
      offPercentage: 7.7,
      productSpecification: "(Asteroid Black, 12GB RAM, 256GB Storage) MediaTek Dimensity 9300 Processor | AMOLED Display | Dual Sim | 5000mAh Battery",
      productDescription: "The Vivo X100 5G offers high-end specifications with a sleek design, ideal for demanding tasks and heavy multitasking.",
    },
    {
      productId: 3,
      productName: "Apple iPhone 13",
      productCurrency: "₹",
      productImg: [
        "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71uNkgYrWcL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61iTWldZ9qL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61paF2JiudL._SL1500_.jpg"
      ],
      actualPrice: 54990,
      reducedPrice: 49990,
      offPercentage: 9.1,
      productSpecification: "(128GB) - Pink",
      productDescription: "The Apple iPhone 13 features a powerful A15 Bionic chip, a stunning Super Retina XDR display, and a dual-camera system for exceptional photos and videos.",
    },
    {
      productId: 4,
      productName: "OnePlus Nord 4 5G",
      productCurrency: "₹",
      productImg: [
        "https://m.media-amazon.com/images/I/616wnQmPQ-L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51g0A4NMD8L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/611DUOU0OML._SL1500_.jpg"
      ],
      actualPrice: 34998,
      reducedPrice: 29998,
      offPercentage: 14.3,
      productSpecification: "(Oasis Green, 8GB RAM, 128GB Storage)",
      productDescription: "The OnePlus Nord 4 5G delivers smooth performance with its robust hardware and 5G connectivity, housed in a sleek design that stands out.",
    },
    {
      productId: 5,
      productName: "Samsung Galaxy S23 Ultra",
      productCurrency: "₹",
      productImg: [
        "https://m.media-amazon.com/images/I/91Zn-9pN3BL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/91-s2Uu7azL._SL1500_.jpg"
      ],
      actualPrice: 134999,
      reducedPrice: 124999,
      offPercentage: 7.4,
      productSpecification: "(Phantom Black, 12GB RAM, 256GB Storage) | Snapdragon 8 Gen 2 | 6.8-inch Dynamic AMOLED Display | 200MP Quad Camera",
      productDescription: "The Samsung Galaxy S23 Ultra offers top-of-the-line performance with an expansive display and a versatile camera setup, perfect for power users.",
    },
    {
      productId: 6,
      productName: "Sony WH-1000XM5",
      productCurrency: "₹",
      productImg: [
        "https://m.media-amazon.com/images/I/91k+rfwStIL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71DKW2WsjSL._SL1500_.jpg"
      ],
      actualPrice: 39990,
      reducedPrice: 34990,
      offPercentage: 12.5,
      productSpecification: "Noise Cancelling Wireless Headphones | 30-hour Battery Life | Touch Controls | High-Resolution Audio",
      productDescription: "The Sony WH-1000XM5 offers industry-leading noise cancellation and exceptional sound quality, designed for audiophiles and frequent travelers.",
    },
    {
      productId: 7,
      productName: "Dell XPS 13",
      productCurrency: "₹",
      productImg: [
        "https://m.media-amazon.com/images/I/81MAn2ZB7NL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81BndmGu-oL._SL1500_.jpg"
      ],
      actualPrice: 109990,
      reducedPrice: 99990,
      offPercentage: 9.1,
      productSpecification: "(Intel Core i7, 16GB RAM, 512GB SSD) | 13.4-inch FHD+ InfinityEdge Display | Windows 11",
      productDescription: "The Dell XPS 13 combines premium build quality with powerful performance, featuring a stunning display and high-end components for a premium laptop experience.",
    }
  ];
  