import { Bot } from 'grammy';
import messageHandler from './handlers/messageHandler';
import getCmdRegExp from './utils/getCmdRegExp';
import start from './commands/start';
import donate from './commands/donate';

if (!process.env.BOT_TOKEN) throw new Error('Token required');

const bot: Bot = new Bot(process.env.BOT_TOKEN);
const pm = bot.chatType('private');

pm.hears(getCmdRegExp('start'), (ctx) => start(ctx.msg));
pm.hears(getCmdRegExp('donate'), (ctx) => donate(ctx.msg));

pm.on(':text', async (ctx) => messageHandler(ctx));

export default bot;
