# Entity Relationship Diagram

## Tables

### users
- id (UUID, PK)
- telegram_id (BIGINT, UNIQUE)
- full_name (TEXT)
- username (TEXT)
- phone (TEXT)
- role (TEXT) - user/agent/admin/superadmin
- status (TEXT) - active/blocked/pending
- created_at, updated_at (TIMESTAMPTZ)

### user_sessions
- id (UUID, PK)
- user_id (UUID, FK → users)
- flow_name (TEXT)
- current_state (TEXT)
- context_jsonb (JSONB)
- expires_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)

### orders
- id (UUID, PK)
- user_id (UUID, FK → users)
- service_id (UUID, FK → services)
- status (TEXT)
- amount (NUMERIC)
- currency (TEXT)
- metadata_jsonb (JSONB)
- created_at, updated_at (TIMESTAMPTZ)


### tickets
- id (UUID, PK)
- user_id (UUID, FK → users)
- subject (TEXT)
- status (TEXT)
- priority (TEXT)
- assigned_to (UUID)
- created_at, updated_at (TIMESTAMPTZ)

### ticket_messages
- id (UUID, PK)
- ticket_id (UUID, FK → tickets)
- sender_user_id (UUID, FK → users)
- sender_role (TEXT)
- message (TEXT)
- created_at (TIMESTAMPTZ)

### audit_logs
- id (UUID, PK)
- actor_user_id (UUID, FK → users)
- entity_type (TEXT)
- entity_id (TEXT)
- action (TEXT)
- before_jsonb (JSONB)
- after_jsonb (JSONB)
- created_at (TIMESTAMPTZ)
