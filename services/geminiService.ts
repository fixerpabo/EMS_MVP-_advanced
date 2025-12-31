
import { GoogleGenAI, Type } from "@google/genai";

// Guideline: Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
// Guideline: The API key must be obtained exclusively from the environment variable process.env.API_KEY.

export async function summarizeLecture(transcript: string): Promise<string> {
  // Initializing within the function to ensure direct use of process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Summarize the following lecture transcript into key takeaways and action items: \n\n${transcript}`,
    config: {
      temperature: 0.7,
      // Guideline: Avoid setting maxOutputTokens if not required to prevent the response from being blocked.
    }
  });
  // Guideline: response.text is a property, not a method.
  return response.text || "Failed to generate summary.";
}

export async function askAiTutor(question: string, context: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are an AI Smart Tutor. Use the context provided to answer the student's question accurately and encouragingly.
    Context: ${context}
    Student Question: ${question}`,
    config: {
      temperature: 0.8,
    }
  });
  return response.text || "I'm sorry, I couldn't process that.";
}

export async function generateQuizQuestions(topic: string): Promise<any[]> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate 3 multiple-choice questions about ${topic} in JSON format.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            options: { type: Type.ARRAY, items: { type: Type.STRING } },
            answerIndex: { type: Type.NUMBER }
          },
          required: ["question", "options", "answerIndex"]
        }
      }
    }
  });
  try {
    return JSON.parse(response.text?.trim() || "[]");
  } catch (e) {
    return [];
  }
}
