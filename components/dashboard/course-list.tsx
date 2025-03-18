import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, BookOpen, Code, Database, LineChart } from "lucide-react"

export function CourseList() {
  const courses = [
    {
      id: 1,
      title: "Python Programming",
      description: "Fundamentals & Advanced Concepts",
      progress: 75,
      icon: <Code className="h-5 w-5 text-blue-500" />,
      lessons: 24,
      completed: 18,
    },
    {
      id: 2,
      title: "Data Science Basics",
      description: "Statistics & Data Visualization",
      progress: 45,
      icon: <LineChart className="h-5 w-5 text-purple-500" />,
      lessons: 32,
      completed: 14,
    },
    {
      id: 3,
      title: "Web Development",
      description: "HTML, CSS & JavaScript",
      progress: 90,
      icon: <BookOpen className="h-5 w-5 text-green-500" />,
      lessons: 20,
      completed: 18,
    },
    {
      id: 4,
      title: "Database Management",
      description: "SQL & NoSQL Databases",
      progress: 10,
      icon: <Database className="h-5 w-5 text-orange-500" />,
      lessons: 18,
      completed: 2,
    },
  ]

  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div
          key={course.id}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-lg border p-4"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-md">{course.icon}</div>
            <div className="space-y-1">
              <p className="font-medium">{course.title}</p>
              <p className="text-sm text-muted-foreground">{course.description}</p>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <span>
                  {course.completed} of {course.lessons} lessons completed
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[200px] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{course.progress}%</span>
              <Button variant="outline" size="sm">
                Continue
                <ArrowUpRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        </div>
      ))}
    </div>
  )
}

