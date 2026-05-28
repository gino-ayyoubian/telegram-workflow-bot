import { pool } from '../db/pool.js';

export const orderService = {
  async create(userId: string, serviceId: string, amount: number) {
    const res = await pool.query(
      `INSERT INTO orders (user_id, service_id, amount) VALUES ($1, $2, $3) RETURNING *`,
      [userId, serviceId, amount]
    );
    return res.rows[0];
  },
  
  async getByUser(userId: string) {
    const res = await pool.query(`SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC`, [userId]);
    return res.rows;
  },
  
  async updateStatus(orderId: string, status: string) {
    const res = await pool.query(
      `UPDATE orders SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
      [status, orderId]
    );
    return res.rows[0];
  }
};
