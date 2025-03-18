import type React from "react"
import { Bar, Line, Pie } from "recharts"

interface ChartProps {
  data: any[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: any) => string
  className?: string
}

export const BarChart: React.FC<ChartProps> = ({ data, index, categories, colors, valueFormatter, className }) => {
  return (
    <BarChartComponent
      data={data}
      index={index}
      categories={categories}
      colors={colors}
      valueFormatter={valueFormatter}
      chartType={Bar}
      className={className}
    />
  )
}

export const LineChart: React.FC<ChartProps> = ({ data, index, categories, colors, valueFormatter, className }) => {
  return (
    <BarChartComponent
      data={data}
      index={index}
      categories={categories}
      colors={colors}
      valueFormatter={valueFormatter}
      chartType={Line}
      className={className}
    />
  )
}

export const PieChart: React.FC<ChartProps> = ({ data, index, categories, colors, valueFormatter, className }) => {
  return (
    <BarChartComponent
      data={data}
      index={index}
      categories={categories}
      colors={colors}
      valueFormatter={valueFormatter}
      chartType={Pie}
      className={className}
    />
  )
}

const BarChartComponent: React.FC<ChartProps & { chartType: any }> = ({
  data,
  index,
  categories,
  colors,
  valueFormatter,
  chartType,
  className,
}) => {
  return (
    <div className={className}>
      {/* Placeholder for chart implementation. Recharts library is expected to be used. */}
      {/* This is a simplified example and needs to be replaced with actual chart rendering logic. */}
      <div>{data.length === 0 ? <p>No data to display.</p> : <p>Chart Placeholder</p>}</div>
    </div>
  )
}

