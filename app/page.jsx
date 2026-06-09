'use client'

import { StatsCard } from '@/components/stats-card'
import { LineChart } from '@/components/charts/line-chart'
import { BarChart } from '@/components/charts/bar-chart'
import { DoughnutChart } from '@/components/charts/doughnut-chart'
import { Server, AlertCircle, Zap, TrendingUp } from 'lucide-react'

const chartColors = {
  primary: 'rgb(59, 130, 246)',
  success: 'rgb(34, 197, 94)',
  warning: 'rgb(234, 179, 8)',
  danger: 'rgb(239, 68, 68)',
}

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Servers',
      value: 24,
      icon: Server,
      trend: '+2 this month',
    },
    {
      title: 'Active',
      value: 21,
      icon: Zap,
      trend: '87.5%',
    },
    {
      title: 'Avg Uptime',
      value: '99.3%',
      icon: TrendingUp,
      trend: 'Last 30 days',
    },
    {
      title: 'Alerts',
      value: 2,
      icon: AlertCircle,
      trend: 'Needs attention',
    },
  ]

  // CPU Usage Trend
  const cpuData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Avg CPU Usage',
        data: [45, 52, 48, 65, 58, 42, 55],
        borderColor: chartColors.primary,
        backgroundColor: 'rgba(59, 130, 246, 0.08)',
        fill: true,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  }

  // Memory vs Storage by Server
  const resourceData = {
    labels: ['web-01', 'web-02', 'db-01', 'db-02', 'cache-01', 'app-03'],
    datasets: [
      {
        label: 'Memory Usage %',
        data: [62, 55, 85, 43, 0, 71],
        backgroundColor: chartColors.warning,
      },
      {
        label: 'Storage Usage %',
        data: [78, 72, 65, 61, 58, 82],
        backgroundColor: chartColors.success,
      },
    ],
  }

  // Server Status Distribution
  const statusData = {
    labels: ['Active', 'Maintenance', 'Offline', 'Decommissioned'],
    datasets: [
      {
        data: [21, 1, 1, 1],
        backgroundColor: [
          chartColors.success,
          chartColors.warning,
          chartColors.danger,
          '#999999',
        ],
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 2,
      },
    ],
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground text-lg">
          Real-time server analytics and monitoring
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatsCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-2">
          <h2 className="text-xl font-semibold">CPU Usage Trend</h2>
          <p className="text-sm text-muted-foreground mb-4">7-day average usage</p>
          <LineChart data={cpuData} />
        </div>

        <div className="space-y-2 flex flex-col">
          <h2 className="text-xl font-semibold">Server Status</h2>
          <p className="text-sm text-muted-foreground mb-4">Distribution overview</p>
          <div className="flex-1">
            <DoughnutChart data={statusData} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Resource Usage by Server</h2>
        <p className="text-sm text-muted-foreground mb-4">Memory vs Storage comparison</p>
        <BarChart data={resourceData} />
      </div>
    </div>
  )
}
