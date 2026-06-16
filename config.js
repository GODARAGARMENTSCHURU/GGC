// config.js
window.STORE_CONFIG = {
  brand: {
    name: "GODARA GARMENTS CHURU",
    phone: "9636469795",
    whatsapp: "9636469795",
    // Apna logo ka file/path yahan set karein
    // Example: "assets/logo.png"
    logoUrl: "https://via.placeholder.com/56x56.png?text=Logo"
  },

  delivery: {
    available: true,
    extraChargeNote: "Home delivery available hai. Iska alag charge lagega."
  },

  payment: {
    upiId: "125002992245@cnrb",
    payeeName: "Godara Garments Churu",
    // Optional default amount blank rakhen; amount collection price se aayega
  },

  // IMPORTANT RULE:
  // - Category/Product: priceRange only
  // - Collection: fixedPrice (exact)
  catalog: [
    {
      id: "kids-wear",
      name: "Kids Wear",
      image: "https://via.placeholder.com/640x420.png?text=Kids+Wear",
      priceRange: "₹199 - ₹1999",
      products: [
        {
          id: "new-born-baby",
          name: "New Born Baby",
          image: "https://via.placeholder.com/640x420.png?text=New+Born+Baby",
          priceRange: "₹299 - ₹1499",
          collections: [
            { id: "nb-1", name: "NB Collection 1", image: "https://via.placeholder.com/640x420.png?text=NB+C1", fixedPrice: 499, sku: "NB-C1" },
            { id: "nb-2", name: "NB Collection 2", image: "https://via.placeholder.com/640x420.png?text=NB+C2", fixedPrice: 549, sku: "NB-C2" },
            { id: "nb-3", name: "NB Collection 3", image: "https://via.placeholder.com/640x420.png?text=NB+C3", fixedPrice: 599, sku: "NB-C3" },
            { id: "nb-4", name: "NB Collection 4", image: "https://via.placeholder.com/640x420.png?text=NB+C4", fixedPrice: 649, sku: "NB-C4" },
            { id: "nb-5", name: "NB Collection 5", image: "https://via.placeholder.com/640x420.png?text=NB+C5", fixedPrice: 699, sku: "NB-C5" }
          ]
        },
        {
          id: "t-shirts",
          name: "T-Shirts",
          image: "https://via.placeholder.com/640x420.png?text=T-Shirts",
          priceRange: "₹199 - ₹999",
          collections: [
            { id: "ts-1", name: "T-Shirt Collection 1", image: "https://via.placeholder.com/640x420.png?text=TS+C1", fixedPrice: 299, sku: "TS-C1" },
            { id: "ts-2", name: "T-Shirt Collection 2", image: "https://via.placeholder.com/640x420.png?text=TS+C2", fixedPrice: 349, sku: "TS-C2" },
            { id: "ts-3", name: "T-Shirt Collection 3", image: "https://via.placeholder.com/640x420.png?text=TS+C3", fixedPrice: 399, sku: "TS-C3" },
            { id: "ts-4", name: "T-Shirt Collection 4", image: "https://via.placeholder.com/640x420.png?text=TS+C4", fixedPrice: 449, sku: "TS-C4" },
            { id: "ts-5", name: "T-Shirt Collection 5", image: "https://via.placeholder.com/640x420.png?text=TS+C5", fixedPrice: 499, sku: "TS-C5" }
          ]
        },
        {
          id: "lower",
          name: "Lower",
          image: "https://via.placeholder.com/640x420.png?text=Lower",
          priceRange: "₹299 - ₹1299",
          collections: [
            { id: "lw-1", name: "Lower Collection 1", image: "https://via.placeholder.com/640x420.png?text=LOW+C1", fixedPrice: 499, sku: "LOW-C1" },
            { id: "lw-2", name: "Lower Collection 2", image: "https://via.placeholder.com/640x420.png?text=LOW+C2", fixedPrice: 549, sku: "LOW-C2" },
            { id: "lw-3", name: "Lower Collection 3", image: "https://via.placeholder.com/640x420.png?text=LOW+C3", fixedPrice: 599, sku: "LOW-C3" },
            { id: "lw-4", name: "Lower Collection 4", image: "https://via.placeholder.com/640x420.png?text=LOW+C4", fixedPrice: 649, sku: "LOW-C4" },
            { id: "lw-5", name: "Lower Collection 5", image: "https://via.placeholder.com/640x420.png?text=LOW+C5", fixedPrice: 699, sku: "LOW-C5" }
          ]
        },
        {
          id: "shirt",
          name: "Shirt",
          image: "https://via.placeholder.com/640x420.png?text=Shirt",
          priceRange: "₹399 - ₹1699",
          collections: [
            { id: "sh-1", name: "Shirt Collection 1", image: "https://via.placeholder.com/640x420.png?text=SH+C1", fixedPrice: 699, sku: "SH-C1" },
            { id: "sh-2", name: "Shirt Collection 2", image: "https://via.placeholder.com/640x420.png?text=SH+C2", fixedPrice: 749, sku: "SH-C2" },
            { id: "sh-3", name: "Shirt Collection 3", image: "https://via.placeholder.com/640x420.png?text=SH+C3", fixedPrice: 799, sku: "SH-C3" },
            { id: "sh-4", name: "Shirt Collection 4", image: "https://via.placeholder.com/640x420.png?text=SH+C4", fixedPrice: 849, sku: "SH-C4" },
            { id: "sh-5", name: "Shirt Collection 5", image: "https://via.placeholder.com/640x420.png?text=SH+C5", fixedPrice: 899, sku: "SH-C5" }
          ]
        },
        {
          id: "jeans",
          name: "Jeans",
          image: "https://via.placeholder.com/640x420.png?text=Jeans",
          priceRange: "₹599 - ₹2499",
          collections: [
            { id: "jn-1", name: "Jeans Collection 1", image: "https://via.placeholder.com/640x420.png?text=JN+C1", fixedPrice: 999, sku: "JN-C1" },
            { id: "jn-2", name: "Jeans Collection 2", image: "https://via.placeholder.com/640x420.png?text=JN+C2", fixedPrice: 1099, sku: "JN-C2" },
            { id: "jn-3", name: "Jeans Collection 3", image: "https://via.placeholder.com/640x420.png?text=JN+C3", fixedPrice: 1199, sku: "JN-C3" },
            { id: "jn-4", name: "Jeans Collection 4", image: "https://via.placeholder.com/640x420.png?text=JN+C4", fixedPrice: 1299, sku: "JN-C4" },
            { id: "jn-5", name: "Jeans Collection 5", image: "https://via.placeholder.com/640x420.png?text=JN+C5", fixedPrice: 1399, sku: "JN-C5" }
          ]
        }
      ]
    },

    // Aapne bola 2 categories hain: yahan second category ka demo add kiya hai.
    // Aap iska name/photo/products apne hisaab se change kar sakte ho.
    {
      id: "mens-wear",
      name: "Mens Wear",
      image: "https://via.placeholder.com/640x420.png?text=Mens+Wear",
      priceRange: "₹399 - ₹2999",
      products: [
        {
          id: "tshirt-men",
          name: "Men T-Shirts",
          image: "https://via.placeholder.com/640x420.png?text=Men+T-Shirts",
          priceRange: "₹299 - ₹1299",
          collections: [
            { id: "mt-1", name: "Men TS Collection 1", image: "https://via.placeholder.com/640x420.png?text=MT+C1", fixedPrice: 599, sku: "MT-C1" },
            { id: "mt-2", name: "Men TS Collection 2", image: "https://via.placeholder.com/640x420.png?text=MT+C2", fixedPrice: 649, sku: "MT-C2" },
            { id: "mt-3", name: "Men TS Collection 3", image: "https://via.placeholder.com/640x420.png?text=MT+C3", fixedPrice: 699, sku: "MT-C3" },
            { id: "mt-4", name: "Men TS Collection 4", image: "https://via.placeholder.com/640x420.png?text=MT+C4", fixedPrice: 749, sku: "MT-C4" },
            { id: "mt-5", name: "Men TS Collection 5", image: "https://via.placeholder.com/640x420.png?text=MT+C5", fixedPrice: 799, sku: "MT-C5" }
          ]
        },
        {
          id: "shirt-men",
          name: "Men Shirts",
          image: "https://via.placeholder.com/640x420.png?text=Men+Shirts",
          priceRange: "₹499 - ₹1999",
          collections: [
            { id: "ms-1", name: "Men Shirt Collection 1", image: "https://via.placeholder.com/640x420.png?text=MS+C1", fixedPrice: 899, sku: "MS-C1" },
            { id: "ms-2", name: "Men Shirt Collection 2", image: "https://via.placeholder.com/640x420.png?text=MS+C2", fixedPrice: 949, sku: "MS-C2" },
            { id: "ms-3", name: "Men Shirt Collection 3", image: "https://via.placeholder.com/640x420.png?text=MS+C3", fixedPrice: 999, sku: "MS-C3" },
            { id: "ms-4", name: "Men Shirt Collection 4", image: "https://via.placeholder.com/640x420.png?text=MS+C4", fixedPrice: 1049, sku: "MS-C4" },
            { id: "ms-5", name: "Men Shirt Collection 5", image: "https://via.placeholder.com/640x420.png?text=MS+C5", fixedPrice: 1099, sku: "MS-C5" }
          ]
        },
        {
          id: "lower-men",
          name: "Men Lower",
          image: "https://via.placeholder.com/640x420.png?text=Men+Lower",
          priceRange: "₹399 - ₹1599",
          collections: [
            { id: "ml-1", name: "Men Lower Collection 1", image: "https://via.placeholder.com/640x420.png?text=ML+C1", fixedPrice: 799, sku: "ML-C1" },
            { id: "ml-2", name: "Men Lower Collection 2", image: "https://via.placeholder.com/640x420.png?text=ML+C2", fixedPrice: 849, sku: "ML-C2" },
            { id: "ml-3", name: "Men Lower Collection 3", image: "https://via.placeholder.com/640x420.png?text=ML+C3", fixedPrice: 899, sku: "ML-C3" },
            { id: "ml-4", name: "Men Lower Collection 4", image: "https://via.placeholder.com/640x420.png?text=ML+C4", fixedPrice: 949, sku: "ML-C4" },
            { id: "ml-5", name: "Men Lower Collection 5", image: "https://via.placeholder.com/640x420.png?text=ML+C5", fixedPrice: 999, sku: "ML-C5" }
          ]
        },
        {
          id: "jeans-men",
          name: "Men Jeans",
          image: "https://via.placeholder.com/640x420.png?text=Men+Jeans",
          priceRange: "₹799 - ₹3499",
          collections: [
            { id: "mj-1", name: "Men Jeans Collection 1", image: "https://via.placeholder.com/640x420.png?text=MJ+C1", fixedPrice: 1499, sku: "MJ-C1" },
            { id: "mj-2", name: "Men Jeans Collection 2", image: "https://via.placeholder.com/640x420.png?text=MJ+C2", fixedPrice: 1599, sku: "MJ-C2" },
            { id: "mj-3", name: "Men Jeans Collection 3", image: "https://via.placeholder.com/640x420.png?text=MJ+C3", fixedPrice: 1699, sku: "MJ-C3" },
            { id: "mj-4", name: "Men Jeans Collection 4", image: "https://via.placeholder.com/640x420.png?text=MJ+C4", fixedPrice: 1799, sku: "MJ-C4" },
            { id: "mj-5", name: "Men Jeans Collection 5", image: "https://via.placeholder.com/640x420.png?text=MJ+C5", fixedPrice: 1899, sku: "MJ-C5" }
          ]
        },
        {
          id: "innerwear-men",
          name: "Innerwear (Baniyan/Underwear)",
          image: "https://via.placeholder.com/640x420.png?text=Innerwear",
          priceRange: "₹149 - ₹999",
          collections: [
            { id: "mi-1", name: "Innerwear Collection 1", image: "https://via.placeholder.com/640x420.png?text=MI+C1", fixedPrice: 249, sku: "MI-C1" },
            { id: "mi-2", name: "Innerwear Collection 2", image: "https://via.placeholder.com/640x420.png?text=MI+C2", fixedPrice: 299, sku: "MI-C2" },
            { id: "mi-3", name: "Innerwear Collection 3", image: "https://via.placeholder.com/640x420.png?text=MI+C3", fixedPrice: 349, sku: "MI-C3" },
            { id: "mi-4", name: "Innerwear Collection 4", image: "https://via.placeholder.com/640x420.png?text=MI+C4", fixedPrice: 399, sku: "MI-C4" },
            { id: "mi-5", name: "Innerwear Collection 5", image: "https://via.placeholder.com/640x420.png?text=MI+C5", fixedPrice: 449, sku: "MI-C5" }
          ]
        }
      ]
    }
  ]
};
