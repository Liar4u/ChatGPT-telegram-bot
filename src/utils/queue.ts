import * as fastq from 'fastq';
import cache from '../utils/cache';
import api from './api';
import bot from '../bot';
import { Task } from '../types';
import { SendMessageOptions } from 'chatgpt';

const queue = fastq.promise(worker, 1);

const reply_footer = '\n\nЗадонатити: /donate';

async function worker(task: Task) {
  const { text, chatId, replyId } = task;
  try {
    const conversation: SendMessageOptions | undefined = cache.get(chatId);

    const chatSettings = {
      conversationId: conversation?.conversationId || undefined,
      parentMessageId: conversation?.messageId || undefined,
    };

    const result = await api.sendMessage(text, chatSettings);
    const reply = result.response + reply_footer;

    cache.set(chatId, {
      conversationId: result.conversationId,
      messageId: result.messageId,
    });

    await bot.api.editMessageText(chatId, replyId, reply, {
      parse_mode: 'Markdown',
    });
    return;
  } catch (e: any) {
    throw new Error('Error', e);
  }
}

export default queue;
