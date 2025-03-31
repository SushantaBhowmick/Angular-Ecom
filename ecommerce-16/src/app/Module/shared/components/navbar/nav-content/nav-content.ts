export const navigation = {
    women: {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt: "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt: "Close-up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", href: "/women/clothing/tops" },
            { name: "Dresses", id: "women_dress", href: "/women/clothing/dresses" },
            { name: "Women Jeans", id: "women_jeans", href: "/women/clothing/jeans" },
            { name: "Lengha Choli", id: "lengha_choli", href: "/women/clothing/lengha-choli" },
            { name: "Sweaters", id: "sweater", href: "/women/clothing/sweaters" },
            { name: "T-Shirts", id: "t-shirt", href: "/women/clothing/t-shirts" },
            { name: "Jackets", id: "jacket", href: "/women/clothing/jackets" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watch", href: "/women/accessories/watches" },
            { name: "Wallets", id: "wallet", href: "/women/accessories/wallets" },
            { name: "Bags", id: "bag", href: "/women/accessories/bags" },
            { name: "Sunglasses", id: "sunglasses", href: "/women/accessories/sunglasses" },
            { name: "Hats", id: "hat", href: "/women/accessories/hats" },
            { name: "Belts", id: "belt", href: "/women/accessories/belts" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Puma", id: "puma" },
            { name: "Nike", id: "nike" },
            { name: "Peter England", id: "peter_england" },
            { name: "Rolex", id: "rolex" },
          ],
        },
      ],
    },
    men: {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt: "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt: "Three shirts in gray, white, and blue arranged on a table.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Mens Kurtas", id: "mens_kurta", href: "/men/clothing/kurtas" },
            { name: "Shirt", id: "shirt", href: "/men/clothing/shirts" },
            { name: "Men Jeans", id: "men_jeans", href: "/men/clothing/jeans" },
            { name: "Sweaters", id: "sweater", href: "/men/clothing/sweaters" },
            { name: "T-Shirts", id: "t-shirt", href: "/men/clothing/t-shirts" },
            { name: "Jackets", id: "jacket", href: "/men/clothing/jackets" },
            { name: "Activewear", id: "activewear", href: "/men/clothing/activewear" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watch", href: "/men/accessories/watches" },
            { name: "Wallets", id: "wallet", href: "/men/accessories/wallets" },
            { name: "Bags", id: "bag", href: "/men/accessories/bags" },
            { name: "Sunglasses", id: "sunglasses", href: "/men/accessories/sunglasses" },
            { name: "Hats", id: "hat", href: "/men/accessories/hats" },
            { name: "Belts", id: "belt", href: "/men/accessories/belts" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Puma", id: "puma" },
            { name: "Nike", id: "nike" },
            { name: "Peter England", id: "peter_england" },
            { name: "Rolex", id: "rolex" },
          ],
        },
      ],
    },
    pages: [
      { name: "Company", href: "/company" },
      { name: "Stores", href: "/stores" },
    ],
  };
  
    
    // export const navigation = {
    // categories: [
    // {
    // id: 'women',
    // name: 'Women',
    // featured: [
    // {
    // name: 'New Arrivals',
    // href: '/',
    // imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
    // imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
    // },
    // {
    // name: 'Basic Tees',
    // href: '/',
    // imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
    // imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
    // },
    // ],
    // sections: [
    // {
    // id: 'clothing',
    // name: 'Clothing',
    // items: [
    // { name: 'Tops', id:"top", href: {women/clothing/tops} },
    // { name: 'Dresses', id:"women_dress", href: '#' },
    // { name: 'Women Jeans', id: 'women_jeans' },
    // { name: 'Lengha Choli', id: 'lengha_choli' },
    // { name: 'Sweaters', id: 'sweater' },
    // { name: 'T-Shirts', id: 't-shirt' },
    // { name: 'Jackets', id: 'jacket' },
    // { name: 'Gouns', id: 'gouns' },
    // { name: 'Sarees', id: 'saree' },
    // { name: 'Kurtas', id: 'kurtas' },
    // ],
    // },
    // {
    // id: 'accessories',
    // name: 'Accessories',
    // items: [
    // { name: 'Watches', id: 'watch' },
    // { name: 'Wallets', id: 'wallet' },
    // { name: 'Bags', id: 'bag' },
    // { name: 'Sunglasses', id: 'sunglasse' },
    // { name: 'Hats', id: 'hat' },
    // { name: 'Belts', id: 'belt' },
    // ],
    // },
    // {
    // id: 'brands',
    // name: 'Brands',
    // items: [
    // { name: 'Full Nelson', id: '#' },
    // { name: 'My Way', id: '#' },
    // { name: 'Re-Arranged', id: '#' },
    // { name: 'Counterfeit', id: '#' },
    // { name: 'Significant Other', id: '#' },
    // ],
    // },
    // ],
    // },
    // {
    // id: 'men',
    // name: 'Men',
    // featured: [
    // {
    // name: 'New Arrivals',
    // id: '#',
    // imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
    // imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
    // },
    // {
    // name: 'Artwork Tees',
    // id: '#',
    // imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
    // imageAlt:
    // 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
    // },
    // ],
    // sections: [
    // {
    // id: 'clothing',
    // name: 'Clothing',
    // items: [
    // { name: 'Mens Kurtas', id: 'mens_kurta' },
    // { name: 'Shirt', id: 'shirt' },
    // { name: 'Men Jeans', id: 'men_jeans' },
    // { name: 'Sweaters', id: '#' },
    // { name: 'T-Shirts', id: 't-shirt' },
    // { name: 'Jackets', id: '#' },
    // { name: 'Activewear', id: '#' },
    
    // ],
    // },
    // {
    // id: 'accessories',
    // name: 'Accessories',
    // items: [
    // { name: 'Watches', id: '#' },
    // { name: 'Wallets', id: '#' },
    // { name: 'Bags', id: '#' },
    // { name: 'Sunglasses', id: '#' },
    // { name: 'Hats', id: '#' },
    // { name: 'Belts', id: '#' },
    // ],
    // },
    // {
    // id: 'brands',
    // name: 'Brands',
    // items: [
    // { name: 'Re-Arranged', id: '#' },
    // { name: 'Counterfeit', id: '#' },
    // { name: 'Full Nelson', id: '#' },
    // { name: 'My Way', id: '#' },
    // ],
    // },
    // ],
    // },
    // ],
    // pages: [
    // { name: 'Company', id: '/' },
    // { name: 'Stores', id: '/' },
    // ],
    // } this is a code for navigation.ts file If your working With Angular.