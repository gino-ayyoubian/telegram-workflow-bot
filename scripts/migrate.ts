import { pool } from '../src/db/pool.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sql = readFileSync(join(__dirname, '../src/db/migrations/202605290001_create_tables.sql'), 'utf-8');

async function migrate() {
  console.log('Running migrations...');
  await pool.query(sql);
  console.log('Migrations completed');
  await pool.end();
  process.exit(0);
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});
