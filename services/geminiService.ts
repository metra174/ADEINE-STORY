import { GoogleGenAI } from "@google/genai";

// Manually declare process to avoid TypeScript errors
declare const process: any;

// Initialize Gemini
// We use a safe access pattern for the API key
const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) || ''; 

const ai = new GoogleGenAI({ apiKey });

export const sendFashionQuery = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Desculpe, o serviço de assistente virtual não está configurado no momento (Chave API ausente).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `Você é a "Consultora de Estilo Virtual" da loja "ADRINE STORY", uma loja de calçados femininos sofisticados em Luanda, Angola.
        
        Seu objetivo é ajudar as clientes a escolher o calçado perfeito (Saltos, Sandálias ou Socas) para a ocasião delas.
        
        Produtos da Loja para recomendar:
        - Salto Fino Clássico Royal (18.000 Kz) - Ótimo para casamentos e jantares.
        - Sandália Verão Elegance (15.000 Kz) - Ótimo para passeios de dia.
        - Soca de Luxo Gold (16.500 Kz) - Conforto e elegância para trabalho ou eventos casuais.
        - Salto Agulha Noir (20.000 Kz) - Poderoso para festas noturnas.
        - Sandália Festa Brilho (17.000 Kz) - Para brilhar em eventos.
        
        Tom de voz: Elegante, atenciosa, feminina e prestativa. Use emojis com moderação.
        Sempre termine sugerindo que a cliente clique em "Comprar no WhatsApp" ou mencione a entrega rápida de 2.000 Kz.
        Fale em Português de Portugal/Angola.
        Mantenha as respostas curtas (máximo 3 frases).`,
      },
    });
    
    return response.text || "Desculpe, não consegui formular uma resposta agora.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocorreu um erro ao consultar a assistente. Por favor, tente novamente mais tarde.";
  }
};