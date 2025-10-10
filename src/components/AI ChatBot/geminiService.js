import { GoogleGenerativeAI } from "@google/generative-ai";

if (!import.meta.env.VITE_API_KEY) {
  throw new Error("VITE_API_KEY environment variable not set");
}

export const ai = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);