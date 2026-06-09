'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { serverService } from '@/services/server-service'
import { logger } from '@/lib/logger'
import { SERVER_STATUS } from '@/lib/constants'

const OS_OPTIONS = [
  'Ubuntu 22.04',
  'Ubuntu 20.04',
  'CentOS 7',
  'CentOS 8',
  'Debian 11',
  'RHEL 8',
  'Windows Server 2019',
  'Windows Server 2022',
]

export function AddServerForm({ onSuccess, onClose }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    ip: '',
    os: 'Ubuntu 22.04',
    status: SERVER_STATUS.ACTIVE,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError(null)
  }

  const handleSelectChange = (name) => (value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Validation
    if (!formData.name.trim()) {
      setError('Server name is required')
      setLoading(false)
      return
    }

    if (!formData.ip.trim()) {
      setError('IP address is required')
      setLoading(false)
      return
    }

    // Simple IP validation
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/
    if (!ipRegex.test(formData.ip)) {
      setError('Invalid IP address format')
      setLoading(false)
      return
    }

    try {
      logger.info('Adding server', { name: formData.name })

      // Simulated API call (since we don't have a real backend yet)
      await new Promise((resolve) => setTimeout(resolve, 800))

      logger.info('Server added successfully', { name: formData.name })
      setFormData({
        name: '',
        ip: '',
        os: 'Ubuntu 22.04',
        status: SERVER_STATUS.ACTIVE,
      })
      onSuccess && onSuccess(formData)
      onClose && onClose()
    } catch (err) {
      logger.error('Failed to add server', err, { name: formData.name })
      setError(err.message || 'Failed to add server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Server Name <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="e.g., web-prod-01"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
        />
      </div>

      <div>
        <label htmlFor="ip" className="block text-sm font-medium mb-2">
          IP Address <span className="text-destructive">*</span>
        </label>
        <Input
          id="ip"
          name="ip"
          type="text"
          placeholder="e.g., 192.168.1.10"
          value={formData.ip}
          onChange={handleChange}
          disabled={loading}
        />
      </div>

      <div>
        <label htmlFor="os" className="block text-sm font-medium mb-2">
          Operating System
        </label>
        <Select value={formData.os} onValueChange={handleSelectChange('os')}>
          <SelectTrigger disabled={loading}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {OS_OPTIONS.map((os) => (
              <SelectItem key={os} value={os}>
                {os}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium mb-2">
          Status
        </label>
        <Select value={formData.status} onValueChange={handleSelectChange('status')}>
          <SelectTrigger disabled={loading}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={SERVER_STATUS.ACTIVE}>
              {SERVER_STATUS.ACTIVE}
            </SelectItem>
            <SelectItem value={SERVER_STATUS.MAINTENANCE}>
              {SERVER_STATUS.MAINTENANCE}
            </SelectItem>
            <SelectItem value={SERVER_STATUS.OFFLINE}>
              {SERVER_STATUS.OFFLINE}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {error && (
        <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <div className="flex gap-3 justify-end pt-4 border-t border-border">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Server'}
        </Button>
      </div>
    </form>
  )
}
