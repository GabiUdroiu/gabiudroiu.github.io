'use client'

import { useState, useMemo } from 'react'
import { Monitor, Cpu, HardDrive, Zap, Clock, Server, MapPin, Circle, Laptop, History } from 'lucide-react'
import { Pagination } from '@/components/pagination'
import { ServerFilters } from '@/components/server-filters'
import { UptimeModal } from '@/components/uptime-modal'
import { SERVER_STATUS } from '@/lib/constants'

const mockServers = [
  {
    id: 1,
    name: 'web-prod-01',
    ip: '192.168.1.10',
    status: 'Active',
    cpu: '45%',
    memory: '62%',
    storage: '78%',
    os: 'Ubuntu 22.04',
    uptime: '99.8%',
    lastUpdated: '2 min ago',
  },
  {
    id: 2,
    name: 'web-prod-02',
    ip: '192.168.1.11',
    status: 'Active',
    cpu: '38%',
    memory: '55%',
    storage: '72%',
    os: 'Ubuntu 22.04',
    uptime: '99.9%',
    lastUpdated: '1 min ago',
  },
  {
    id: 3,
    name: 'db-master-01',
    ip: '192.168.1.20',
    status: 'Active',
    cpu: '28%',
    memory: '85%',
    storage: '65%',
    os: 'Ubuntu 20.04',
    uptime: '99.95%',
    lastUpdated: '30 sec ago',
  },
  {
    id: 4,
    name: 'db-replica-01',
    ip: '192.168.1.21',
    status: 'Active',
    cpu: '12%',
    memory: '43%',
    storage: '61%',
    os: 'Ubuntu 20.04',
    uptime: '99.7%',
    lastUpdated: '45 sec ago',
  },
  {
    id: 5,
    name: 'cache-01',
    ip: '192.168.1.30',
    status: 'Maintenance',
    cpu: '0%',
    memory: '0%',
    storage: '58%',
    os: 'Ubuntu 22.04',
    uptime: '-',
    lastUpdated: '2 hours ago',
  },
  {
    id: 6,
    name: 'legacy-app-01',
    ip: '192.168.1.40',
    status: 'Decommissioned',
    cpu: '-',
    memory: '-',
    storage: '-',
    os: 'CentOS 7',
    uptime: '-',
    lastUpdated: '7 days ago',
  },
  {
    id: 7,
    name: 'app-server-03',
    ip: '192.168.1.50',
    status: 'Active',
    cpu: '65%',
    memory: '71%',
    storage: '82%',
    os: 'Ubuntu 22.04',
    uptime: '99.2%',
    lastUpdated: '5 min ago',
  },
  {
    id: 8,
    name: 'backup-01',
    ip: '192.168.1.60',
    status: 'Offline',
    cpu: '0%',
    memory: '0%',
    storage: '45%',
    os: 'CentOS 8',
    uptime: '85.5%',
    lastUpdated: '8 hours ago',
  },
]

function StatusDot({ status }) {
  const statusColors = {
    Active: 'bg-green-500 shadow-lg shadow-green-500/50',
    Maintenance: 'bg-yellow-500 shadow-lg shadow-yellow-500/50',
    Decommissioned: 'bg-gray-500 shadow-lg shadow-gray-500/50',
    Offline: 'bg-red-500 shadow-lg shadow-red-500/50',
  }

  const statusText = {
    Active: 'Active',
    Maintenance: 'Maintenance',
    Decommissioned: 'Decommissioned',
    Offline: 'Offline',
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`h-3 w-3 rounded-full animate-pulse ${statusColors[status] || statusColors.Offline}`} />
      <span className="text-sm font-medium">{statusText[status]}</span>
    </div>
  )
}

function ProgressBar({ value }) {
  if (value === '-') return <span className="text-muted-foreground">-</span>

  const numValue = parseInt(value)
  const getColor = () => {
    if (numValue < 50) return 'bg-green-500'
    if (numValue < 75) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="flex items-center gap-2 flex-1">
      <div className="flex-1 bg-muted/80 rounded-full h-3 overflow-hidden border border-border/50">
        <div
          className={`h-full transition-all duration-300 ${getColor()}`}
          style={{ width: `${numValue}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground font-semibold text-right w-7 flex-shrink-0">{value}</span>
    </div>
  )
}

export function ServersTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [selectedServer, setSelectedServer] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Filter and paginate data
  const filteredServers = useMemo(() => {
    return mockServers.filter((server) => {
      const matchesSearch = searchQuery === '' ||
        server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.ip.includes(searchQuery)

      const matchesStatus = statusFilter === '' || server.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [searchQuery, statusFilter])

  const totalPages = Math.ceil(filteredServers.length / pageSize)
  const startIdx = (currentPage - 1) * pageSize
  const paginatedServers = filteredServers.slice(startIdx, startIdx + pageSize)

  const handleReset = () => {
    setSearchQuery('')
    setStatusFilter('')
    setCurrentPage(1)
  }

  return (
    <div>
      <ServerFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        onReset={handleReset}
      />

      <div className="border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4" />
                    Server
                  </div>
                </th>
                <th className="px-6 py-3 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    IP Address
                  </div>
                </th>
                <th className="px-6 py-3 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    <Circle className="h-3 w-3" />
                    Status
                  </div>
                </th>
                <th className="px-6 py-3 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4" />
                    CPU
                  </div>
                </th>
                <th className="px-6 py-3 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Memory
                  </div>
                </th>
                <th className="px-6 py-3 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    <HardDrive className="h-4 w-4" />
                    Storage
                  </div>
                </th>
                <th className="px-6 py-3 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Uptime
                  </div>
                </th>
                <th className="px-6 py-3 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    <Laptop className="h-4 w-4" />
                    OS
                  </div>
                </th>
                <th className="px-6 py-3 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    <History className="h-4 w-4" />
                    Updated
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedServers.length > 0 ? (
                paginatedServers.map((server, idx) => (
                  <tr
                    key={server.id}
                    className={`border-b border-border hover:bg-accent/50 transition-colors cursor-pointer ${
                      idx % 2 ? 'bg-background' : 'bg-muted/20'
                    }`}
                  >
                    <td className="px-6 py-4 font-medium">
                      <div className="flex items-center gap-3">
                        <Monitor className="h-5 w-5 text-muted-foreground" />
                        <span>{server.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs font-mono">
                      {server.ip}
                    </td>
                    <td className="px-6 py-4">
                      <StatusDot status={server.status} />
                    </td>
                    <td className="px-6 py-4 min-w-36">
                      <ProgressBar value={server.cpu} />
                    </td>
                    <td className="px-6 py-4 min-w-36">
                      <ProgressBar value={server.memory} />
                    </td>
                    <td className="px-6 py-4 min-w-36">
                      <ProgressBar value={server.storage} />
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <button
                        onClick={() => {
                          setSelectedServer(server)
                          setModalOpen(true)
                        }}
                        className={`hover:underline cursor-pointer transition-colors ${
                          server.uptime === '-'
                            ? 'text-muted-foreground hover:text-foreground'
                            : 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300'
                        }`}
                      >
                        {server.uptime === '-' ? '-' : server.uptime}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs">
                      {server.os}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground text-xs">
                      {server.lastUpdated}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="px-6 py-8 text-center text-muted-foreground">
                    No servers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {paginatedServers.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
            onPageSizeChange={(size) => {
              setPageSize(size)
              setCurrentPage(1)
            }}
          />
        )}

      {selectedServer && (
        <UptimeModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          serverName={selectedServer.name}
          status={selectedServer.status}
          uptime={selectedServer.uptime}
        />
      )}
      </div>
    </div>
  )
}
