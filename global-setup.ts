import * as dotenv from 'dotenv';

export default async function globalSetup() {
  // Load .env file
  dotenv.config();
  
  // Type assertion to satisfy TypeScript
  const env = {
    BASE_URL: process.env.BASE_URL as string,
    EMAIL_ID: process.env.EMAIL_ID as string,
    PASSWORD: process.env.PASSWORD as string,
    API_TOKEN: process.env.API_TOKEN as string
  };
  
  // Validation
  if (!env.BASE_URL) throw new Error('BASE_URL is required');
  if (!env.EMAIL_ID) throw new Error('EMAIL_ID is required');
  if (!env.PASSWORD) throw new Error('PASSWORD is required');
  
  // Set on process.env (will be available in tests)
  process.env.BASE_URL = env.BASE_URL;
  process.env.EMAIL_ID = env.EMAIL_ID;
  process.env.PASSWORD = env.PASSWORD;
  process.env.API_TOKEN = env.API_TOKEN;
}