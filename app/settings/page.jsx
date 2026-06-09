'use client'

import { Button } from '@/components/ui/button'
import { ThemeSettings } from '@/components/theme-settings'

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground text-lg">
          Manage application settings and preferences
        </p>
      </div>

      <div className="w-full space-y-6">
        <div className="bg-gradient-to-br from-card to-card/90 border border-border rounded-xl p-8">
          <ThemeSettings />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-br from-card to-card/90 border border-border rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-6">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Application Name
                </label>
                <input
                  type="text"
                  defaultValue="Server Management Dashboard"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Notifications
                </label>
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  defaultChecked
                />
                <span className="ml-2 text-sm text-muted-foreground">
                  Enable email alerts for server issues
                </span>
              </div>
              <Button>Save Changes</Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-card to-card/90 border border-border rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-6">Database Connection</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  MongoDB URI
                </label>
                <input
                  type="text"
                  placeholder="mongodb://localhost:27017"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Database Name
                </label>
                <input
                  type="text"
                  placeholder="server_management"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                />
              </div>
              <Button>Test Connection</Button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-card to-card/90 border border-border rounded-xl p-8 h-fit">
          <h2 className="text-xl font-semibold mb-6">Quick Info</h2>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground">Version</p>
              <p className="font-medium">0.1.0</p>
            </div>
            <div>
              <p className="text-muted-foreground">Last Updated</p>
              <p className="font-medium">Today</p>
            </div>
            <div className="pt-4 border-t border-border">
              <Button variant="outline" className="w-full">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
