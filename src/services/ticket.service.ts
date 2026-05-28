import { pool } from '../db/pool.js';

export const ticketService = {
  async create(userId: string, subject: string, priority: string = 'normal') {
    const res = await pool.query(
      `INSERT INTO tickets (user_id, subject, priority) VALUES ($1, $2, $3) RETURNING *`,
      [userId, subject, priority]
    );
    return res.rows[0];
  },
  
  async getByUser(userId: string) {
    const res = await pool.query(`SELECT * FROM tickets WHERE user_id = $1 ORDER BY created_at DESC`, [userId]);
    return res.rows;
  },
  
  async addMessage(ticketId: string, userId: string, message: string, role: string) {
    const res = await pool.query(
      `INSERT INTO ticket_messages (ticket_id, sender_user_id, sender_role, message) VALUES ($1, $2, $3, $4) RETURNING *`,
      [ticketId, userId, role, message]
    );
    return res.rows[0];
  },
  
  async updateStatus(ticketId: string, status: string) {
    const res = await pool.query(
      `UPDATE tickets SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
      [status, ticketId]
    );
    return res.rows[0];
  }
};
