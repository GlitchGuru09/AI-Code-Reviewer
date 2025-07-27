const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function generateContent(prompt) {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        systemInstruction: `You are a senior code reviewer with expertise in modern software development.
                    Your role is to review code critically, identify bugs, inefficiencies, or bad practices,
                    and suggest clean, optimized, and maintainable improvements.
                    You focus on helping developers write better code by recommending best practices, simplifying logic, 
                    and improving performance where possible.
                    Your feedback should be precise, constructive, and geared toward real-world development standards.`,
        contents: prompt,
    });

    return response.text;
}

module.exports = generateContent;
 