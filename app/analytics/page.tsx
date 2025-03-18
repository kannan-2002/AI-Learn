import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { BarChart3, Users, Clock, BookOpen } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            <h1 className="text-xl font-bold">Learning Analytics</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a className="text-sm font-medium text-muted-foreground hover:text-primary" href="/dashboard">
              Dashboard
            </a>
            <a className="text-sm font-medium text-primary" href="#">
              Analytics
            </a>
            <a className="text-sm font-medium text-muted-foreground hover:text-primary" href="#">
              Reports
            </a>
            <a className="text-sm font-medium text-muted-foreground hover:text-primary" href="#">
              Settings
            </a>
          </nav>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-xs font-medium">JS</span>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Learning Analytics Dashboard</h2>
            <p className="text-muted-foreground">Track your progress and identify areas for improvement</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">42.5h</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed Lessons</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">28</div>
                    <p className="text-xs text-muted-foreground">+8 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Quiz Score</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">85%</div>
                    <p className="text-xs text-muted-foreground">+5% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12 days</div>
                    <p className="text-xs text-muted-foreground">Current streak</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Weekly Study Time</CardTitle>
                    <CardDescription>Hours spent learning per day over the past week</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <BarChart
                      data={[
                        { name: "Mon", value: 1.5 },
                        { name: "Tue", value: 2.3 },
                        { name: "Wed", value: 0.8 },
                        { name: "Thu", value: 3.2 },
                        { name: "Fri", value: 2.1 },
                        { name: "Sat", value: 4.5 },
                        { name: "Sun", value: 3.8 },
                      ]}
                      index="name"
                      categories={["value"]}
                      colors={["blue"]}
                      valueFormatter={(value) => `${value}h`}
                      className="h-[300px]"
                    />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Subject Distribution</CardTitle>
                    <CardDescription>Time spent on different subjects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: "Python", value: 45 },
                        { name: "Data Science", value: 25 },
                        { name: "Web Dev", value: 20 },
                        { name: "Databases", value: 10 },
                      ]}
                      index="name"
                      categories={["value"]}
                      colors={["blue", "violet", "green", "orange"]}
                      valueFormatter={(value) => `${value}%`}
                      className="h-[300px]"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="progress" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress Over Time</CardTitle>
                  <CardDescription>Track your course completion progress over the past 3 months</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <LineChart
                    data={[
                      { date: "Jan 1", Python: 10, "Data Science": 5, "Web Dev": 15 },
                      { date: "Jan 15", Python: 20, "Data Science": 10, "Web Dev": 25 },
                      { date: "Feb 1", Python: 35, "Data Science": 15, "Web Dev": 40 },
                      { date: "Feb 15", Python: 50, "Data Science": 25, "Web Dev": 55 },
                      { date: "Mar 1", Python: 65, "Data Science": 35, "Web Dev": 70 },
                      { date: "Mar 15", Python: 75, "Data Science": 45, "Web Dev": 90 },
                    ]}
                    index="date"
                    categories={["Python", "Data Science", "Web Dev"]}
                    colors={["blue", "violet", "green"]}
                    valueFormatter={(value) => `${value}%`}
                    className="h-[400px]"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="engagement" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Engagement</CardTitle>
                  <CardDescription>Your daily learning activity over the past month</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <BarChart
                    data={[
                      { date: "Week 1", "Study Time": 8.5, "AI Tutor Interactions": 12 },
                      { date: "Week 2", "Study Time": 10.2, "AI Tutor Interactions": 18 },
                      { date: "Week 3", "Study Time": 12.5, "AI Tutor Interactions": 24 },
                      { date: "Week 4", "Study Time": 11.3, "AI Tutor Interactions": 20 },
                    ]}
                    index="date"
                    categories={["Study Time", "AI Tutor Interactions"]}
                    colors={["blue", "purple"]}
                    valueFormatter={(value) => `${value}`}
                    className="h-[400px]"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Quiz Performance</CardTitle>
                  <CardDescription>Your scores on recent quizzes and assessments</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <LineChart
                    data={[
                      { quiz: "Python Basics", score: 85 },
                      { quiz: "Data Structures", score: 78 },
                      { quiz: "Functions", score: 92 },
                      { quiz: "OOP Concepts", score: 88 },
                      { quiz: "File Handling", score: 75 },
                      { quiz: "Error Handling", score: 82 },
                    ]}
                    index="quiz"
                    categories={["score"]}
                    colors={["blue"]}
                    valueFormatter={(value) => `${value}%`}
                    className="h-[400px]"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

