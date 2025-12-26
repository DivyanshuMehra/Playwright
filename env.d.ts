declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      EMAIL_ID: string;
      PASSWORD: string;
    }
  }
}

// This export is needed for the file to be treated as a module
export {};