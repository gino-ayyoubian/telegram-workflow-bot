import { pool } from '../db/pool.js';

export const auditService = {
  async log(actorUserId: string | null, entityType: string, entityId: string, action: string, before?: any, after?: any) {
    await pool.query(
      `INSERT INTO audit_logs (actor_user_id, entity_type, entity_id, action, before_jsonb, after_jsonb)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [actorUserId, entityType, entityId, action, before ? JSON.stringify(before) : null, after ? JSON.stringify(after) : null]
    );
  },
  
  async getByEntity(entityType: string, entityId: string) {
    const res = await pool.query(
      `SELECT * FROM audit_logs WHERE entity_type = $1 AND entity_id = $2 ORDER BY created_at DESC`,
      [entityType, entityId]
    );
    return res.rows;
  }
};
