import * as dotenv from 'dotenv';
import bot from './bot';
import api from './utils/api';
dotenv.config();

await api.initSession();

bot.start({
  drop_pending_updates: true,
  allowed_updates: ['message'],
});
