import dotenv from 'dotenv';
dotenv.config();

import { createBot } from './bot/index.js';
import apiApp from './api/index.js';
import { env } from './config/env.js';

const bot = createBot(env.TELEGRAM_BOT_TOKEN);

// Start Telegram bot
bot.launch().then(() => {
  console.log('Bot started');
});

// Start REST API
const server = apiApp.listen(env.PORT, () => {
  console.log(`API server running on port ${env.PORT}`);
});

// Graceful shutdown
process.once('SIGINT', () => {
  bot.stop('SIGINT');
  server.close();
  process.exit();
});

process.once('SIGTERM', () => {
  bot.stop('SIGTERM');
  server.close();
  process.exit();
});
