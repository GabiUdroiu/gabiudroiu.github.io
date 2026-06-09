'use client'

import { useState } from 'react'
import { X, Clock, AlertCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function UptimeModal({ isOpen, onClose, serverName, status, uptime }) {
  const getUptimeDetails = () => {
    switch (status) {
      case 'Active':
        return {
          title: 'Server Active',
          icon: Zap,
          color: 'text-green-600 dark:text-green-400',
          details: [
            { label: 'Uptime', value: uptime },
            { label: 'Status', value: 'Running' },
            { label: 'Last Restart', value: '45 days ago' },
            { label: 'Running Since', value: 'May 15, 2026' },
          ],
        }
      case 'Offline':
        return {
          title: 'Server Offline',
          icon: AlertCircle,
          color: 'text-red-600 dark:text-red-400',
          details: [
            { label: 'Current Uptime', value: '0%' },
            { label: 'Status', value: 'Offline' },
            { label: 'Downtime Duration', value: '2 hours 15 minutes' },
            { label: 'Offline Since', value: 'June 9, 2026 at 2:45 PM' },
          ],
        }
      case 'Maintenance':
        return {
          title: 'Server Maintenance',
          icon: Clock,
          color: 'text-yellow-600 dark:text-yellow-400',
          details: [
            { label: 'Current Status', value: 'Under Maintenance' },
            { label: 'Maintenance Since', value: '4 hours ago' },
            { label: 'Expected Duration', value: '2 hours more' },
            { label: 'Reason', value: 'Database migration' },
          ],
        }
      case 'Decommissioned':
        return {
          title: 'Server Decommissioned',
          icon: AlertCircle,
          color: 'text-gray-600 dark:text-gray-400',
          details: [
            { label: 'Status', value: 'Decommissioned' },
            { label: 'Decommissioned Date', value: 'June 1, 2026' },
            { label: 'Days Offline', value: '8 days' },
            { label: 'Last Uptime', value: '87.2%' },
          ],
        }
      default:
        return {
          title: 'Server Status',
          icon: Clock,
          color: 'text-muted-foreground',
          details: [
            { label: 'Status', value: 'Unknown' },
          ],
        }
    }
  }

  const details = getUptimeDetails()
  const Icon = details.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className={`h-5 w-5 ${details.color}`} />
            {serverName}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className={`text-sm font-semibold ${details.color}`}>
              {details.title}
            </p>
          </div>

          <div className="space-y-3">
            {details.details.map((detail, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">
                  {detail.label}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
