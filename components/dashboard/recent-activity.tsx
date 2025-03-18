import { Clock, BookOpen, CheckCircle, Play } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "completed",
      title: "Python Lists and Tuples",
      time: "Today, 10:30 AM",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
    },
    {
      id: 2,
      type: "started",
      title: "Introduction to NumPy",
      time: "Yesterday, 3:45 PM",
      icon: <Play className="h-4 w-4 text-blue-500" />,
    },
    {
      id: 3,
      type: "watched",
      title: "Data Visualization Techniques",
      time: "Yesterday, 1:20 PM",
      icon: <BookOpen className="h-4 w-4 text-purple-500" />,
    },
    {
      id: 4,
      type: "completed",
      title: "JavaScript Fundamentals Quiz",
      time: "2 days ago, 5:15 PM",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 rounded-lg border p-3">
          <div className="mt-0.5">{activity.icon}</div>
          <div className="space-y-1">
            <p className="text-sm font-medium">{activity.title}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {activity.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

