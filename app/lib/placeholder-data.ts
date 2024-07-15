// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const products = [
  {
    name: 'green washed sweatpants',
    price: 1100,
    tags: ['pants', 'latest'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 10,
      medium: 12,
      large: 1,
      x_large: 0,
    },
    image_url: '/imgs/pants/pants1.jpg',
  },
  {
    name: 'black stitches cargo pants',
    price: 1200,
    tags: ['pants'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 10,
      medium: 0,
      large: 1,
      x_large: 2,
    },
    image_url: '/imgs/pants/pants2.jpg',
  },
  {
    name: 'gray washed sweatpants',
    price: 1100,
    tags: ['pants'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 20,
      medium: 12,
      large: 5,
      x_large: 3,
    },
    image_url: '/imgs/pants/pants3.jpg',
  },
  {
    name: 'acid washed carpenter jeans',
    price: 1200,
    tags: ['pants', 'latest'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 10,
      medium: 12,
      large: 1,
      x_large: 0,
    },
    image_url: '/imgs/pants/pants4.jpg',
  },
  {
    name: 'acid washed carpenter jeans',
    price: 1200,
    tags: ['pants'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 10,
      medium: 12,
      large: 1,
      x_large: 0,
    },
    image_url: '/imgs/pants/pants5.jpg',
  },
  {
    name: 'acid washed carpenter jeans',
    price: 1200,
    tags: ['pants'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 10,
      medium: 12,
      large: 1,
      x_large: 0,
    },
    image_url: '/imgs/pants/pants6.jpg',
  },
  {
    name: 'acid washed carpenter jeans',
    price: 1200,
    tags: ['pants'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 10,
      medium: 12,
      large: 1,
      x_large: 0,
    },
    image_url: '/imgs/pants/pants7.jpg',
  },
  {
    name: 'acid washed carpenter jeans',
    price: 1200,
    tags: ['pants'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 10,
      medium: 12,
      large: 1,
      x_large: 0,
    },
    image_url: '/imgs/pants/pants8.jpg',
  },
  {
    name: 'acid washed carpenter jeans',
    price: 1200,
    tags: ['pants'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 10,
      medium: 12,
      large: 1,
      x_large: 0,
    },
    image_url: '/imgs/pants/pants9.jpg',
  },
  {
    name: 'acid washed carpenter jeans',
    price: 1200,
    tags: ['pants'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 10,
      medium: 12,
      large: 1,
      x_large: 0,
    },
    image_url: '/imgs/pants/pants10.jpg',
  },
  {
    name: 'acid washed carpenter jeans',
    price: 1200,
    tags: ['pants'],
    description: [
      'Material: Summer Cotton',
      'Male model is  186cm wearing size L',
      'Female model is 160cm wearing size M',
      'Check size guide for exact measurements',
      'Updated size guide with longer length for a cooler baggy look!',
      'Exchange and returns within 72 hours'
    ],
    availableSizes: {
      small: 10,
      medium: 12,
      large: 1,
      x_large: 0,
    },
    image_url: '/imgs/pants/pants11.jpg',
  },



  {
    name: 'camo jersey',
    price: 800,
    tags: ['tee', 'latest'],
    description: [
      'Fabric: Polyester ',
      'Oversized fit',
      'Model is  cm wearing size',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/tees/tee1.jpg',
  },
  {
    name: 'violet jersey',
    price: 800,
    tags: ['tee', 'latest'],
    description: [
      'Fabric: Polyester ',
      'Oversized fit',
      'Model is  cm wearing size',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/tees/tee2.jpg',
  },
  {
    name: 'dung tee',
    price: 800,
    tags: ['tee'],
    description: [
      'Fabric: Polyester ',
      'Oversized fit',
      'Model is  cm wearing size',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/tees/tee3.jpg',
  },
  {
    name: 'camo jersey',
    price: 800,
    tags: ['tee'],
    description: [
      'Fabric: Polyester ',
      'Oversized fit',
      'Model is  cm wearing size',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/tees/tee4.jpg',
  },
  {
    name: 'camo jersey',
    price: 800,
    tags: ['tee'],
    description: [
      'Fabric: Polyester ',
      'Oversized fit',
      'Model is  cm wearing size',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/tees/tee5.jpg',
  },
  {
    name: 'camo jersey',
    price: 800,
    tags: ['tee'],
    description: [
      'Fabric: Polyester ',
      'Oversized fit',
      'Model is  cm wearing size',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/tees/tee6.jpg',
  },
  {
    name: 'camo jersey',
    price: 800,
    tags: ['tee'],
    description: [
      'Fabric: Polyester ',
      'Oversized fit',
      'Model is  cm wearing size',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/tees/tee7.jpg',
  },
  {
    name: 'camo jersey',
    price: 800,
    tags: ['tee'],
    description: [
      'Fabric: Polyester ',
      'Oversized fit',
      'Model is  cm wearing size',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/tees/tee8.jpg',
  },
  {
    name: 'camo jersey',
    price: 800,
    tags: ['tee'],
    description: [
      'Fabric: Polyester ',
      'Oversized fit',
      'Model is  cm wearing size',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/tees/tee9.jpg',
  },
  {
    name: 'camo jersey',
    price: 800,
    tags: ['tee'],
    description: [
      'Fabric: Polyester ',
      'Oversized fit',
      'Model is  cm wearing size',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/tees/tee10.jpg',
  },



  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts1.webp',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts2.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts3.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts4.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts5.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts6.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts7.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts8.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts9.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts10.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts11.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts12.jpg',
  },
  {
    name: 'green scarab basketball shorts',
    price: 700,
    tags: ['shorts'],
    description: [
      'Fabric: Polyester ',
      'Model is 184cm wearing size M',
      'Relaxed fit',
      'Exchange & refunds within 72 hours',
    ],
    availableSizes: {
      small: 0,
      medium: 12,
      large: 1,
      x_large: 3,
    },
    image_url: '/imgs/shorts/shorts13.jpg',
  },
]

export { users, customers, products };
