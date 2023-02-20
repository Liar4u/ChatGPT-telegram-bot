import { Message } from '@grammyjs/types';
import bot from '../bot';

export async function donate(msg: Message) {
  const text =
    '• Банка: send.monobank.ua/jar/9rVHpkszfZ\n' +
    '• Моно: ```4441114429102385```\n' +
    '• BinanceID: ```82825851```\n' +
    '• B/USDT/ETH/BNB: ```0xd07563865f55983a798dbfeec9f6b5d3bcbff606```\n' +
    '• BTC: ```1Fqy7X9VzxL7LPymCtSC7Df7GDHa9h6aa5```';
  await bot.api.sendMessage(msg.chat.id, text, {
    reply_to_message_id: msg.message_id,
    parse_mode: 'Markdown',
  });
}

export default donate;
