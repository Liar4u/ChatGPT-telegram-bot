import bot from '../bot';
import queue from '../utils/queue';
import { Context, Filter } from 'grammy';

async function messageHandler(ctx: Filter<Context, ':text'>) {
  const chatId = ctx.chat.id;
  const userRequest = ctx.msg.text;
  const messageId = ctx.msg.message_id;

  const replyId = (
    await bot.api.sendMessage(chatId, '🤔', {
      reply_to_message_id: messageId,
    })
  ).message_id;
  bot.api.sendChatAction(chatId, 'typing');

  queue.push({
    chatId,
    replyId,
    text: userRequest,
  });
}

export default messageHandler;
