// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    role: 'admin',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442b',
    name: 'User1',
    email: 'user1@nextmail.com',
    password: '123456',
    role: 'user',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442c',
    name: 'User2',
    email: 'user2@nextmail.com',
    password: '123456',
    role: 'artisant',
  },
];

const categories = [
  {
    id: '98c8c82a-ff71-48fd-91a8-9fb96402f00a',
    name: 'clothes',
    description:
      'Handmade clothing by artisans of different colors and textures.',
    image:
      'https://img.freepik.com/free-photo/wooden-product-display-podium-with-blurred-nature-leaves-background-generative-ai_91128-2268.jpg',
  },
  {
    id: '2381fb80-f566-4cc7-abd8-9a03df254bb1',
    name: 'art',
    description:
      'Unique handcrafted artworks that showcase the creativity and skill of talented artisans.',
    image:
      'https://img.freepik.com/free-photo/wooden-product-display-podium-with-blurred-nature-leaves-background-generative-ai_91128-2268.jpg',
  },
  {
    id: '4cfe0947-a57e-4672-9f5f-9539035abd72',
    name: 'furniture',
    description:
      'Artisan-crafted furniture that brings both functionality and aesthetic appeal to your living spaces.',
    image:
      'https://img.freepik.com/free-photo/wooden-product-display-podium-with-blurred-nature-leaves-background-generative-ai_91128-2268.jpg',
  },
];

const products = [
  {
    id: 'c2e683c5-0d20-45ad-8503-647b9060e452',
    user_id: users[0].id,
    category_id: categories[0].id,
    name: 'Handmade wool coat',
    description:
      'A sheep wool coat made especially by hand with artisanal tools. This coat is specially designed for low temperatures and intense cold.',
    price: 15795,
    image:
      'https://img.freepik.com/free-photo/wooden-product-display-podium-with-blurred-nature-leaves-background-generative-ai_91128-2268.jpg',
  },
  {
    id: '4669a01d-f482-4242-b806-8b72c69a1201',
    user_id: users[1].id,
    category_id: categories[1].id,
    name: 'Abstract Canvas Painting',
    description:
      'An abstract canvas painting that explores the interplay of colors and shapes. This unique artwork is perfect for adding a touch of modern artistry to any living space.',
    price: 7999,
    image:
      'https://img.freepik.com/free-photo/wooden-product-display-podium-with-blurred-nature-leaves-background-generative-ai_91128-2268.jpg',
  },
  {
    id: '38acda12-276e-448a-88d1-91ca07e6782b',
    user_id: users[0].id,
    category_id: categories[0].id,
    name: 'Handwoven Silk Shawl',
    description:
      'A luxurious handwoven silk shawl that combines elegance with comfort. The vibrant colors and soft texture make it a perfect accessory for any occasion.',
    price: 8995,
    image:
      'https://img.freepik.com/free-photo/wooden-product-display-podium-with-blurred-nature-leaves-background-generative-ai_91128-2268.jpg',
  },
  {
    id: '6d202375-d2ff-497f-9c22-e92fb59499de',
    user_id: users[1].id,
    category_id: categories[1].id,
    name: 'Sculpted Ceramic Vase',
    description:
      'A sculpted ceramic vase that serves as both a functional and decorative piece. The unique design and attention to detail make it a standout addition to any home decor.',
    price: 5499,
    image:
      'https://img.freepik.com/free-photo/wooden-product-display-podium-with-blurred-nature-leaves-background-generative-ai_91128-2268.jpg',
  },
];

const reviews = [
  {
    id: '4c2b0c16-57b5-4d9d-b511-9609cbe227b0',
    product_id: products[0].id,
    user_id: users[2].id,
    description: 'This product is awesome',
  },
  {
    id: '6786e483-fde2-4729-a63a-484975596342',
    product_id: products[1].id,
    user_id: users[2].id,
    description:
      'Absolutely love the vibrant colors and unique shapes in this painting!',
  },
  {
    id: 'b25dcd9f-a6f2-4bd8-9613-e06e6797e78e',
    product_id: products[2].id,
    user_id: users[2].id,
    description:
      "The wooden coffee table is not only beautiful but also incredibly sturdy. I'm impressed with the craftsmanship!",
  },
  {
    id: '6967fddc-b0fe-4bfe-bd46-9d62a49412ae',
    product_id: products[3].id,
    user_id: users[2].id,
    description:
      "The handwoven silk shawl exceeded my expectations. It's so soft and the colors are gorgeous.",
  },
  {
    id: '83ad5797-124d-4e1d-bd16-4eb795881a84',
    product_id: products[3].id,
    user_id: users[2].id,
    description:
      'The sculpted ceramic vase is a stunning addition to my home. I appreciate the artistry and attention to detail.',
  },
];

module.exports = {
  users,
  categories,
  products,
  reviews,
};
