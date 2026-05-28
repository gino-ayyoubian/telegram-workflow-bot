import { pool } from '../src/db/pool.js';

async function seed() {
  console.log('Seeding database...');
  await pool.query(`
    INSERT INTO services (code, name, description, price) VALUES 
    ('service_a', 'سرویس A', 'توضیحات سرویس A', 100000),
    ('service_b', 'سرویس B', 'توضیحات سرویس B', 200000)
    ON CONFLICT (code) DO NOTHING
  `);
  console.log('Seeding completed');
  await pool.end();
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
