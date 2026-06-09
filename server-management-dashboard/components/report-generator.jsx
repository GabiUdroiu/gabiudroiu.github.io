'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Download, FileText } from 'lucide-react'
import { logger } from '@/lib/logger'

export function ReportGenerator() {
  const [reportType, setReportType] = useState('uptime')
  const [period, setPeriod] = useState('30d')
  const [format, setFormat] = useState('pdf')
  const [generating, setGenerating] = useState(false)

  const reportTypes = {
    uptime: {
      name: 'Uptime Report',
      description: 'Server availability and downtime analysis',
    },
    performance: {
      name: 'Performance Report',
      description: 'CPU, memory, and resource usage analysis',
    },
    incidents: {
      name: 'Incidents Report',
      description: 'Issues, errors, and alerts summary',
    },
    capacity: {
      name: 'Capacity Report',
      description: 'Storage and resource capacity planning',
    },
    compliance: {
      name: 'Compliance Report',
      description: 'Security and compliance audit trail',
    },
  }

  const periods = {
    '7d': 'Last 7 days',
    '30d': 'Last 30 days',
    '90d': 'Last 90 days',
    '1y': 'Last year',
  }

  const formats = {
    pdf: 'PDF Document',
    csv: 'CSV File',
    json: 'JSON Data',
    excel: 'Excel Spreadsheet',
  }

  const handleGenerateReport = async () => {
    setGenerating(true)
    logger.info('Generating report', { type: reportType, period, format })

    try {
      // Simulate report generation
      await new Promise((resolve) => setTimeout(resolve, 2000))

      logger.info('Report generated successfully', { type: reportType })
      alert(
        `Report generated: ${reportTypes[reportType].name} (${period}, ${format})`
      )
    } catch (error) {
      logger.error('Report generation failed', error)
      alert('Failed to generate report')
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-card to-card/90 border border-border rounded-xl p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Generate Report</h3>
          <p className="text-muted-foreground">
            Create custom reports based on your requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Report Type */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Report Type
            </label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(reportTypes).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    <div>
                      <div className="font-medium">{value.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {value.description}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Time Period */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Time Period
            </label>
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(periods).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Export Format */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Export Format
            </label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(formats).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Report Preview */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h4 className="font-semibold mb-3">Report Details</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Type</p>
              <p className="font-medium">{reportTypes[reportType].name}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Period</p>
              <p className="font-medium">{periods[period]}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Format</p>
              <p className="font-medium">{formats[format]}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Size (estimated)</p>
              <p className="font-medium">~2.5 MB</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleGenerateReport}
            disabled={generating}
            className="flex-1"
          >
            <Download className="mr-2 h-4 w-4" />
            {generating ? 'Generating...' : 'Generate & Download'}
          </Button>
          <Button variant="outline" className="flex-1">
            <FileText className="mr-2 h-4 w-4" />
            Schedule Report
          </Button>
        </div>

        {/* Info Box */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> Reports are generated from the last 7 days
            to 1 year of historical data. For custom date ranges, use the
            schedule report feature.
          </p>
        </div>
      </div>
    </div>
  )
}
