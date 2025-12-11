import { GoogleGenAI, Type } from "@google/genai";
import { NutritionData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const fetchNutritionData = async (foodQuery: string): Promise<NutritionData> => {
  if (!foodQuery.trim()) {
    throw new Error("Please enter a food name.");
  }

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Analyze the nutritional content of: "${foodQuery}". 
    Provide a realistic serving size. 
    Provide the major macronutrients (Protein, Carbs, Fat) in grams. 
    Provide calories, fiber, and sugar.
    Give a brief 1-sentence summary description of the food's health profile.
    Give a health rating from 1 (unhealthy) to 10 (very healthy).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          foodName: { type: Type.STRING, description: "Standardized name of the food" },
          servingSize: { type: Type.STRING, description: "Typical serving size (e.g., '1 medium apple (182g)')" },
          calories: { type: Type.NUMBER, description: "Total calories" },
          protein: { type: Type.NUMBER, description: "Protein in grams" },
          carbs: { type: Type.NUMBER, description: "Carbohydrates in grams" },
          fat: { type: Type.NUMBER, description: "Total fat in grams" },
          fiber: { type: Type.NUMBER, description: "Fiber in grams" },
          sugar: { type: Type.NUMBER, description: "Sugar in grams" },
          summary: { type: Type.STRING, description: "Brief health summary" },
          healthRating: { type: Type.NUMBER, description: "Health score from 1-10" }
        },
        required: ["foodName", "servingSize", "calories", "protein", "carbs", "fat", "fiber", "sugar", "summary", "healthRating"],
      },
    },
  });

  const text = response.text;
  if (!text) {
    throw new Error("No data returned from Gemini.");
  }

  try {
    return JSON.parse(text) as NutritionData;
  } catch (e) {
    console.error("Failed to parse nutrition JSON", e);
    throw new Error("Failed to process nutrition data.");
  }
};