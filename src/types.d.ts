import { Context, Update } from 'grammy';
import { Message, Chat } from '@grammyjs/types';

export interface Task {
  chatId: number;
  replyId: number;
  text: string;
}
