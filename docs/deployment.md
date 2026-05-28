# Deployment

## Docker

```bash
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f bot
```

## Manual

```bash
# Install dependencies
npm install

# Build
npm run build

# Run migrations
npm run migrate

# Start
npm start
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| NODE_ENV | Environment (development/production) |
| PORT | API server port |
| TELEGRAM_BOT_TOKEN | Your Telegram bot token |
| DATABASE_URL | PostgreSQL connection string |
| JWT_SECRET | Secret for JWT tokens |
| ADMIN_API_KEY | API key for admin endpoints |
