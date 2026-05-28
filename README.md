# Telegram Workflow Bot

A Telegram bot with workflow engine and state machine built with TypeScript.

## Features


- Workflow-based conversation flow
- State machine for user interactions
- PostgreSQL database integration
- REST API for admin management
- Support for auth, orders, payments, and tickets

## Quick Start

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your settings

# Run migrations
npm run migrate

# Start bot
npm run dev
```

## Project Structure

```
src/
├── app.ts           # Main entry point
├── config/          # Environment configuration
├── types/           # TypeScript types
├── db/              # Database connection and migrations
├── repositories/    # Data access layer
├── workflows/       # Workflow engine and flows
├── bot/             # Telegram bot handlers
├── services/        # Business logic
└── api/             # REST API endpoints
```

## License

MIT
