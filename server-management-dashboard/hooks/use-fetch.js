'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { logger } from '@/lib/logger'

export function useFetch(fetchFn, options = {}) {
  const {
    immediate = true,
    dependencies = [],
    onSuccess = null,
    onError = null,
    cacheTime = null,
  } = options

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(immediate)
  const [error, setError] = useState(null)
  const cacheRef = useRef(null)
  const cacheTimeRef = useRef(null)

  const execute = useCallback(
    async (...args) => {
      // Check cache
      if (cacheTime && cacheRef.current !== null && cacheTimeRef.current) {
        const now = Date.now()
        if (now - cacheTimeRef.current < cacheTime) {
          logger.debug('Using cached data')
          return cacheRef.current
        }
      }

      setLoading(true)
      setError(null)

      try {
        const result = await fetchFn(...args)
        setData(result)

        // Store in cache
        if (cacheTime) {
          cacheRef.current = result
          cacheTimeRef.current = Date.now()
        }

        if (onSuccess) {
          onSuccess(result)
        }

        return result
      } catch (err) {
        logger.error('Fetch failed', err)
        setError(err)

        if (onError) {
          onError(err)
        }

        throw err
      } finally {
        setLoading(false)
      }
    },
    [fetchFn, onSuccess, onError, cacheTime]
  )

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [immediate, ...dependencies])

  const refetch = useCallback(() => {
    cacheRef.current = null
    cacheTimeRef.current = null
    return execute()
  }, [execute])

  return {
    data,
    loading,
    error,
    execute,
    refetch,
  }
}

export function useFetchList(fetchFn, options = {}) {
  const {
    page = 1,
    limit = 20,
    ...restOptions
  } = options

  const [pagination, setPagination] = useState({ page, limit, total: 0 })

  const { data, loading, error, execute, refetch } = useFetch(
    async (pageNum = page, pageLimit = limit) => {
      return await fetchFn({ page: pageNum, limit: pageLimit })
    },
    restOptions
  )

  const goToPage = useCallback((pageNum) => {
    setPagination((prev) => ({ ...prev, page: pageNum }))
    return execute(pageNum, pagination.limit)
  }, [execute, pagination.limit])

  const changeLimit = useCallback((newLimit) => {
    setPagination((prev) => ({ ...prev, limit: newLimit, page: 1 }))
    return execute(1, newLimit)
  }, [execute])

  return {
    items: data?.items || [],
    pagination,
    loading,
    error,
    refetch,
    goToPage,
    changeLimit,
  }
}
