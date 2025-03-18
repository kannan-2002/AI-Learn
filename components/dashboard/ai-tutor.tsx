"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SendHorizontal, User, Bot } from "lucide-react"

export function AiTutor() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm your AI tutor. How can I help you with your learning today?",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message to chat
    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      let response

      // Simple pattern matching for demo purposes
      if (input.toLowerCase().includes("python")) {
        response =
          "Python is a versatile programming language known for its readability and simplicity. What specific aspect of Python would you like to learn about?"
      } else if (input.toLowerCase().includes("data")) {
        response =
          "Data science combines statistics, programming, and domain expertise to extract insights from data. Would you like to learn about data visualization, machine learning, or statistical analysis?"
      } else if (input.toLowerCase().includes("javascript") || input.toLowerCase().includes("js")) {
        response =
          "JavaScript is the programming language of the web. It allows you to create interactive elements on websites. Are you interested in learning about variables, functions, or DOM manipulation?"
      } else {
        response =
          "That's an interesting question! I'd be happy to help you learn more about this topic. Could you provide more details about what you'd like to know?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[400px]">
      <div className="flex-1 overflow-y-auto space-y-4 p-3 mb-2 border rounded-md">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.role === "assistant" && (
              <div className="bg-primary/10 p-2 rounded-full">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={`rounded-lg px-3 py-2 max-w-[80%] ${
                message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              {message.content}
            </div>
            {message.role === "user" && (
              <div className="bg-primary p-2 rounded-full">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div className="flex space-x-1 px-3 py-2 bg-muted rounded-lg">
              <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Input
          placeholder="Ask your AI tutor a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend()
            }
          }}
          className="flex-1"
        />
        <Button size="icon" onClick={handleSend} disabled={isLoading}>
          <SendHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

