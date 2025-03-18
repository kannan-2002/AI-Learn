import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"

// This would be a real API route in a production application
// You would need to set up OpenAI API key as an environment variable
export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    // Construct the prompt from the messages
    const lastMessage = messages[messages.length - 1].content

    // Create a system prompt that defines the AI tutor's behavior
    const systemPrompt = `
      You are an AI tutor specialized in personalized education.
      Your goal is to help students learn by providing clear, concise explanations
      tailored to their level of understanding. Provide examples when appropriate
      and ask follow-up questions to ensure comprehension.
      
      Focus on these educational areas:
      - Programming (Python, JavaScript, etc.)
      - Data Science and Analytics
      - Web Development
      - Mathematics
      
      Be encouraging, patient, and adapt your explanations based on the student's questions.
    `

    // Generate a response using the AI SDK
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: lastMessage,
      system: systemPrompt,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("AI Tutor API error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}

