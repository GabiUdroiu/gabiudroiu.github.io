import { StatsCard } from '@/components/stats-card'
import { ReportGenerator } from '@/components/report-generator'
import { BarChart3, Zap, TrendingUp, AlertTriangle } from 'lucide-react'

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground text-lg">
          Server statistics and analytics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Uptime"
          value="99.9%"
          icon={Zap}
          trend="Last 30 days"
        />
        <StatsCard
          title="Avg CPU Usage"
          value="32%"
          icon={BarChart3}
          trend="Across all servers"
        />
        <StatsCard
          title="Growth"
          value="+8%"
          icon={TrendingUp}
          trend="This month"
        />
        <StatsCard
          title="Incidents"
          value="2"
          icon={AlertTriangle}
          trend="This month"
        />
      </div>

      <ReportGenerator />

      <div className="bg-gradient-to-br from-card to-card/90 border border-border rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-2">Monthly Summary</h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Reports data coming soon. This is where you can add charts, graphs, and detailed analytics about your servers.
        </p>
      </div>
    </div>
  )
}
