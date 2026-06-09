'use client'

import { useState } from 'react'
import { ServersTable } from '@/components/servers-table'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { AddServerForm } from '@/components/add-server-form'
import { logger } from '@/lib/logger'

export default function ServersPage() {
  const [open, setOpen] = useState(false)

  const handleSuccess = (newServer) => {
    logger.info('Server added successfully', { name: newServer.name })
    // In a real app, you'd refetch the servers list here
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Servers</h1>
          <p className="text-muted-foreground text-lg">
            Manage all your company servers
          </p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Server
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Server</DialogTitle>
              <DialogDescription>
                Add a new server to your infrastructure. Fill in the details below.
              </DialogDescription>
            </DialogHeader>
            <AddServerForm
              onSuccess={handleSuccess}
              onClose={() => setOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <ServersTable />
    </div>
  )
}
