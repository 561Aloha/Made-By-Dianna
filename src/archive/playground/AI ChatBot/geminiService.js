import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function handler(event) {
  const { prompt } = JSON.parse(event.body || "{}");
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const result = await model.generateContent(prompt);

  return {
    statusCode: 200,
    body: JSON.stringify(result.response),
  };
}
