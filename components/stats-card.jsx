export function StatsCard({ title, value, icon: Icon, trend }) {
  return (
    <div className="relative bg-gradient-to-br from-card to-card/90 border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-border/80">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl pointer-events-none opacity-50" />
      <div className="relative flex items-center justify-between">
        <div className="flex-1">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {title}
          </p>
          <p className="text-3xl font-bold mt-3">{value}</p>
          <p className="text-xs text-muted-foreground mt-3">{trend}</p>
        </div>
        <div className="flex-shrink-0 ml-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="h-6 w-6 text-primary/70" />
          </div>
        </div>
      </div>
    </div>
  )
}
