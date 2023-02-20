import { ChatGPTAPIBrowser } from 'chatgpt';
import * as dotenv from 'dotenv';
dotenv.config();

if (!process.env.OPENAI_EMAIL) throw new Error('Email required');
if (!process.env.OPENAI_PASSWORD) throw new Error('Password required');

const api = new ChatGPTAPIBrowser({
  email: process.env.OPENAI_EMAIL,
  password: process.env.OPENAI_PASSWORD,
});

export default api;
