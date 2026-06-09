'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { logger } from '@/lib/logger'

export function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    logger.error('Error caught by boundary', error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="max-w-md w-full mx-auto p-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p className="text-muted-foreground mt-2">
              {error?.message || 'An unexpected error occurred'}
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg text-left">
            <p className="text-xs font-mono text-muted-foreground truncate">
              {error?.code || 'UNKNOWN_ERROR'}
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => reset()} className="flex-1">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try again
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => (window.location.href = '/')}
            >
              Go home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
