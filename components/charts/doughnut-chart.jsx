'use client'

import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export function DoughnutChart({ data, options = {} }) {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12,
            weight: 500,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        borderRadius: 8,
        titleFont: {
          size: 13,
          weight: 'bold',
        },
        bodyFont: {
          size: 12,
        },
      },
    },
  }

  return (
    <div className="relative bg-gradient-to-br from-card to-card/80 border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center h-full min-h-80">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl pointer-events-none" />
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-full max-w-xs">
          <Doughnut data={data} options={{ ...defaultOptions, ...options }} />
        </div>
      </div>
    </div>
  )
}
