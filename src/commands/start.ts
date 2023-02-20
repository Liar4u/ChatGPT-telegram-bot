import { Message } from '@grammyjs/types';
import bot from '../bot';

export async function start(msg: Message) {
  const text =
    'Для чату зі мною, ви можете:\n' +
    '  • просто надіслати повідомлення\n' +
    '  • відповісти на моє останнє повідомлення\n\n' +
    'Список команд:\n' +
    '  • /donate задонатити адміну на Шалені Бджілки.';
  await bot.api.sendMessage(msg.chat.id, text, {
    reply_to_message_id: msg.message_id,
  });
}

export default start;

// 'Для чату зі мною, ви можете:\n' +
// '  • просто надіслати повідомлення\n' +
// '  • відповісти на моє останнє повідомлення\n\n' +
// 'Список команд:\n' +
// '  • /help Як я працюю.\n' +
// '  • /reset Скинути поточну тему чату і почати нову.\n' +
// '  • /donate задонатити адміну на Шалені Бджілки.';
