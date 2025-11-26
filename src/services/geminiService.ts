import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize the API client
// Note: In a production app with a backend, this should be moved to a server-side proxy
// to protect the API key. For this demo/preview, client-side is acceptable.
const apiKey = process.env.API_KEY || (import.meta as any).env?.VITE_API_KEY;

const ai = new GoogleGenAI({ apiKey: apiKey });

export const sendVastuQuery = async (query: string): Promise<{ text: string; isError: boolean }> => {
  if (!apiKey) {
    console.error("API Key is missing");
    return {
      text: "I'm sorry, but the AI service is currently unavailable (API Key missing). Please contact the studio directly.",
      isError: true
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: `You are VastuBot, an expert AI assistant for VastuCraft AI Studio. 
        Your goal is to provide helpful, preliminary advice on Vastu Shastra and modern construction technology.
        
        Studio Context:
        - We are a hybrid architecture studio led by Ar. Vidhi Gajjar (Architect/Vastu Expert) and Swetang Gajjar (AI Specialist).
        - We combine traditional Vastu with AI-driven construction quality control.
        - We are based in Gujarat (Ahmedabad, Gandhinagar, Surat).
        
        Guidelines:
        - Answer questions about Vastu directions (North, East, etc.) and room placements clearly.
        - If a user asks about construction defects or smart buildings, mention Swetang's AI vision technology.
        - If a user asks about architectural planning or RERA, mention Vidhi's expertise.
        - Always end by suggesting they "Book a Discovery Call" or "Upload their floor plan" for a professional analysis.
        - Keep responses concise (under 150 words) and professional but warm.
        `,
        temperature: 0.7,
      }
    });

    return { text: response.text || "I didn't get a response.", isError: false };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I'm sorry, I'm having trouble connecting to the Vastu knowledge base right now. Please try again later.",
      isError: true
    };
  }
};