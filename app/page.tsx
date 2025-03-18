import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, BarChart3, MessageSquare, User } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <main className="flex-1">
      <section className="w-full py-8 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 md:px-6">
      <h1 className="text-5xl font-extrabold text-left text-gray-900 sm:text-6xl md:text-7xl">
  Let's Welcome <span className="inline-block">👋</span>
</h1>

            <div className="grid gap-8 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-gray-900">
                    AI-Powered Personalized Learning
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Our AI-driven platform personalizes lessons, quizzes, and study plans to help you master topics efficiently. 
                  Track your growth, receive smart recommendations, and learn at your own pace—smarter, not harder!                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md p-6 rounded-lg bg-blue-50 shadow-lg">
                  {/* Your Learning Path */}
                  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">Your Learning Path</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                      <div className="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Python Basics</span>
                      <span>75% Complete</span>
                    </div>
                  </div>

                  {/* Recommended Next */}
                  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Recommended Next</h3>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Functions in Python</p>
                        <p className="text-sm text-gray-600">20 min lesson</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Tutor */}
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">AI Tutor</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-gray-100 p-2 rounded-full">
                          <MessageSquare className="h-4 w-4 text-gray-600" />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg text-sm max-w-[85%]">
                          How do I use list comprehensions in Python?
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-sm max-w-[85%]">
                          List comprehensions are a concise way to create lists:
                          <br />
                          <code className="text-blue-600">[expression for item in iterable if condition]</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Key Features</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Our platform combines AI and data analytics to create truly personalized learning experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<BarChart3 className="h-6 w-6 text-blue-600" />}
                title="Real-time Analytics"
                description="Continuous monitoring of engagement, quiz results, and interaction patterns."
              />
              <FeatureCard
                icon={<BookOpen className="h-6 w-6 text-blue-600" />}
                title="Adaptive Content"
                description="Learning materials that adapt in real-time based on student progress."
              />
              <FeatureCard
                icon={<MessageSquare className="h-6 w-6 text-blue-600" />}
                title="AI Tutor"
                description="NLP-powered chatbot that answers student queries instantly."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-gray-600">
            © 2025 AI-Powered Learning Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Reusable Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 shadow-sm bg-white">
      <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
}
