import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Clock, MessageSquare, BarChart2, ArrowUpRight } from "lucide-react"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { CourseList } from "@/components/dashboard/course-list"
import { AiTutor } from "@/components/dashboard/ai-tutor"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-xl font-bold">Learning Platform</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a className="text-sm font-medium text-primary" href="#">
              Dashboard
            </a>
            <a className="text-sm font-medium text-muted-foreground hover:text-primary" href="#">
              Courses
            </a>
            <a className="text-sm font-medium text-muted-foreground hover:text-primary" href="#">
              Progress
            </a>
            <a className="text-sm font-medium text-muted-foreground hover:text-primary" href="#">
              Settings
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              AI Tutor
            </Button>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-medium">JS</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Courses in Progress</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Completed Lessons</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">+8 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Study Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5h</div>
                <p className="text-xs text-muted-foreground">+2.5h from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">AI Tutor Interactions</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+15 from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-6 lg:grid-cols-12 mt-6">
            <Card className="col-span-6 lg:col-span-8">
              <CardHeader>
                <CardTitle>Your Learning Progress</CardTitle>
                <CardDescription>Track your progress across all courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Python Programming</p>
                        <p className="text-sm text-muted-foreground">Fundamentals & Advanced Concepts</p>
                      </div>
                      <div className="text-sm text-muted-foreground">75%</div>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Data Science Basics</p>
                        <p className="text-sm text-muted-foreground">Statistics & Data Visualization</p>
                      </div>
                      <div className="text-sm text-muted-foreground">45%</div>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Web Development</p>
                        <p className="text-sm text-muted-foreground">HTML, CSS & JavaScript</p>
                      </div>
                      <div className="text-sm text-muted-foreground">90%</div>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-6 lg:col-span-4">
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>AI-powered suggestions based on your progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Functions in Python</p>
                      <p className="text-xs text-muted-foreground">Recommended based on your progress</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Start Lesson
                        <ArrowUpRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <BarChart2 className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Data Visualization with Matplotlib</p>
                      <p className="text-xs text-muted-foreground">Aligns with your Data Science goals</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Start Lesson
                        <ArrowUpRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-6 lg:grid-cols-12 mt-6">
            <Card className="col-span-6">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your learning activity from the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
            <Card className="col-span-6">
              <CardHeader>
                <CardTitle>AI Tutor</CardTitle>
                <CardDescription>Ask questions about any topic</CardDescription>
              </CardHeader>
              <CardContent>
                <AiTutor />
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Courses</CardTitle>
                <CardDescription>All courses you're currently enrolled in</CardDescription>
              </CardHeader>
              <CardContent>
                <CourseList />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

