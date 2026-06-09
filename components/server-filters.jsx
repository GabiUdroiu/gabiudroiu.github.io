'use client'

import { Search, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { SERVER_STATUS } from '@/lib/constants'

export function ServerFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  onReset,
}) {
  return (
    <div className="space-y-4 mb-6 p-6 bg-gradient-to-br from-card to-card/90 border border-border rounded-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1 min-w-0">
          <label className="block text-sm font-medium mb-2">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or IP..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="w-full sm:w-48">
          <label className="block text-sm font-medium mb-2">Status</label>
          <Select value={statusFilter || "all"} onValueChange={(val) => onStatusChange(val === "all" ? "" : val)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value={SERVER_STATUS.ACTIVE}>
                {SERVER_STATUS.ACTIVE}
              </SelectItem>
              <SelectItem value={SERVER_STATUS.MAINTENANCE}>
                {SERVER_STATUS.MAINTENANCE}
              </SelectItem>
              <SelectItem value={SERVER_STATUS.OFFLINE}>
                {SERVER_STATUS.OFFLINE}
              </SelectItem>
              <SelectItem value={SERVER_STATUS.DECOMMISSIONED}>
                {SERVER_STATUS.DECOMMISSIONED}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
          className="w-full sm:w-auto"
        >
          <Filter className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  )
}
