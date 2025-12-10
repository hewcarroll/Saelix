import { GoogleGenAI } from "@google/genai";
import { PAPERS, PRODUCTS } from "../constants";

let ai: GoogleGenAI | null = null;

// Initialize the API client securely
if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "Error: API Key is missing. Please configure the environment.";
  }

  try {
    // Construct a system instruction with context about the institute
    const systemInstruction = `
      You are Saelix AI, the virtual research assistant for The Saelix Institute.
      
      The Institute focuses on:
      1. Ethical AI Development.
      2. Coherology: A foundational IP studying the alignment of synthetic and organic intelligence systems through resonance and coherence.
      
      Available Products:
      ${PRODUCTS.map(p => `- ${p.name}: ${p.tagline}`).join('\n')}
      
      Recent Research Papers:
      ${PAPERS.map(p => `- "${p.title}" by ${p.author} (${p.category})`).join('\n')}
      
      Your goal is to answer visitor questions about the institute, its products, and its research philosophy.
      Keep answers professional, academic yet accessible, and concise.
      If asked about "Coherology", describe it with an air of sophisticated scientific theory regarding system harmony and information resonance.
    `;

    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model,
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, but I could not formulate a coherent response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing a connection interruption. Please try again later.";
  }
};
