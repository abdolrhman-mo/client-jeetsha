// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// import { customers, users, products } from '../lib/placeholder-data';

// const client = await db.connect();

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }

// async function seedProducts() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS products (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       type VARCHAR(255) NOT NULL,
//       price INT NOT NULL,
//       image_url VARCHAR(255) NOT NULL,
//       describtion text[],
//       available_sizes text[]
//     );
//   `;

//   let descriptions = []
//   let description: string
//   for (let j = 0; j < products.length; j++) {
//     description = `'{`
//     for (let i = 0; i < products[j].description.length; i++) {
//       description += `"`
//       description += products[j].description[i]
//       description += `", `
//     }
//     description += `}'`
//     descriptions.push(description)
//   }

//   let available_sizes_list = []
//   let available_sizes: string
//   for (let j = 0; j < products.length; j++) {
//     available_sizes = `'{`
//     for (let i = 0; i < products[j].available_sizes.length; i++) {
//       available_sizes += `"`
//       available_sizes += products[j].available_sizes[i]
//       available_sizes += `", `
//     }
//     available_sizes += `}'`
//     available_sizes_list.push(available_sizes)
//   }
  
//   let i = 0
//   const insertedProducts = await Promise.all(
//     products.map(
//       (product) => client.sql`
//         INSERT INTO products (name, type, price, image_url, describtion, available_sizes)
//         VALUES (
//           ${product.name}, 
//           ${product.type}, 
//           ${product.price}, 
//           ${product.image_url},
//           ${descriptions[i]},
//           ${available_sizes_list[i]}
//         )
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       i++
//     ),
//   );

//   return insertedProducts;
// }

// async function seedCustomers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS customers (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       image_url VARCHAR(255) NOT NULL
//     );
//   `;

//   const insertedCustomers = await Promise.all(
//     customers.map(
//       (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedCustomers;
// }

// async function seedRevenue() {
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS revenue (
//       month VARCHAR(4) NOT NULL UNIQUE,
//       revenue INT NOT NULL
//     );
//   `;

//   const insertedRevenue = await Promise.all(
//     revenue.map(
//       (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedRevenue;
// }

export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  // try {
  //   await client.sql`BEGIN`;
  //   await seedUsers();
  //   await seedCustomers();
  //   await seedProducts();
  //   await client.sql`COMMIT`;

  //   return Response.json({ message: 'Database seeded successfully' });
  // } catch (error) {
  //   await client.sql`ROLLBACK`;
  //   return Response.json({ error }, { status: 500 });
  // }
}
